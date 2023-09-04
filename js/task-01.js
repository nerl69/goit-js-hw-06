const catEl = document.getElementById("categories").children.length;
console.log(`Number of categories: ${catEl}`);

const array = document.querySelectorAll("h2");
array.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
