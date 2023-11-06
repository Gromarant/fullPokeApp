<!-- PokeApp banner -->
<div style="display:flex; justify-content:center; align-items:center; padding:1rem; background-color: #2359be">
  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; padding:1rem; background-image: url('src/assets/images/wallpaper-pokemondark-pokemon.jpg'); width:100%;">
  <img src="src/assets/images/FullPOkeApp-title.png" style="min-width:200px; width:40%;" alt="Banner de FullPokeApp"/>
  </div>
</div>

<br>

Cambiar a:&nbsp; &nbsp; [![es](https://img.shields.io/badge/idioma-Inglés-green.svg)](README.md)

---
<!-- title and description -->
# FullPokeApp
Aplicación web de Pokémon desarrollada con React.js, Sass y Nextui. 
<br>

## Características clave:

<details>
<summary>
  <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem; width:45%;">
  <img src="src/assets/images/memory-game.png" style="width:32px;"/> &nbsp; &nbsp;
    Juego de memoria:
  </div>
</summary>

<br>

Desafía tu memoria y tus habilidades cognitivas con un juego de memoria protagonizado por Pokémones.

<br>

<img src="src/assets/images/memoryPage.png" title="Juego de memoria" alt="Juego de memoria"/>

<br>
<br>

### Detalles:

<div style="display:flex; flex-direction: column; gap:1rem; padding:1rem; background-color:black">

  <div>

  El juego comienza con todas las cartas boca abajo y el jugador voltea dos cartas por cada movimiento. Si las dos cartas tienen la misma imagen, se quedan boca arriba; de lo contrario, vuelven a estar boca abajo. 

### Componentes
  - 12 cartas pokémon.
  - Botón de reset, para jugar de nuevo con las mismas cartas en diferente orden.
  - Botón de new Game, para cambiar de cartas.
  - Contador de movimientos.
  - Pop-up con datos de la partida ganada y botones para jugar nueva partida, resetear la partida o cerrar el pop-up.

  </div>
</div>
</details>

---

<details>
<summary>
  <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem; width:45%;">
  <img src="src/assets/images/pokemon-go.png" style="width:32px;"/> &nbsp; &nbsp;
    Buscador de pokemones:
  </div>
</summary>

<br>

Busca tus Pokémons favoritos y selecciona para ver sus detalles.

<img src="src/assets/images/searchPage.png" title="Página de búsqueda" alt="Página de búsqueda"/>

<br>
<br>

### Detalles:

<div style="display:flex; flex-direction: column; gap:8px; justify-content: center; padding:1rem; background-color:black">

  <div>

  Busca por coincidencia con el nombre de los pokemons, una vez ingresado el nombre o carácter de búsqueda y presionar search se desplegarán debajo los pokemones que coinciden con la búsqueda.

### Componentes

 - Barra de búsqueda.
 - Lista de pokemones buscados recientemente (vista detalles del pokémon).
 - Lista de pokemones creados.
 - botón para volver al inicio de la página de búsqueda.

<br>

  En esta pantalla podrás ver las listas de los pokemones cuando no haya una búsqueda actual.
  </div>
</div>
</details>

---

<details>
<summary>

  <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem; width:45%;">
  <img src="src/assets/images/egg.png" style="width:32px;"/>
  Creación de Pokémon: 
  </div>
</summary>

<br>

Crea tus propios pokemones, personaliza su apariencia, atributos.

<img src="src/assets/images/createFormPage.png" title="Página de creación de Pokémon" alt="Página de creación de Pokémon"/>

<br>
<br>

### Detalles:

<br>

<div style="display:flex; flex-direction: column; gap:1rem; justify-content: center; padding:1rem; background-color:black">

  <div>

### Componentes

 - Formulario de creación.
 - Pop-up de error, con detalles y ejemplos para el rellenado de los input.

<br>
  </div>
</div>
</details>

---

<details>
<summary>
<div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem;">
  <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding: 0 1rem; width:45%;">
  <img src="src/assets/images/snorlax.png" style="width:32px;"/>
  Vista a detalle de Pokémon: 
  </div>
</div> 
</summary>

<br>

Carta con los detalles del pokémon seleccionado en la lista de búsqueda.

<div style="display:flex; flex-wrap:wrap; gap:2rem; align-items:center; justify-content: center; padding:1rem;">
  <img src="src/assets/images/searchedDetailsPage.png" title="Detalles de un Pokémon buscado" alt="Detalles de un Pokémon buscado" style="width:200px;"/>
  <img src="src/assets/images/createdDetailsPage.png" title="Detalles de un Pokémon creado" alt="Detalles de un Pokémon creado" style="width:200px;"/>
</div>

<br>


### Detalles:

<br>

<div style="display:flex; flex-direction: column; gap:1rem; justify-content: center; padding:1rem; background-color:black">

  <div>

  Contiene una carta con los detalles del Pokémon: nombre, imagen, peso, altura, type-One y/o type-Two.

### Componentes

 - Carta de detalles del pokémon.
 - Botón para volver al buscador.

<br>

  </div>
</div>
</details>

---

<a href="https://fullpokeapp.netlify.app/">
  <div style="display: flex; flex-wrap:wrap; justify-content: center; align-items:center; padding:16px; background: #FFCC01; width:fit-content; margin:16px auto; border-radius: 50%; position: fixed; bottom: 2rem; right: 1rem">
    <img src="src/assets/images/linkIcon.png" alt="Botón de link" title="Visitar la app" style="width:36px;"/>
  </div>
</a> 

## Objetivos: 

 - Desarrollo de aplicación web con React.js (Vite) y Sass.
 - Trabajar con consumo de Api, react form, hooks e integración de componentes de librerías externas.

<br>

## Diseño: 

<details>
   <summary>&nbsp; &nbsp; <img src="src/assets/images/wireframe.png" style="width:32px;"/> &nbsp; &nbsp; Wireframes:</summary>
<br>

### Detalles: 

<div style="display:flex; flex-direction: column; gap:2rem; padding:1rem;">
  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:2rem; padding:1rem; background-color:black">
  <img src="src/assets/images/wireframeMemoryGame.webp" title="Wireframe de juego de memoria" alt="Wireframe de juego de memoria" style="width: min-width: 150px; width: 15%"/>
  <img src="src/assets/images/wireframeWinAlert.webp" title="Wireframe de alerta de juego de memoria" alt="Wireframe de alerta de juego de memoria" style="width: min-width: 150px; width: 15%"/>
  <div>
    <h2>Juego de memoria | Componentes destacados:</h2>
    <p><strong>Contador de movimientos:</strong> muestra el número de movimientos realizados.</p>
    <p><strong>Botón de reset:</strong> Permite al usuario reiniciar el juego con las mismas cartas.</p>
    <p><strong>Pop-up:</strong> Alerta que muestra datos del juego y botones de opción.</p>
    <a href="https://www.gromarant.com/">Ver más detalles</a>
  </div>
  </div>

  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:2rem; padding:1rem; background-color:#4b5360">
  <div>
    <h2>Página de búsqueda:</h2>
    <p><strong>Buscador:</strong> Permite a los usuarios buscar Pokemones por coincidencias con los nombres.</p>
    <p><strong>Botón para subir:</strong>  para hacer scroll de la pánina hacia arriba.</p>
    <p><strong>Listas de pokemones buscados y creados.</strong></p>
    <a href="https://www.gromarant.com/">Ver más detalles</a>
  </div>
  <img src="src/assets/images/wireframeSearching.webp" title="Wireframe de la página de búsqueda" alt="Wireframe de la página de búsqueda" style="width: min-width: 150px; width: 15%"/>
  <img src="src/assets/images/wireframeSearch.webp" title="Wireframe Wireframe de  listas en la página de búsqueda" alt="Wireframe Wireframe de  listas en la página de búsqueda" style="width: min-width: 150px; width: 15%"/>
  </div>

  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:2rem; padding:1rem; background-color:black">
  <img src="src/assets/images/wireframeCreate.webp" title="Wireframe de página crear Pokémon" alt="Wireframe de página crear Pokémon" style="width: min-width: 150px; width: 15%"/>
  <img src="src/assets/images/wireframeErrorAlert.webp" title="Wireframe de errores de formulario" alt="Wireframe  de errores de formulario" style="width: min-width: 150px; width: 15%"/>
  <div>
    <h2>Página de creación:</h2>
    <p><strong>Formulario:</strong> desarrollado con react-hook-form.</p>
    <p><strong>Pop-up de error:</strong> Permite al usuario completar correctamente los campos del formulario.</p>
    <a href="https://www.gromarant.com/">Ver más detalles</a>
  </div>
  </div>

  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:2rem; padding:1rem; background-color:#4b5360">
  <div>
    <h2>Página de detalles de Pokémon:</h2>
    <p><strong>Ficha de detalles de Pokémon:</strong> Con más información sobre los Pokémon seleccionados.</p>
    <p><strong>Botón de búsqueda:</strong> Para volver a la página de búsqueda.</p>
    <p><strong>Lista de Pokemones buscados y creados.</strong></p>
    <a href="https://www.gromarant.com/">Ver más detalles</a>
  </div>
  <img src="src/assets/images/wireframeDetails.webp" title="Wireframe of Pokemon details page" alt="Pokemon details page wireframe" style="width: min-width: 150px; width: 15%"/>
  </div>
<div>
</details>

---

## Herramientas:

<br>

<div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center; padding:1rem;">
  <img src="src/assets/images/react_yellowLogo.png" title="React.js" alt="React.js Logo" style="width:102px; border-radius:8px;"/>&nbsp; &nbsp;
  <img src="src/assets/images/sass_yellowLogo.png" title="Sass | css" alt="Sass | css Logo" style="width:102px; border-radius:8px;"/>&nbsp; &nbsp;
  <img src="src/assets/images/nextui_yellowLogo.png" title="Nextui" alt="Nextui Logo" style="width:102px; border-radius:8px;"/>
</div>
<br>

## Copia e implementación de este proyecto:

<details>
  <summary>&nbsp; &nbsp; <img src="src/assets/images/management.png" style="width:32px;"/> &nbsp; &nbsp; Instrucciones:</summary>

<br>

xxxxxxxxxx

<img src="assets/icon_dataScience_plus.png" title="Data Science" alt="Data Science Logo" style="height: 107px; width: 102px;"/>

<br>
<br>

### Detalles:

<br>

<div style="display:flex; flex-wrap:wrap; gap:2rem; align-items:center; padding:1rem; background-color:black">

  <div>

### Componentes

 - xxxxxxxxxxxx
  </div>
</div>
</details>

---

<br>

## Futuras implementaciones:

 - **Vista detalle de Pokémon:** Añadir más detalles (ataques, daño, etc).
 - **Juego de memoria/con pokemones creados:** juego de memoria con pokemones creados.
 - **Enciclopedia PokéDex:** Descubre información detallada sobre cada especie de Pokémon, sus habilidades y evoluciones.

<br>

## Profesionales:

<div style="display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; align-items:center; padding:1rem;">
  <a href="https://www.linkedin.com/in/judit-r-ab8734b0/">
    <img src="src/assets/images/professionalCard.png" style="width:135px; border-radius: 10px;" alt="Full Stack Developer | Mariangelica Rodriguez" title="Full Stack Developer | Mariangelica Rodriguez"/>
  </a>
</div>

---

<br>

<div style="display:flex; justify-content:center; align-items:center; padding:1rem; background-color: #2359be">
  <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; padding:1rem; background-image: url('src/assets/images/wallpaper-pokemondark-pokemon.jpg'); width:100%;">

  <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; padding:1rem;">
  <a href="https://www.gromarant.com/" style="text-align:center;">
  <img src="src/assets/images/logoGromarant-2023.png" style="min-width:170px; width:250px" alt="logo Gromarant" title="Ir a página Gromarant (portafolio)"/>
  <p style="color: #D9D9D9">© Mariangelica Rodriguez</p>
  </a>
  </div>

  <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; gap:1rem; padding:1rem;">
  <a href="https://www.linkedin.com/in/mariangelicarodriguezperez/"  style="color: #D9D9D9">
    <img src="src/assets/images/linkedIn.png" style="width:34px; height:34px" alt="logo linkedIn" title="Ver perfil de  LinkedIn"/>
  </a>
  <a href="https://github.com/Gromarant"  style="color: #D9D9D9">
    <img src="src/assets/images/githubLogo.png" style="width:34px; height:34px; border-radius:50%" alt="logo Github" title="Ver perfil de Github"/>
  </a>
  </div>
  </div>
</div>