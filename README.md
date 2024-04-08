<p align="center"><img src="src/assets/images/FullPOkeApp-title.webp" style="width:45%;" alt="FullPokeApp banner"/></p>

<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_playBtn.svg" alt="Play button"/></a></p>

<br>

Change to:&nbsp; &nbsp; [![es](https://img.shields.io/badge/Language-Spanish-blue.svg)](README.es.md)

---

# FullPokeApp
A Pokémon web application made with React.js, Sass and Nextui.

<br>

## Key features:

<details>
<summary>
<img src="src/assets/images/memory-game.webp" target="_blank" style="width:32px;"/> &nbsp; &nbsp;
  Memory game:
</summary>

<br>

Challenge your memory and cognitive skills with a memory game featuring Pokémon.

<br>

<img src="src/assets/images/memoryPage.webp" title="memory game" alt="memory game"/>

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

<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_playBtn.svg" alt="Play button"/></a></p>
</details>

---

<details>
<summary>
<img src="src/assets/images/pokemon-go.webp" style="width:32px;"/> &nbsp; &nbsp;
  pokemon search:
</summary>
  
<br>

Search for your favorite Pokemon and select to see their details.

<img src="src/assets/images/searchPage.webp" title="Search Page" alt="Search Page"/>

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

<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_playBtn.svg" alt="Play button"/></a></p>
</details>

---

<details>
<summary>
<img src="src/assets/images/snorlax.webp" style="width:32px;"/>
Pokemon details view: 
</summary>

<br>

Here you see the card with the details of the Pokemon selected in the search list.

<p align="center"><img src="src/assets/images/searchedDetailsPage.webp" title="Details of pokemon searched" alt="Details card of a pokemon searched" style="width:200px;"/>
<img src="src/assets/images/createdDetailsPage.webp" title="Details of pokemon created" alt="Details card of a pokemon created" style="width:200px;"/></p>

<br>

### Details:

<br>

It contains a card with the Pokémon's details: name, image, weight, height, type-One and/or type-Two.

### Components

 - Pokémon Details Card.
 - Button to return to the search engine.

<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_playBtn.svg" alt="Play button"/></a></p>
</details>

---

<details>
<summary>
<img src="src/assets/images/egg.webp" style="width:32px;"/>
Pokemon creation: 
</summary>

<br>

Create your own pokemons, customize their appearance, attributes.

<img src="src/assets/images/createFormPage.webp" title="Creation page" alt="Creation page"/>

<br>
<br>

### Details:

<br>

### Components

 - Creation form.
 - Error pop-up, with Details and examples for filling out the input.

<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_playBtn.svg" alt="Play button"/></a></p>
</details>

---

## Objectives: 

 - Web application development with React.js (Vite) and Sass.
 - Work with Api consumption, react form, hooks and integration of Components from external libraries.

<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_playBtn.svg" alt="Play button"/></a></p>

<br>

## Design: 

<details>
<summary>&nbsp; &nbsp; <img src="src/assets/images/wireframe.webp" style="width:32px;"/> &nbsp; &nbsp; Wireframes:</summary>

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

---

<h2>Search Page:</h2>
<p><strong>Search engine:</strong> Allows users to search for matches on Pokémon names.</p>
<p><strong>Go up button:</strong>  To scroll up.</p>
<p><strong>Pokemon searched and created lists.</strong></p>

<br>

<p align="center"><img src="src/assets/images/wireframeSearching.webp" title="Wireframe of search page" alt="Search page wireframe" style="width: min-width: 200px; width: 20%"/>
<img src="src/assets/images/wireframeSearch.webp" title="Wireframe of search page lists" alt="Search page lists wireframe" style="width: min-width: 200px; width: 20%"/></p>

<br>
<br>

---

<h2>Create page:</h2>
<p><strong>Form:</strong> Made with react-hook-form.</p>
<p><strong>Error Pop-up:</strong> Allows the user to fill out form fields correctly.</p>

<br>

<p align="center"><img src="src/assets/images/wireframeCreate.webp" title="Wireframe of create page" alt="Create page wireframe" style="width: min-width: 200px; width: 20%"/>
<img src="src/assets/images/wireframeErrorAlert.webp" title="Wireframe of create page alert" alt="Create page error wireframe" style="width: min-width: 200px; width: 20%"/></p>

<br>
<br>

---

<h2>Pokemon details Page:</h2>
<p><strong>Pokémon details card:</strong> With more information about the selected Pokémon.</p>
<p><strong>Search button:</strong> To come back to the search page.</p>
<p><strong>Pokemon searched and created lists.</strong></p>

<br>

<p align="center"><img src="src/assets/images/wireframeDetails.webp" title="Wireframe of Pokemon details page" alt="Pokemon details page wireframe" style="width: min-width: 200px; width: 20%"/></p>

<br>
<br>

</details>

---

<br>

## Languages and tools:

Use for the project development:

<p align="center">
<a href="https://react.dev/" target="_blank"><img src="src/assets/images/reactJs_readme_dark_aqua.svg" title="Know more about React.js" alt="React.js"/></a> &nbsp; &nbsp;
<a href="https://sass-lang.com/" target="_blank"><img src="src/assets/images/sass_readme_dark_aqua.svg" title="Know more about Sass" alt="Sass"/></a> &nbsp; &nbsp;
<a href="https://sass-lang.com/" target="_blank"><img src="src/assets/images/nextUi_readme_dark_aqua.svg" title="Know more about Nextui" alt="Nextui"/></a> &nbsp; &nbsp;
<a href="https://github.com/about" target="_blank"><img src="src/assets/images/github_readme_dark_aqua.svg" title="know more about Github" alt="Github"/></a>
</p>

<br>

Employed in the project design:

<p align="center">
<a href="https://www.figma.com/" target="_blank"><img src="src/assets/images/figma_readme_dark_aqua.svg" title="know more about Figma" alt="Figma"/></a>
</p>

<br>

## Copy and implementation of this project:

<details>
<summary>&nbsp; &nbsp; <img src="src/assets/images/management.webp" style="width:32px;"/> &nbsp; &nbsp; Instructions:</summary>

<br>

<h2>Copy the repo:</h2>

1. Navigate to the repository ( [Gromarant/fullPokeApp](https://github.com/Gromarant/fullPokeApp)).
2. Click the Fork button in the top-right corner.

<br>

![Fork of github repo](src/assets/images/fork_repo.webp)

<h2>Clone locally:</h2>

3. Above the list of files, click <> code.
  
<br>
 
![Fork of github repo](src/assets/images/clone_repo.webp)
    
<br>
 
4. Copy the URL for the repo.
5. Open terminal.
6. Change to the location where you want the clone.

> ``cd new_directory_path``
  
<br>
 
7. Type `git clone`, and then paste the URL you copied earlier.

> ``git clone https://github.com/YOUR-Username/fullPokeApp``
  
<br>
 
8. Press **Enter** to create your local clone.&nbsp; &nbsp;
[Visit github forking and cloning guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

<h2>Run your local repository:</h2>

1. Open terminal and navigate to your local repository.
> ``cd local_repo_path``

<br>

2. Install dependencies 
> `npm install`

This command creates a "node_modules" folder with all the dependencies that the project needs.

<br>

3. Run the app
> `npm run dev`
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
<p align="center"><img src="src/assets/images/professionalCard.webp" style="width:135px; border-radius: 10px;" alt="Full Stack Developer | Mariangelica Rodriguez" title="See my LinkedIn profile"/></p>
</a>

---

<br><br>

<p align="center" style="color: #D9D9D9">© Mariangelica Rodriguez</p>

<p align="center">
<a style="text-decoration:none; cursor:pointer;" href="https://github.com/Gromarant"><img src="src/assets/images/github_readme.svg" alt="Github logo" title="Visit my Github profile"/></a> &nbsp; &nbsp;
<a style="text-decoration:none; cursor:pointer;" href="https://www.linkedin.com/in/mariangelicarodriguezperez/"><img src="src/assets/images/linkedIn_readme.svg" alt="linkedIn logo" title="See my LinkedIn profile"/></a> &nbsp; &nbsp;
<a style="text-decoration:none; cursor:pointer;" href="mailto:contacto@gromarant.com"><img src="src/assets/images/mail_readme.svg" alt="Email logo" title="Write me an email"/></a>
</p>

<br>
<p align="center"><a href="https://www.gromarant.com/"><img src="src/assets/images/logoGromarant-2023.webp" style="width:250px;" alt="Gromarant logo" title="Go to Gromarant wep app"/></a></p>