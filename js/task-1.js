const category = document.querySelectorAll('#categories .item');
const numOfCategories =`Number of categories: ${category.length}`;
console.log(numOfCategories);
category.forEach((el, i) => {
    console.log(`Category: ${el.firstElementChild.textContent} \n Elements: ${el.lastElementChild.childElementCount}`)
})
