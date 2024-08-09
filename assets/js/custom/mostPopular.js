const gameListContainer = document.getElementById('game-list');
const urlBase = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const gamesToDisplay = 12; // Set your desired limit here

async function fetchAndDisplayGames() {
  const url = urlBase+'?sort-by=popularity'; 

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

    // Limit the number of games displayed:
    for (let i = 0; i < Math.min(gamesToDisplay, gamesData.length); i++) { 
      const game = gamesData[i];

      let gameItem = `
        <div class="col-lg-3 col-sm-6">
          <div class="item">
            <img src="${game.thumbnail}" alt="${game.title} thumbnail">
            <h4>${game.title}<br><span>${game.genre}</span></h4>
            <ul>
              <li><i class="fa fa-star"></i> </li> 
              <li><i class="fa fa-download"></i> </li> 
            </ul>
          </div>
        </div>
      `;
      gameListContainer.innerHTML += gameItem;
    }

  } catch (error) {
    console.error('Error fetching game data:', error);
    // Handle the error appropriately
  }
}

fetchAndDisplayGames();