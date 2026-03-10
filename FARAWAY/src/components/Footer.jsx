function Footer({ items }) {
    return (
        <footer className="footer">
            <em>You have { items.length } items on your list, and you already packed X (X%)</em>
        </footer>
    );
}

export default Footer;