document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signInForm");

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        errorElement.classList.add('visible');
    }

    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = '';
        errorElement.classList.remove('visible');
    }

    function validateName() {
        const name = form.elements["name"];
        if (name.value.trim().length < 2) {
            showError(name, "Name must be at least 2 characters long.");
            return false;
        } else {
            clearError(name);
            return true;
        }
    }

    function validateEmail() {
        const email = form.elements["email"];
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            showError(email, "Email must be valid (e.g., example@mail.com).");
            return false;
        } else {
            clearError(email);
            return true;
        }
    }

    function validatePhone() {
        const phone = form.elements["phone"];
        const phonePattern = /^[0-9]{10,13}$/;
        if (!phonePattern.test(phone.value)) {
            showError(phone, "Phone number must be between 10 to 13 digits.");
            return false;
        } else {
            clearError(phone);
            return true;
        }
    }

    function validateAddress() {
        const address = form.elements["address"];
        if (address.value.trim().length < 10) {
            showError(address, "Address must be at least 10 characters long.");
            return false;
        } else {
            clearError(address);
            return true;
        }
    }

    function validateGender() {
        const gender = form.elements["gender"];
        if (gender.value === "") {
            showError(gender, "Please select your gender.");
            return false;
        } else {
            clearError(gender);
            return true;
        }
    }

    function validateDOB() {
        const dob = form.elements["dob"];
        const dobValue = new Date(dob.value);
        const today = new Date();
        const age = today.getFullYear() - dobValue.getFullYear();
        if (age < 18) {
            showError(dob, "You must be at least 18 years old.");
            return false;
        } else {
            clearError(dob);
            return true;
        }
    }

    function validatePrivacy() {
        const privacy = form.elements["privacy"];
        if (!privacy.checked) {
            showError(privacy, "You must agree to the privacy policy.");
            return false;
        } else {
            clearError(privacy);
            return true;
        }
    }

    form.elements["name"].addEventListener("blur", validateName);
    form.elements["email"].addEventListener("blur", validateEmail);
    form.elements["phone"].addEventListener("blur", validatePhone);
    form.elements["address"].addEventListener("blur", validateAddress);
    form.elements["gender"].addEventListener("blur", validateGender);
    form.elements["dob"].addEventListener("blur", validateDOB);
    form.elements["privacy"].addEventListener("blur", validatePrivacy);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const isValidName = validateName();
        const isValidEmail = validateEmail();
        const isValidPhone = validatePhone();
        const isValidAddress = validateAddress();
        const isValidGender = validateGender();
        const isValidDOB = validateDOB();
        const isValidPrivacy = validatePrivacy();

        if (isValidName && isValidEmail && isValidPhone && isValidAddress && isValidGender && isValidDOB && isValidPrivacy) {
            alert("Form submitted successfully!");
            form.reset();
            clearAllErrors(); // clear error messages if form is successfully submitted
        } else {
            document.querySelector('.error.visible').scrollIntoView({ behavior: 'smooth' });
        }
    });

    function clearAllErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(errorElement => {
            errorElement.textContent = '';
            errorElement.classList.remove('visible');
        });
    }
});