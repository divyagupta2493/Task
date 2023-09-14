document.addEventListener('DOMContentLoaded', function () {
    // Get all chocolate input elements
    const chocolates = document.querySelectorAll('.chocolate input');
    const priceDisplay = document.getElementById('price');

    // Listen for changes in chocolate quantity
    chocolates.forEach(function (chocolate) {
        chocolate.addEventListener('input', updateTotalPrice);
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        chocolates.forEach(function (chocolate) {
            totalPrice += parseFloat(chocolate.value || 0);
        });

        // Ensure the total quantity does not exceed 8
        if (totalPrice > 8) {
            alert('Total quantity cannot exceed 8 items');
            chocolates.forEach(function (chocolate) {
                chocolate.value = 0;
            });
            totalPrice = 0;
        }

        priceDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
});
