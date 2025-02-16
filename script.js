//your JS code here. If required.
let div = document.body.querySelector('.output')
div.style.textAlign  = 'center'
let head = document.createElement('h1')
head.innerText = "Verify Your Account";
head.id = 'verification_heading'
div.appendChild(head);

let p = document.createElement('p')
p.innerText = 'We emailed you the six digit code to acciojob@email.com Enter the code below to confirm your email adaress'
p.id = 'verification_subtext'
div.append(p)

let cont = document.querySelector('.code-container')
cont.style.textAlign = 'center'
let inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    // Move to next input on typing
    input.addEventListener("input", () => {
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Move to previous input on Backspace
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});




