const music = document.getElementById("background-music");
const muteButton = document.getElementById("mute-button");

// Configuración inicial
music.volume = 0; // El audio empieza en silencio

// Evento para activar el audio
muteButton.addEventListener("click", () => {
    if (music.volume === 0) {
        music.play();
        music.volume = 0.5; // Subir volumen al 50%
        muteButton.textContent = "🔇";
    } else {
        music.volume = 0; // Silenciar nuevamente si se hace clic de nuevo
        muteButton.textContent = "🔊";
    }
});

// Selecciona el contenedor de los copos de nieve
const snowflakesContainer = document.getElementById("snowflakes-container");

// Límite de copos de nieve en pantalla
const MAX_SNOWFLAKES = 500;
let currentSnowflakeCount = 0; // Contador actual de copos

// Función para generar copos de nieve
function generateSnowflakes(count) {
    for (let i = 0; i < count; i++) {
        // Verificar si se supera el límite
        if (currentSnowflakeCount >= MAX_SNOWFLAKES) break;

        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        // Posición inicial aleatoria
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.top = `${-Math.random() * 20}px`;

        // Duración y retraso aleatorio de la animación
        const duration = 5 + Math.random() * 15; // Entre 5 y 20 segundos
        const delay = -Math.random() * 5; // Retraso inicial negativo

        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;

        // Añadir al contenedor
        snowflakesContainer.appendChild(snowflake);

        // Incrementar el contador de copos
        currentSnowflakeCount++;

        // Eliminar copos de nieve al finalizar la animación
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
            currentSnowflakeCount--; // Reducir el contador al eliminar el copo
        });
    }
}

// Generar copos de nieve iniciales y luego continuamente
generateSnowflakes(50); // Copos iniciales
setInterval(() => generateSnowflakes(10), 500); // Añade 10 copos cada 0.5 segundos


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente cargado.");
    
    const gifts = document.querySelectorAll(".gift-box"); // Selección de los regalos
    const popup = document.getElementById("gift-popup"); // Contenedor del popup
    const closePopup = document.getElementById("close-popup"); // Botón de cierre
    const giftAnimation = document.querySelector(".gift-animation"); // Contenedor de la animación

    // Verifica si el popup y el botón de cierre existen
    if (!popup || !closePopup) {
        console.error("El contenedor del popup o el botón de cierre no existe en el DOM.");
        return;
    }

    console.log("Popup y botón de cierre encontrados en el DOM.");

    // Evento para cada regalo
    gifts.forEach((gift) => {
        gift.addEventListener("click", () => {
            console.log(`Regalo clickeado: ${gift}`);
            const target = gift.getAttribute("data-target"); // Obtener el regalo seleccionado
            if (!target) {
                console.error("No se encontró el atributo 'data-target' en el regalo.");
                return;
            }

            console.log(`Generando animación para el regalo: ${target}`);
            // Generar y mostrar la animación correspondiente
            giftAnimation.innerHTML = generateGiftAnimation(target);
            popup.classList.remove("hidden"); // Mostrar el popup
            console.log("Popup mostrado.");
        });
    });

    // Evento para cerrar el popup
    closePopup.addEventListener("click", () => {
        console.log("Cerrando el popup.");
        popup.classList.add("hidden"); // Ocultar el popup
        giftAnimation.innerHTML = ""; // Limpiar la animación
        console.log("Popup cerrado y animación limpiada.");
    });
});

// Función para generar la animación del regalo seleccionado
function generateGiftAnimation(target) {
    console.log(`Generando animación para el target: ${target}`);
    switch (target) {
        case "gift1":
            return `
            <div style="background: #ff0040; width: auto; height: 150px; border-radius: 10px; text-align: center; padding: 20px; color: white;">
                🎅 ¡Te quiero mucho! Gracias por tantos años de amistad y todas las sonrisas que me sacaste durante este año🎄
            </div>`;
        case "gift2":
            return `
            <div style="background: #8a9597; width: auto; height: 150px; border-radius: 10px; text-align: center; padding: 20px; color: white;">
                🎁 Cada regalito va a tener una letra o numero escondido que tenes que tener en cuenta y enviarme la palabra comPleta 🎁
            </div>`;
        case "gift3":
            return `
            <div style="background: #f8234d; width: auto; height: 150px; border-radius: 10px; text-align: center; padding: 20px; color: white;">
                ❤️ Ahora que lo sabes te qUiero desear una feliz navidad con este regalito cutre pero regalito eu❤️
            </div>`;
        case "gift4":
            return `
            <div style="background: #34a853; width: auto; height: 150px; border-radius: 10px; text-align: center; padding: 20px; color: white;">
                🎄 EN ESTE REGALO HAY UN CABALLITO 🐴 (Mentira igual esTaria bueno, no?) 🎄
            </div>`;
        case "gift5":
            return `
            <div style="background: #4285f4; width: auto; height: 150px; border-radius: 10px; text-align: center; padding: 20px; color: white;">
                🎅 El verdadero mensajito te lo voy a enviar cuando descubras la palAbra secreta que me tenes que decir por wsp 🎅
            </div>`;
        case "gift6":
            return `
            <div style="background: #f4b400; width: auto; height: 150px; border-radius: 10px; text-align: center; padding: 20px; color: white;">
                🎁 Pero ya sabes todo lo que significas para mí y todas las risas que me sacaste durante todo el año asi que feliz navidad gracias por ser una amiga tan preciada en mi vida y valiosa <3 🎉
            </div>`;
        default:
            return `<div style="color: red; text-align: center;">Regalo no encontrado</div>`;
    }
}