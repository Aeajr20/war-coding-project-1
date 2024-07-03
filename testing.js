console.log("Testing code...");


const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades', "test"];
console.log("Suits array:", suits);


function displaySuits(loopIteration, specificSuit){
    console.log("loop index:",loopIteration,"Suits array:", specificSuit);
}

for (let iteration = 0; iteration < suits.length; iteration++) {
    console.log("\nFor Loop iteration:", iteration);
    displaySuits(iteration, suits[iteration]);
}

let displayItems = false
let total = 0;
while (total < 5) {
    console.log("The total is now:", total, displayItems);

    total += 1; //adds +1 to the total

    if(total === 3){
  displayItems = true
    }

    if(displayItems === true){

        console.log("These are my favorite items:", suits[total]);
    }
}


suits.map(function(suitFromArray, index){
    console.log("\nMap method Index:", index, "This is my suit:", suitFromArray);
})


const arr = [1, 2, 3, 4, 5, 6]; // an array containing a bunch of numbers
console.log("Array:", arr);

console.log("\nloop beginning");
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
    console.log("What is r?", r);
    console.log("What is l", l);
    // console.log("is l less than r?!?!?!", l < r);
    // console.log("r?!?!?!",r = arr.length - 1);
  console.log("arr L:",arr[l], "arr r:", arr[r]);
}

console.log("Loop complete");