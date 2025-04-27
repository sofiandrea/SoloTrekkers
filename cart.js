let items = document.getElementsByClassName("item");
let cartBox = document.getElementById("cart");
let listBox = document.getElementById("list");
let totalDisplay = document.getElementById("totalPrice");

function updateTotal() {
    let total = 0;
    let cartItems = cartBox.querySelectorAll(".item");
    cartItems.forEach(item => {
        total += parseFloat(item.getAttribute("data-price"));
    });
    totalDisplay.textContent = `₱ ${total.toFixed(2)}`;
}

for (let item of items) {
    item.addEventListener("dragstart", function (e) {
        let selected = e.target;

        cartBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        cartBox.addEventListener("drop", function (e) {
            cartBox.appendChild(selected);
            selected = null;
            updateTotal();
        });

        listBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        listBox.addEventListener("drop", function (e) {
            listBox.appendChild(selected);
            selected = null;
            updateTotal();
        });
    });
}
