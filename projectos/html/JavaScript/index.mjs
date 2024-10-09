import foods from "./foods.mjs";

const getallcategories =[...new Set(foods.map(element => element.category))];

console.log(getallcategories);

console.log(getallcategories.includes("Italian"));

let categoria = (algo) => foods.filter((element) => (element.category === algo));

console.log(categoria("Fast Food"));
///