// ===============================
// EXERCICE 7 — FORMULAIRE ET VALIDATION
// ===============================

function handleEx7(req, res) {
    const querystring = require('querystring');

    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(`
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>Exercice 7 — Formulaire</title>
                <style>
                    body { font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; background: #f0fff0; border-radius: 8px; }
                    input, button { width: 100%; padding: 10px; margin-top: 10px; border-radius: 4px; border: 1px solid #ccc; }
                    button { background: #32cd32; color: white; border: none; cursor: pointer; font-weight: bold; }
                    button:hover { background: #228b22; }
                    .error { color: red; }
                </style>
            </head>
            <body>
                <h1>✏️ Exercice 7 — Formulaire</h1>
                <form method="POST" action="/ex7">
                    <input type="text" name="prenom" placeholder="Prénom" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <button type="submit">Envoyer</button>
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
            let message = '';
            if (!data.email.includes('@')) message = '<p class="error">Email invalide !</p>';
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(`
                <!DOCTYPE html>
                <html lang="fr">
                <head><meta charset="UTF-8"><title>Exercice 7 — Résultat</title></head>
                <body style="font-family: Arial; max-width: 600px; margin:50px auto;">
                    <h1>Résultat formulaire</h1>
                    ${message}
                    <p>Prénom : ${data.prenom}</p>
                    <p>Email : ${data.email}</p>
                    <p><a href="/ex7">← Recommencer</a></p>
                    <p><a href="/chapitre1.html">← Retour au chapitre 1</a></p>
                </body>
                </html>
            `);
        });
    }
}

module.exports = { handleEx7 };
