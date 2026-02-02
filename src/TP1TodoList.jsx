import React, { useState } from 'react';
import './App.css';

export default function TP1TodoList() {
    const [showSolution, setShowSolution] = useState(false);

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>🎯 TP1 — Application Todo List en React</h1>
            
            {/* SECTION ÉNONCÉ */}
            <section style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
                <h2>📋 Énoncé du TP</h2>
                
                <h3>🎓 Objectifs pédagogiques</h3>
                <p>À la fin de ce TP, vous serez capable de :</p>
                <ul>
                    <li>Créer un composant React fonctionnel</li>
                    <li>Utiliser le hook <code>useState</code> pour gérer l'état</li>
                    <li>Manipuler des événements (onClick, onChange, onSubmit)</li>
                    <li>Afficher des listes dynamiques avec <code>.map()</code></li>
                    <li>Ajouter et supprimer des éléments d'un tableau</li>
                    <li>Gérer des formulaires en React</li>
                </ul>

                <h3>📝 Description du projet</h3>
                <p>
                    Vous allez créer une application de gestion de tâches (Todo List) simple mais complète. 
                    L'utilisateur pourra ajouter des tâches, les marquer comme complétées, et les supprimer.
                </p>

                <h3>✨ Fonctionnalités à implémenter</h3>
                <ol>
                    <li><strong>Ajouter une tâche</strong> : Un formulaire avec un champ texte et un bouton</li>
                    <li><strong>Afficher la liste des tâches</strong> : Toutes les tâches s'affichent dynamiquement</li>
                    <li><strong>Marquer comme complétée</strong> : Cliquer sur une tâche la barre (style rayé)</li>
                    <li><strong>Supprimer une tâche</strong> : Un bouton "❌" pour retirer une tâche de la liste</li>
                    <li><strong>Validation</strong> : Empêcher l'ajout de tâches vides</li>
                </ol>

                <h3>🎨 Interface attendue</h3>
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }}>
                    <pre style={{ margin: 0, fontSize: '14px' }}>
{`┌─────────────────────────────────────┐
│      📝 Ma Todo List                │
├─────────────────────────────────────┤
│  [Entrez une tâche...] [Ajouter]   │
├─────────────────────────────────────┤
│  ☐ Apprendre React                  │ ❌
│  ☑ Faire le TP1                     │ ❌
│  ☐ Réviser JavaScript               │ ❌
└─────────────────────────────────────┘`}
                    </pre>
                </div>

                <h3>🔧 Structure de données</h3>
                <p>Chaque tâche sera un objet avec cette structure :</p>
                <pre style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
{`{
  id: 1,              // Identifiant unique
  text: "Ma tâche",   // Texte de la tâche
  completed: false    // État : complétée ou non
}`}
                </pre>

                <h3>📚 Concepts React à utiliser</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '15px' }}>
                    <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px', border: '2px solid #4CAF50' }}>
                        <h4>useState</h4>
                        <p>Pour stocker la liste des tâches et le texte du formulaire</p>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px', border: '2px solid #2196F3' }}>
                        <h4>.map()</h4>
                        <p>Pour parcourir et afficher toutes les tâches</p>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px', border: '2px solid #FF9800' }}>
                        <h4>Événements</h4>
                        <p>onChange, onClick, onSubmit pour l'interactivité</p>
                    </div>
                </div>

                <h3>⚠️ Contraintes et bonnes pratiques</h3>
                <ul>
                    <li>Ne pas modifier directement le state (utiliser des copies)</li>
                    <li>Utiliser une clé unique (<code>key</code>) pour chaque élément de liste</li>
                    <li>Empêcher le rechargement de la page lors de la soumission du formulaire</li>
                    <li>Nommer vos fonctions de manière explicite (ex: <code>handleAddTodo</code>)</li>
                </ul>

                <h3>🚀 Étapes suggérées</h3>
                <ol>
                    <li>Créer le composant de base avec le titre</li>
                    <li>Ajouter un state pour la liste des tâches (tableau vide au début)</li>
                    <li>Ajouter un state pour le champ de saisie</li>
                    <li>Créer le formulaire d'ajout de tâche</li>
                    <li>Implémenter la fonction d'ajout de tâche</li>
                    <li>Afficher la liste des tâches avec .map()</li>
                    <li>Ajouter la fonctionnalité "marquer comme complétée"</li>
                    <li>Ajouter la fonctionnalité de suppression</li>
                    <li>Améliorer le style et l'ergonomie</li>
                </ol>

                <h3>💡 Aide</h3>
                <p>
                    <strong>Vous êtes bloqué ?</strong> Essayez d'abord de résoudre le problème par vous-même, 
                    puis consultez la documentation React ou demandez de l'aide. La solution complète 
                    est disponible ci-dessous une fois le TP terminé.
                </p>
            </section>

            {/* BOUTON POUR AFFICHER LA SOLUTION */}
            <div style={{ textAlign: 'center', margin: '30px 0' }}>
                <button 
                    onClick={() => setShowSolution(!showSolution)}
                    className="btn"
                    style={{ 
                        padding: '15px 30px', 
                        fontSize: '18px',
                        backgroundColor: showSolution ? '#f44336' : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    {showSolution ? '🔒 Masquer la solution' : '🔓 Voir la solution complète'}
                </button>
            </div>

            {/* SECTION SOLUTION */}
            {showSolution && (
                <section style={{ backgroundColor: '#fff9e6', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
                    <h2>✅ Solution complète avec explications pédagogiques</h2>
                    
                    <div style={{ backgroundColor: '#ffe0b2', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
                        <h3>🧩 Structure du projet</h3>
                        <pre style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
{`src/
├── App.js
├── TodoList.jsx     ← Notre composant principal
└── App.css          ← Les styles`}
                        </pre>
                    </div>

                    {/* FICHIER 1 : TodoList.jsx */}
                    <div style={{ marginBottom: '30px', border: '2px solid #4CAF50', borderRadius: '8px', overflow: 'hidden' }}>
                        <div style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px' }}>
                            <h3 style={{ margin: 0 }}>📄 TodoList.jsx - Composant principal</h3>
                        </div>
                        <pre style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '20px', margin: 0, overflowX: 'auto' }}>
{`import React, { useState } from 'react';
import './App.css';

export default function TodoList() {
    // ═══════════════════════════════════════════════════════════
    // 📦 ÉTATS (STATE) - Données qui peuvent changer
    // ═══════════════════════════════════════════════════════════
    
    // État pour stocker toutes les tâches (un tableau d'objets)
    const [todos, setTodos] = useState([
        { id: 1, text: "Apprendre React", completed: false },
        { id: 2, text: "Faire le TP1", completed: false }
    ]);
    
    // État pour le texte tapé dans le champ de saisie
    const [inputValue, setInputValue] = useState("");
    
    // ═══════════════════════════════════════════════════════════
    // 🔧 FONCTIONS - Logique de l'application
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Ajoute une nouvelle tâche à la liste
     * @param {Event} e - L'événement de soumission du formulaire
     */
    const handleAddTodo = (e) => {
        // Empêche le rechargement de la page (comportement par défaut des formulaires)
        e.preventDefault();
        
        // Validation : on n'ajoute pas de tâche vide
        if (inputValue.trim() === "") {
            alert("⚠️ Veuillez entrer une tâche !");
            return; // Sort de la fonction
        }
        
        // Création d'une nouvelle tâche
        const newTodo = {
            id: Date.now(), // ID unique basé sur le timestamp
            text: inputValue,
            completed: false
        };
        
        // Mise à jour du state avec la nouvelle tâche
        // On crée un NOUVEAU tableau avec tous les anciens todos + le nouveau
        setTodos([...todos, newTodo]);
        
        // Vider le champ de saisie après l'ajout
        setInputValue("");
    };
    
    /**
     * Inverse l'état complété/non complété d'une tâche
     * @param {number} id - L'identifiant de la tâche à modifier
     */
    const toggleTodo = (id) => {
        // .map() parcourt TOUS les todos et renvoie un nouveau tableau
        const updatedTodos = todos.map((todo) => {
            // Si c'est la tâche cliquée, on inverse son état "completed"
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            // Sinon, on garde la tâche telle quelle
            return todo;
        });
        
        // Mise à jour du state avec le nouveau tableau
        setTodos(updatedTodos);
    };
    
    /**
     * Supprime une tâche de la liste
     * @param {number} id - L'identifiant de la tâche à supprimer
     */
    const deleteTodo = (id) => {
        // .filter() garde seulement les tâches dont l'id est différent
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };
    
    // ═══════════════════════════════════════════════════════════
    // 🎨 RENDU (JSX) - Ce qui s'affiche à l'écran
    // ═══════════════════════════════════════════════════════════
    
    return (
        <div className="todo-container">
            <h1>📝 Ma Todo List</h1>
            
            {/* ─────────────────────────────────────────────────── */}
            {/* FORMULAIRE D'AJOUT */}
            {/* ─────────────────────────────────────────────────── */}
            <form onSubmit={handleAddTodo} className="todo-form">
                <input
                    type="text"
                    placeholder="Entrez une nouvelle tâche..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="todo-input"
                />
                <button type="submit" className="btn-add">
                    ➕ Ajouter
                </button>
            </form>
            
            {/* ─────────────────────────────────────────────────── */}
            {/* LISTE DES TÂCHES */}
            {/* ─────────────────────────────────────────────────── */}
            <ul className="todo-list">
                {/* .map() transforme chaque todo en élément <li> */}
                {todos.map((todo) => (
                    <li 
                        key={todo.id} 
                        className="todo-item"
                    >
                        {/* Texte de la tâche - cliquable pour toggle */}
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? '#999' : '#333',
                                cursor: 'pointer',
                                flex: 1
                            }}
                        >
                            {todo.completed ? '☑' : '☐'} {todo.text}
                        </span>
                        
                        {/* Bouton de suppression */}
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="btn-delete"
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
            
            {/* ─────────────────────────────────────────────────── */}
            {/* STATISTIQUES */}
            {/* ─────────────────────────────────────────────────── */}
            <div className="todo-stats">
                <p>
                    Total : {todos.length} tâche(s) | 
                    Complétées : {todos.filter(t => t.completed).length} | 
                    Restantes : {todos.filter(t => !t.completed).length}
                </p>
            </div>
        </div>
    );
}`}
                        </pre>
                    </div>

                    {/* FICHIER 2 : App.css */}
                    <div style={{ marginBottom: '30px', border: '2px solid #2196F3', borderRadius: '8px', overflow: 'hidden' }}>
                        <div style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px' }}>
                            <h3 style={{ margin: 0 }}>🎨 App.css - Styles CSS</h3>
                        </div>
                        <pre style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '20px', margin: 0, overflowX: 'auto' }}>
{`/* ═══════════════════════════════════════════════════════════
   CONTENEUR PRINCIPAL
   ═══════════════════════════════════════════════════════════ */
.todo-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    color: white;
}

.todo-container h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* ═══════════════════════════════════════════════════════════
   FORMULAIRE D'AJOUT
   ═══════════════════════════════════════════════════════════ */
.todo-form {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
}

.todo-input {
    flex: 1;
    padding: 12px 15px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.todo-input:focus {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn-add {
    padding: 12px 25px;
    font-size: 16px;
    font-weight: bold;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-add:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* ═══════════════════════════════════════════════════════════
   LISTE DES TÂCHES
   ═══════════════════════════════════════════════════════════ */
.todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.todo-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    margin-bottom: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.todo-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn-delete {
    padding: 5px 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
}

.btn-delete:hover {
    background-color: #da190b;
    transform: scale(1.1);
}

/* ═══════════════════════════════════════════════════════════
   STATISTIQUES
   ═══════════════════════════════════════════════════════════ */
.todo-stats {
    margin-top: 20px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
}

.todo-stats p {
    margin: 0;
    font-size: 14px;
}`}
                        </pre>
                    </div>

                    {/* FICHIER 3 : App.js */}
                    <div style={{ marginBottom: '30px', border: '2px solid #FF9800', borderRadius: '8px', overflow: 'hidden' }}>
                        <div style={{ backgroundColor: '#FF9800', color: 'white', padding: '10px 20px' }}>
                            <h3 style={{ margin: 0 }}>⚙️ App.js - Intégration dans l'application</h3>
                        </div>
                        <pre style={{ backgroundColor: '#2d2d2d', color: '#f8f8f2', padding: '20px', margin: 0, overflowX: 'auto' }}>
{`import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sommaire from './Sommaire';
import TodoList from './TodoList'; // ← Import du composant TodoList

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sommaire />} />
                <Route path="/tp1-todolist" element={<TodoList />} />
                {/* Vos autres routes... */}
            </Routes>
        </Router>
    );
}

export default App;`}
                        </pre>
                    </div>

                    {/* EXPLICATIONS PÉDAGOGIQUES */}
                    <div style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
                        <h2>📚 Explications détaillées des concepts</h2>
                        
                        <div style={{ marginBottom: '25px' }}>
                            <h3>1️⃣ Le hook useState</h3>
                            <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px', color: '#333' }}>
{`const [todos, setTodos] = useState([]);
     ↑       ↑           ↑
     |       |           └─ Valeur initiale
     |       └─ Fonction pour modifier l'état
     └─ Variable qui contient l'état actuel`}
                            </pre>
                            <p>
                                <strong>Pourquoi utiliser useState ?</strong> En React, on ne peut pas modifier directement 
                                les variables comme en JavaScript classique. useState crée une variable "spéciale" qui, 
                                lorsqu'elle change, déclenche un nouveau rendu du composant.
                            </p>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h3>2️⃣ La méthode .map()</h3>
                            <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px', color: '#333' }}>
{`todos.map((todo) => (
    <li key={todo.id}>{todo.text}</li>
))`}
                            </pre>
                            <p>
                                <strong>À quoi sert .map() ?</strong> Cette méthode parcourt un tableau et transforme 
                                chaque élément. Ici, elle transforme chaque objet "todo" en un élément JSX &lt;li&gt;. 
                                C'est comme une boucle qui retourne du HTML !
                            </p>
                            <p style={{ backgroundColor: '#fff3cd', padding: '10px', borderRadius: '5px', border: '1px solid #ffc107' }}>
                                ⚠️ <strong>Important :</strong> Chaque élément créé avec .map() DOIT avoir une prop 
                                <code>key</code> unique pour que React puisse les identifier.
                            </p>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h3>3️⃣ L'immuabilité du state</h3>
                            <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px', color: '#333' }}>
{`// ❌ MAUVAIS - Ne JAMAIS faire ça
todos.push(newTodo);
setTodos(todos);

// ✅ BON - Créer un nouveau tableau
setTodos([...todos, newTodo]);`}
                            </pre>
                            <p>
                                <strong>Pourquoi ne pas modifier directement ?</strong> React compare l'ancien et le nouveau 
                                state pour savoir s'il doit re-rendre. Si vous modifiez le tableau directement, React ne 
                                voit pas la différence ! Le spread operator <code>[...todos]</code> crée une copie.
                            </p>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h3>4️⃣ Les événements en React</h3>
                            <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px', color: '#333' }}>
{`// onChange - Déclenché à chaque modification du champ
onChange={(e) => setInputValue(e.target.value)}

// onClick - Déclenché au clic
onClick={() => deleteTodo(todo.id)}

// onSubmit - Déclenché à la soumission du formulaire
onSubmit={handleAddTodo}`}
                            </pre>
                            <p>
                                Les événements React sont similaires au JavaScript classique mais avec une syntaxe 
                                camelCase (onClick au lieu de onclick).
                            </p>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h3>5️⃣ Le spread operator (...)</h3>
                            <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px', color: '#333' }}>
{`// Copier un tableau
const nouveauTableau = [...ancienTableau];

// Ajouter un élément à un tableau
const avecNouvelElement = [...ancienTableau, nouvelElement];

// Copier un objet en modifiant une propriété
const nouveauTodo = { ...todo, completed: !todo.completed };`}
                            </pre>
                            <p>
                                Le <code>...</code> "déploie" tous les éléments d'un tableau ou toutes les propriétés 
                                d'un objet. C'est essentiel pour respecter l'immuabilité !
                            </p>
                        </div>
                    </div>

                    {/* AMÉLIORATIONS POSSIBLES */}
                    <div style={{ backgroundColor: '#f3e5f5', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
                        <h2>🚀 Améliorations possibles (bonus)</h2>
                        <ol>
                            <li><strong>LocalStorage :</strong> Sauvegarder les tâches pour qu'elles persistent après rechargement</li>
                            <li><strong>Filtres :</strong> Afficher toutes / complétées / non complétées</li>
                            <li><strong>Édition :</strong> Permettre de modifier le texte d'une tâche</li>
                            <li><strong>Priorités :</strong> Ajouter des niveaux de priorité (haute, moyenne, basse)</li>
                            <li><strong>Date limite :</strong> Ajouter une date d'échéance pour chaque tâche</li>
                            <li><strong>Animation :</strong> Animer l'ajout et la suppression des tâches</li>
                            <li><strong>Catégories :</strong> Grouper les tâches par catégorie (travail, personnel, etc.)</li>
                        </ol>
                    </div>

                    {/* PIÈGES COURANTS */}
                    <div style={{ backgroundColor: '#ffebee', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
                        <h2>⚠️ Pièges courants à éviter</h2>
                        <ul>
                            <li>
                                <strong>Oublier e.preventDefault()</strong> dans onSubmit 
                                → La page se recharge !
                            </li>
                            <li>
                                <strong>Modifier directement le state</strong> 
                                → React ne détecte pas le changement
                            </li>
                            <li>
                                <strong>Oublier la prop key</strong> dans .map() 
                                → Warning dans la console
                            </li>
                            <li>
                                <strong>Utiliser l'index comme key</strong> 
                                → Bugs si on réorganise la liste
                            </li>
                            <li>
                                <strong>Ne pas valider les entrées</strong> 
                                → Tâches vides ajoutées
                            </li>
                        </ul>
                    </div>

                    {/* RESSOURCES */}
                    <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
                        <h2>📖 Ressources pour aller plus loin</h2>
                        <ul>
                            <li>
                                <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
                                    Documentation officielle React
                                </a>
                            </li>
                            <li>
                                <a href="https://react.dev/reference/react/useState" target="_blank" rel="noopener noreferrer">
                                    Guide complet sur useState
                                </a>
                            </li>
                            <li>
                                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer">
                                    Documentation .map() sur MDN
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            )}

            {/* FOOTER */}
            <footer style={{ textAlign: 'center', marginTop: '50px', color: '#666', fontSize: '14px' }}>
                <p>💡 Bon courage avec votre Todo List ! N'oubliez pas : la pratique est la clé pour maîtriser React.</p>
                <p>📧 Questions ? Contactez votre professeur : Mourad Sehboub - Collège LaSalle</p>
            </footer>
        </div>
    );
}

