import { useState, useEffect } from "react";

// ─── STYLES (minimal palette: off-white, charcoal, one accent) ───
const S = {
  root: {
    fontFamily: "'Georgia', serif",
    background: "#f7f5f0",
    color: "#2c2c2c",
    minHeight: "100vh",
    lineHeight: 1.7,
  },
  hero: {
    background: "#1e1e1e",
    color: "#f7f5f0",
    padding: "48px 24px 40px",
    textAlign: "center",
  },
  heroTitle: { fontSize: 30, margin: 0, fontWeight: 700, letterSpacing: -0.5 },
  heroSub: { fontSize: 15, opacity: 0.6, margin: "8px 0 0", fontStyle: "italic" },
  nav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
    padding: "20px 12px",
    background: "#fff",
    borderBottom: "1px solid #e0ddd6",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  navBtn: (active) => ({
    padding: "6px 14px",
    borderRadius: 20,
    border: active ? "none" : "1px solid #ccc",
    background: active ? "#1e1e1e" : "#fff",
    color: active ? "#fff" : "#555",
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "inherit",
    transition: "all 0.2s",
  }),
  section: { maxWidth: 780, margin: "0 auto", padding: "32px 20px" },
  h2: {
    fontSize: 22,
    borderBottom: "2px solid #1e1e1e",
    paddingBottom: 6,
    marginBottom: 20,
    fontWeight: 700,
  },
  h3: { fontSize: 17, marginTop: 28, marginBottom: 10, color: "#1e1e1e" },
  p: { fontSize: 14.5, marginBottom: 14, color: "#3a3a3a" },
  code: {
    background: "#1e1e1e",
    color: "#c8e6c9",
    borderRadius: 8,
    padding: "14px 18px",
    fontSize: 13,
    fontFamily: "'Courier New', monospace",
    whiteSpace: "pre",
    overflowX: "auto",
    marginBottom: 16,
    lineHeight: 1.6,
  },
  inlineCode: {
    background: "#e8e5de",
    borderRadius: 4,
    padding: "2px 6px",
    fontFamily: "'Courier New', monospace",
    fontSize: 13,
    color: "#b5451b",
  },
  box: (bg = "#eef2f7") => ({
    background: bg,
    borderRadius: 10,
    padding: "16px 20px",
    marginBottom: 18,
    border: "1px solid #ddd",
  }),
  diagramBox: {
    background: "#fff",
    border: "1.5px solid #1e1e1e",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  badge: (color = "#1e1e1e") => ({
    display: "inline-block",
    background: color,
    color: "#fff",
    borderRadius: 12,
    padding: "2px 10px",
    fontSize: 11,
    fontFamily: "sans-serif",
    marginRight: 4,
  }),
  table: { width: "100%", borderCollapse: "collapse", marginBottom: 18, fontSize: 13.5 },
  th: {
    background: "#1e1e1e",
    color: "#fff",
    padding: "8px 12px",
    textAlign: "left",
    fontWeight: 600,
  },
  td: { padding: "8px 12px", borderBottom: "1px solid #e0ddd6" },
  exerciseCard: {
    border: "1.5px solid #ccc",
    borderRadius: 10,
    marginBottom: 24,
    overflow: "hidden",
  },
  exerciseHeader: (lvl) => ({
    background: lvl === "easy" ? "#e8f5e9" : lvl === "medium" ? "#fff3e0" : lvl === "hard" ? "#fbe9e7" : "#e3f2fd",
    padding: "10px 18px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  }),
  exerciseLvlBadge: (lvl) => ({
    background: lvl === "easy" ? "#4caf50" : lvl === "medium" ? "#ff9800" : lvl === "hard" ? "#f44336" : "#2196f3",
    color: "#fff",
    borderRadius: 12,
    padding: "2px 10px",
    fontSize: 11,
    fontFamily: "sans-serif",
    fontWeight: 600,
  }),
  exerciseBody: { padding: 18 },
  btn: {
    background: "#1e1e1e",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "7px 16px",
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "inherit",
    marginTop: 8,
  },
  cheatSection: { marginBottom: 20 },
  cheatRow: {
    display: "flex",
    gap: 12,
    marginBottom: 10,
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  cheatKey: {
    background: "#1e1e1e",
    color: "#fff",
    borderRadius: 6,
    padding: "4px 10px",
    fontFamily: "'Courier New', monospace",
    fontSize: 12.5,
    whiteSpace: "nowrap",
    minWidth: 140,
  },
  cheatVal: { fontSize: 13.5, color: "#3a3a3a", flex: 1 },
};

// ─── SVG DIAGRAMS ────────────────────────────────────────────────
function DiagramVirtualDOM() {
  const [step, setStep] = useState(0);
  const steps = [
    "① Le composant retourne du JSX",
    "② React crée un Virtual DOM (copie virtuelle)",
    "③ Une donnée change → nouveau Virtual DOM",
    "④ React compare (diff) les deux versions",
    "⑤ Seul le changement est appliqué au DOM réel",
  ];
  return (
    <div style={S.diagramBox}>
      <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 12 }}>
        Comment le Virtual DOM fonctionne
      </div>
      <svg viewBox="0 0 700 160" style={{ width: "100%", maxWidth: 700 }}>
        {/* Boxes */}
        {[
          { x: 10, label: "JSX", sub: "Code", fill: step >= 0 ? "#1e1e1e" : "#ccc" },
          { x: 145, label: "Virtual DOM", sub: "Ancien", fill: step >= 1 ? "#1e1e1e" : "#ccc" },
          { x: 300, label: "Virtual DOM", sub: "Nouveau", fill: step >= 2 ? "#1e1e1e" : "#ccc" },
          { x: 455, label: "Diff", sub: "Comparaison", fill: step >= 3 ? "#1e1e1e" : "#ccc" },
          { x: 580, label: "DOM Réel", sub: "Mise à jour", fill: step >= 4 ? "#1e1e1e" : "#ccc" },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={30} width={115} height={70} rx={8} fill={b.fill} />
            <text x={b.x + 57} y={58} textAnchor="middle" fill="#fff" fontSize={12} fontWeight={600}>
              {b.label}
            </text>
            <text x={b.x + 57} y={76} textAnchor="middle" fill="#aaa" fontSize={10}>
              {b.sub}
            </text>
          </g>
        ))}
        {/* Arrows */}
        {[155, 310, 465, 590].map((x, i) => (
          <text key={i} x={x - 18} y={72} fill={step >= i + 1 ? "#1e1e1e" : "#ccc"} fontSize={18}>→</text>
        ))}
      </svg>
      <div style={{ fontSize: 13, color: "#555", minHeight: 22, marginBottom: 10 }}>{steps[step]}</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        <button style={S.btn} onClick={() => setStep((s) => Math.max(0, s - 1))}>◀ Précédent</button>
        <button style={S.btn} onClick={() => setStep((s) => Math.min(4, s + 1))}>Suivant ▶</button>
      </div>
    </div>
  );
}

function DiagramPropsState() {
  const [liked, setLiked] = useState(false);
  const [highlight, setHighlight] = useState(null);
  return (
    <div style={S.diagramBox}>
      <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 14 }}>
        Parent → Props → Enfant → Callback → State
      </div>
      <svg viewBox="0 0 520 240" style={{ width: "100%", maxWidth: 520 }}>
        {/* Parent box */}
        <rect x={170} y={10} width={180} height={80} rx={10} fill={highlight === "parent" ? "#fff9c4" : "#f0f0f0"} stroke="#1e1e1e" strokeWidth={2} />
        <text x={260} y={38} textAnchor="middle" fontSize={13} fontWeight={700}>Parent</text>
        <text x={260} y={58} textAnchor="middle" fontSize={11} fill="#666">state: liked = {liked ? "true" : "false"}</text>
        <text x={260} y={76} textAnchor="middle" fontSize={10} fill="#999">toggleLike()</text>
        {/* Arrow down: props */}
        <line x1={260} y1={90} x2={260} y2={130} stroke="#1e1e1e" strokeWidth={2} markerEnd="url(#arr)" />
        <text x={275} y={115} fontSize={11} fill="#b5451b" fontWeight={600}>props</text>
        {/* Enfant box */}
        <rect x={170} y={130} width={180} height={70} rx={10} fill={highlight === "child" ? "#c8e6c9" : "#f0f0f0"} stroke="#1e1e1e" strokeWidth={2} />
        <text x={260} y={158} textAnchor="middle" fontSize={13} fontWeight={700}>LikeButton (Enfant)</text>
        <text x={260} y={178} textAnchor="middle" fontSize={10} fill="#666">reçoit: liked, onLike</text>
        {/* Arrow up: callback */}
        <path d="M 365 165 Q 440 165 440 80 Q 440 50 360 50" fill="none" stroke="#1e1e1e" strokeWidth={1.5} strokeDasharray="5,3" markerEnd="url(#arr2)" />
        <text x={420} y={110} fontSize={10} fill="#1e1e1e" fontWeight={600}>callback</text>
        <defs>
          <marker id="arr" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#1e1e1e" />
          </marker>
          <marker id="arr2" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#1e1e1e" />
          </marker>
        </defs>
      </svg>
      {/* Live demo */}
      <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 14, justifyContent: "center" }}>
        <button
          onClick={() => { setLiked(!liked); setHighlight("parent"); setTimeout(() => setHighlight(null), 600); }}
          style={{ ...S.btn, background: liked ? "#e53935" : "#1e1e1e", padding: "8px 20px", fontSize: 15 }}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <span style={{ fontSize: 12, color: "#888" }}>← Cliquez pour voir le flux en action</span>
      </div>
    </div>
  );
}

function DiagramHooks() {
  return (
    <div style={S.diagramBox}>
      <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 10 }}>Les Hooks — Quand les utiliser ?</div>
      <svg viewBox="0 0 600 180" style={{ width: "100%", maxWidth: 600 }}>
        {/* useState */}
        <rect x={20} y={20} width={260} height={130} rx={10} fill="#f5f5f5" stroke="#1e1e1e" strokeWidth={1.5} />
        <text x={150} y={48} textAnchor="middle" fontSize={14} fontWeight={700}>useState</text>
        <text x={40} y={72} fontSize={11} fill="#444">☑ Compteur</text>
        <text x={40} y={90} fontSize={11} fill="#444">☑ Formulaire (champs)</text>
        <text x={40} y={108} fontSize={11} fill="#444">☑ Afficher/cacher un menu</text>
        <text x={40} y={126} fontSize={11} fill="#444">☑ Valeur qui change avec le temps</text>
        <text x={40} y={138} fontSize={10} fill="#888" fontStyle="italic">→ "Je dois me souvenir d'une valeur"</text>
        {/* useEffect */}
        <rect x={320} y={20} width={260} height={130} rx={10} fill="#f5f5f5" stroke="#1e1e1e" strokeWidth={1.5} />
        <text x={450} y={48} textAnchor="middle" fontSize={14} fontWeight={700}>useEffect</text>
        <text x={340} y={72} fontSize={11} fill="#444">☑ Appel API à l'ouverture</text>
        <text x={340} y={90} fontSize={11} fill="#444">☑ Timer / interval</text>
        <text x={340} y={108} fontSize={11} fill="#444">☑ Modifier le titre du tab</text>
        <text x={340} y={126} fontSize={11} fill="#444">☑ Écouter un événement</text>
        <text x={340} y={138} fontSize={10} fill="#888" fontStyle="italic">→ "Je dois faire quelque chose automatiquement"</text>
      </svg>
    </div>
  );
}

function DiagramRender() {
  const [count, setCount] = useState(0);
  const [renderLog, setRenderLog] = useState(["— Aucun rendu encore —"]);

  useEffect(() => {
    setRenderLog((prev) => [...prev.slice(-3), `Rendu #${prev.length} → count = ${count}`]);
  }, [count]);

  return (
    <div style={S.diagramBox}>
      <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 10 }}>
        Visualiser le re-rendu en temps réel
      </div>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ flex: "1 1 200px", minWidth: 180 }}>
          <div style={{ background: "#1e1e1e", color: "#fff", borderRadius: 8, padding: "12px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{count}</div>
            <div style={{ fontSize: 11, opacity: 0.6 }}>valeur actuelle</div>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 10, justifyContent: "center" }}>
            <button style={S.btn} onClick={() => setCount((c) => c - 1)}>− 1</button>
            <button style={S.btn} onClick={() => setCount((c) => c + 1)}>+ 1</button>
            <button style={{ ...S.btn, background: "#666" }} onClick={() => { setCount(0); setRenderLog(["— Réinitialisé —"]); }}>Reset</button>
          </div>
        </div>
        <div style={{ flex: "1 1 220px", minWidth: 220 }}>
          <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>📋 Journal de rendus</div>
          <div style={{ background: "#fafafa", border: "1px solid #e0e0e0", borderRadius: 8, padding: 10, height: 100, overflowY: "auto" }}>
            {renderLog.map((l, i) => (
              <div key={i} style={{ fontSize: 12, color: i === renderLog.length - 1 ? "#1e1e1e" : "#aaa", fontFamily: "monospace", fontWeight: i === renderLog.length - 1 ? 600 : 400 }}>
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: 12.5, color: "#666", textAlign: "center" }}>
        Chaque clic sur +1 ou −1 déclenche <span style={S.inlineCode}>setCount</span> → re-rendu du composant
      </div>
    </div>
  );
}

function DiagramComponentTree() {
  const [expanded, setExpanded] = useState({ App: true, Header: false, Main: true, Footer: false, VideoList: true });
  const toggle = (k) => setExpanded((p) => ({ ...p, [k]: !p[k] }));
  const TreeNode = ({ name, children, depth = 0 }) => (
    <div style={{ marginLeft: depth * 22 }}>
      <div
        onClick={() => children && toggle(name)}
        style={{ cursor: children ? "pointer" : "default", display: "flex", alignItems: "center", gap: 6, padding: "3px 0", userSelect: "none" }}
      >
        <span style={{ color: "#aaa", fontSize: 11 }}>{children ? (expanded[name] ? "▼" : "▶") : "○"}</span>
        <span style={{ background: "#1e1e1e", color: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: 12, fontFamily: "monospace" }}>
          &lt;{name} /&gt;
        </span>
      </div>
      {children && expanded[name] && children}
    </div>
  );
  return (
    <div style={S.diagramBox}>
      <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 10 }}>Arbre de composants (cliquez pour développer)</div>
      <TreeNode name="App">
        <TreeNode name="Header" depth={1} />
        <TreeNode name="Main" depth={1}>
          <TreeNode name="VideoList" depth={2}>
            <TreeNode name="VideoCard" depth={3} />
            <TreeNode name="VideoCard" depth={3} />
          </TreeNode>
        </TreeNode>
        <TreeNode name="Footer" depth={1} />
      </TreeNode>
    </div>
  );
}

// ─── EXERCICE INTERACTIF ─────────────────────────────────────────
function ExerciseInteractive({ title, level, description, skeleton, solution, hint }) {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  return (
    <div style={S.exerciseCard}>
      <div style={S.exerciseHeader(level)} onClick={() => setOpen(!open)}>
        <span style={S.exerciseLvlBadge(level)}>{level.toUpperCase()}</span>
        <span style={{ fontSize: 14, fontWeight: 600, flex: 1 }}>{title}</span>
        <span style={{ fontSize: 14, color: "#888" }}>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div style={S.exerciseBody}>
          <p style={{ ...S.p, marginBottom: 10 }}>{description}</p>
          {skeleton && (
            <>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 4, fontWeight: 600 }}>🧩 Squelette (code de départ)</div>
              <div style={S.code}>{skeleton}</div>
            </>
          )}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button style={S.btn} onClick={() => setShowHint(!showHint)}>
              {showHint ? "Cacher l'indice" : "💡 Indice"}
            </button>
            <button style={{ ...S.btn, background: "#444" }} onClick={() => setShowSolution(!showSolution)}>
              {showSolution ? "Cacher la solution" : "✓ Solution"}
            </button>
          </div>
          {showHint && <div style={{ ...S.box("#fffde7"), marginTop: 12 }}><strong>Indice :</strong> {hint}</div>}
          {showSolution && (
            <>
              <div style={{ fontSize: 12, color: "#888", marginTop: 14, marginBottom: 4, fontWeight: 600 }}>✅ Solution</div>
              <div style={S.code}>{solution}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ─── QUIZ INTERACTIF ─────────────────────────────────────────────
function Quiz({ question, options, correctIndex, explanation }) {
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ ...S.box("#fff"), marginBottom: 20, border: "1.5px solid #ddd" }}>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>❓ {question}</div>
      {options.map((opt, i) => {
        let bg = "#fafafa", border = "1px solid #ddd";
        if (selected !== null) {
          if (i === correctIndex) { bg = "#e8f5e9"; border = "2px solid #4caf50"; }
          else if (i === selected) { bg = "#ffebee"; border = "2px solid #f44336"; }
        }
        return (
          <div
            key={i}
            onClick={() => selected === null && setSelected(i)}
            style={{
              background: bg, border, borderRadius: 6, padding: "8px 12px", marginBottom: 6,
              cursor: selected === null ? "pointer" : "default", fontSize: 13.5, transition: "all 0.2s",
            }}
          >
            {i === selected && i !== correctIndex && "✗ "}{i === correctIndex && selected !== null && "✓ "}{opt}
          </div>
        );
      })}
      {selected !== null && (
        <div style={{ ...S.box("#f0f4ff"), marginTop: 8 }}>
          <strong>{selected === correctIndex ? "Correct !" : "Pas tout à fait."}</strong> {explanation}
        </div>
      )}
      {selected !== null && <button style={{ ...S.btn, marginTop: 8, background: "#666", fontSize: 11 }} onClick={() => setSelected(null)}>Réessayer</button>}
    </div>
  );
}

// ─── CONTENT SECTIONS ────────────────────────────────────────────
const sections = {
  intro: {
    title: "1. Introduction à React",
    content: (
      <>
        <p style={S.p}>
          React est une <strong>bibliothèque JavaScript</strong> créée par Meta pour construire des interfaces utilisateur.
          Son idée centrale : découper l'interface en petits morceaux réutilisables appelés <strong>composants</strong>.
        </p>
        <p style={S.p}>
          Une application React est une <strong>Single Page Application (SPA)</strong> : le navigateur charge une seule page HTML,
          puis tout le reste se gère en JavaScript — sans rechargement.
        </p>
        <DiagramComponentTree />
        <div style={S.box("#f0f4ff")}>
          <strong>🧠 Règle fondamentale :</strong> Tout ce qui commence par une <strong>majuscule</strong> dans le JSX est un composant.
          <span style={S.inlineCode}>&lt;Video /&gt;</span> = composant | <span style={S.inlineCode}>&lt;div&gt;</span> = élément HTML
        </div>
      </>
    ),
  },
  setup: {
    title: "2. Mise en place (Create React App)",
    content: (
      <>
        <p style={S.p}>Pour créer un nouveau projet React :</p>
        <div style={S.code}>{`npx create-react-app todolist\ncd todolist\nnpm start`}</div>
        <table style={S.table}>
          <thead><tr>
            <th style={S.th}>Commande</th><th style={S.th}>Ce qu'elle fait</th>
          </tr></thead>
          <tbody>
            {[
              ["npm start", "Démarre le serveur de développement (localhost:3000)"],
              ["npm run build", "Regroupe l'app en fichiers statiques pour la production"],
              ["npm test", "Démarre le test runner"],
              ["npm run eject", "Supprime CRA — irréversible !"],
            ].map(([cmd, desc], i) => (
              <tr key={i}><td style={{ ...S.td, fontFamily: "monospace", fontSize: 13, color: "#b5451b" }}>{cmd}</td><td style={S.td}>{desc}</td></tr>
            ))}
          </tbody>
        </table>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>📁 Structure du projet</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Dossier / Fichier</th><th style={S.th}>Rôle</th></tr></thead>
          <tbody>
            {[
              ["node_modules/", "Toutes les dépendances — ne jamais modifier à la main"],
              ["public/", "Fichiers statiques + index.html (la seule page HTML)"],
              ["src/", "❤️ Le cœur : votre code React (99% du temps ici)"],
              ["src/index.js", "Point d'entrée — monte l'app dans #root"],
              ["src/App.js", "Composant racine de votre application"],
              ["package.json", "Carte d'identité du projet (deps, scripts)"],
              ["package-lock.json", "Verrouille les versions exactes — garder dans Git"],
              [".gitignore", "Liste les fichiers à ignorer (node_modules, build…)"],
            ].map(([f, d], i) => (
              <tr key={i}><td style={{ ...S.td, fontFamily: "monospace", fontSize: 12.5, color: "#b5451b" }}>{f}</td><td style={S.td}>{d}</td></tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
  composants: {
    title: "3. Composants & JSX",
    content: (
      <>
        <p style={S.p}>
          Un composant est une <strong>fonction JavaScript qui retourne du JSX</strong>.
          Le JSX est une syntaxe qui ressemble à du HTML mais qui se transforme en appels JavaScript.
        </p>
        <div style={S.code}>{`// Composant minimal
function Salutation() {
  return <h1>Bonjour React !</h1>;
}

export default Salutation;`}</div>
        <div style={S.code}>{`// Utilisation dans App.js
import Salutation from './Salutation';

function App() {
  return (
    <>
      <Salutation />
    </>
  );
}

export default App;`}</div>
        <div style={S.box("#f0f4ff")}>
          <strong>📌 Règles du JSX :</strong><br />
          • Retourner <strong>un seul élément racine</strong> (utilisez <code style={S.inlineCode}>&lt;&gt;&lt;/&gt;</code> pour regrouper)<br />
          • Les attributs HTML deviennent camelCase : <code style={S.inlineCode}>class → className</code>, <code style={S.inlineCode}>for → htmlFor</code><br />
          • Les expressions JavaScript s'écrivent entre accolades : <code style={S.inlineCode}>{`{variable}`}</code>
        </div>
        <Quiz
          question="Qu'est-ce qu'un composant React ?"
          options={["Une page HTML complète", "Une fonction qui retourne du JSX", "Un fichier CSS spécial", "Une balise HTML personnalisée"]}
          correctIndex={1}
          explanation="Un composant est simplement une fonction JavaScript qui retourne du JSX (une description de l'interface)."
        />
      </>
    ),
  },
  props: {
    title: "4. Props — Passer des données",
    content: (
      <>
        <p style={S.p}>
          Les <strong>props</strong> permettent de passer des données d'un composant <strong>parent</strong> vers un composant <strong>enfant</strong>.
          Elles sont <strong>en lecture seule</strong> : l'enfant ne peut pas les modifier.
        </p>
        <div style={S.code}>{`// Parent
function App() {
  return <Carte titre="Clavier" prix={199} />;
}

// Enfant — reçoit les props
function Carte({ titre, prix }) {
  return (
    <div>
      <h2>{titre}</h2>
      <p>Prix : {prix} $</p>
    </div>
  );
}`}</div>
        <DiagramPropsState />
        <div style={S.box("#fff3e0")}>
          <strong>⚠️ Règle d'or :</strong> Les props sont <strong>immuables</strong> dans l'enfant.
          Si vous devez modifier une donnée, utilisez le <strong>state</strong> (voir section suivante).
        </div>
        <Quiz
          question="Que se passe-t-il si un enfant essaie de modifier une prop directement ?"
          options={[
            "La prop change normalement",
            "React affiche une erreur — les props sont en lecture seule",
            "Le parent est automatiquement mis à jour",
            "Rien ne change, mais sans erreur",
          ]}
          correctIndex={1}
          explanation="Les props sont immuables dans l'enfant. Pour modifier des données, il faut passer une fonction callback depuis le parent."
        />
        <ExerciseInteractive
          title="Props multiples avec objet"
          level="easy"
          description="Créez un composant Carte qui reçoit un objet user avec les propriétés name, age, city et les affiche toutes."
          skeleton={`const user = {
  name: "Sara",
  age: 25,
  city: "Montréal"
};

// Dans App.js :
<Carte user={user} />

// Créez le composant Carte.jsx`}
          hint="Utilisez la destructuration : function Carte({ user }) puis accédez à user.name, user.age, user.city"
          solution={`function Carte({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Âge : {user.age}</p>
      <p>Ville : {user.city}</p>
    </div>
  );
}

export default Carte;`}
        />
      </>
    ),
  },
  state: {
    title: "5. State (État) & useState",
    content: (
      <>
        <p style={S.p}>
          Le <strong>state</strong> est l'état interne d'un composant — une donnée qui <strong>peut changer</strong> au fil du temps.
          Chaque fois que le state change, React <strong>re-rend automatiquement</strong> le composant.
        </p>
        <div style={S.code}>{`import { useState } from "react";

function Compteur() {
  // useState retourne [valeur, fonctionDeModification]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`}</div>
        <DiagramRender />
        <div style={S.box("#e8f5e9")}>
          <strong>📌 Comment ça marche :</strong><br />
          1. <code style={S.inlineCode}>useState(0)</code> → crée une variable <code style={S.inlineCode}>count</code> initialisée à 0<br />
          2. <code style={S.inlineCode}>setCount(1)</code> → met à jour la valeur<br />
          3. React détecte le changement → <strong>re-exécute</strong> la fonction du composant<br />
          4. Le nouveau JSX est calculé → l'écran est mis à jour
        </div>
        <Quiz
          question="Qu'est-ce que setCount fait exactement ?"
          options={[
            "Il recharge la page entière",
            "Il modifie la valeur ET déclenche un re-rendu du composant",
            "Il modifie la valeur sans re-rendre",
            "Il crée une nouvelle variable",
          ]}
          correctIndex={1}
          explanation="setCount fait deux choses : mettre à jour la valeur du state ET déclencher un nouveau rendu du composant pour que l'écran soit à jour."
        />
        <ExerciseInteractive
          title="Compteur avec boutons +1 et −1"
          level="easy"
          description="Créez un composant Compteur avec deux boutons : un pour incrémenter et un pour décrémenter. Le nombre ne doit pas descendre en dessous de 0."
          skeleton={`import { useState } from "react";

function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Valeur : {count}</p>
      {/* Ajoutez deux boutons ici */}
    </div>
  );
}

export default Compteur;`}
          hint="Pour empêcher d'aller en dessous de 0, utilisez une condition : setCount(count > 0 ? count - 1 : 0)"
          solution={`import { useState } from "react";

function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Valeur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        −1
      </button>
    </div>
  );
}

export default Compteur;`}
        />
        <ExerciseInteractive
          title="Basculer un élément (toggle)"
          level="medium"
          description="Créez un composant Menu avec un bouton 'Ouvrir / Fermer'. Quand le menu est ouvert, affichez une liste de liens fictifs (Accueil, À propos, Contact). Utilisez un state booléen."
          skeleton={`import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={/* ??? */}>
        {/* Texte conditionnel */}
      </button>
      {/* Affichage conditionnel du menu */}
    </div>
  );
}

export default Menu;`}
          hint="Utilisez isOpen ? ... : ... pour le texte du bouton, et {isOpen && (...)} pour afficher le menu conditionnellement."
          solution={`import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Fermer ✕" : "Ouvrir ☰"}
      </button>
      {isOpen && (
        <ul>
          <li>Accueil</li>
          <li>À propos</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
}

export default Menu;`}
        />
      </>
    ),
  },
  hooks: {
    title: "6. Hooks — useState & useEffect",
    content: (
      <>
        <p style={S.p}>
          Les <strong>Hooks</strong> sont des fonctions spéciales qui permettent d'utiliser des fonctionnalités React
          (état, cycle de vie) <strong>dans les composants fonctionnels</strong>. Ils commencent toujours par <code style={S.inlineCode}>use</code>.
        </p>
        <DiagramHooks />
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>useEffect — Les effets secondaires</div>
        <p style={S.p}>
          <code style={S.inlineCode}>useEffect</code> exécute un bloc de code <strong>après chaque rendu</strong>,
          ou seulement quand certaines valeurs changent (via le tableau de dépendances).
        </p>
        <div style={S.code}>{`import { useState, useEffect } from "react";

function Exemple() {
  const [count, setCount] = useState(0);

  // ① Sans dépendances → s'exécute UNE seule fois (montage)
  useEffect(() => {
    console.log("Composant monté !");
  }, []);

  // ② Avec dépendance → s'exécute quand count change
  useEffect(() => {
    document.title = "Compteur : " + count;
  }, [count]);

  // ③ Sans tableau → s'exécute à chaque rendu
  useEffect(() => {
    console.log("Rendu effectué");
  });

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Syntaxe</th><th style={S.th}>Quand s'exécute</th></tr></thead>
          <tbody>
            {[
              ["useEffect(fn, [])", "Une seule fois — à la montée du composant"],
              ["useEffect(fn, [dep])", "À chaque fois que dep change"],
              ["useEffect(fn)", "À chaque rendu du composant"],
            ].map(([s, d], i) => (
              <tr key={i}><td style={{ ...S.td, fontFamily: "monospace", fontSize: 12.5, color: "#b5451b" }}>{s}</td><td style={S.td}>{d}</td></tr>
            ))}
          </tbody>
        </table>
        <Quiz
          question="useEffect(() => { ... }, []) — Quand ce code s'exécute-t-il ?"
          options={[
            "À chaque rendu du composant",
            "À chaque changement de state",
            "Une seule fois, quand le composant apparaît",
            "Jamais — c'est une erreur de syntaxe",
          ]}
          correctIndex={2}
          explanation="Le tableau vide [] signifie 'pas de dépendances', donc l'effet ne s'exécute qu'une seule fois : à la montée du composant (équivalent de componentDidMount)."
        />
        <ExerciseInteractive
          title="Mettre à jour le titre du tab"
          level="easy"
          description="Créez un composant où chaque changement du compteur met à jour le titre de la page navigateur avec document.title."
          skeleton={`import { useState, useEffect } from "react";

function TitreTab() {
  const [count, setCount] = useState(0);

  // Utilisez useEffect ici pour mettre à jour document.title

  return (
    <div>
      <p>Cliquez le bouton !</p>
      <button onClick={() => setCount(count + 1)}>
        Clics : {count}
      </button>
    </div>
  );
}

export default TitreTab;`}
          hint="useEffect avec [count] comme dépendance. Dans le corps : document.title = 'Clics : ' + count;"
          solution={`import { useState, useEffect } from "react";

function TitreTab() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Clics : " + count;
  }, [count]);

  return (
    <div>
      <p>Cliquez le bouton !</p>
      <button onClick={() => setCount(count + 1)}>
        Clics : {count}
      </button>
    </div>
  );
}

export default TitreTab;`}
        />
        <ExerciseInteractive
          title="Minuterie avec nettoyage"
          level="medium"
          description="Créez un composant Timer qui affiche un compteur qui s'incrémente chaque seconde automatiquement. Quand le composant disparaît, le timer doit s'arrêter (cleanup)."
          skeleton={`import { useState, useEffect } from "react";

function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    // Démarrez un setInterval ici
    // Retournez une fonction de nettoyage (cleanup)
  }, []);

  return <div>Temps écoulé : {secondes}s</div>;
}

export default Timer;`}
          hint="Utilisez setInterval pour incrémenter. La fonction de cleanup doit appeler clearInterval avec l'ID retourné par setInterval."
          solution={`import { useState, useEffect } from "react";

function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondes((prev) => prev + 1);
    }, 1000);

    // Cleanup : arrêter le timer à la démontage
    return () => clearInterval(id);
  }, []);

  return <div>Temps écoulé : {secondes}s</div>;
}

export default Timer;`}
        />
      </>
    ),
  },
  render: {
    title: "7. Le cycle de rendu",
    content: (
      <>
        <p style={S.p}>
          React ne recharge jamais la page. Il <strong>re-exécute la fonction du composant</strong>
          chaque fois que son state ou ses props changent, puis met à jour uniquement ce qui a changé dans le DOM.
        </p>
        <DiagramVirtualDOM />
        <div style={S.box("#f0f4ff")}>
          <strong>📌 Analogie simple :</strong><br />
          🧾 <strong>HTML classique</strong> → on jette toute la page → on en imprime une nouvelle<br />
          🧠 <strong>React</strong> → on garde la page → on gomme juste la ligne modifiée
        </div>
        <Quiz
          question="Pourquoi React utilise un Virtual DOM ?"
          options={[
            "Pour rendre la page plus lente",
            "Pour éviter de toucher au DOM réel à chaque changement — plus rapide",
            "Parce que le DOM réel n'existe pas",
            "Pour permettre la navigation entre pages",
          ]}
          correctIndex={1}
          explanation="Le Virtual DOM permet à React de calculer les différences (diff) puis de n'appliquer que les changements nécessaires au DOM réel, ce qui est beaucoup plus rapide."
        />
        <ExerciseInteractive
          title="Liste avec ajout dynamique"
          level="medium"
          description="Créez une liste de courses. L'utilisateur peut taper un article dans un input et l'ajouter à la liste avec un bouton. Utilisez useState pour gérer l'input et le tableau d'articles."
          skeleton={`import { useState } from "react";

function ListeCourses() {
  const [articles, setArticles] = useState([]);
  const [input, setInput] = useState("");

  const ajouter = () => {
    // Ajoutez l'article à la liste
    // Videz l'input après
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Article…"
      />
      <button onClick={ajouter}>Ajouter</button>
      <ul>
        {/* Affichage avec .map() */}
      </ul>
    </div>
  );
}

export default ListeCourses;`}
          hint="Utilisez setArticles([...articles, input]) pour ajouter. N'oubliez pas la key unique (utilisez l'index ou Date.now())."
          solution={`import { useState } from "react";

function ListeCourses() {
  const [articles, setArticles] = useState([]);
  const [input, setInput] = useState("");

  const ajouter = () => {
    if (input.trim() === "") return;
    setArticles([...articles, { id: Date.now(), texte: input }]);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Article…"
      />
      <button onClick={ajouter}>Ajouter</button>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>{a.texte}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;`}
        />
      </>
    ),
  },
  exercices: {
    title: "8. Exercices progressifs",
    content: (
      <>
        <p style={S.p}>Ces exercices reprennent et complètent ceux du cours. Travaillez-les dans l'ordre — chaque niveau s'appuie sur le précédent.</p>
        <ExerciseInteractive
          title="1 — Premier composant"
          level="easy"
          description="Créez un fichier Hello.jsx qui affiche 'Bonjour React' dans un h1, puis utilisez-le dans App.jsx."
          skeleton={`// Hello.jsx
function Hello() {
  // retournez un h1
}

// ???

// App.jsx
// importez et utilisez Hello`}
          hint="N'oubliez pas export default Hello; et import Hello from './Hello'; dans App.jsx"
          solution={`// Hello.jsx
function Hello() {
  return <h1>Bonjour React</h1>;
}
export default Hello;

// App.jsx
import Hello from './Hello';

function App() {
  return <Hello />;
}
export default App;`}
        />
        <ExerciseInteractive
          title="2 — Props simples"
          level="easy"
          description="Créez un composant User qui reçoit une prop name et affiche 'Bonjour [name]'. Utilisez-le avec name='Ahmed'."
          skeleton={`// User.jsx
function User({ ??? }) {
  return <h2>Bonjour {???}</h2>;
}
export default User;

// App.jsx
<User name="Ahmed" />`}
          hint="La prop se reçoit entre accolades dans les paramètres : function User({ name })"
          solution={`// User.jsx
function User({ name }) {
  return <h2>Bonjour {name}</h2>;
}
export default User;

// App.jsx
import User from './User';

function App() {
  return <User name="Ahmed" />;
}
export default App;`}
        />
        <ExerciseInteractive
          title="3 — Plusieurs props"
          level="easy"
          description="Créez un composant Product avec les props title et price. Affiche 'Produit : [title]' et 'Prix : [price]$'."
          skeleton={`function Product({ title, price }) {
  return (
    <div>
      {/* Affichage */}
    </div>
  );
}

// Utilisation :
<Product title="Clavier" price={200} />`}
          hint="Utilisez {title} et {price} entre accolades dans le JSX pour afficher les valeurs."
          solution={`function Product({ title, price }) {
  return (
    <div>
      <p>Produit : {title}</p>
      <p>Prix : {price}$</p>
    </div>
  );
}

// App.jsx
<Product title="Clavier" price={200} />`}
        />
        <ExerciseInteractive
          title="4 — Objet en prop"
          level="medium"
          description="Passez un objet user = { name, age, country } en prop à un composant UserCard. Affiche les trois infos."
          skeleton={`const user = {
  name: "Sara",
  age: 25,
  country: "Maroc"
};

// App.jsx
<UserCard user={user} />

// UserCard.jsx — à créer`}
          hint="Reçoilez l'objet : function UserCard({ user }) puis accédez avec user.name, user.age, user.country"
          solution={`// UserCard.jsx
function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Âge : {user.age}</p>
      <p>Pays : {user.country}</p>
    </div>
  );
}
export default UserCard;`}
        />
        <ExerciseInteractive
          title="5 — Composants enfant (Profile + Avatar)"
          level="medium"
          description="Créez Profile.jsx qui contient Avatar.jsx. Profile reçoit un objet user, et le passe à Avatar qui affiche le nom."
          skeleton={`// Profile.jsx
function Profile({ user }) {
  return (
    <div>
      <h1>Profil</h1>
      {/* Utilisez Avatar ici */}
    </div>
  );
}

// Avatar.jsx — à créer`}
          hint="Avatar reçoit user comme prop : <Avatar user={user} /> puis affiche user.name"
          solution={`// Avatar.jsx
function Avatar({ user }) {
  return <span>👤 {user.name}</span>;
}
export default Avatar;

// Profile.jsx
import Avatar from './Avatar';

function Profile({ user }) {
  return (
    <div>
      <h1>Profil</h1>
      <Avatar user={user} />
    </div>
  );
}
export default Profile;`}
        />
        <ExerciseInteractive
          title="6 — Liste avec .map()"
          level="medium"
          description="Afficher un tableau de vidéos avec .map(). Chaque élément doit être un composant Video avec une key unique."
          skeleton={`const videos = [
  { id: 1, title: "React intro" },
  { id: 2, title: "Props et State" },
  { id: 3, title: "Hooks en détail" },
];

function VideoList() {
  return (
    <ul>
      {/* Utilisez .map() pour afficher chaque vidéo */}
    </ul>
  );
}`}
          hint="videos.map((video) => <Video key={video.id} title={video.title} />). N'oubliez pas la key !"
          solution={`function Video({ title }) {
  return <li>🎥 {title}</li>;
}

function VideoList() {
  const videos = [
    { id: 1, title: "React intro" },
    { id: 2, title: "Props et State" },
    { id: 3, title: "Hooks en détail" },
  ];

  return (
    <ul>
      {videos.map((video) => (
        <Video key={video.id} title={video.title} />
      ))}
    </ul>
  );
}`}
        />
        <ExerciseInteractive
          title="7 — useState (compteur)"
          level="medium"
          description="Créez Counter.jsx avec un bouton '+' qui incrémente un nombre affiché. Utilisez useState."
          skeleton={`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Nombre : {count}</p>
      {/* Ajoutez un bouton qui appelle setCount */}
    </div>
  );
}`}
          hint="onClick={() => setCount(count + 1)} sur le bouton"
          solution={`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Nombre : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default Counter;`}
        />
        <ExerciseInteractive
          title="8 — Interaction parent → enfant (LikeButton)"
          level="hard"
          description="Le parent garde le state 'liked'. Il passe liked et une fonction toggleLike à l'enfant LikeButton. Le clic sur le bouton change le state du parent."
          skeleton={`import { useState } from "react";

function LikeButton({ liked, onLike }) {
  return (
    <button onClick={onLike}>
      {liked ? "❤️ Aimé" : "🤍 Aimer"}
    </button>
  );
}

function App() {
  const [liked, setLiked] = useState(false);

  return (
    <LikeButton
      liked={liked}
      onLike={/* ??? */}
    />
  );
}`}
          hint="onLike={() => setLiked(!liked)} — vous passez une fonction qui inverse l'état du parent."
          solution={`import { useState } from "react";

function LikeButton({ liked, onLike }) {
  return (
    <button onClick={onLike}>
      {liked ? "❤️ Aimé" : "🤍 Aimer"}
    </button>
  );
}

function App() {
  const [liked, setLiked] = useState(false);

  return (
    <LikeButton
      liked={liked}
      onLike={() => setLiked(!liked)}
    />
  );
}
export default App;`}
        />
        <ExerciseInteractive
          title="9 — Mini projet : VideoList complète"
          level="hard"
          description="Assemblez : VideoList → VideoCard → Thumbnail + LikeButton. Chaque vidéo a: title, description, thumbnail (URL), likes. Le like est géré par un état dans VideoCard."
          skeleton={`// Données
const videos = [
  { id: 1, title: "Intro React", desc: "Les bases", thumb: "🎬", likes: 42 },
  { id: 2, title: "Props & State", desc: "Comment passer des données", thumb: "🎬", likes: 87 },
];

// Composants à créer :
// Thumbnail({ url })
// LikeButton({ count, onLike })
// VideoCard({ video })
// VideoList()`}
          hint="VideoCard garde un state 'likes' initialisé avec video.likes. LikeButton reçoit likes et onLike={() => setLikes(likes+1)}."
          solution={`import { useState } from "react";

const videos = [
  { id: 1, title: "Intro React", desc: "Les bases", thumb: "🎬", likes: 42 },
  { id: 2, title: "Props & State", desc: "Données", thumb: "🎬", likes: 87 },
];

function Thumbnail({ url }) {
  return <span style={{ fontSize: 40 }}>{url}</span>;
}

function LikeButton({ count, onLike }) {
  return (
    <button onClick={onLike}>
      ❤️ {count}
    </button>
  );
}

function VideoCard({ video }) {
  const [likes, setLikes] = useState(video.likes);
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
      <Thumbnail url={video.thumb} />
      <h3>{video.title}</h3>
      <p>{video.desc}</p>
      <LikeButton count={likes} onLike={() => setLikes(likes + 1)} />
    </div>
  );
}

function VideoList() {
  return (
    <div>
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}

export default VideoList;`}
        />
      </>
    ),
  },
  cheatsheet: {
    title: "9. Aide-mémoire (Cheat Sheet)",
    content: (
      <>
        <div style={{ ...S.box("#1e1e1e"), color: "#fff", padding: "18px 22px" }}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, borderBottom: "1px solid #444", paddingBottom: 8 }}>
            📋 React — Aide-mémoire rapide
          </div>
          {[
            { cat: "Composant", items: [
              { k: "function App() { return ... }", v: "Créer un composant fonctionnel" },
              { k: "export default App", v: "Exporter un composant" },
              { k: "<App />", v: "Utiliser un composant" },
              { k: "<>...</>", v: "Fragment — regrouper sans div supplémentaire" },
            ]},
            { cat: "Props", items: [
              { k: "<Comp name=\"Ali\" />", v: "Passer une prop string" },
              { k: "<Comp age={25} />", v: "Passer une prop nombre" },
              { k: "<Comp user={obj} />", v: "Passer un objet" },
              { k: "function Comp({ name })", v: "Recevoir une prop (destructuration)" },
            ]},
            { cat: "State (useState)", items: [
              { k: "const [val, setVal] = useState(0)", v: "Créer un état avec valeur initiale" },
              { k: "setVal(newValue)", v: "Mettre à jour l'état → re-rendu" },
              { k: "setVal(prev => prev + 1)", v: "Mise à jour basée sur la valeur précédente" },
            ]},
            { cat: "Hooks (useEffect)", items: [
              { k: "useEffect(fn, [])", v: "Exécuter une fois (montage)" },
              { k: "useEffect(fn, [dep])", v: "Exécuter quand dep change" },
              { k: "useEffect(fn)", v: "Exécuter à chaque rendu" },
              { k: "return () => cleanup()", v: "Nettoyage à la démontage" },
            ]},
            { cat: "JSX", items: [
              { k: "{variable}", v: "Expression JavaScript dans le JSX" },
              { k: "{condition && <Comp />}", v: "Affichage conditionnel" },
              { k: "{cond ? <A /> : <B />}", v: "Ternaire dans le JSX" },
              { k: "{arr.map(i => <X key={i.id} />)}", v: "Boucle — key obligatoire !" }, // eslint-disable-line
              { k: "className", v: "Attribut class en JSX" },
              { k: "onClick={fn}", v: "Événement clic" },
              { k: "onChange={(e) => ...}", v: "Événement changement (input)" },
            ]},
          ].map((section, si) => (
            <div key={si} style={S.cheatSection}>
              <div style={{ fontSize: 12, color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                {section.cat}
              </div>
              {section.items.map((item, ii) => (
                <div key={ii} style={S.cheatRow}>
                  <div style={{ ...S.cheatKey, background: "#2a2a2a" }}>{item.k}</div>
                  <div style={{ ...S.cheatVal, color: "#ccc" }}>{item.v}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>🧠 Questions à se poser à chaque exercice</div>
          <table style={S.table}>
            <tbody>
              {[
                ["1️⃣", "Où est la donnée ?", "Dans quel composant est-elle définie ?"],
                ["2️⃣", "Qui l'utilise ?", "Quel composant a besoin de cette donnée pour s'afficher ?"],
                ["3️⃣", "Qui la modifie ?", "State (mutable) ou Props (immuable) ?"],
              ].map(([n, q, a], i) => (
                <tr key={i}>
                  <td style={{ ...S.td, fontSize: 18, width: 30 }}>{n}</td>
                  <td style={{ ...S.td, fontWeight: 600 }}>{q}</td>
                  <td style={S.td}>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
};

// ─── MAIN APP ────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("intro");
  const keys = Object.keys(sections);

  return (
    <div style={S.root}>
      <div style={S.hero}>
          <p className="react-title">
              <span className="react-logo">⚛️</span>
              Guide Complet React --- Cours 420-TT4-AS --- Collège LaSalle --- Mourad Sehboub!

          </p>
        <div style={S.heroTitle}>Composants • Props • State • Hooks • Rendu • Exercices</div>
      </div>
      <div style={S.nav}>
        {keys.map((k) => (
          <button key={k} style={S.navBtn(active === k)} onClick={() => setActive(k)}>
            {sections[k].title.replace(/^\d+\.\s*/, "")}
          </button>
        ))}
      </div>
      <div style={S.section}>
        <h2 style={S.h2}>{sections[active].title}</h2>
        {sections[active].content}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32, paddingTop: 16, borderTop: "1px solid #e0ddd6" }}>
          <button
            style={{ ...S.btn, background: keys.indexOf(active) > 0 ? "#1e1e1e" : "#ccc", cursor: keys.indexOf(active) > 0 ? "pointer" : "default" }}
            onClick={() => { if (keys.indexOf(active) > 0) setActive(keys[keys.indexOf(active) - 1]); }}
          >◀ Précédent</button>
          <button
            style={{ ...S.btn, background: keys.indexOf(active) < keys.length - 1 ? "#1e1e1e" : "#ccc", cursor: keys.indexOf(active) < keys.length - 1 ? "pointer" : "default" }}
            onClick={() => { if (keys.indexOf(active) < keys.length - 1) setActive(keys[keys.indexOf(active) + 1]); }}
          >Suivant ▶</button>
        </div>
      </div>
    </div>
  );
}
