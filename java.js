"use strict";

const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInputText = document.getElementById("chatbot-input-text");
const chatbotInputButton = document.getElementById("chatbot-input-button");
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotReduce = document.querySelector('.chatbot-reduce');

const responses = [
  "Je suis désolé, je ne comprends pas.",
  "Pouvez-vous me donner plus de détails ?",
  "Pourriez-vous reformuler votre demande s'il vous plaît ?",
  "Je suis un chatbot, je n'ai pas de réponse à tout, mais je vais faire de mon mieux !"
];

function addMessageToChatbot(message, sender) {
  const p = document.createElement("p");
  const span = document.createElement("span");
  span.innerText = `${sender}: `;
  p.appendChild(span);
  p.appendChild(document.createTextNode(message));
  p.classList.add("chat-message");
  if (sender === "Bot") {
    p.classList.add("user-message");
  } else {
    p.classList.add("bot-message");
  }
  chatbotMessages.appendChild(p);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendMessageToChatbot() {
  const message = chatbotInputText.value;
  if (!message) {
    return;
  } 
  addMessageToChatbot(message, "Vous");
  chatbotInputText.value = "";

  // Ajouter une réponse spécifique en fonction du message envoyé
  if (message.includes("problème")) {
    addMessageToChatbot("Pouvez-vous me donner plus de détails sur votre problème ?", "Bot");
  } else if (message.includes("aide")) {
    addMessageToChatbot("Je crois que je peux vous aider avec ça. Pouvez-vous me dire plus sur votre situation ?", "Bot");
  } else if (message.includes("sneakers")) {
    addMessageToChatbot("Souhaitez-vous voir notre catalogue de sneakers ?", "Bot");
  } else if (message.includes("merci")) {
      addMessageToChatbot("De rien, n'hésitez pas si vous avez d'autres questions !", "Bot");
  } else {
    // Si le message de l'utilisateur ne correspond à aucune réponse spécifique, envoyez une réponse aléatoire
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];
    addMessageToChatbot(randomResponse
, "Bot");
    }
  }


chatbotInputButton.addEventListener("click", sendMessageToChatbot);

chatbotInputText.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // 13 correspond à la touche "Entrée"
      event.preventDefault();
      sendMessageToChatbot();
    }
});

let chatbotOpen = true;

chatbotReduce.addEventListener('click', () => {
  chatbotContainer.classList.toggle('chatbot-hidden');
});

// Envoyer un message d'accueil du chatbot lorsqu'il s'affiche
window.addEventListener('load', () => {
  addMessageToChatbot("Bonjour, je suis Mike, en quoi puis-je vous aider ?", "Bot");
});
