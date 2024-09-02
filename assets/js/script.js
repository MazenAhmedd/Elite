const items = document.querySelectorAll('.nav-link');

// Add click event listener to each item
items.forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'active' class from all items
        items.forEach(i => i.classList.remove('active'));
        
        // Add 'active' class to the clicked item
        this.classList.add('active');
    });
});


function imgSLider(anything) {
    document.querySelector(".preview-img").src = anything;
}

const model_1 = document.getElementById("model-1");
const model_2 = document.getElementById("model-2");
const model_3 = document.getElementById("model-3");
const model_4 = document.getElementById("model-4");
const model_5 = document.getElementById("model-5");
const price = document.getElementById("price")

if(model_1) {
    model_1.addEventListener("click", () => {
        price.innerHTML = "300$";
    })
}
if(model_2) {
    model_2.addEventListener("click", () => {
        price.innerHTML = "550$";
    })
}
if(model_3) {
    model_3.addEventListener("click", () => {
        price.innerHTML = "400$";
    })
}
if(model_4) {
    model_4.addEventListener("click", () => {
        price.innerHTML = "350$";
    })
}
if(model_5) {
    model_5.addEventListener("click", () => {
        price.innerHTML = "800$";
    })
}