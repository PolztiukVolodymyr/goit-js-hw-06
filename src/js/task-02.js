const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = ingredients.map(elem => {
    const itemEl = document.createElement("li");
    itemEl.textContent = elem;
    itemEl.classList.add("item");
    
  return itemEl;
});

const listEl = document.querySelector("#ingredients");
listEl.append(...list);
console.log(listEl);



  // const list = [];
  //   for (let i = 0; i < ingredients.length; i += 1) {
//    const itemEl = document.createElement("li");
//     itemEl.textContent = ingredients[i];
//     itemEl.classList.add("item");
  
//     list.push(itemEl);
//   }





