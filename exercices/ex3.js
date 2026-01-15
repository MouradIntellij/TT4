// exercices/ex3.js
const querystring = require('querystring');

function handleEx3(req, res) {

    // 1️⃣ CAS 1 : GET → afficher le formulaire
    if (req.method === 'GET') {

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exercice 3 — Formulaire POST</title>
    <style>
        body { font-family: Arial; max-width: 700px; margin: 50px auto; }
        input, button { width: 100%; padding: 10px; margin-top: 10px; }
        button { background: #FF9800; color: white; border: none; cursor: pointer; }
        .info { background: #f5f5f5; padding: 15px; margin-bottom: 20px; border-left: 4px solid #FF9800; }
    </style>
</head>
<body>

<h1>🟢 Exercice 3 — Envoi de données (POST)</h1>

<div class="info">
    <p><strong>Objectif :</strong> Comprendre comment un formulaire envoie des données au serveur.</p>
    <ul>
        <li>La méthode utilisée est <strong>POST</strong></li>
        <li>Les données ne sont <strong>pas visibles</strong> dans l’URL</li>
    </ul>
</div>

<form method="POST" action="/ex3">
    <label>Prénom</label>
    <input type="text" name="prenom" placeholder="Ex: Ali" required>

    <label>Message</label>
    <input type="text" name="message" placeholder="Ex: Bonjour serveur !" required>

    <button type="submit">Envoyer au serveur</button>
</form>

<p><a href="/">← Retour accueil</a></p>

</body>
</html>
        `);
    }

    // 2️⃣ CAS 2 : POST → recevoir les données
    else if (req.method === 'POST') {

        let body = '';

        // Les données arrivent en morceaux
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Toutes les données ont été reçues
        req.on('end', () => {

            // Transformation en objet JavaScript
            const data = querystring.parse(body);

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Données reçues</title>
</head>
<body style="font-family: Arial; max-width: 700px; margin: 50px auto;">

<h1>✅ Données reçues par le serveur</h1>

<p><strong>Prénom :</strong> ${data.prenom}</p>
<p><strong>Message :</strong> ${data.message}</p>

<hr>

<h3>🔍 Ce que le serveur a reçu</h3>
<pre>${body}</pre>

<h3>🧠 Ce que le serveur a compris</h3>
<pre>${JSON.stringify(data, null, 2)}</pre>

<p>
    <a href="/ex3">← Recommencer</a><br>
    <a href="/">← Retour accueil</a>
</p>

</body>
</html>
            `);
        });
    }
}

module.exports = { handleEx3 };
