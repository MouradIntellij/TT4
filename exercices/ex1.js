// exercices/ex1.js
function getEx1Html(nom, age) {
    return `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Exercice 1 — Querystring</title>
<style>
body { font-family: Arial, sans-serif; background: #f0f4f8; margin: 0; padding: 0; }
.container { max-width: 700px; margin: 50px auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
h1 { color: #4caf50; }
.result { background: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 20px; font-size: 1.1em; }
.instructions { font-size: 0.9em; color: #555; margin-top: 10px; }
a.button { display: inline-block; margin-top: 20px; padding: 10px 15px; background: #4caf50; color: white; text-decoration: none; border-radius: 5px; }
a.button:hover { background: #45a049; }
code { background: #eee; padding: 2px 5px; border-radius: 3px; }
</style>
</head>
<body>
<div class="container">
<h1>🟢 Exercice 1 — Querystring</h1>

<p class="instructions">
Cet exercice te montre comment passer des paramètres via l'URL et les lire côté serveur.
Par exemple : <code>?nom=Ali&age=25</code>
</p>

<div class="result">
${
        nom && age
            ? `Bonjour <strong>${nom}</strong> ! 🎉<br>Vous avez <strong>${age}</strong> ans.<br><em>Ceci vient des paramètres passés dans l'URL.</em>`
            : `Aucun paramètre détecté.<br>Ajoute <code>?nom=TonNom&age=TonAge</code> à l’URL pour voir le résultat.`
    }
</div>

<a class="button" href="/">← Retour accueil</a>
</div>
</body>
</html>
`;
}

module.exports = { getEx1Html };
