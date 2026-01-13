// ===============================
// EXERCICE 6 - ASYNCHRONE & PROMESSES
// ===============================

function handleEx6(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    // HTML attractif avec bouton pour "récupérer des données"
    res.end(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Exercice 6 — Asynchrone</title>
            <style>
                body { font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; background: #fff0f5; border-radius: 8px; }
                button { padding: 10px 20px; margin-top: 10px; background: #ff69b4; color: white; border: none; cursor: pointer; font-weight: bold; }
                button:hover { background: #ff1493; }
                pre { background: #f4f4f4; padding: 10px; border-radius: 4px; }
            </style>
        </head>
        <body>
            <h1>⏳ Exercice 6 — Asynchrone</h1>
            <p>Clique sur le bouton pour récupérer des données (simulées avec Promise et setTimeout)</p>
            <button onclick="fetchData()">Récupérer données</button>
            <pre id="result"></pre>

            <script>
                function fetchData() {
                    document.getElementById('result').textContent = 'Chargement...';
                    new Promise((resolve) => {
                        setTimeout(() => resolve(['Node.js', 'React', 'API', 'Async/Await']), 1500);
                    }).then(data => {
                        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
                    });
                }
            </script>

            <p><a href="/chapitre1.html">← Retour au chapitre 1</a></p>
        </body>
        </html>
    `);
}

module.exports = { handleEx6 };
