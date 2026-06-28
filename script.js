// Function to switch between form steps
function nextStep(currentStep, nextStep) {
    // Basic Validation: Agle step par jaane se pehle check karein ke required inputs khali toh nahi
    if (nextStep > currentStep) {
        const currentStepDiv = document.getElementById(`step${currentStep}`);
        const inputs = currentStepDiv.querySelectorAll('input[required]');
        
        for (let input of inputs) {
            if (!input.value.trim()) {
                alert('Please fill out all required fields before moving forward.');
                return;
            }
        }
    }

    // Current step ko chupayein (hide)
    document.getElementById(`step${currentStep}`).classList.remove('step-active');
    
    // Agle step ko dikhayein (show)
    document.getElementById(`step${nextStep}`).classList.add('step-active');

    // Progress Bar indicators ke rang badlein
    if (nextStep <= 3) {
        // Purane active tabs ko manage karein
        for (let i = 1; i <= 3; i++) {
            const tab = document.getElementById(`step${i}-tab`);
            if (i <= nextStep) {
                tab.classList.add('active-step');
            } else {
                tab.classList.remove('active-step');
            }
        }
    }
}

// Handle final form submission
document.getElementById('onboardingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Page reload ko rokne ke liye

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Form Validation: Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match! Please check again.');
        return;
    }

    // Step 3 ko hide karein aur Success Page dikhayein
    document.getElementById('step3').classList.remove('step-active');
    document.getElementById('successPage').classList.add('step-active');

    // Progress Bar ko complete show karne ke liye
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`step${i}-tab`).classList.add('active-step');
    }
});