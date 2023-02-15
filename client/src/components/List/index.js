import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const drawerWidth = 240;

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

const showItems = (listName) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography>To-Do-List</Typography>
            <List>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <ListOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pay Bills" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <ListOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pickup Order" />
                </ListItem>
                <ListItem disablePadding>
                <ListItemIcon>
                    <ListOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Call for appointment" />
                </ListItem>
            </List>
        </Box>
    );
};

const DisplayLists = (items, text) => {
    return(
        <Box sx={{ display: "flex"}}>
            <CssBaseline />
            <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "boder-box",
                },
            }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        {lists.map((item, index) => {
                            const { text, handleClick } = item;
                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton key={text} onClick={handleClick}>
                                        <ListItemIcon>
                                            <ListOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
            {showItems()}
        </Box>
    );
};

export default DisplayLists;