import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                <span className="text-light">Items</span>
            </div>
            <div className="card-body">
                {items &&
                items.map((item) => (
                    <p className="pill mb-3" key={item._id}>
                        {item.itemDescription} //{" "}
                        {item.quantity}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ItemList;