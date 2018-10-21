// // Create an unordered list element
// const list = document.createElement('ul')

// // Create a list item for our list
// const listItem = document.createElement('li')
// listItem.className = "president"
// listItem.textContent = "George Bush"

// // Put the list item on the unordered list
// list.appendChild(listItem)

// console.log(list)

const theSpot = document.querySelector(".message");
const frag = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
let item = document.createElement("section");
item.className = "message";
item.textContent = "stuff";
frag.appendChild(item);
}

theSpot.appendChild(frag);



// // A new "virtual" document fragment to contain components
// const fragment = document.createDocumentFragment()

// // Create an emperor component element
// const julius = document.createElement('div')
// julius.textContent = "Julius Caesar"
// fragment.appendChild(julius)

// // Create an emperor component element
// const augustus = document.createElement('div')
// augustus.textContent = "Augustus Caesar"
// fragment.appendChild(augustus)

// // Create an emperor component element
// const aurelius = document.createElement('div')
// aurelius.textContent = "Marcus Aurelius"
// fragment.appendChild(aurelius)

// /*
//     Now I can update my HTML document all at once, with all
//     three emperor components rendered. Otherwise, I would
//     have needed to add each one, individually - a much more
//     "expensive" operation.
// */
// document.querySelector("#emperorList").appendChild(fragment)