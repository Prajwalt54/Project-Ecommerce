import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#f0f8ff",  // Light Sky Blue background for a calm feel
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif"
        },
        title: {
            fontSize: "2.5rem",
            color: "#00BFFF",  // Sky Blue for title
            marginBottom: "20px",
            textShadow: "0 0 3px rgba(0, 191, 255, 0.3)"  // Soft glow effect
        },
        message: {
            fontSize: "1.2rem",
            color: "#555",  // Dark gray color for the message
            marginBottom: "30px"
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#87CEFA",  // Light Sky Blue for button
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            textDecoration: "none",
            boxShadow: "0 0 10px rgba(135, 206, 235, 0.4)"  // Soft glow effect for button
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a
                href="/"
                style={styles.button}
                onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#00BFFF")  // Change to Sky Blue on hover
                }
                onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#87CEFA")  // Light Sky Blue on mouse out
                }
            >
                Go to Home
            </a>
        </div>
    );
}
