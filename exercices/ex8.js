// ===============================
// EXERCICE 8 — API JSON
// ===============================

// Données simulées (comme une mini base de données)
const technologies = [
    { id: 1, nom: 'Node.js', type: 'Backend' },
    { id: 2, nom: 'React', type: 'Frontend' },
    { id: 3, nom: 'MongoDB', type: 'Database' }
];

function handleEx8(req, res) {

    // ===============================
    // API JSON → /api/technos
    // ===============================
    if (req.url === '/api/technos') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(technologies, null, 2));
    }

        // ===============================
        // PAGE HTML → /ex8
    // ===============================
    else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>Exercice 8 — API JSON</title>
                <style>
                    body {
                        font-family: Arial;
                        max-width: 700px;
                        margin: 50px auto;
                        background: #eef6ff;
                        padding: 20px;
                        border-radius: 8px;
                    }
                    button {
                        padding: 10px 20px;
                        background: #2196F3;
                        color: white;
                        border: none;
                        cursor: pointer;
                        font-weight: bold;
                    }
                    pre {
                        background: #fff;
                        padding: 15px;
                        margin-top: 15px;
                        border-radius: 4px;
                    }
                </style>
            </head>
            <body>
                <h1>🟠 Exercice 8 — API JSON</h1>
                <p>
                    Cette page consomme une <strong>API JSON</strong> créée avec Node.js.
                    Clique sur le bouton pour récupérer les données.
                </p>

                <button onclick="loadData()">Charger les données</button>

                <pre id="result"></pre>

                <script>
                    function loadData() {
                        document.getElementById('result').textContent = 'Chargement...';

                        fetch('/api/technos')
                            .then(res => res.json())
                            .then(data => {
                                document.getElementById('result').textContent =
                                    JSON.stringify(data, null, 2);
                            });
                    }
                </script>

                <p><a href="/chapitre1.html">← Retour au chapitre 1</a></p>
            </body>
            </html>
        `);
    }
}

module.exports = { handleEx8 };
