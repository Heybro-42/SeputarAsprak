// script.js
let questions = {
    odd: [
        {
            text: "Apa saja nilai etika yang harus dijaga oleh seorang asisten praktikum, kecuali?",
            options: ["Profesionalisme", "Penilaian objektif", "Sopan santun", "Penilaian subjektif"],
            correct: 3
        },
        {
            text: "Apa perbedaan antara tester dan testee?",
            options: ["Tester melakukan pengujian", "Testee adalah peserta tes", "Keduanya benar"],
            correct: 2
        },
        {
            text: "Berapa lama asisten praktikum bertugas?",
            options: ["1 bulan", "1 semester", "1 tahun"],
            correct: 1
        }
    ],
    even: [
        {
            text: "Berapa jumlah mata kuliah yang dipraktikumkan di prodi psikologi UII?",
            options: ["3", "6", "5"],
            correct: 1
        },
        {
            text: "Apa tugas utama asisten praktikum?",
            options: ["Arahan sesuai modul", "Penilaian mandiri", "Menggantikan dosen"],
            correct: 0
        },
        {
            text: "Dalam melaksanakan praktikum, asisten praktikum harus:",
            options: ["Membuat kebijakan akademik", "Arahan sesuai modul", "Menilai mandiri"],
            correct: 1
        }
    ]
};


let isOddTurn = true;

document.getElementById("rollDice").addEventListener("click", () => {
    let diceResultDiv = document.getElementById("diceResult");
    diceResultDiv.innerHTML = "🎲 Mengocok dadu...";
    
    // Simulate dice rolling animation
    let counter = 0;
    let diceInterval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        diceResultDiv.innerHTML = `🎲 Angka: ${randomNumber}`;
        counter++;
        if (counter > 10) {
            clearInterval(diceInterval);
            determineDiceResult();
        }
    }, 100); // Update every 100ms
});

function determineDiceResult() {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    let isEven = randomDice % 2 === 0;

    // Assign question type based on random dice result
    let diceType = isEven ? "genap" : "ganjil";
    let questionSet = isEven ? questions.even : questions.odd;
    let question = questionSet[Math.floor(Math.random() * questionSet.length)];

    document.getElementById("diceResult").innerText = `Angka ${randomDice} (${diceType})`;
    showQuestion(question);

    // Alternate turn for fairness (optional)
    isOddTurn = !isOddTurn;
}

function showQuestion(question) {
    document.getElementById("questionSection").style.display = "block";
    document.getElementById("question").innerText = question.text;

    let buttons = document.querySelectorAll(".answer");
    buttons.forEach((button, index) => {
        button.innerText = question.options[index];
        button.dataset.correct = index === question.correct;
        button.onclick = checkAnswer;
    });
}

function checkAnswer(event) {
    let resultDiv = document.getElementById("result");
    if (event.target.dataset.correct === "true") {
        resultDiv.innerText = "Benar!";
        resultDiv.className = "correct";
    } else {
        resultDiv.innerText = "Salah!";
        resultDiv.className = "incorrect";
    }
    resultDiv.style.display = "block";

    // Hide question section after 2 seconds
    setTimeout(() => {
        document.getElementById("questionSection").style.display = "none";
        document.getElementById("result").style.display = "none";
    }, 2000);
}
