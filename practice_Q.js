// The function makeShoppingList() creates a shopping list based on the items that are passed
// to the function as arguments. Imagine that you always purchase milk, bread, and eggs every 
// time you go shopping for groceries. To make creating a grocery list easier, let’s assign 
// default values to the parameters in makeShoppingList(). Change the parameters of 
// makeShoppingList() into default parameters :
// Assign ‘milk’ as the default value of item1.
// Assign ‘bread’ as the default value of item2.
// Assign ‘eggs’ as the default value of item3.
function makeShoppingList(item1 = "Milk", item2 = "Bread", item3 = "Eggs"){
    console.log(`Grocery list contais :- ${item1}, ${item2}, ${item3}`)
}
makeShoppingList();