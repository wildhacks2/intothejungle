window.onload = function () {
    const quizButton = document.getElementById("quiz-me");
    const closeButton = document.getElementById("close-quiz");
    const submitButton = document.getElementById("submit-button");
    const questions = document.querySelector(".questions");
    let correctOption = 0;
    let answer;
    let chosen;

    quizButton.addEventListener("click", function () {
        questions.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        const form = document.getElementById("form");
        form.reset();
        questions.style.display = "none";
        chosen.style.color = "white";
        answer.style.color = "white";
    });

    fetch("daintree.json")
        .then((response) => response.json())
        .then((json) => {
            json.forEach((element) => {
                let question = document.createElement("div");
                question.innerHTML = `
        <div id="question">
        <h3>${element.question}</h3>
        <img id="question-img" src="${element.url}"/>
        <br/>
        <br/>
        <form id="form">
        <label id="0" for="option0"><input type="radio" id="option0" name="option" value="0" required>${element.options[0]}</label><br>
        <label id="1" for="option1"><input type="radio" id="option1" name="option" value="1" required>${element.options[1]}</label><br>
        <label id="2" for="option2"><input type="radio" id="option2" name="option" value="2" required>${element.options[2]}</label><br>
        <label id="3" for="option3"><input type="radio" id="option3" name="option" value="3" required>${element.options[3]}</label><br>
        </form>
        </div>
        `;
                questions.appendChild(question);
                correctOption = element.answer;
            });
        });

    submitButton.onclick = () => {
        const form = document.getElementById("form");
        let formData = new FormData(form);
        for (const [key, value] of formData) {
            console.log(`${key}: ${value}\n`);
            chosen =  document.getElementById(value);
            chosen.style.color = "red";
            answer = document.getElementById(correctOption);
            answer.style.color = "green";
        }
    };
};
