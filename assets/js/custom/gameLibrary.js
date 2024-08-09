const gameLibraryContainer = document.getElementById('game-library');
const urlBase = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const gamesToDisplay = 12; // Number of games to display in the library

async function fetchAndDisplayRelease() {
  const url = urlBase + '?sort-by=release-date';

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '3f76d5a1e8msh3280b77787db71dp1f9480jsn0e9d313f07a1',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const gamesData = await response.json();

    let gameItemsHTML = '';

    for (let i = 0; i < Math.min(gamesToDisplay, gamesData.length); i++) {
      const game = gamesData[i];
      const gameDetailUrl = `details.html?id=${game.id}`; 

      gameItemsHTML += `
                <div class="item">
                  <ul>
                    <input type="hidden" id="custId" name="custId" value="${game.id}">
                    <li><img src="${game.thumbnail}" alt="${game.title}" class="templatemo-item"></li>
                    <li><h4>${game.title}</h4><span>${game.genre}</span></li>
                    <li><h4>Plataform</h4><span>${game.platform}</span></li> <!-- Date Added can be dynamic if available -->
                    <li><h4>Date relaese</h4><span>${game.release_date}</span></li> <!-- Hours Played can be dynamic if available -->
                    <li><div class="main-border-button border-no-active"><a href="${gameDetailUrl}">Details</a></div></li>
                  </ul>
                </div>
              `;
    }

    gameLibraryContainer.innerHTML = gameItemsHTML;

  } catch (error) {
    console.error('Error fetching game data:', error);
    gameLibraryContainer.innerHTML = `<p>Error loading games. Please try again later.</p>`;
  }
}

fetchAndDisplayRelease();