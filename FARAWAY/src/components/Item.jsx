
function Item({ item, onDeleteItem, handleToggleItem }) {
    return (
        <li>
            <input 
                type="checkbox" 
                value={ item.packed }
                onChange={ () => handleToggleItem(item.id)}
            />

            <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
                { item.quantity } { item.description }
            </span>
            <button
                onClick={ () => onDeleteItem(item.id) }
            >❌</button>
        </li>
    );
}

export default Item;