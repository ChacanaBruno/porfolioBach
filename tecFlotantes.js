document.addEventListener("DOMContentLoaded", () => {
    const techImages = document.querySelectorAll(".tech-item img");
  
    techImages.forEach((img) => {
      img.addEventListener("mouseover", () => {
        img.style.transform = "translateY(-10px)";
        img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        img.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
      });
  
      img.addEventListener("mouseout", () => {
        img.style.transform = "translateY(0)";
        img.style.boxShadow = "none";
      });
    });
  }); 
  
  /* Este código es un script en JavaScript que se ejecuta cuando el contenido de la página web se ha cargado completamente 
  (DOMContentLoaded). Su propósito es agregar efectos visuales a las imágenes dentro de los elementos con la clase tech-item.
  
  Aquí te explico paso a paso lo que hace:
  
  Escuchar cuando el DOM está listo:
  document.addEventListener("DOMContentLoaded", () => {...}) asegura que el código dentro de la función se ejecute solo después de que 
  todo el contenido HTML haya sido completamente cargado y parseado, pero sin esperar a que las imágenes o estilos estén completamente cargados.
  
  Seleccionar las imágenes:
  const techImages = document.querySelectorAll(".tech-item img"); selecciona todas las imágenes dentro de los elementos con la clase tech-item 
  (probablemente, cada imagen representa una tecnología en un listado).
  
  Agregar los efectos a cada imagen:
  Luego, el código recorre todas las imágenes con forEach(img => {...}), y le agrega dos eventos:
  
  mouseover:
  Cuando el usuario pasa el mouse sobre una imagen (img.addEventListener("mouseover", () => {...})), se aplica el siguiente estilo:
  
  transform: translateY(-10px); mueve la imagen hacia arriba 10 píxeles.
  transition: transform 0.3s ease, box-shadow 0.3s ease; agrega una animación suave (de 0.3 segundos) para el movimiento de la imagen y el efecto de sombra.
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); agrega una sombra alrededor de la imagen para hacerla más destacada.
  mouseout:
  Cuando el mouse deja de estar sobre la imagen (img.addEventListener("mouseout", () => {...})), los estilos se revertirán:
  
  transform: translateY(0); devuelve la imagen a su posición original.
  box-shadow: none; elimina la sombra.
  Resumen: Este código crea un efecto visual donde las imágenes de tecnología (o similares) se "elevan" y adquieren sombra cuando el mouse pasa sobre ellas, y regresan a su estado original cuando el mouse se aleja. */
  