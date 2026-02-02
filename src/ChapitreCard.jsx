import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function ChapitreCard({
                                         title,
                                         description,
                                         guideLink,
                                         exercicesLink,  // ← NOUVEAU
                                         disabled = false,
                                         children
                                     }) {
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
            {exercicesLink && !disabled && (  // ← NOUVEAU
                <Link to={exercicesLink} className="btn">
                    ▶ Accéder aux exercices
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