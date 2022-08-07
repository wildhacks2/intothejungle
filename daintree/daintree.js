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
        let question = document.getElementById("question");

        if (question) {
            questions.removeChild(question);
        }

        let random = Math.floor(Math.random() * 5);

        fetch("daintree.json")
            .then((response) => response.json())
            .then((json) => {
                let element = json[random];
                let question = document.createElement("div");
                question.id = "question";
                question.innerHTML = `
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
        `;
                questions.appendChild(question);
                correctOption = element.answer;
            });
    });

    closeButton.addEventListener("click", function () {
        const form = document.getElementById("form");
        form.reset();
        questions.style.display = "none";
        try {
            chosen.style.color = "white";
            answer.style.color = "white";
            answer.style.backgroundColor = "transparent";
        } catch (error) {
            //this just means the user didn't attempt the question
        }
    });

    submitButton.onclick = () => {
        const form = document.getElementById("form");
        let formData = new FormData(form);
        for (const [key, value] of formData) {
            chosen = document.getElementById(value);
            chosen.style.color = "red";
            answer = document.getElementById(correctOption);
            answer.style.color = "green";
            answer.style.backgroundColor = "white"
        }
    };
};
