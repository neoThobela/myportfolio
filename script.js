//show side bar
function showSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display= 'flex'
  }
//hide side bar
  function hideSidebar(){
      const sidebar = document.querySelector('.side-bar')
    sidebar.style.display= 'none'
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const revealOnScroll = () => {
        timelineItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight - 50) {
                item.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load
});

   // Trigger animation on page load
        document.addEventListener('DOMContentLoaded', function() {
            const skillFills = document.querySelectorAll('.skill-fill');
            skillFills.forEach(fill => {
                fill.classList.add('animate');
            });
        });

//display and hide chatbot
function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    // chatbot.location.reload();
    chatbot.style.display = chatbot.style.display === "none" ? "flex" : "none";
}

var typingEffect = new Typed(".typed-text", {
    strings: [
      "Software Engineer",
      "Cobol Mainframe Developer"
      
    ],
    loop: true,
    typeSpeed: 60,
    backSpeed: 80,
    backDelay: 2000,
  });

  //game
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded. Ready to start the Snake Game...");

    const canvas = document.getElementById("snakeCanvas");

    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
        console.error("Canvas rendering context not found!");
        return;
    }

    canvas.width = 300;
    canvas.height = 300;
    const box = 20;

    let snake = [{ x: 10 * box, y: 10 * box }];
    let direction = "RIGHT";
    let food = generateFood();
    let gameInterval = null;
    let gameOver = false;
    let gameStarted = false;
    let gameSpeed = 200; // Slower speed (increase from 100ms to 200ms)

    function generateFood() {
        return {
            x: Math.floor(Math.random() * (canvas.width / box)) * box,
            y: Math.floor(Math.random() * (canvas.height / box)) * box
        };
    }

    function drawGame() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!gameStarted) {
            ctx.fillStyle = "white";
            ctx.font = "20px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Press ENTER to Start", canvas.width / 2, canvas.height / 2);
            return;
        }

        if (gameOver) {
            ctx.fillStyle = "red";
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
            ctx.font = "20px Arial";
            ctx.fillText("Press ENTER to Restart", canvas.width / 2, canvas.height / 2 + 40);
            return;
        }

        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, box, box);

        ctx.fillStyle = "lime";
        snake.forEach(segment => ctx.fillRect(segment.x, segment.y, box, box));

        let headX = snake[0].x;
        let headY = snake[0].y;

        if (direction === "LEFT") headX -= box;
        if (direction === "RIGHT") headX += box;
        if (direction === "UP") headY -= box;
        if (direction === "DOWN") headY += box;

        if (headX === food.x && headY === food.y) {
            food = generateFood();
        } else {
            snake.pop();
        }

        let newHead = { x: headX, y: headY };

        if (
            headX < 0 || headY < 0 ||
            headX >= canvas.width || headY >= canvas.height ||
            snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
        ) {
            gameOver = true;
            clearInterval(gameInterval);
            drawGame();
            return;
        }

        snake.unshift(newHead);
    }

    function changeDirection(event) {
        const key = event.keyCode;
        if (key === 37 && direction !== "RIGHT") direction = "LEFT";
        if (key === 38 && direction !== "DOWN") direction = "UP";
        if (key === 39 && direction !== "LEFT") direction = "RIGHT";
        if (key === 40 && direction !== "UP") direction = "DOWN";
    }

    function startGame() {
        if (!gameStarted || gameOver) {
            gameStarted = true;
            gameOver = false;
            snake = [{ x: 10 * box, y: 10 * box }];
            direction = "RIGHT";
            food = generateFood();
            clearInterval(gameInterval); // Clear previous interval
            gameInterval = setInterval(drawGame, gameSpeed); // Use slower speed
        }
    }

    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) startGame(); // Press "Enter" to start/restart
        changeDirection(event);
    });

    drawGame(); // Initial screen with "Press Enter to Start"
});



  //end code game

// an array of responses from questions
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
    "projects" : [ 'vist my Github to see my projects on My Github OR you can see a gimpls on my portfolilo projects</a>'
    ],
    "skills" : ["I have techinal skills in HTML, Css , Javascript, C++ , Java and SQL. My softskills include Communication, Teamwork, Hard worker, willingness to learn"],
    "about": ["This is a portfolio about Neo Thobela, a BSC in computer science graduate from University of Limpopo, This website was built on CSS, HTML and Javascript. for more information feel free to browse through the portfolio "],
    "contact" : [   "please contact Neo for more information at Tell : 083 281 6746 or email me at : neo.thobela@capaciti.org.za"],
    "education" : ["I have a BSC in computer science and mathematical sciences, i majored in Computer science and statistics"],
    "experience" : [" I have experience as a Technical Assistant, supporting practical lessons and enforcing lab rules. As a Lab Assistant, I contributed to software development, collaborating with senior engineers and engaging in continuous learning. Most recently, as an Associate Software Engineer, I educated clients on financial products and delivered exceptional service, currently trainig as a Cobol developer at capaciti"],
    "default": [
        "I'm not sure I understand that.",
        "Could you please rephrase?",
        "Hmm, I don't quite understand.",
        "please contact Neo for more information at Tell: 083 281 6746 or email me at neo.thobela@capaciti.org.za"
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
    "skills":["skills","skill","what are your skills","show me your skills","tell me more about your skills"],
    "about":["tell me about yourself","about"],
    "contact" : ["contacts", "can i have your contact" , "contact", "get in touch"],
    "education" : ["education","background"],
    "experience" : ["experience"]
    
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
    messageElement.innerHTML =  text;
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





