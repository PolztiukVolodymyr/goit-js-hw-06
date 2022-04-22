const categoriesItemEl = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesItemEl.length);


const countEl = () => { categoriesItemEl.forEach(function (elem) {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.querySelectorAll("ul")[0].children.length);
    });
}

countEl();
// console.log("Category:", categoriesItemEl[0].firstElementChild.textContent);
// console.log("Elements:", categoriesItemEl[0].querySelectorAll("ul")[0].children.length);


// console.log("Category:", categoriesItemEl[1].firstElementChild.textContent)
// console.log("Elements:", categoriesItemEl[1].querySelectorAll("ul")[0].children.length);



// console.log("Category:", categoriesItemEl[2].firstElementChild.textContent)
// console.log("Elements:", categoriesItemEl[2].querySelectorAll("ul")[0].children.length);


