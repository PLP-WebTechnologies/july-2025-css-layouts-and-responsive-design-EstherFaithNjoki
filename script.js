

let userName = "Esther Faith Maina";
let age = 35;


let basicOutput = "";
if(age >= 18) {
    basicOutput = `${userName} is an adult.`;
} else {
    basicOutput = `${userName} is a minor.`;
}


document.getElementById("part1-output").textContent = basicOutput;




function addNumbers(a, b) {
    return a + b;
}


function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript!`;
}


let funcOutput = addNumbers(5, 10) + " | " + greetUser(userName);
document.getElementById("part2-output").textContent = funcOutput;



const fruits = ["Apple", "Banana", "Cherry"];
const part3List = document.getElementById("part3-output");


for(let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = `For loop: ${fruits[i]}`;
    part3List.appendChild(li);
}


fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = `forEach loop: ${fruit}`;
    part3List.appendChild(li);
});




document.getElementById("change-text-btn").addEventListener("click", () => {
    document.getElementById("dynamic-content").textContent = "Text has been changed!";
});


document.getElementById("toggle-color-btn").addEventListener("click", () => {
    document.getElementById("dynamic-content").classList.toggle("highlight");
});


const newDiv = document.createElement("div");
newDiv.textContent = "I was added dynamically!";
document.getElementById("dynamic-content").appendChild(newDiv);
