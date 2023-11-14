<p align="center"><img src="src/assets/images/FullPOkeApp-title.png" style="width:45%;" alt="FullPokeApp banner"/></p>

<br>

Change to:&nbsp; &nbsp; [![es](https://img.shields.io/badge/Language-Spanish-blue.svg)](README.es.md)

---
<!-- title and description -->
# FullPokeApp
A Pokémon web application made with React.js, Sass and Nextui. &nbsp; &nbsp; <a href="https://fullpokeapp.netlify.app" target="_blank">Visit app<img src="src/assets/images/play.png" alt="Play icon" style="width:48px; height:48px;"/></a>

<br>

## Key features:

<details>
<summary>
<img src="src/assets/images/memory-game.png" target="_blank" style="width:32px;"/> &nbsp; &nbsp;
  Memory game:
</summary>

<br>

Challenge your memory and cognitive skills with a memory game featuring Pokémon.

<br>

<img src="src/assets/images/memoryPage.png" title="memory game" alt="memory game"/>

<br>
<br>

### Details:

The game begins with all cards face down and the player turns over two cards for each move. If the two cards have the same image, they remain face up; otherwise, they are face down again.

### Components
  - 12 pokémon cards.
  - Reset button, to play again with the same cards in a different order.
  - New game button, to change cards.
  - Movement counter.
  - Pop-up with data about the game won and buttons to play a new game, reset the game or close the pop-up.

<p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank">Visit app<img src="src/assets/images/play.png" alt="Play icon" style="width:48px; height:48px;"/></a></p>
</details>

---

<details>
<summary>
<img src="src/assets/images/pokemon-go.png" style="width:32px;"/> &nbsp; &nbsp;
  pokemon search:
</summary>
  
<br>

Search for your favorite Pokemon and select to see their details.

<img src="src/assets/images/searchPage.png" title="Search Page" alt="Search Page"/>

<br>
<br>

### Details:

Search by matching the name of the Pokemon. Once you enter the search name or character and press search, the pokemon that matches the search will be displayed below.

### Components

 - Search bar.
 - Recent Pokemon search list (Pokemon details view).
 - List of created pokemons.
 - Button to return to the top of the search page.

<br>

On this page you can see the pokemon lists when there is not a search in course.

<p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank">Visit app<img src="src/assets/images/play.png" alt="Play icon" style="width:48px; height:48px;"/></a></p>
</details>

---

<details>
<summary>
<img src="src/assets/images/snorlax.png" style="width:32px;"/>
Pokemon details view: 
</summary>

<br>

Here you see the card with the details of the Pokemon selected in the search list.

<p align="center"><img src="src/assets/images/searchedDetailsPage.png" title="Details of pokemon searched" alt="Details card of a pokemon searched" style="width:200px;"/>
<img src="src/assets/images/createdDetailsPage.png" title="Details of pokemon created" alt="Details card of a pokemon created" style="width:200px;"/></p>

<br>

### Details:

<br>

It contains a card with the Pokémon's details: name, image, weight, height, type-One and/or type-Two.

### Components

 - Pokémon Details Card.
 - Button to return to the search engine.

<p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank">Visit app<img src="src/assets/images/play.png" alt="Play icon" style="width:48px; height:48px;"/></a></p>
</details>

---

<details>
<summary>
<img src="src/assets/images/egg.png" style="width:32px;"/>
Pokemon creation: 
</summary>

<br>

Create your own pokemons, customize their appearance, attributes.

<img src="src/assets/images/createFormPage.png" title="Creation page" alt="Creation page"/>

<br>
<br>

### Details:

<br>

### Components

 - Creation form.
 - Error pop-up, with Details and examples for filling out the input.

<p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank">Visit app<img src="src/assets/images/play.png" alt="Play icon" style="width:48px; height:48px;"/></a></p>
</details>

---

## Objectives: 

 - Web application development with React.js (Vite) and Sass.
 - Work with Api consumption, react form, hooks and integration of Components from external libraries.

<br>

<p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank">Visit app<img src="src/assets/images/play.png" alt="Play icon" style="width:48px; height:48px;"/></a></p>

<br>

## Design: 

<details>
<summary>&nbsp; &nbsp; <img src="src/assets/images/wireframe.png" style="width:32px;"/> &nbsp; &nbsp; Wireframes:</summary>

<br>

### Details: 

<h2>Memory game | Featured components:</h2>
<p><strong>Movements Counter:</strong> To know how many movements have been made.</p>
<p><strong>Reset button:</strong> Allows the user to restart the game with the current cards.</p>
<p><strong>Pop-up:</strong> Alert showing game data and option buttons.</p>

<br>

<p align="center"><img src="src/assets/images/wireframeMemoryGame.webp" title="Wireframe of the memory game" alt="Memory game wireframe" style="width: min-width: 200px; width: 20%"/>
<img src="src/assets/images/wireframeWinAlert.webp" title="Wireframe of the memory game alert" alt="Memory game alert wireframe" style="width: min-width: 200px; width: 20%"/></p>

<br>

<a href="https://www.gromarant.com/" align="center">See more details</a>

---

<h2>Search Page:</h2>
<p><strong>Search engine:</strong> Allows users to search for matches on Pokémon names.</p>
<p><strong>Go up button:</strong>  To scroll up.</p>
<p><strong>Pokemon searched and created lists.</strong></p>

<br>

<p align="center"><img src="src/assets/images/wireframeSearching.webp" title="Wireframe of search page" alt="Search page wireframe" style="width: min-width: 200px; width: 20%"/>
<img src="src/assets/images/wireframeSearch.webp" title="Wireframe of search page lists" alt="Search page lists wireframe" style="width: min-width: 200px; width: 20%"/>

<img src="src/assets/images/wireframeCreate.webp" title="Wireframe of create page" alt="Create page wireframe" style="width: min-width: 200px; width: 20%"/>
<img src="src/assets/images/wireframeErrorAlert.webp" title="Wireframe of create page alert" alt="Create page error wireframe" style="width: min-width: 200px; width: 20%"/></p>

<br>
<br>

<a href="https://www.gromarant.com/">See more details</a>

---

<h2>Create page:</h2>
<p><strong>Form:</strong> Made with react-hook-form.</p>
<p><strong>Error Pop-up:</strong> Allows the user to fill out form fields correctly.</p>

<br>

<p align="center"><img src="src/assets/images/wireframeCreate.webp" title="Wireframe of create page" alt="Create page wireframe" style="width: min-width: 200px; width: 20%"/>
<img src="src/assets/images/wireframeErrorAlert.webp" title="Wireframe of create page alert" alt="Create page error wireframe" style="width: min-width: 200px; width: 20%"/></p>

<br>
<br>

<a href="https://www.gromarant.com/">See more details</a>

---

<h2>Pokemon details Page:</h2>
<p><strong>Pokémon details card:</strong> With more information about the selected Pokémon.</p>
<p><strong>Search button:</strong> To come back to the search page.</p>
<p><strong>Pokemon searched and created lists.</strong></p>

<br>

<p align="center"><img src="src/assets/images/wireframeDetails.webp" title="Wireframe of Pokemon details page" alt="Pokemon details page wireframe" style="width: min-width: 200px; width: 20%"/></p>

<br>
<br>

<a href="https://www.gromarant.com/">See more details</a>
</details>

---

<br>

## Tools:

<br>

<p align="center"><img src="src/assets/images/react_yellowLogo.png" title="React.js" alt="React.js Logo" style="width:102px; border-radius:8px;"/>&nbsp; &nbsp;
<img src="src/assets/images/sass_yellowLogo.png" title="Sass | css" alt="Sass | css Logo" style="width:102px; border-radius:8px;"/>&nbsp; &nbsp;
<img src="src/assets/images/nextui_yellowLogo.png" title="Nextui" alt="Nextui Logo" style="width:102px; border-radius:8px;"/></p>
  

<br>

## Copy and implementation of this project:

<details>
<summary>&nbsp; &nbsp; <img src="src/assets/images/management.png" style="width:32px;"/> &nbsp; &nbsp; Instructions:</summary>

<br>


</details>

---

<br>

## Next implementations:

 - **Pokémon detail view:** Add more details (attacks, damage, etc.).
 - **Memory game:** with created Pokémons.
 - **PokéDex Encyclopedia:** Discover detailed information about each species of Pokémon, their abilities and evolutions.

<br>

## Professionals:

<a href="https://www.linkedin.com/in/mariangelicarodriguezperez/">
<p align="center"><img src="src/assets/images/professionalCard.png" style="width:135px; border-radius: 10px;" alt="Full Stack Developer | Mariangelica Rodriguez" title="See her LinkedIn profile"/></p>
</a>

---

<br>

<p align="center"><a href="https://www.gromarant.com/"><img src="src/assets/images/logoGromarant-2023.png" style="width:250px;" alt="Gromarant logo" title="Visit Gromarant portfolio page"/></a></p>
<a href="https://www.gromarant.com/"><p align="center" style="color: #D9D9D9">© Mariangelica Rodriguez</p>
</a>
<a href="https://www.linkedin.com/in/mariangelicarodriguezperez/">
<p align="center"><img src="src/assets/images/linkedIn.png" style="width:34px; height:34px" alt="linkedIn logo" title="See her LinkedIn profile"/></p>
</a>
<a href="https://github.com/Gromarant"><p align="center">
<img src="src/assets/images/githubLogo.png" style="width:34px; height:34px; border-radius:50%" alt="Github logo" title="See her Github profile"/>
</p></a>