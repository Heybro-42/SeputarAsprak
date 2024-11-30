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

let turn = 1;

document.getElementById("rollDice").addEventListener("click", () => {
    let dice = turn % 2 === 0 ? "ganjil" : "genap";
    let questionSet = dice === "ganjil" ? questions.odd : questions.even;
    let question = questionSet[Math.floor(Math.random() * questionSet.length)];

    document.getElementById("diceResult").innerText = `Angka ${dice}`;
    showQuestion(question);
    turn++;
});

function showQuestion(question) {
    document.getElementById("questionSection").style.display = "block";
    document.getElementById("question").innerText = question.text;

    let buttons = document.querySelectorAll(".answer");
    buttons.forEach((button, index) => {
        button.innerText = question.options[index];
        button.dataset.correct = index === question.correct;
        button.addEventListener("click", checkAnswer);
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
}