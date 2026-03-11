function Footer({ items }) {
    const numPacked = items.filter(item => item.packed).length;
    const precentage = Math.round((numPacked / items.length)*100)

    return (
        <footer className="footer">
            <em>You have { items.length } items on your list, and you already packed { numPacked } ({ items.length && precentage }%)</em>
        </footer>
    );
}

export default Footer;