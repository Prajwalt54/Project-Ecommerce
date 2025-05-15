import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#87CEEB", // Sky blue background
        color: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
    };

    const logoContainerStyle = {
        display: "flex",
        alignItems: "center",
        gap: "16px", // Space between the hamburger icon and the logo
        flexGrow: 1,  // This will help center the logo
        justifyContent: "center",  // Center the logo in the header
    };

    const logoStyle = {
        fontSize: "24px",
        textDecoration: "none",
        color: "#ffffff",
        fontWeight: "bold", // Normal font weight (not cursive)
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
    };

    const cartCountStyle = {
        backgroundColor: "#ff66cc", // pink-violet
        color: "#2c003e", // contrast
        borderRadius: "12px",
        padding: "2px 8px",
        marginLeft: "4px",
        fontSize: "14px",
        fontWeight: "bold"
    };

    return (
        <header style={headerStyle}>
            {/* Hamburger Icon and Logo on the Left */}
            <div style={{ fontSize: "24px", cursor: "pointer" }}>☰</div> {/* Hamburger Icon */}
            
            {/* Logo Container - Centered */}
            <div style={logoContainerStyle}>
                <Link to="/" style={logoStyle}>ROPSS</Link>
            </div>
            
            {/* Cart Link on the Right */}
            <Link to="/cart" style={cartLinkStyle}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
