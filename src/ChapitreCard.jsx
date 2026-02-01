import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // On importe le style global

export default function ChapitreCard({ title, description, guideLink, disabled = false, children }) {
    return (
        <div className={`card${disabled ? " disabled" : ""}`}>
            <h2>{title}</h2>
            {description.map((line, i) => (
                <p key={i}>{line}</p>
            ))}
            {children}
            {guideLink && !disabled && (
                <Link to={guideLink} className="btn">
                    ▶ Accéder au chapitre
                </Link>
            )}
            {guideLink && disabled && (
                <Link to="#" className="btn disabled">
                    ▶ Accéder au chapitre
                </Link>
            )}
        </div>
    );
}
