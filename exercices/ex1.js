// exercices/ex1.js
function getEx1Html(nom, age) {
    return `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Exercice 1 — Querystring</title>

<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>

</head>
<body class="bg-slate-100 min-h-screen flex items-center justify-center">

<div class="bg-white w-full max-w-xl p-8 rounded-xl shadow-lg">
    <h1 class="text-2xl font-bold text-green-600 mb-4">
        🟢 Exercice 1 — Querystring
    </h1>

    <p class="text-gray-600 mb-6 text-sm">
        Complète le formulaire ci-dessous.  
        Les données seront envoyées via l’URL (<strong>méthode GET</strong>).
    </p>

    <!-- Formulaire -->
    <form method="GET" class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700">
                Nom
            </label>
            <input
                type="text"
                name="nom"
                placeholder="Ex: Ali"
                class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
            >
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">
                Âge
            </label>
            <input
                type="number"
                name="age"
                placeholder="Ex: 25"
                class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
            >
        </div>

        <button
            type="submit"
            class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
            Envoyer
        </button>
    </form>

    <!-- Résultat -->
    <div class="mt-6 p-4 rounded-md bg-green-50 border border-green-200">
        ${
        nom && age
            ? `
                <p class="text-green-800">
                    Bonjour <strong>${nom}</strong> 🎉 <br>
                    Vous avez <strong>${age}</strong> ans.
                </p>
                <p class="text-xs text-green-700 mt-2">
                    Ces données proviennent de la querystring de l’URL.
                </p>
                `
            : `
                <p class="text-gray-500 text-sm">
                    Aucun paramètre détecté pour l’instant.
                </p>
                `
    }
    </div>

    <a href="/chapitre1.html" class="inline-block mt-6 text-sm text-green-600 hover:underline">
        ← Retour accueil
    </a>
</div>

</body>
</html>
`;
}

module.exports = { getEx1Html };
