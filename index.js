const checkbox = document.getElementById("check");
const monthlyPrice = document.querySelectorAll(".m-price");
const annuallyPrice = document.querySelectorAll(".y-price");

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        console.log("check");
        monthlyPrice.forEach(price => {
            price.style.display = 'none';
        });
        annuallyPrice.forEach(price => {
            price.style.display = 'block';
        });
    } else {
        console.log("No check");
        monthlyPrice.forEach(price => {
            price.style.display = 'block';
        });
        annuallyPrice.forEach(price => {
            price.style.display = 'none';
        });
    }
})