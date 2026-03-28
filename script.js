// ===================== GLOBAL =====================

// PRACTICE
let fullText = "";
let timer = 60;
let interval = null;
let isTypingStarted = false;
let startTime = null;

// TEST
let testText = "";
let testTimer = 60;
let testInterval = null;
let testStarted = false;
let testStartTime = null;

// ===================== SAMPLE TEXTS =====================

// PRACTICE TEXTS
const sampleTexts = [
    "Sri Lanka is a beautiful island country in South Asia, known for its rich culture, history, and natural beauty. It has golden beaches, green forests, and ancient temples. People celebrate many festivals and enjoy traditional food. The country is famous for tea, wildlife, and friendly communities living together peacefully.",
    "Technology plays an important role in our daily lives, making tasks easier and faster. It helps people communicate instantly through phones and the internet. In education, technology supports learning with online resources. It also improves healthcare and transportation. While it brings many benefits, it is important to use technology wisely and responsibly.",
    "A little boy found a lost puppy near his home. He took it in, fed it, and cared for it every day. Soon, the puppy became his best friend. One day, the puppy’s owner came searching. Though sad, the boy returned it, learning that kindness sometimes means letting go."
];

// TEST TEXTS
const testTexts = {
    30: ["The solar system is an immense and intricate assembly of celestial bodies bound by the Sun’s gravitational pull. It encompasses eight planets, countless moons, asteroids, and comets, each following precise orbital paths. The inner terrestrial planets are rocky, whereas the outer giants are gaseous. The Sun emits light and energy sustaining planetary atmospheres, with Earth uniquely harboring life amidst this vast cosmic structure."],
    60: ["Animals are living things that can move, grow, and respond to their environment. They are found in many places such as forests, oceans, deserts, and grasslands. All animals need food, water, and air to survive. Some animals eat plants, some eat other animals, and some eat both. Animals come in different shapes and sizes, from tiny insects to large elephants and whales. They move in different ways, such as walking, flying, and swimming. Animals are important because they help keep nature balanced and support the food chain. Humans depend on animals, so we must protect and care for them."],
    90: ["Festivals are special events celebrated by people in every part of the world. They show culture, traditions, and happiness. Some festivals are religious, like Christmas, Diwali, and Eid, while others are cultural, like Carnival in Brazil and the Cherry Blossom Festival in Japan. People celebrate by singing, dancing, eating special food, and wearing traditional clothes. Festivals bring families and communities together and create joyful memories. They also attract tourists from many countries who want to see the celebrations. Fireworks, parades, and music are common in many festivals. Each festival has its own meaning and way of celebration, making the world colorful and exciting throughout the year. Festivals teach people to share happiness and respect traditions.his is a longer paragraph designed for extended typing practice. It helps improve endurance and consistency."],
    120: ["Life in a small village is peaceful and simple compared to the busy city. People in villages live close to nature, surrounded by fields, rivers, and trees. Most villagers grow their own food and raise animals like cows, goats, and chickens. Daily life is calm, and neighbors know each other well, often helping one another. Children play outside, and elders share stories of the past. Villagers celebrate festivals and special occasions together, which strengthens community bonds. Life in a small village may not have many modern facilities, but it is full of natural beauty, fresh air, and quiet moments. People enjoy walking on paths, watching sunsets, and listening to birds. Life here teaches patience, hard work, and respect for nature and traditions, making it simple yet meaningful.This is a very long paragraph intended for full typing tests. It challenges your speed, accuracy, and concentration over a longer period."]
};

// ===================== PAGE LOAD =====================
document.addEventListener("DOMContentLoaded", () => {

    // PRACTICE PAGE
    if (document.getElementById("practiceText")) {
        initPracticePage();
    }

    // TEST PAGE
    if (document.getElementById("testText")) {
        initTestPage();
    }
});


// ===================================================
// PRACTICE MODE
// ===================================================

function initPracticePage() {
    fullText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];

    resetPractice();

    document.getElementById("practiceInput")
        .addEventListener("input", handlePracticeTyping);
}

// TYPING
function handlePracticeTyping(e) {
    const input = e.target.value;

    if (!isTypingStarted && input.length > 0) {
        isTypingStarted = true;
        startTime = Date.now();
        startPracticeTimer();
    }

    document.getElementById("practiceText").innerHTML =
        renderText(input, fullText);

    const { wpm, accuracy } = calculateStats(input, fullText, startTime);

    document.getElementById("practiceWpm").textContent = wpm;
    document.getElementById("practiceAccuracy").textContent = accuracy;
}

// TIMER
function startPracticeTimer() {
    clearInterval(interval);

    interval = setInterval(() => {
        timer--;
        document.getElementById("practiceTimer").textContent = timer;

        if (timer <= 0) endPractice();
    }, 1000);
}

// END
function endPractice() {
    clearInterval(interval);

    const input = document.getElementById("practiceInput").value;
    const { wpm, accuracy } = calculateStats(input, fullText, startTime);

    showPracticeResults(wpm, accuracy);

    document.getElementById("practiceInput").disabled = true;
    document.getElementById("resetBtn").classList.add("d-none");
}

// RESET
function resetPractice() {
    clearInterval(interval);

    timer = 60;
    isTypingStarted = false;
    startTime = null;

    fullText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];

    document.getElementById("practiceTimer").textContent = 60;
    document.getElementById("practiceWpm").textContent = 0;
    document.getElementById("practiceAccuracy").textContent = 0;

    const input = document.getElementById("practiceInput");
    input.value = "";
    input.disabled = false;

    document.getElementById("practiceText").innerHTML =
        renderText("", fullText);

    document.getElementById("practiceResults").classList.add("d-none");
    document.getElementById("resetBtn").classList.remove("d-none");
}

// RESULT (WITH COLORS + EMOJIS)
function showPracticeResults(wpm, accuracy) {
    let emoji, title, message, className;

    if (wpm < 20 || accuracy < 50) {
        emoji = "💪";
        title = "Keep practicing!";
        message = "Don’t give up! Accuracy improves with consistent practice.";
        className = "result-poor";
    }
    else if (wpm >= 20 && wpm <= 30 && accuracy > 75) {
        emoji = "🙂";
        title = "Moderate Performance";
        message = "Good effort! Practice more to improve your accuracy.";
        className = "result-moderate";
    }
    else {
        emoji = "🎉";
        title = "Great job!";
        message = "Your accuracy is excellent! Keep up the amazing work!Excellent work!";
        className = "result-success";
    }

    document.getElementById("resultEmoji").textContent = emoji;
    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultMessage").textContent = message;

    document.getElementById("finalWpm").textContent = wpm;
    document.getElementById("finalAccuracy").textContent = accuracy + "%";

    const card = document.getElementById("practiceResults");
    card.classList.remove("result-success", "result-moderate", "result-poor"); //
    card.classList.add(className);
    card.classList.remove("d-none");//
}



// ===================================================
// TEST MODE 
// ===================================================

function initTestPage() {
    loadTestText();
    resetTest();

    document.getElementById("testInput")
        .addEventListener("input", handleTestTyping);
}

// SELECT TIME
function selectTime(time) {
    if (testStarted) return;

    testTimer = time;
    document.getElementById("testTimer").textContent = time;

    document.querySelectorAll(".btn-time").forEach(btn =>
        btn.classList.remove("active")
    );

    event.target.classList.add("active");

    loadTestText();
}

// LOAD TEXT
function loadTestText() {
    const time = document.getElementById("testTimer").textContent;
    const texts = testTexts[time] || testTexts[60];

    testText = texts[Math.floor(Math.random() * texts.length)];

    document.getElementById("testText").innerHTML =
        renderText("", testText);
}

// TYPING
function handleTestTyping(e) {
    const input = e.target.value;

    if (!testStarted && input.length > 0) {
        testStarted = true;
        testStartTime = Date.now();
        startTestTimer();
    }

    document.getElementById("testText").innerHTML =
        renderText(input, testText);

    const { wpm, accuracy } = calculateStats(input, testText, testStartTime);

    document.getElementById("testWpm").textContent = wpm;
    document.getElementById("testAccuracy").textContent = accuracy;
}

// TIMER
function startTestTimer() {
    clearInterval(testInterval);

    testInterval = setInterval(() => {
        testTimer--;
        document.getElementById("testTimer").textContent = testTimer;

        if (testTimer <= 0) endTest();
    }, 1000);
}

// END
function endTest() {
    clearInterval(testInterval);

    const input = document.getElementById("testInput").value;
    const { wpm, accuracy } = calculateStats(input, testText, testStartTime);

    document.getElementById("testFinalWpm").textContent = wpm;
    document.getElementById("testFinalAccuracy").textContent = accuracy + "%";

    // MESSAGE ONLY 
    let message = "";

    if (wpm < 20 || accuracy < 50) {
        message = "💪 Good start! Practice makes Perfect!";
    }
    else if (wpm >= 20 && wpm <= 30 && accuracy > 75) {
        message = "👏 You’re improving! Keep up the good work";
    }
    else {
        message = "🚀 Outstanding performance! You’re improving fast!";
    }

    document.querySelector("#testResults p").textContent = message;

    document.getElementById("testResults").classList.remove("d-none");
    document.getElementById("testInputSection").classList.add("d-none");
    document.getElementById("testResetBtn").classList.add("d-none");

    document.getElementById("testInput").disabled = true;
}

// RESET
function resetTest() {
    clearInterval(testInterval);

    testStarted = false;
    testStartTime = null;

    testTimer = parseInt(document.getElementById("testTimer").textContent) || 60;

    document.getElementById("testTimer").textContent = testTimer;
    document.getElementById("testWpm").textContent = 0;
    document.getElementById("testAccuracy").textContent = 0;

    const input = document.getElementById("testInput");
    input.value = "";
    input.disabled = false;

    document.getElementById("testResults").classList.add("d-none");
    document.getElementById("testInputSection").classList.remove("d-none");
    document.getElementById("testResetBtn").classList.remove("d-none");

    loadTestText();
}


// ===================================================
// COMMON FUNCTIONS
// ===================================================

// TEXT COLOR
function renderText(input, original) {
    let result = "";

    for (let i = 0; i < original.length; i++) {
        if (i < input.length) {
            result += input[i] === original[i]
                ? `<span style="color: green;">${original[i]}</span>`
                : `<span style="color: red;">${original[i]}</span>`;
        } else {
            result += `<span style="color: gray;">${original[i]}</span>`;
        }
    }

    return result;
}

// CALCULATE WPM + ACCURACY
function calculateStats(input, original, startTime) {
    if (!startTime) return { wpm: 0, accuracy: 0 };

    const time = (Date.now() - startTime) / 1000 / 60;

    //  CORRECT FORMULA
    const wpm = time > 0 ? Math.round((input.length / 5) / time) : 0;

    let correct = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === original[i]) correct++;
    }

    const accuracy = input.length
        ? Math.round((correct / input.length) * 100)
        : 0;

    return { wpm, accuracy };
}
/*
// ========================================
// CONTACT FORM
// ========================================
function submitContactForm(event) {
    event.preventDefault();

    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();

    const msgBox = document.getElementById("successMessage");

    // ================= VALIDATION =================

    if (!name || !email || !subject || !message) {
        showMessage("Please fill out all required fields", "danger");
        return;
    }

    // EMAIL VALIDATION
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage("Enter a valid email address", "danger");
        return;
    }

    if (message.length < 5) {
        showMessage("Message cannot be empty or too short", "danger");
        return;
    }

    // ================= SEND TO PHP =================

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        if (data.trim() === "success") {
            showMessage("Message sent successfully!", "success");
            form.reset();
        } else {
            showMessage("Failed to send message. Try again.", "danger");
        }
    })
    .catch(() => {
        showMessage("Server error. Try later.", "danger");
    });

    // ================= MESSAGE FUNCTION =================
    function showMessage(text, type) {
        msgBox.classList.remove("d-none", "alert-success", "alert-danger");
        msgBox.classList.add("alert-" + type);
        msgBox.innerHTML = `<i class="fas fa-info-circle me-2"></i> ${text}`;

        setTimeout(() => {
            msgBox.classList.add("d-none");
        }, 5000);
    }
}*/


// ========================================
// CONTACT FORM
// ========================================
function submitContactForm(event) {
    event.preventDefault();

    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        const msg = document.getElementById("successMessage");

        if (data.trim() === "success") {
            msg.classList.remove("d-none");
            msg.innerText = "Message sent!";
            form.reset();
        } else {
            msg.classList.remove("d-none");
            msg.innerText = "Error!";
        }
    });
}

//---------------------
// login page
//---------------------

function submitLogin(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const msgBox = document.getElementById("loginMessage");

    fetch("auth/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
    .then(res => res.text())
    .then(data => {
        console.log("Server response:", data);

        if (data.trim() === "success") {

            msgBox.classList.remove("d-none", "alert-danger");
            msgBox.classList.add("alert-success");
            msgBox.innerText = "Login successful!";

            setTimeout(() => {
                window.location.href = "dashboard.php";
            }, 1000);

        } else {
            msgBox.classList.remove("d-none", "alert-success");
            msgBox.classList.add("alert-danger");
            msgBox.innerText = "Invalid email or password";
        }
    })
    .catch(err => {
        console.error(err);
        alert("Server error");
    });
}