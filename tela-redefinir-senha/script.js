document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const newPasswordInput = document.getElementById("new-password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const toggleNewPassword = document.getElementById("toggle-new-password");
    const toggleConfirmPassword = document.getElementById("toggle-confirm-password");
    const errorMessage = document.getElementById("error-message");

    toggleNewPassword.addEventListener("click", () => {
        const type = newPasswordInput.getAttribute("type") === "password" ? "text" : "password";
        newPasswordInput.setAttribute("type", type);

        if (type === "password") {
            toggleNewPassword.setAttribute("src", "images/show_password_icon.png");
        } else {
            toggleNewPassword.setAttribute("src", "images/hide_password_icon.png");
        }
    });

    toggleConfirmPassword.addEventListener("click", () => {
        const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
        confirmPasswordInput.setAttribute("type", type);

        if (type === "password") {
            toggleConfirmPassword.setAttribute("src", "images/show_password_icon.png");
        } else {
            toggleConfirmPassword.setAttribute("src", "images/hide_password_icon.png");
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        if (newPasswordInput.value !== confirmPasswordInput.value) {
            errorMessage.textContent = "As credenciais inseridas estão diferentes!";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
            const submitButton = document.querySelector(".submit-button");
        
            submitButton.classList.add("loading");

            setTimeout(() => {
                submitButton.classList.remove("loading");
                alert("Senha redefinida com sucesso!");
                form.reset();
            }, 2000);
        }
    });
});