import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 4px 20px rgba(135, 206, 235, 0.3)",
            borderRadius: "15px",
            backgroundColor: "#fff",
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            color: "#333",
            border: "2px solid #87CEFA"
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(135, 206, 235, 0.4)"
        },
        name: {
            fontSize: "2.5rem",
            marginBottom: "15px",
            color: "#00BFFF",  // Sky Blue
            textShadow: "0 0 3px rgba(0, 191, 255, 0.3)",  // Subtle glow
            fontWeight: "600",  // Slightly bold to stand out
        },
        description: {
            fontSize: "1.2rem",
            marginBottom: "20px",
            color: "#555"
        },
        price: {
            fontSize: "1.5rem",
            fontWeight: "500",  // Regular boldness
            color: "#00BFFF",  // Sky Blue
            textShadow: "0 0 3px rgba(0, 191, 255, 0.3)",  // Soft glow for price
            marginBottom: "25px"
        },
        button: {
            padding: "14px 28px",
            fontSize: "1.1rem",
            backgroundColor: "#87CEFA",  // Light Sky Blue (related color)
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(135, 206, 235, 0.4)",
            transition: "all 0.3s ease"
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
                onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#00BFFF")  // Sky Blue on hover
                }
                onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#87CEFA")  // Light Sky Blue (original)
                }
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
