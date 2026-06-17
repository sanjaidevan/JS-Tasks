//Write a program that prints numbers from 1 to 10, skipping numbers divisible by 3.

//for loop from 1 to 10
for (let i = 0; i < 11; i++) {

    if (i % 3 == 0) {
        continue;
    }

    console.log(i); //Print the number is not divided by 3
}


//Write an arrow function that accepts an array of numbers and returns the sum of all numbers using array methods.

//arrow function add that returns a sum of array using reduce method
const add = (nums) => {

    try {

        return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // accumulator have the previous value and current value consist iterate each element in the array

    }
    catch (error) {

        console.log("Error in adding elements", error)
    }
}

//array of numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//function call with console.log
console.log(add(nums));


//Create an object cart with a property items (array of objects with name and price). Write code to calculate the total price of all items.

const cart = {
    items: [],
};

//function to add item name and price in the cart object
function addCartItems(name, price) {

    try {
        this.name = name;
        this.price = price;

        if (!name || !price) {
            throw new Error("Cannot add items in cart check input");
        }

        cart.items.push({ name, price });

    } catch (error) {
        console.error("Error in adding cart items", error);
    }

}

//funtion to add total price
function totalPrice() {
    let allItems = cart.items;
    let total = 0;
    console.log(allItems);//getting items array of objects
    allItems.forEach((element) => {
        total += element.price;
    })
    return total
}


addCartItems("Pen", 5);
addCartItems("Pencil", 3);
addCartItems("Box", 50);
addCartItems("Water Can", 150);

console.log(cart);//display the cart object

console.log("Total Price", totalPrice());//returns the total price

// Create a function that returns a Promise which resolves after 2 seconds with the message "Done".

function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("Done") }, 2000);
    });
}
fetchUsers()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Error in fetch User", error);
    })

//Write a function using async/await that fetches data from an API and logs "Success" if the response is OK, otherwise throws an error.

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok)
        {
            throw new Error("Error in response")
        }
        console.log("Success");
    } catch (error) {
        console.error("Error in fetch data using async and await");
    }
}
fetchData();