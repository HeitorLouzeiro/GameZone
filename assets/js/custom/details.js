// assets/js/custom/details.js

const gameDetailsContainer = document.getElementById('game-details-container');
const featuredBannerImage = document.querySelector('#feature-details-banner img'); 

async function fetchAndDisplayGameDetails(gameId) {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '3f76d5a1e8msh3280b77787db71dp1f9480jsn0e9d313f07a1',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const gameData = await response.json();

    // Create the HTML for game details
    let gameDetailsHTML = `
      <div class="row">
        <div class="col-lg-12">
          <div class="feature-banner header-text" id="feature-details-banner">
            <div class="row">
              <div class="col-lg-4">
                <img src="${gameData.thumbnail}" alt="${gameData.title} banner" style="border-radius: 23px;"> 
              </div>
              <div class="col-lg-8">
                <div class="banner-content">
                  <div class="row">
                    <div class="col-lg-12">
                      <h2>${gameData.title} Details</h2>
                    </div>
                    <div class="col-lg-6">
                      <div class="left-info">
                        <ul>
                          <li><span>Genre:</span> ${gameData.genre}</li>
                          <li><span>Platform:</span> ${gameData.platform}</li>
                          <li><span>Release:</span> ${gameData.release_date}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="right-info">
                        <ul>
                          <li><i class="fa fa-star"></i> ${gameData.rating || 'N/A'}</li>
                          <li><i class="fa fa-download"></i> Download</li>
                          <li><i class="fa fa-server"></i> ${gameData.minimum_system_requirements.storage || 'N/A'}</li>
                        </ul>
                      </div>
                    </div>
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="game-description">
            <p>${gameData.description}</p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="main-border-button">
            <a href="${gameData.game_url}" target="_blank">Play ${gameData.title} Now!</a>
          </div>
        </div>
      </div>

      <div class="row">
      ${gameData.screenshots.map(screenshot => `
        <div class="col-lg-3">
          <img src="${screenshot.image}" alt="${gameData.title} screenshot" style="border-radius: 23px; margin-bottom: 30px;">
        </div>
      `).join('')} 
    </div>
    `;

    gameDetailsContainer.innerHTML = gameDetailsHTML;

  } catch (error) {
    console.error('Error fetching game data:', error);
    // Handle the error appropriately
  }
}

// Example: Fetch and display details for a specific game ID 
fetchAndDisplayGameDetails(452); 