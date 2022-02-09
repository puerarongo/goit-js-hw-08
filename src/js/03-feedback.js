import throttle from "lodash.throttle";

// ! Stage 1

// ? HTML tegs
const formEl = document.querySelector(".feedback-form");
const emailEl = formEl.querySelector("input");
const textEl = formEl.querySelector("textarea");
const submitEl = formEl.querySelector("button");

// *
const FORM_KEY = "feedback-form-state";
const getForm = localStorage.getItem(FORM_KEY);
let formValues = {}


const formValidation = (event) => {
    const into = event.target
    if (into.name === "email") {
        formValues.email = into.value
    }

    else if (into.name === "message") {
        formValues.message = into.value
    }

    localStorage.setItem(FORM_KEY, JSON.stringify(formValues)); 
};

const parseValues = JSON.parse(getForm);


if (getForm) {
    emailEl.value = parseValues.email
    textEl.value = parseValues.message
};


const buttonAction = (event) => {
    event.preventDefault();

    console.log("!")
}


formEl.addEventListener("input", throttle(formValidation, 500));
submitEl.addEventListener("submit", buttonAction);