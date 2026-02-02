// src/UnderConstruction.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg"; // optionnel, ton logo React si tu veux

export default function UnderConstruction() {
    return (
        <div style={{
            textAlign: "center",
            padding: "4rem",
            fontFamily: "Arial, sans-serif",
            color: "#333",
        }}>
            <img
                src={logo}
                alt="React Logo"
                style={{ height: "80px", animation: "App-logo-spin infinite 20s linear" }}
            />
            <h1 style={{ marginTop: "1rem", fontSize: "2rem" }}>🚧 Page en construction</h1>
            <p style={{ fontSize: "1.2rem" }}>
                Cette page n’est pas encore disponible. Revenez bientôt !
            </p>
            <Link
                to="/"
                style={{
                    display: "inline-block",
                    marginTop: "2rem",
                    padding: "0.8rem 1.5rem",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    borderRadius: "5px",
                    textDecoration: "none",
                    transition: "background-color 0.2s"
                }}
            >
                ← Retour au sommaire
            </Link>
        </div>
    );
}
