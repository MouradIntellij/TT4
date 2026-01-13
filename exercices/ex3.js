const querystring = require('querystring');

function handleEx3(req, res) {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>Exercice 3 — POST</title>
                <style>
                    body { font-family: Arial; max-width: 600px; margin: 50px auto; }
                    input, button { width: 100%; padding: 10px; margin-top: 10px; }
                    button { background: #FF9800; color: white; border: none; cursor: pointer; }
                </style>
            </head>
            <body>
                <h1>🟢 Exercice 3 — POST</h1>
                <form method="POST" action="/ex3">
                    <input type="text" name="prenom" placeholder="Votre prénom" required>
                    <input type="text" name="message" placeholder="Votre message" required>
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
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <!DOCTYPE html>
                <html lang="fr">
                <body style="font-family: Arial; max-width: 600px; margin: 50px auto;">
                    <h1>✅ Message reçu</h1>
                    <p><strong>Prénom :</strong> ${data.prenom}</p>
                    <p><strong>Message :</strong> ${data.message}</p>
                    <a href="/ex3">← Recommencer</a><br>
                    <a href="/chapitre1.html">← Retour au chapitre 1</a>
                </body>
                </html>
            `);
        });
    }
}

module.exports = { handleEx3 };
