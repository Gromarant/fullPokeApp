<p align="center"><img src="src/assets/images/FullPOkeApp-title.webp" style="width:45%;" alt="Banner de FullPokeApp"/></p>

<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_jugarBtn.svg" alt="Play button"/></a></p>

<br>

Cambiar a:&nbsp; &nbsp; [![es](https://img.shields.io/badge/idioma-Inglés-green.svg)](README.md)

---

# FullPokeApp
Aplicación web de Pokémon desarrollada con React.js, Sass y Nextui. 
<br>

## Características clave:

<details>
<summary>
<img src="src/assets/images/memory-game.webp" style="width:32px;"/> &nbsp; &nbsp;
  Juego de memoria:
</summary>

<br>

Desafía tu memoria y tus habilidades cognitivas con un juego de memoria protagonizado por Pokémones.

<br>

<img src="src/assets/images/memoryPage.webp" title="Juego de memoria" alt="Juego de memoria"/>

<br>
<br>

### Detalles:

El juego comienza con todas las cartas boca abajo y el jugador voltea dos cartas por cada movimiento. Si las dos cartas tienen la misma imagen, se quedan boca arriba; de lo contrario, vuelven a estar boca abajo. 

### Componentes
  - 12 cartas pokémon.
  - Botón de reset, para jugar de nuevo con las mismas cartas en diferente orden.
  - Botón de new Game, para cambiar de cartas.
  - Contador de movimientos.
  - Pop-up con datos de la partida ganada y botones para jugar nueva partida, resetear la partida o cerrar el pop-up.
  
<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_jugarBtn.svg" alt="Play button"/></a></p>
</details>

---

<details>
<summary>
<img src="src/assets/images/pokemon-go.webp" style="width:32px;"/> &nbsp; &nbsp;
Buscador de pokemones:
</summary>

<br>

Busca tus Pokémons favoritos y selecciona para ver sus detalles.

<img src="src/assets/images/searchPage.webp" title="Página de búsqueda" alt="Página de búsqueda"/>

<br>
<br>

### Detalles:

Busca por coincidencia con el nombre de los pokemons, una vez ingresado el nombre o carácter de búsqueda y presionar search se desplegarán debajo los pokemones que coinciden con la búsqueda.

### Componentes

 - Barra de búsqueda.
 - Lista de pokemones buscados recientemente (vista detalles del pokémon).
 - Lista de pokemones creados.
 - botón para volver al inicio de la página de búsqueda.

<br>

En esta pantalla podrás ver las listas de los pokemones cuando no haya una búsqueda actual.
  
<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_jugarBtn.svg" alt="Play button"/></a></p>
</details>

---

<details>
<summary>
<img src="src/assets/images/snorlax.webp" style="width:32px;"/> &nbsp; &nbsp;
Vista a detalle de Pokémon: 
</summary>

<br>

Carta con los detalles del pokémon seleccionado en la lista de búsqueda.


<p align="center"><img src="src/assets/images/searchedDetailsPage.webp" title="Detalles de un Pokémon buscado" alt="Detalles de un Pokémon buscado" style="width:200px;"/>
<img src="src/assets/images/createdDetailsPage.webp" title="Detalles de un Pokémon creado" alt="Detalles de un Pokémon creado" style="width:200px;"/></p>

<br>


### Detalles:

<br>

  Contiene una carta con los detalles del Pokémon: nombre, imagen, peso, altura, type-One y/o type-Two.

### Componentes

 - Carta de detalles del pokémon.
 - Botón para volver al buscador.
  
<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_jugarBtn.svg" alt="Play button"/></a></p>
</details>

---

<details>
<summary>
<img src="src/assets/images/egg.webp" style="width:32px;"/> &nbsp; &nbsp;
Creación de Pokémon:
</summary>

<br>

Crea tus propios pokemones, personaliza su apariencia, atributos.

<img src="src/assets/images/createFormPage.webp" title="Página de creación de Pokémon" alt="Página de creación de Pokémon"/>

<br>
<br>

### Detalles:

<br>

### Componentes

 - Formulario de creación.
 - Pop-up de error, con detalles y ejemplos para el rellenado de los input.
  
<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_jugarBtn.svg" alt="Play button"/></a></p>
</details>

## Objetivos: 

 - Desarrollo de aplicación web con React.js (Vite) y Sass.
 - Trabajar con consumo de Api, react form, hooks e integración de componentes de librerías externas.
  
<br>

 <p align="center"><a href="https://fullpokeapp.netlify.app" target="_blank"><img src="src/assets/images/fullpokeapp_jugarBtn.svg" alt="Play button"/></a></p>

<br>

## Diseño: 

<details>
<summary>&nbsp; &nbsp; <img src="src/assets/images/wireframe.webp" style="width:32px;"/> &nbsp; &nbsp; Wireframes:</summary>

<br>

### Detalles: 

<h2>Juego de memoria | Componentes destacados:</h2>
<p><strong>Contador de movimientos:</strong> muestra el número de movimientos realizados.</p>
<p><strong>Botón de reset:</strong> Permite al usuario reiniciar el juego con las mismas cartas.</p>
<p><strong>Pop-up:</strong> Alerta que muestra datos del juego y botones de opción.</p>

<br>

<p align="center"><img src="src/assets/images/wireframeMemoryGame.webp" title="Wireframe de juego de memoria" alt="Wireframe de juego de memoria" style="width: min-width: 200px; width: 20%"/>
<img src="src/assets/images/wireframeWinAlert.webp" title="Wireframe de alerta de juego de memoria" alt="Wireframe de alerta de juego de memoria" style="width: min-width: 200px; width: 20%"/></p>

<br>

---

<h2>Página de búsqueda:</h2>
<p><strong>Buscador:</strong> Permite a los usuarios buscar Pokemones por coincidencias con los nombres.</p>
<p><strong>Botón para subir:</strong>  para hacer scroll de la página hacia arriba.</p>
<p><strong>Listas de pokemones buscados y creados.</strong></p>

<br>

<p align="center"><img src="src/assets/images/wireframeSearching.webp" title="Wireframe de la página de búsqueda" alt="Wireframe de la página de búsqueda" style="width: min-width: 200px; width: 20%"/>
<img src="src/assets/images/wireframeSearch.webp" title="Wireframe Wireframe de  listas en la página de búsqueda" alt="Wireframe Wireframe de  listas en la página de búsqueda" style="width: min-width: 200px; width: 20%"/></p>

<br>

---

<h2>Página de creación:</h2>
<p><strong>Formulario:</strong> desarrollado con react-hook-form.</p>
<p><strong>Pop-up de error:</strong> Permite al usuario completar correctamente los campos del formulario.</p>

<br>

<p align="center"><img src="src/assets/images/wireframeCreate.webp" title="Wireframe de página crear Pokémon" alt="Wireframe de página crear Pokémon" style="width: min-width: 200px; width: 20%"/>
<img src="src/assets/images/wireframeErrorAlert.webp" title="Wireframe de errores de formulario" alt="Wireframe  de errores de formulario" style="width: min-width: 200px; width: 20%"/></p>

<br>

---

<h2>Página de detalles de Pokémon:</h2>
<p><strong>Ficha de detalles de Pokémon:</strong> Con más información sobre los Pokémon seleccionados.</p>
<p><strong>Botón de búsqueda:</strong> Para volver a la página de búsqueda.</p>
<p><strong>Lista de Pokemones buscados y creados.</strong></p>

<br>

<p align="center"><img src="src/assets/images/wireframeDetails.webp" title="Wireframe de detalles del Pokémon" alt="Pokemon details page wireframe" style="width: min-width: 200px; width: 20%"/></p>

<br>
<br>

</details>

---

<br>

## Lenguajes y herramientas:

Usados en el desarrollo del proyecto:

<p align="center">
<a href="https://react.dev/" target="_blank"><img src="src/assets/images/reactJs_readme_dark_aqua.svg" title="Saber más sobre React.js" alt="React.js"/></a> &nbsp; &nbsp;
<a href="https://sass-lang.com/" target="_blank"><img src="src/assets/images/sass_readme_dark_aqua.svg" title="Saber más sobre Sass" alt="Sass"/></a> &nbsp; &nbsp;
<a href="https://sass-lang.com/" target="_blank"><img src="src/assets/images/nextUi_readme_dark_aqua.svg" title="Saber más sobre Nextui" alt="Nextui"/></a> &nbsp; &nbsp;
<a href="https://github.com/about" target="_blank"><img src="src/assets/images/github_readme_dark_aqua.svg" title="Saber más sobre Github" alt="Github"/></a>
</p>

<br>

Empleados en el diseño del proyecto:

<p align="center">
<a href="https://www.figma.com/" target="_blank"><img src="src/assets/images/figma_readme_dark_aqua.svg" title="Saber más sobre Figma" alt="Figma"/></a>
</p>

<br>


## Copia e implementación de este proyecto:

<details>
<summary>&nbsp; &nbsp; <img src="src/assets/images/management.webp" style="width:32px;"/> &nbsp; &nbsp; Instrucciones:</summary>

<br>

<h2>Copiar el repositorio:</h2>

1. Navegar al repositorio ( [Gromarant/fullPokeApp](https://github.com/Gromarant/fullPokeApp)).
2. Haz lick en el botón de Fork, en la parte superior derecha.

<br>

![Fork of github repo](src/assets/images/fork_repo.webp)

<h2>Clonar en local:</h2>

3. Sobre las listas de los archivos, haz click en el botón <> code. 
  
<br>
 
![Fork of github repo](src/assets/images/clone_repo.webp)
    
<br>
 
4. Copia la URL del repositorio.
5. Abre la terminal.
6. cambia de directorio a la ubicación dónde quieres que se guarde la copia del proyecto.

> ``cd nueva_ubicación``
  
<br>
 
7. Escribe `git clone` y pega la URL que copiaste antes.

> ``git clone https://github.com/tu-nombreDeUsuario/fullPokeApp``
  
<br>
 
8. Presiona **Enter** para crear tu clon en local.&nbsp; &nbsp;
[Visitar guía para hacer fork y clonar un repositorio](https://docs.github.com/es/get-started/quickstart/fork-a-repo)

<h2>Correr tu repositorio en local:</h2>

1. Abre la terminal y navega a la carpeta de tu repositorio en local.
> ``cd local_repo_path``

<br>

2. Instala las dependencias
> `npm install`

Este comando crea la carpeta "node_modules"  con todas las dependencias que necesita el proyecto.

<br>

3. Corre la aplicación
> `npm run dev`
</details>

---

<br>

## Next implementations:

 - **Vista a detalle del Pokémon:** Agregar más detalles (ataques, daño, etc.).
 - **Juego de memoria:** con los pokemones creados por el usuario.
 - **Enciclopedia PokéDex:** para descubrir información más detallada sobre las especies de Pokémon, sus habilidades y evoluciones.

<br>

## Profesionales:

<a href="https://www.linkedin.com/in/mariangelicarodriguezperez/">
<p align="center"><img src="src/assets/images/professionalCard.webp" style="width:135px; border-radius: 10px;" alt="Full Stack Developer | Mariangelica Rodriguez" title="Ver perfil de LinkedIn"/></p>
</a>

---

<br><br>

<p align="center">© Mariangelica Rodriguez</p>

<p align="center">
<a style="text-decoration:none; cursor:pointer;" href="https://github.com/Gromarant"><img src="src/assets/images/github_readme.svg" alt="Github logo" title="Visitar mi perfil de Github"/></a> &nbsp; &nbsp;
<a style="text-decoration:none; cursor:pointer;" href="https://www.linkedin.com/in/mariangelicarodriguezperez/"><img src="src/assets/images/linkedIn_readme.svg" alt="linkedIn logo" title="Ver mi perfil de LinkedIn"/></a> &nbsp; &nbsp;
<a style="text-decoration:none; cursor:pointer;" href="mailto:contacto@gromarant.com"><img src="src/assets/images/mail_readme.svg" alt="Email logo" title="Contactarme por correo"/></a>
</p>

<br>
<p align="center"><a href="https://www.gromarant.com/"><img src="src/assets/images/logoGromarant-2023.webp" style="width:250px;" alt="Gromarant logo" title="Visitar Portafolio"/></a></p>