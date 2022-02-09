import throttle from "lodash.throttle";

// ? HTML tegs
const formEl = document.querySelector(".feedback-form");
const emailEl = formEl.querySelector("input");
const textEl = formEl.querySelector("textarea");

// *
const FORM_KEY = "feedback-form-state";
const getForm = localStorage.getItem(FORM_KEY);
let formValues = {}


// ! function
const formValidation = () => {
    //const into = event.target
    
    emailEl.addEventListener("input", (event) => {
        formValues.email = event.target.value;
    });
    
    textEl.addEventListener("input", (event) => {
        formValues.message = event.target.value;
    });

    localStorage.setItem(FORM_KEY, JSON.stringify(formValues)); 
};

const buttonAction = (event) => {
    event.preventDefault()

    console.log(parseValues.email, parseValues.message);
    localStorage.removeItem(FORM_KEY);
    emailEl.value = "";
    textEl.value = "";
}

// * Events
formEl.addEventListener("input", throttle(formValidation, 500));
formEl.addEventListener("submit", buttonAction);

let parseValues = JSON.parse(getForm);

if (getForm) {
    emailEl.value = parseValues.email === undefined ? "" : parseValues.email;
    textEl.value = parseValues.message === undefined ? "" : parseValues.message;
};