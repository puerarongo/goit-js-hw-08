import throttle from "lodash.throttle";

// ? HTML tegs
const formEl = document.querySelector(".feedback-form");
const emailEl = formEl.querySelector("input");
const textEl = formEl.querySelector("textarea");
// *
const FORM_KEY = "feedback-form-state";
let formValues = {};


// ! function
const formValidation = (event) => {
    if (into.name === "email") {
        formValues.email = event.target.value;
    }
    else if (into.name === "message") {
        formValues.message = event.target.value; 
    }

    localStorage.setItem(FORM_KEY, JSON.stringify(formValues));
};

const initForm = (event) => {
    const getForm = localStorage.getItem(FORM_KEY);
    if (getForm) {
        let parseValues = JSON.parse(getForm);
        formValues = parseValues;            // ? не getForm, так как это строка, а нужен объект
        emailEl.value = parseValues.email === undefined ? "" : parseValues.email;
        textEl.value = parseValues.message === undefined ? "" : parseValues.message;
    }
}

const buttonAction = (event) => {
    event.preventDefault();

    let parseValues = JSON.parse(localStorage.getItem(FORM_KEY));

    console.log(parseValues.email, parseValues.message);
    localStorage.removeItem(FORM_KEY);
    formValues = {};
    emailEl.value = "";
    textEl.value = "";
}
// !

// * Events
initForm();

formEl.addEventListener("input", throttle(formValidation, 500));
formEl.addEventListener("submit", buttonAction);



