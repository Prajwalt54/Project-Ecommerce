import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    // Styles
    const cardStyle = {
        width: "250px",
        backgroundColor: "#fff", // White background for card
        color: "#333", // Dark text for visibility
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // A deeper shadow for a modern look
        overflow: "hidden",
        margin: "15px",
        fontFamily: "'Roboto', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add shadow effect on hover
        border: "1px solid #ddd", // Light gray border for separation
    };

    const clickableStyle = {
        cursor: "pointer",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "8px",
        transition: "transform 0.3s ease", // Smooth transition for zoom effect
    };

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0",
        color: "#333", // Dark text for title
    };

    const priceStyle = {
        color: "#000", // Black for price
        fontSize: "18px",
        marginBottom: "8px",
    };

    const detailsText = {
        color: "#888", // Lighter gray for details text
        fontSize: "14px",
        marginTop: "8px",
        fontWeight: "normal",
    };

    const buttonStyle = {
        backgroundColor: "#000", // Black button for contrast
        color: "#fff", // White text
        border: "none",
        padding: "12px 0",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        transition: "background-color 0.3s ease",
    };

    const handleHover = (e, hover) => {
        e.target.style.backgroundColor = hover ? "#444" : "#000"; // Darker shade on hover
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)"; // Add shadow effect
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)"; // Reset shadow
            }}
        >
            <div style={clickableStyle} onClick={goToDetails}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={imageStyle}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                <p style={detailsText}>View Details</p>
            </div>
            <button
                style={buttonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => addToCart(product)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
