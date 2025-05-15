import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import { FaStoreAlt } from "react-icons/fa"; // 🎯 Fancy store icon

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = products.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const styles = {
        container: {
            padding: "30px",
            fontFamily: "'Segoe UI', sans-serif",
            backgroundColor: "#f0f8ff",  // Light Sky Blue background for a calming effect
            minHeight: "100vh",
            color: "#222"
        },
        heading: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            color: "#00BFFF",  // Sky Blue for the title
            gap: "10px",
            marginBottom: "25px",
            textShadow: "0 0 5px rgba(0, 191, 255, 0.3)"  // Soft glow effect for the title
        },
        filters: {
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "35px",
            flexWrap: "wrap"
        },
        input: {
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #87CEFA",  // Light Sky Blue border
            minWidth: "220px",
            backgroundColor: "#fff"
        },
        select: {
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #87CEFA",  // Light Sky Blue border
            minWidth: "180px",
            backgroundColor: "#fff"
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
        },
        button: {
            padding: "12px 24px",
            fontSize: "1.1rem",
            backgroundColor: "#00BFFF",  // Sky Blue for button
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 0 8px rgba(0, 191, 255, 0.5)",
            transition: "all 0.3s ease"
        },
        buttonHover: {
            backgroundColor: "#1E90FF",  // Darker Sky Blue on hover
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                <FaStoreAlt size={30} color="#00BFFF" />
                Explore Our Products
            </h1>
            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="🔎 Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.input}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.select}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div style={styles.grid}>
                {filtered.map((product) => (
                    <ProductCard key={product.id + product.name} product={product} />
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                    style={styles.button}
                    onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}  // Hover effect
                    onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}  // Reset to original color
                >
                    View All Products
                </button>
            </div>
        </div>
    );
}
