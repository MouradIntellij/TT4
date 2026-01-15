// exercices/ex2.js

function getEx2Html(pathname = '/ex2') {

    let contenu = `
        <p>Clique sur un lien pour naviguer.</p>
    `;

    if (pathname === '/ex2/accueil') {
        contenu = `
            <h2>🏠 Accueil</h2>
            <p>Le serveur a reconnu la route <strong>/ex2/accueil</strong>.</p>
        `;
    }
    else if (pathname === '/ex2/info') {
        contenu = `
            <h2>ℹ️ Info</h2>
            <p>Le serveur affiche la page INFO.</p>
        `;
    }
    else if (pathname === '/ex2/aide') {
        contenu = `
            <h2>❓ Aide</h2>
            <p>Besoin d’aide ?</p>
        `;
    }

    return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exercice 2 — Routage</title>
    <style>
        body { font-family: Arial; max-width: 700px; margin: 50px auto; }
        nav a {
            display: inline-block;
            padding: 10px 15px;
            margin-right: 5px;
            background: #2196F3;
            color: white;
            text-decoration: none;
            border-radius: 4px;
        }
        .box {
            margin-top: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            background: #f9f9f9;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<h1>🟢 Exercice 2 — Routage</h1>

<p>
Une route correspond à un <strong>chemin dans l’URL</strong>.
</p>

<nav>
    <a href="/ex2/accueil">Accueil</a>
    <a href="/ex2/info">Info</a>
    <a href="/ex2/aide">Aide</a>
</nav>

<div class="box">
    ${contenu}
</div>

<p><a href="/chapitre1.html">← Retour accueil</a></p>

</body>
</html>
`;
}

module.exports = { getEx2Html };
