import React, { useState } from "react";
import ChapitreCard from "./ChapitreCard";
import { Link } from "react-router-dom";

export default function Sommaire() {
    const [showTP, setShowTP] = useState(false);

    // Transformer tpList en tableau d'objets avec nom et lien
    const tpList = [
        { name: "TP1 — Todo List", link: "/tp1-todolist", disabled: false },
        { name: "TP2 — Compteur", link: "/tp2-compteur", disabled: true },
        { name: "TP3 — Calculatrice", link: "/tp3-calculatrice", disabled: true },
        { name: "TP4 — Liste de contacts", link: "/tp4-contacts", disabled: true },
        { name: "TP5 — Quiz interactif", link: "/tp5-quiz", disabled: true },
        { name: "TP6 — Application météo (API)", link: "/tp6-meteo", disabled: true },
        { name: "TP7 — Blog CRUD", link: "/tp7-blog", disabled: true },
        { name: "TP8 — Dashboard admin", link: "/tp8-dashboard", disabled: true },
        { name: "TP9 — Portfolio React", link: "/tp9-portfolio", disabled: true },
    ];

    return (
        <>
            <h1>📚 Sommaire du cours Tendances Technologiques TT4 : Node.js</h1>
            <h2>Mourad Sehboub --- Collège LaSalle.</h2>

            <div className="card-container">
                <ChapitreCard
                    title="Chapitre 1 — Panorama"
                    description={[
                        "Qu'est-ce qu'une tendance ? État du Web, Cloud et IA.",
                        "Théorie : Qu'est-ce qu'une tendance technologique ?",
                        "Pratique : Installation de l'écosystème",
                        "Initiation : Premiers scripts & logique",
                    ]}
                    guideLink="/html/chapitre1"
                    exercicesLink="/html/exercices_chapitre1"
                />

                <ChapitreCard
                    title="Chapitre 2 — JS Moderne (ES6+)"
                    description={[
                        "Rappels et passage à l'ES6+ : let/const, fonctions fléchées, modules.",
                        'Théorie : Pourquoi "Moderne" ?',
                        "Fondamentaux de la syntaxe, manipulation avancée des données",
                        "Modularité et organisation",
                    ]}
                    guideLink="/html/js"
                />

                <ChapitreCard
                    title="Chapitre 3 — Asynchronisme & API"
                    description={[
                        "Maîtrise de async/await et fetch pour consommer des données externes.",
                        "Gestion des erreurs et robustesse",
                        "Atelier pratique : Dashboard de veille technologique",
                    ]}
                    disabled={true}
                    guideLink="/under-construction"
                >
                    <button className="disabled-btn">Page en construction</button>
                </ChapitreCard>

                <ChapitreCard
                    title="Chapitre 4 — React.js : Bases"
                    description={[
                        "Architecture par composants, JSX et passage de props",
                        "Théorie : Le paradigme React",
                    ]}
                    guideLink="/GuideReact"
                >
                    <h3>Ateliers React pratiques</h3>
                    {showTP && (
                        <ul className="tp-list">
                            {tpList.map((tp, i) => (
                                <li key={i}>
                                    {tp.disabled ? (
                                        <button className="disabled-btn">{tp.name}</button>
                                    ) : (
                                        <Link to={tp.link} className="btn">
                                            {tp.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                    <button
                        className="btn"
                        onClick={() => setShowTP(!showTP)}
                    >
                        ▶ Accéder aux travaux pratiques
                    </button>
                </ChapitreCard>

                <ChapitreCard
                    title="Chapitre 5 — React.js : État & Hooks"
                    description={[
                        "Gestion du useState, formulaires et interactivité utilisateur",
                        "Pratique : Mon Portfolio - Section Contact & Filtres",
                    ]}
                    disabled={true}
                    guideLink="/under-construction"
                >
                    <button className="disabled-btn">Page en construction</button>
                </ChapitreCard>

                <ChapitreCard
                    title="Examen 1 — Formative"
                    description={[
                        "Évaluation des connaissances acquises sur Node.js et JS moderne.",
                    ]}
                    disabled={true}
                    guideLink="/under-construction"
                >
                    <button className="disabled-btn">Page en construction</button>
                </ChapitreCard>
            </div>
        </>
    );
}