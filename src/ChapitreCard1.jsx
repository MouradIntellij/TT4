import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function ChapitreCard({ title, description, guideLink, disabled = false, children }) {
    return (
        <div className={`card${disabled ? " disabled" : ""}`}>
            <h2>{title}</h2>
            {description.map((line, i) => (
                <p key={i}>{line}</p>
            ))}
            {children}
            {guideLink && !disabled && (
                guideLink.endsWith('.html') ? (
                    <a href={guideLink} className="btn" target="_blank" rel="noopener noreferrer">
                        ▶ Accéder au chapitre
                    </a>
                ) : (
                    <Link to={guideLink} className="btn">
                        ▶ Accéder au chapitre
                    </Link>
                )
            )}
            {guideLink && disabled && (
                <span className="btn disabled">
                    ▶ Accéder au chapitre
                </span>
            )}
        </div>
    );
}