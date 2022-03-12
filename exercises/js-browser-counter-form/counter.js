const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

// initialise counter to 0 
counter.innerText = '0';

// click event listener for increment
increment.addEventListener('click', () => {
    const count = parseInt(counter.innerText);
    if (count >= 10) { 
        alert ("Can't go above 10");
    } else {
        counter.innerText = count + 1;
    }
});

// click event listener for decrement
decrement.addEventListener('click', () => {
    const count = parseInt(counter.innerText);
    if (count <= 0) { 
        alert ("Can't go below 0");
    } else {
        counter.innerText = count - 1;
    } 
});
