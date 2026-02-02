import React, { useState } from "react";
import ChapitreCard from "./ChapitreCard";

export default function Sommaire() {
    const [showTP, setShowTP] = useState(false);

    const tpList = [
        "TP1 — Todo List",
        "TP2 — Compteur",
        "TP3 — Calculatrice",
        "TP4 — Liste de contacts",
        "TP5 — Quiz interactif",
        "TP6 — Application météo (API)",
        "TP7 — Blog CRUD",
        "TP8 — Dashboard admin",
        "TP9 — Portfolio React",
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
                    guideLink="/chapitre1"
                />

                <ChapitreCard
                    title="Chapitre 2 — JS Moderne (ES6+)"
                    description={[
                        "Rappels et passage à l'ES6+ : let/const, fonctions fléchées, modules.",
                        'Théorie : Pourquoi "Moderne" ?',
                        "Fondamentaux de la syntaxe, manipulation avancée des données",
                        "Modularité et organisation",
                    ]}
                    guideLink="/js"
                />

                <ChapitreCard
                    title="Chapitre 3 — Asynchronisme & API"
                    description={[
                        "Maîtrise de async/await et fetch pour consommer des données externes.",
                        "Gestion des erreurs et robustesse",
                        "Atelier pratique : Dashboard de veille technologique",
                    ]}
                    disabled={true}
                    guideLink="#"
                />

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
                                    <a className="disabled">{tp}</a>
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
                    guideLink="#"
                />

                <ChapitreCard
                    title="Examen 1 — Formative"
                    description={[
                        "Évaluation des connaissances acquises sur Node.js et JS moderne.",
                    ]}
                    disabled={true}
                    guideLink="#"
                />
            </div>
        </>
    );
}
