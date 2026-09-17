//your JS code here. If required.
// 1. Select the output div element from the DOM
const outputDiv = document.getElementById("output");

// 2. Initial array provided
const inputArray =;

// 3. Create the initial promise resolving after 3 seconds with the input array
const initialPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(inputArray);
    }, 3000);
});

// 4. Chain the transformations
initialPromise
    .then((array) => {
        // First Transformation: Filter out odd numbers -> keeps [2, 4]
        const evens = array.filter(num => num % 2 === 0);

        // Return a new promise that resolves after a 1-second delay
        return new Promise((resolve) => {
            setTimeout(() => {
                outputDiv.textContent = evens.join(","); // Updates DOM to: 2,4
                resolve(evens);
            }, 1000);
        });
    })
    .then((evensArray) => {
        // Second Transformation: Multiply even numbers by 2 -> results in [4, 8]
        const multiplied = evensArray.map(num => num * 2);

        // Return another promise that resolves after an additional 2-second delay
        return new Promise((resolve) => {
            setTimeout(() => {
                outputDiv.textContent = multiplied.join(","); // Updates DOM to: 4,8
                resolve(multiplied);
            }, 2000);
        });
    });
