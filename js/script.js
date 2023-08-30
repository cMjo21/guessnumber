
var numeroAleatorio = generarNumeroAleatorio()
console.log("el numero a adivinar es "+numeroAleatorio)

function generarNumeroAleatorio() {

 return Math.floor(Math.random() * 1000) + 1;
}


    document.addEventListener("DOMContentLoaded", function () {
        let contadorMensajes = 0;
    var  messageText2;
    const numerosIngresados = [];
   
    var numero;
        const sendButton = document.getElementById("send-button");
        const chatMessages = document.getElementById("chat-messages");
        const inputField = document.querySelector(".chat-footer input");
       
        sendButton.addEventListener("click", async function () {
            const messageText = inputField.value;     
            console.log("Mensaje ingresado:", messageText); // Registrar el mensaje ingresado en la consola
            console.log(typeof messageText); 
            const numeroEntero = parseInt(messageText);
            console.log(typeof numeroEntero); 
          
            var limitemax = 1000;
 var limitemin = 0;
 

  

     if (limitemax < numeroEntero || numeroEntero < limitemin) {
        messageText2 = `☃️ Frío, el número ${numeroEntero} se encuentra fuera del rango. El rango es entre 0 y 1000`;
        
    } else if (numeroEntero == numeroAleatorio) {
        messageText2 = `☕️🔥 ¡Felicidades, has acertado! El número que estaba pensando era: ${numeroAleatorio} 😄`;
    
    } else if (numeroEntero < numeroAleatorio) {
        messageText2 = `Tibio, el número ${numeroEntero} ingresado es menor 😊`;
       
    } else {
        messageText2 = `Tibio, el número ${numeroEntero} ingresado es mayor 😊`;
    }

    numerosIngresados.push(numeroEntero)
    for (let i = 0; i < numerosIngresados.length; i++) {
        numero = numerosIngresados[i];
        const messageElement2 = document.createElement("ul");
        messageElement2.textContent = `Número ingresado 💾: ${numero}`;
        messageElement2.classList.add("message", "outgoing")
        chatMessages.appendChild(messageElement2);
     
    }

       
    const messageElement3 = document.createElement("ul");
    messageElement3.textContent = `numero de intentos 📩 : ${numerosIngresados.length}`;
     messageElement3.classList.add("message", "outgoing");
      chatMessages.appendChild(messageElement3);
      
    
            if (messageText2.trim() !== "") {
                const messageElement = document.createElement("ul");
                messageElement.textContent = messageText2,
                messageElement.classList.add("message", "outgoing");
                chatMessages.appendChild(messageElement);
                inputField.value = "";
                           
               console.log("Mensaje añadido al chat:", messageText); // Registrar el mensaje añadido al chat en la consola
            }
                 
            try {
                
                const nombrePokemon =  await obtenerNombrePokemon(numeroEntero);
                const messageText4 =nombrePokemon;
                const messageElement4 = document.createElement("ul");
                messageElement4.textContent = messageText4
                messageElement4.classList.add("message", "outgoing");
                chatMessages.appendChild(messageElement4);
              } catch (error) {
                console.error("Error al obtener el nombre del Pokémon:", error);
              }


              try {
               
                const imagenPokemon = await obtenerImagenPokemon(numeroEntero); 
                const messageText5 =imagenPokemon;                          
                const messageElement5 = document.createElement("img","ul");
                messageElement5.src = messageText5
                messageElement5.classList.add("message", "outgoing");
                chatMessages.appendChild(messageElement5);
              } catch (error) {
                console.error("Error al obtener datos del Pokémon:", error);
              }




            async function obtenerNombrePokemon(numeroEntero) {
                const url = `https://pokeapi.co/api/v2/pokemon-species/${numeroEntero}`;
            
                const response = await fetch(url);
                const data = await response.json();
            
                if (data.name) {
                  const nombrPokemon = data.name;
                  return nombrPokemon;
                } else {
                  throw new Error("nombrePokemon");
                }
              }

              async function obtenerImagenPokemon(numeroEntero) {
                const url = `https://pokeapi.co/api/v2/pokemon/${numeroEntero}`;
            
                const response = await fetch(url);
                const data = await response.json();
            
                if (data.sprites && data.sprites.front_default) {
                  const imagenUrl = data.sprites.front_default;
                  return imagenUrl;
                } else {
                  throw new Error("Imagen no disponible");
                }
              }

              const resetButton = document.getElementById("reset-button");
              resetButton.addEventListener("click", function () {
             numeroAleatorio = generarNumeroAleatorio();
            chatMessages.innerHTML = ""; // Limpiar el chat
});
            

        });



    });
    


  