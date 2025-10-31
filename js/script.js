/**
 * 
 * 
 * 
**/

// get all usefull elements
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const likeBtns = document.querySelectorAll(".fa-heart");
const totalDisplay = document.querySelector(".total");

// instructions to update total price
function updateTotal() {
	//init price to 0
	let total = 0;
	//get all products cards elements
	const products = document.querySelectorAll(".card");
	//for each product card
	products.forEach((product) => {
		//get the text price
		const unitPriceText = product.querySelector(".unit-price").textContent;
		//remove $ sign and convert the text price to integer
		const unitPrice = parseInt(unitPriceText.replace("$", ""));
		//get the product quantity
		const quantity = parseInt(product.querySelector(".quantity").textContent);
		//update total price with price * quantity
		total += unitPrice * quantity;
	});
	//update the total price text
	totalDisplay.textContent = total + " $";
}

// + button instructions
plusBtns.forEach((btn) => {
	//adding click event listener to + buttons
	btn.addEventListener("click", () => {
		// get product quantity
		const quantitySpan = btn.parentElement.querySelector(".quantity");
		// convert product quantity to integer
		let quantity = parseInt(quantitySpan.textContent);
		// incrementation of quantity
		quantity++;
		// update product quantity
		quantitySpan.textContent = quantity;
		//call update total price function
		updateTotal();
	});
});

// - button instructions
minusBtns.forEach((btn) => {
	//adding click event listener to - buttons
	btn.addEventListener("click", () => {
		// get product quantity
		const quantitySpan = btn.parentElement.querySelector(".quantity");
		// convert product quantity to integer
		let quantity = parseInt(quantitySpan.textContent);
		// if quantity is more than 0
		if (quantity > 0) {
			// decrement of quantity
			quantity--;
			// update product quantity
			quantitySpan.textContent = quantity;
			//call update total price function
			updateTotal();
		}
	});
});

// delete button instructions
deleteBtns.forEach((btn) => {
	//adding click event listener to delete buttons
	btn.addEventListener("click", () => {
		//get card element
		const productCard = btn.closest(".card");
		//remove card from DOM
		productCard.remove();
		//call update total price function
		updateTotal();
	});
});

// like button instructions
likeBtns.forEach((btn) => {
	//adding click event listener to like buttons
	btn.addEventListener("click", () => {
		//toogle liked class on click
		btn.classList.toggle("liked");
		// if like button contains liked class
		if (btn.classList.contains("liked")) {
			btn.style.color = "red";
		} else {// if like button does not contain liked class
			btn.style.color = "black";
		}
	});
});