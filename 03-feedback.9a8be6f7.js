const e={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},t={};e.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),e.form.addEventListener("input",(function(e){const a=e.target.value;t[e.target.name]=a;const r=JSON.stringify(t);localStorage.setItem("feedback-form-state",r)})),function(){const t=localStorage.getItem("feedback-form-state"),a=JSON.parse(t);a&&(e.input.value=a.email,e.textarea.value=a.message)}();
//# sourceMappingURL=03-feedback.9a8be6f7.js.map
