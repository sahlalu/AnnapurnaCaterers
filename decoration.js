		function proceedToPay() {
        const orderIdInput = document.getElementById("orderid");
        const orderId = orderIdInput.value;

        if (orderId.match(/^OID[0-9]{5}$/)) {
            // Valid Order ID, proceed to the next page
            window.location.href = "menu.html";
        } else {
            const validationMessage = document.getElementById("validation-message");
            validationMessage.textContent = "Order ID should be in the format OID12345";
        }
    }