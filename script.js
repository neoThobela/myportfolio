function showSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display= 'flex'
  }

  function hideSidebar(){
      const sidebar = document.querySelector('.side-bar')
    sidebar.style.display= 'none'
  }


function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "none" ? "flex" : "none";
}

const responses = {
    "greeting": [
        "Hi there! How can I help you today?",
        "Hello! Hope you're having a great day!",
        "Hey! What's up?"
    ],
    "how are you": [
        "I'm just a bot, but thanks for asking!",
        "All systems go! How can I assist you?"
    ],
    "name": [
        "I'm your friendly chatbot assistant!",
        "You can call me ChatBot!",
        "Just your virtual helper at your service!"
    ],
    "bye": [
        "Goodbye! Have a great day!",
        "See you later! Feel free to chat anytime.",
        "Take care! I'll be here if you need me."
    ],
    "portfolio" : [
        "This is Neo's portfolio , feel free to browse through",
    ],
    "projects" : [ 'vist my Github to see my projects <a href="/index.html">My Github</a> OR you can see a gimpls on my portfolilo <a href="/index.html">Link to projects</a>'
    ],

    "default": [
        "I'm not sure I understand that.",
        "Could you please rephrase?",
        "Hmm, I don't quite understand."
    ]
    
};



// Keywords to match for each response category

const keywords = {
    "greeting": ["hello", "hi", "hey", "greetings", "sup", "good morning", "good afternoon", "good evening"],
    "how are you": ["how are you", "how’s it going", "how’s everything", "how do you do"],
    "name": ["your name", "who are you", "what are you called", "who am i talking to"],
    "portfolio" : ["portfolio", "Tell me about the portfolio", "what is this ?", "what am i looking at?"],
    "bye": ["bye", "goodbye", "see you", "later", "talk to you soon", "farewell"],
    "projects":["projects","what projects have you worked on","show me your work","tell me more about your projects"],
    "projects":["projects","what projects have you worked on","show me your work","tell me more about your skills"]
    
};

// Get chatbox and user input field
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

// Send user message
function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessageToChatbox("user", message);
        generateResponse(message);
        userInput.value = "";
        console.log("message " + message)
    }
}

// Add message to chatbox
function addMessageToChatbox(sender, text) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    messageElement.innerHTML = text;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll
}


// Generate bot response with keyword matching across categories
function generateResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    let foundResponse = responses["default"];
    console.log("foundResponse " + foundResponse);
   // Check each category's keywords for a match in the user's message
    for (const category in keywords) {
        if (keywords[category].some(keyword => lowerCaseMessage.includes(keyword))) {
            foundResponse = responses[category];
            console.log(" category " + category 
                +" keywords " 
                + keywords[category])
            break;
        }
    }
    // for (const category in keywords) {
    //     // Check if any keyword in the current category is included in the message
    //     if (keywords[category].some(keyword => lowerCaseMessage.includes(keyword))) {
    //         // If a keyword is found, set the foundResponse to the corresponding response
    //         foundResponse = responses[category];
    
    //         // Log the category and keywords for debugging purposes
    //         console.log("Category:", category, "Keywords:", keywords[category]);
    //         break; // Exit the loop once a match is found
    //         else if()
    //     }
    // }
    
    // Select a random response from the matching set of responses
    const response = foundResponse[Math.floor(Math.random() * foundResponse.length)];
    
    setTimeout(() => {
        addMessageToChatbox("bot", response);
    }, 500);
}

// Allow "Enter" key to send a message
userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
