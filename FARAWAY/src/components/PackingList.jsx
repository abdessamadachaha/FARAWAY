import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, handleToggleItem, setItems }) {
    const [sortBy, setSortBy] = useState("input");

    let sortItems;
    
    if (sortBy === "input") sortItems = items;

    if (sortBy === "description") {
        sortItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description))
    }

    function handleClear() {
        const confirmed = window.confirm("Are you sure you want to delete all items?");
        if (confirmed) setItems([]);
    }

    return (
        <main className="list">
            <ul>
                {sortItems.map(item => (
                    <Item item={ item } onDeleteItem= { onDeleteItem } handleToggleItem = { handleToggleItem } key={ item.id } />
                ))}
            </ul>

            <div className="actions">
                <select value={ sortBy } onChange={ (e) => setSortBy(e.target.value) }>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>

                <button onClick={ handleClear }>clear list</button>
            </div>
        </main>
    );

}

export default PackingList;