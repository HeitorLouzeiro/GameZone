const gameLibraryContainer = document.getElementById('game-library');
const urlBase = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const gamesToDisplay = 3; // Number of games to display in the library

async function freleaseDate() {
  const url = urlBase + '?sort-by=release-date';  // Changed sorting to 'release-date'

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

      gameItemsHTML += `
        <div class="item">
          <ul>
            <li><img src="${game.thumbnail}" alt="${game.title}" class="templatemo-item"></li>
            <li><h4>${game.title}</h4><span>${game.genre}</span></li>
            <li><h4>Date Added</h4><span>${game.release_date}</span></li> <!-- Displaying the release date -->
            <li><h4>Hours Played</h4><span>Unknown</span></li> <!-- Hours Played can be dynamic if available -->
            <li><h4>Currently</h4><span>Downloaded</span></li> <!-- Adjust this status based on logic -->
            <li><div class="main-border-button border-no-active"><a href="#">Downloaded</a></div></li>
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

freleaseDate();
