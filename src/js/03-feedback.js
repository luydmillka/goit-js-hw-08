
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormFieldInput);

onFormReloaded();

function onFormSubmit(evt) { 
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}

function onFormFieldInput(evt) {
    const inputValue = evt.target.value;
    formData[evt.target.name] = inputValue;

    const formDataStringifyed = JSON.stringify(formData);
    localStorage.setItem("feedback-form-state", formDataStringifyed);
 }

function onFormReloaded() {
    const savedFormFields = localStorage.getItem("feedback-form-state");
    const parcedFormFields = JSON.parse(savedFormFields);

    if (parcedFormFields) {
        if (parcedFormFields.email) {
        refs.input.value = parcedFormFields.email;
        }
        if (parcedFormFields.message) {
        refs.textarea.value = parcedFormFields.message;
        }
    }
 }


