document.addEventListener("DOMContentLoaded", function() {
  const messageInput = document.getElementById("message");
  const messagesList = document.querySelector(".messages-list");

  messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      const message = messageInput.value.trim(); 

      if (message !== "") {
        addMessage("Você diz:", message, true); 
        messageInput.value = ""; 
      }
    }
  });

  function addMessage(user, message, isUserMessage) {
    const messageItem = document.createElement("div");
    messageItem.classList.add("message-item");

    const userDiv = document.createElement("div");
    userDiv.classList.add("msg-user");
    userDiv.innerHTML = `<strong>${user}</strong>`;
    messageItem.appendChild(userDiv);

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("msg-chat");
    messageDiv.textContent = message;
    messageItem.appendChild(messageDiv);

    if (isUserMessage) {
      messageItem.classList.add("message-user");
    }

    messagesList.appendChild(messageItem);
    
    messagesList.scrollTop = messagesList.scrollHeight;
  }
});
