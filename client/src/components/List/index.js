import  as React from "react";

const lists = [
    {
        text: "To-Do-List",
        handleClick: () => {
            const listName = "To-Do-List";
            //const ToDoItems = ["pay bills", "call for appointment", "pickup items"];
            showItems(listName);
        },
    },
    {
        text: "Shopping-List",
        handleClick: () => {
            //const text = "Shopping List";
            const ShoppingItems = ["Back-to-school items", "Cloths", "Watch"];
            showItems(ShoppingItems);
        },
    },
    {
        text: "Grocery-List",
        handleClick: () => {
            const GroceryItems = ["Milk", "Eggs", "Cereals"];
            //const GroceryItems = "Milk";
            showItems(GroceryItems);
        },
    },
];

export default DisplayLists;