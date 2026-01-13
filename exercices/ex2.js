function handleEx2(req, res) {
    const path = req.url.split('?')[0];

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Exercice 2 — Routage</title>
            <style>
                body { font-family: Arial; max-width: 600px; margin: 50px auto; }
                button { padding: 10px 20px; margin: 5px; cursor: pointer; background: #2196F3; color: white; border: none; border-radius: 4px;}
            </style>
        </head>
        <body>
            <h1>🟢 Exercice 2 — Routage</h1>
            <p>Cliquez sur un bouton pour naviguer :</p>
            <button onclick="window.location.href='/ex2?route=accueil'">Accueil</button>
            <button onclick="window.location.href='/ex2?route=info'">Info</button>
            <button onclick="window.location.href='/ex2?route=aide'">Aide</button>
            ${path.includes('route=') ? `<h2>Route choisie : ${path.split('=')[1]}</h2>` : ''}
            <p><a href="/chapitre1.html">← Retour au chapitre 1</a></p>
        </body>
        </html>
    `);
}

module.exports = { handleEx2 };
