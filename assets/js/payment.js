// ================================
// GET SELECTED PLAN
// ================================
const params =
    new URLSearchParams(window.location.search);

const selectedPlan =
    params.get("plan");

// ================================
// PLAN DATA
// ================================
const plans = {
    basic: {
        name: "Basic Membership",
        price: "999",
        features: [
            "Gym Access",
            "Cardio Equipment",
            "Strength Equipment",
            "Locker Facility"
        ]
    },

    standard: {
        name: "Standard Membership",
        price: "1499",
        features: [
            "Full Gym Access",
            "Cardio Equipment",
            "Strength Equipment",
            "Basic Trainer Guidance",
            "Fitness Assessment"
        ]
    },

    premium: {
        name: "Premium Membership",
        price: "2499",
        features: [
            "Full Gym Access",
            "Personal Training",
            "Customized Workout",
            "Progress Tracking",
            "Fitness Guidance"
        ]
    }
};

// ================================
// DISPLAY PLAN
// ================================
const plan =
    plans[selectedPlan] || plans.basic;

document.getElementById("planName")
    .textContent = plan.name;

document.getElementById("planPrice")
    .textContent = plan.price;

document.getElementById("payAmount")
    .textContent = plan.price;

// ================================
// FORM
// ================================
const paymentForm =
    document.getElementById("paymentForm");

paymentForm.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        const message =
            document.getElementById(
                "paymentMessage"
            );

        message.textContent =
            "Payment gateway will be connected here.";

        message.style.color =
            "#4caf50";
    }
);