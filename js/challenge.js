const counter = document.getElementById("counter");

const pause = document.getElementById("pause");

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");

const buttons = document.querySelectorAll("button");
let buttonsArray = [];

for (let i=0; i < buttons.length; i++) {
        if (buttons[i].id != "pause") {
            buttonsArray.push(buttons[i])
        }
};

function startCounter() {
    intervalID = setInterval(function () {
        counter.textContent++;
}, 1000);
};

function disableButtons(button) {
    button.setAttribute("disabled", true);
};

function enableButtons(button) {
    button.removeAttribute("disabled");
};


function pauseAndResume() {
    if (pause.textContent != "resume") {
        clearInterval(intervalID);
        buttonsArray.forEach(button => disableButtons(button));
        pause.textContent = "resume";
    }
    else {
        startCounter();
        pause.textContent = "pause";
        buttonsArray.forEach(button => enableButtons(button));

    }
};
document.addEventListener("DOMContentLoaded", startCounter);

pause.addEventListener("click", pauseAndResume);

minus.addEventListener("click", function () {
    counter.textContent--;
});

plus.addEventListener("click", function () {
    counter.textContent++;
});

document.getElementById("comment-form").addEventListener("submit", (event) => {
    event.preventDefault();
    handleComment(event.target.comment.value);
});

function handleComment(comment) {
    let p = document.createElement("p");
    p.textContent = comment;
    document.querySelector("div").appendChild(p);
}

const likedNums = {};

heart.addEventListener("click", function () {
    if (counter.textContent in likedNums) {
        likedNums[counter.textContent] += 1;
        const li = document.getElementById(counter.textContent);
        li.textContent = `${counter.textContent} has been liked ${likedNums[counter.textContent]} time.`
    }
    else {
        likedNums[counter.textContent] = 1;
        
        const li = document.createElement("li");
        li.textContent = `${counter.textContent} has been liked 1 time.`
        li.id = counter.textContent;
        document.querySelector(".likes").appendChild(li);
    }
})