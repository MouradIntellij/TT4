// ===============================
// EXERCICE 4 - FORMULAIRE POST
// ===============================

const querystring = require('querystring');

// Fonction pour gérer l'exercice 4
function handleEx4(req, res) {

    // ===============================
    // MÉTHODE GET → AFFICHER LE FORMULAIRE
    // ===============================
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>Formulaire POST</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 600px;
                        margin: 50px auto;
                        background: #f9f9f9;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    }
                    input, button {
                        width: 100%;
                        padding: 10px;
                        margin-top: 10px;
                        border-radius: 4px;
                        border: 1px solid #ccc;
                        box-sizing: border-box;
                    }
                    button {
                        background: #f5576c;
                        color: white;
                        border: none;
                        cursor: pointer;
                        font-weight: bold;
                    }
                    button:hover {
                        background: #d94458;
                    }
                </style>
            </head>
            <body>
                <h1>📨 Envoyer un message</h1>
                <form method="POST" action="/ex4">
                    <input type="text" name="prenom" placeholder="Votre prénom" required>
                    <input type="text" name="message" placeholder="Votre message" required>
                    <button type="submit">Envoyer</button>
                </form>
                <p><a href="/chapitre1.html">← Retour au chapitre 1</a></p>
            </body>
            </html>
        `);
    }

        // ===============================
        // MÉTHODE POST → TRAITER LES DONNÉES
    // ===============================
    else if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => body += chunk.toString());

        req.on('end', () => {
            const data = querystring.parse(body);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <!DOCTYPE html>
                <html lang="fr">
                <body style="font-family: Arial; max-width: 600px; margin: 50px auto; background: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <h1>✅ Message reçu</h1>
                    <p><strong>Prénom :</strong> ${data.prenom}</p>
                    <p><strong>Message :</strong> ${data.message}</p>
                    <a href="/ex4">← Recommencer</a>
                    <br>
                    <a href="/chapitre1.html">← Retour au chapitre 1</a>
                </body>
                </html>
            `);
        });
    }

}

module.exports = { handleEx4 };
