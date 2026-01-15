// ===============================
// EXERCICE 5 - TABLEAUX & OBJETS
// ===============================

function handleEx5(req, res) {
    const querystring = require('querystring');
    let fruits = ['🍎 Pomme', '🍌 Banane', '🍇 Raisin', '🍍 Ananas'];

    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>Exercice 5 — Tableaux & Objets</title>
                <style>
                    body { font-family: Arial; max-width: 600px; margin: 50px auto; background: #f0f8ff; padding: 20px; border-radius: 8px; }
                    input, button { width: 100%; padding: 10px; margin-top: 10px; border-radius: 4px; border: 1px solid #ccc; }
                    button { background: #4CAF50; color: white; border: none; cursor: pointer; font-weight: bold; }
                    button:hover { background: #45a049; }
                    ul { padding-left: 20px; }
                </style>
            </head>
            <body>
                <h1>🍉 Exercice 5 — Tableaux & Objets</h1>
                <p>Liste de fruits :</p>
                <ul>
                    ${fruits.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <form method="POST" action="/ex5">
                    <input type="text" name="fruit" placeholder="Ajouter un fruit avec emoji" required>
                    <button type="submit">Ajouter</button>
                </form>
                <p><a href="/chapitre1.html">← Retour au chapitre 1</a></p>
            </body>
            </html>
        `);
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            const data = querystring.parse(body);
            fruits.push(data.fruit || '🥝 Kiwi'); // Ajouter fruit ou un par défaut

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                    <meta charset="UTF-8">
                    <title>Exercice 5 — Tableaux & Objets</title>
                    <style>
                        body { font-family: Arial; max-width: 600px; margin: 50px auto; background: #f0f8ff; padding: 20px; border-radius: 8px; }
                        input, button { width: 100%; padding: 10px; margin-top: 10px; border-radius: 4px; border: 1px solid #ccc; }
                        button { background: #4CAF50; color: white; border: none; cursor: pointer; font-weight: bold; }
                        button:hover { background: #45a049; }
                        ul { padding-left: 20px; }
                    </style>
                </head>
                <body>
                    <h1>✅ Fruit ajouté !</h1>
                    <ul>
                        ${fruits.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                    <form method="POST" action="/ex5">
                        <input type="text" name="fruit" placeholder="Ajouter un fruit avec emoji" required>
                        <button type="submit">Ajouter</button>
                    </form>
                    <p><a href="/ex5">← Recommencer</a></p>
                    <p><a href="/chapitre1.html">← Retour au chapitre 1</a></p>
                </body>
                </html>
            `);
        });
    }
}

module.exports = { handleEx5 };
