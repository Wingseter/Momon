const form = document.querySelector(".js-form"),
    input = form.querySelector("input")
    greeting = document.querySelector(".js-greeting")

const USER_LS = "currentUser",
    SHOWING_ON = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    // 자동 새로고침 방지
    event.preventDefault(); 
    const currentValue = input.value;
    paintGreeting(currentValue)
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON)
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;

}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        // 유저가 없는 경우    
        askForName();
    } else {
        // 유저가 있는경우
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();