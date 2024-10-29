
const links = document.querySelectorAll('a');
links.forEach(link => {
    const linkUrl = link.href;
    console.log(linkUrl)});
const responses = {
    "greeting": [
        "Hi there! How can I help you today?",
        "Hello! Hope you're having a great day!",
        "Hey! What's up?"
    ],
    "how are you": [
        "I'm just a bot, but thanks for asking!",
        "I'm here to help! How can I assist you?",
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
    "projects" : [ 'vist my Github to see my projects <a href="/index.html">My Github</a> OR you can see a gimpls on my portfolilo <a href="/index.html">Link to projects</a>',
        // " Go back to the profile to checkout the projects"
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
    "projects":["what projects have you worked on","show me your work","tell me more about your projects"]
    
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
        console.log(message)
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
    console.log(userMessage);
    // Check each category's keywords for a match in the user's message
    for (const category in keywords) {
        if (keywords[category].some(keyword => lowerCaseMessage.includes(keyword))) {
            foundResponse = responses[category];
            console.log(category , keywords)
            break;
        }
    }

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
