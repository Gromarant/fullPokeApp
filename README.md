<!-- PokeApp banner -->
<div style="display:flex; justify-content:center; align-items:center; padding:1rem; background-color: #2359be">
  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; padding:1rem; background-image: url('src/assets/images/wallpaper-pokemondark-pokemon.jpg'); width:100%;">
  <img src="src/assets/images/FullPOkeApp-title.png" style="min-width:200px; width:40%;" alt="FullPokeApp banner"/>
  </div>
</div>

<br>

Change to:&nbsp; &nbsp; [![es](https://img.shields.io/badge/Language-Spanish-blue.svg)](README.es.md)

---
<!-- title and description -->
# FullPokeApp
A Pokémon web application made with React.js, Sass and Nextui.
<br>

## Key features:

<details>
<summary>
  <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem; width:45%;">
  <img src="src/assets/images/memory-game.png" style="width:32px;"/> &nbsp; &nbsp;
    Memory game:
  </div>
</summary>

<br>

Challenge your memory and cognitive skills with a memory game featuring Pokémon.

<br>

<img src="src/assets/images/memoryPage.png" title="memory game" alt="memory game"/>

<br>
<br>

### Details:

<div style="display:flex; flex-direction: column; gap:1rem; padding:1rem; background-color:black">

  <div>

  The game begins with all cards face down and the player turns over two cards for each move. If the two cards have the same image, they remain face up; otherwise, they are face down again.

### Components
  - 12 pokémon cards.
  - Reset button, to play again with the same cards in a different order.
  - New game button, to change cards.
  - Movement counter.
  - Pop-up with data about the game won and buttons to play a new game, reset the game or close the pop-up.

  </div>
</div>
</details>

---

<details>
<summary>
  <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem; width:45%;">
  <img src="src/assets/images/pokemon-go.png" style="width:32px;"/> &nbsp; &nbsp;
    pokemon search:
  </div>
</summary>
  
<br>

Search for your favorite Pokemon and select to see their details.

<img src="src/assets/images/searchPage.png" title="Search Page" alt="Search Page"/>

<br>
<br>

### Details:

<div style="display:flex; flex-direction: column; gap:8px; justify-content: center; padding:1rem; background-color:black">

  <div>

  Search by matching the name of the Pokemon. Once you enter the search name or character and press search, the pokemon that matches the search will be displayed below.

### Components

 - Search bar.
 - Recent Pokemon search list (Pokemon details view).
 - List of created pokemons.
 - Button to return to the top of the search page.

<br>

  On this page you can see the pokemon lists when there is not a search in course.
  </div>
</div>
</details>

---

<details>
<summary>
  <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem; width:45%;">
  <img src="src/assets/images/egg.png" style="width:32px;"/>
  Pokemon creation: 
  </div>
</summary>

<br>

Create your own pokemons, customize their appearance, attributes.

<img src="src/assets/images/createFormPage.png" title="Creation page" alt="Creation page"/>

<br>
<br>

### Details:

<br>

<div style="display:flex; flex-direction: column; gap:1rem; justify-content: center; padding:1rem; background-color:black">

  <div>

### Components

 - Creation form.
 - Error pop-up, with Details and examples for filling out the input.

  </div>
</div>
</details>

---

<details>
<summary>
<div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem;">
  <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem; width:45%;">
  <img src="src/assets/images/snorlax.png" style="width:32px;"/>
  Pokemon details view: 
  </div>
</div> 
</summary>

<br>

Here you see the card with the details of the Pokemon selected in the search list.

<div style="display:flex; flex-wrap:wrap; gap:2rem; align-items:center; justify-content: center; padding:1rem;">
  <img src="src/assets/images/searchedDetailsPage.png" title="Details of pokemon searched" alt="Details card of a pokemon searched" style="width:200px;"/>
  <img src="src/assets/images/createdDetailsPage.png" title="Details of pokemon created" alt="Details card of a pokemon created" style="width:200px;"/>
</div>

<br>

### Details:

<br>

<div style="display:flex; flex-direction: column; gap:1rem; justify-content: center; padding:1rem; background-color:black">

  <div>

  It contains a card with the Pokémon's details: name, image, weight, height, type-One and/or type-Two.

### Components

 - Pokémon Details Card.
 - Button to return to the search engine.

  </div>
</div>
</details>

---

<a href="https://fullpokeapp.netlify.app/">
  <div style="display: flex; flex-wrap:wrap; justify-content: center; align-items:center; padding:16px; background: #FFCC01; width:fit-content; margin:16px auto; border-radius: 50%; position: fixed; bottom: 2rem; right: 1rem">
    <img src="src/assets/images/linkIcon.png" alt="Botón de link" title="Visit app" style="width:36px;"/>
  </div>
</a> 

## Objectives: 

 - Web application development with React.js (Vite) and Sass.
 - Work with Api consumption, react form, hooks and integration of Components from external libraries.

<br>

## Design: 

<details>
  <summary>&nbsp; &nbsp; <img src="src/assets/images/wireframe.png" style="width:32px;"/> &nbsp; &nbsp; Wireframes:</summary>

<br>

### Details: 

<div style="display:flex; flex-direction: column; gap:2rem; padding:1rem;">
  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:2rem; padding:1rem; background-color:black">
  <img src="src/assets/images/wireframeMemoryGame.webp" title="Wireframe of the memory game" alt="Memory game wireframe" style="width: min-width: 150px; width: 15%"/>
  <img src="src/assets/images/wireframeWinAlert.webp" title="Wireframe of the memory game alert" alt="Memory game alert wireframe" style="width: min-width: 150px; width: 15%"/>
  <div>
    <h2>Memory game | Featured components:</h2>
    <p><strong>Movements Counter:</strong> To know how many movements have been made.</p>
    <p><strong>Reset button:</strong> Allows the user to restart the game with the current cards.</p>
    <p><strong>Pop-up:</strong> Alert showing game data and option buttons.</p>
    <a href="https://www.gromarant.com/">See more details</a>
  </div>
  </div>

  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:2rem; padding:1rem; background-color:#4b5360">
  <div>
    <h2>Search Page:</h2>
    <p><strong>Search engine:</strong> Allows users to search for matches on Pokémon names.</p>
    <p><strong>Go up button:</strong>  To scroll up.</p>
    <p><strong>Pokemon searched and created lists.</strong></p>
    <a href="https://www.gromarant.com/">See more details</a>
  </div>
  <img src="src/assets/images/wireframeSearching.webp" title="Wireframe of search page" alt="Search page wireframe" style="width: min-width: 150px; width: 15%"/>
  <img src="src/assets/images/wireframeSearch.webp" title="Wireframe of search page lists" alt="Search page lists wireframe" style="width: min-width: 150px; width: 15%"/>
  </div>

  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:2rem; padding:1rem; background-color:black">
  <img src="src/assets/images/wireframeCreate.webp" title="Wireframe of create page" alt="Create page wireframe" style="width: min-width: 150px; width: 15%"/>
  <img src="src/assets/images/wireframeErrorAlert.webp" title="Wireframe of create page alert" alt="Create page error wireframe" style="width: min-width: 150px; width: 15%"/>
  <div>
    <h2>Create page:</h2>
    <p><strong>Form:</strong> Made with react-hook-form.</p>
    <p><strong>Error Pop-up:</strong> Allows the user to fill out form fields correctly.</p>
    <a href="https://www.gromarant.com/">See more details</a>
  </div>
  </div>

  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:2rem; padding:1rem; background-color:#4b5360">
  <div>
    <h2>Pokemon details Page:</h2>
    <p><strong>Pokémon details card:</strong> With more information about the selected Pokémon.</p>
    <p><strong>Search button:</strong> To come back to the search page.</p>
    <p><strong>Pokemon searched and created lists.</strong></p>
    <a href="https://www.gromarant.com/">See more details</a>
  </div>
  <img src="src/assets/images/wireframeDetails.webp" title="Wireframe of Pokemon details page" alt="Pokemon details page wireframe" style="width: min-width: 150px; width: 15%"/>
  </div>
<div>
</details>

---

<br>

## Tools:

<br>

<div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center; padding:1rem;">
  <img src="src/assets/images/react_yellowLogo.png" title="React.js" alt="React.js Logo" style="width:102px; border-radius:8px;"/>&nbsp; &nbsp;
  <img src="src/assets/images/sass_yellowLogo.png" title="Sass | css" alt="Sass | css Logo" style="width:102px; border-radius:8px;"/>&nbsp; &nbsp;
  <img src="src/assets/images/nextui_yellowLogo.png" title="Nextui" alt="Nextui Logo" style="width:102px; border-radius:8px;"/>
</div>

<br>

## Copy and implementation of this project:

<details>
  <summary>&nbsp; &nbsp; <img src="src/assets/images/management.png" style="width:32px;"/> &nbsp; &nbsp; Instructions:</summary>

<br>

xxxxxxxxxx

<img src="assets/icon_dataScience_plus.png" title="Data Science" alt="Data Science Logo" style="height: 107px; width: 102px;"/>

<br>
<br>

### Details:

<br>

<div style="display:flex; flex-wrap:wrap; gap:2rem; align-items:center; padding:1rem; background-color:black">

  <div>

### Components

 - xxxxxxxxxxxx
  </div>
</div>
</details>

---

<br>

## Next implementations:

 - **Pokémon detail view:** Add more details (attacks, damage, etc.).
 - **Memory game:** with created Pokémons.
 - **PokéDex Encyclopedia:** Discover detailed information about each species of Pokémon, their abilities and evolutions.

<br>

## Professionals:

<div style="display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; align-items:center; padding:1rem;">
  <a href="https://www.linkedin.com/in/judit-r-ab8734b0/">
    <img src="src/assets/images/professionalCard.png" style="width:135px; border-radius: 10px;" alt="Full Stack Developer | Mariangelica Rodriguez" title="See her LinkedIn profile"/>
  </a>
</div>

---

<br>

<div><footer__wrapper>
  <div><footer__background>

  <div class=""><footer__brand>
  <a href="https://www.gromarant.com/" style="text-align:center;">
  <img src="src/assets/images/logoGromarant-2023.png" style="min-width:170px; width:250px" alt="Gromarant logo" title="Visit Gromarant portfolio page"/>
  <p style="color: #D9D9D9">© Mariangelica Rodriguez</p>
  </a>
  </footer__brand></div>

  <div class="footer__rrss"><footer__rrss>
  <a href="https://www.linkedin.com/in/mariangelicarodriguezperez/"  style="color: #D9D9D9">
    <img src="src/assets/images/linkedIn.png" style="width:34px; height:34px" alt="linkedIn logo" title="See her LinkedIn profile"/>
  </a>
  <a href="https://github.com/Gromarant"  style="color: #D9D9D9">
    <img src="src/assets/images/githubLogo.png" style="width:34px; height:34px; border-radius:50%" alt="Github logo" title="See her Github profile"/>
  </a>
  </footer__rrss></div>
  </footer__background></div>
</footer__wrapper></div>

<style>
footer__wrapper {
  display:flex; 
  justify-content:center; 
  align-items:center; 
  padding:1rem; 
  background-color: #2359be
}
footer__background {
  display:flex; 
  flex-wrap:wrap; 
  justify-content:center; 
  align-items:center; padding:1rem; 
  background-image: url('src/assets/images/wallpaper-pokemondark-pokemon.jpg'); 
  width:100%;
}
footer__brand {
  display:flex; 
  flex-direction:column; 
  justify-content:center; 
  align-items:center; 
  padding:1rem;
}
footer__rrss {
  display:flex; 
  flex-direction:column;
  justify-content:center; 
  align-items:center; 
  gap:1rem; 
  padding:1rem;
}
</style>