// exercices/ex4.js
const querystring = require('querystring');

// Fonction pour échapper le HTML (sécurité minimale)
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Fonction principale
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
                <title>Exercice 4 — Formulaire POST</title>
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
                <p>🔹 Ce formulaire utilise la méthode <strong>POST</strong> pour envoyer vos données au serveur. 
                Le serveur reçoit ces informations et vous les renvoie pour que vous puissiez les voir.</p>
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

            // HTML échappé pour sécurité
            const prenom = escapeHtml(data.prenom);
            const message = escapeHtml(data.message);

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                    <meta charset="UTF-8">
                    <title>Message reçu</title>
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
                        a {
                            display: inline-block;
                            margin-top: 15px;
                            text-decoration: none;
                            color: #2196F3;
                        }
                    </style>
                </head>
                <body>
                    <h1>✅ Message reçu</h1>
                    <p><strong>Prénom :</strong> ${prenom}</p>
                    <p><strong>Message :</strong> ${message}</p>
                    <p>💡 Vous venez de voir comment les données POST sont envoyées et traitées côté serveur.</p>
                    <a href="/ex4">← Recommencer</a><br>
                    <a href="/public/chapitre1.html">← Retour au chapitre 1</a>
                </body>
                </html>
            `);
        });
    }

        // ===============================
        // AUTRE MÉTHODE → ERREUR
    // ===============================
    else {
        res.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>405 — Méthode non autorisée</h1><p><a href="/ex4">← Retour</a></p>');
    }
}

module.exports = { handleEx4 };
