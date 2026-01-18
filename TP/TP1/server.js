const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

// ===============================
// DONNÉES EN MÉMOIRE
// ===============================
const technos = [];

// ===============================
// FONCTION ASYNCHRONE
// ===============================
function saveTechno(techno) {
    return new Promise((resolve) => {
        // Simulation d'un délai (comme une requête BDD)
        setTimeout(() => {
            technos.push(techno);
            console.log(`✅ Technologie ajoutée: ${techno.nom} (${techno.categorie})`);
            resolve();
        }, 1000);
    });
}

// ===============================
// FONCTION UTILITAIRE
// ===============================
function render(res, file, data = {}) {
    const filePath = path.join(__dirname, 'views', file);
    let html = fs.readFileSync(filePath, 'utf8');

    // Remplacement simple {{variable}}
    for (const key in data) {
        html = html.replace(`{{${key}}}`, data[key]);
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
}

// ===============================
// SERVEUR
// ===============================
const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    const query = querystring.parse(parsedUrl.query);

    console.log(`${req.method} ${pathname}`);

    // ===============================
    // FICHIER CSS (Tailwind)
    // ===============================
    if (req.method === 'GET' && pathname === '/output.css') {
        const cssPath = path.join(__dirname, 'public', 'output.css');

        if (!fs.existsSync(cssPath)) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('CSS not found');
        }

        const css = fs.readFileSync(cssPath, 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(css);
        return;
    }

    // ===============================
    // /
    // ===============================
    if (req.method === 'GET' && pathname === '/') {
        return render(res, 'home.html');
    }

    // ===============================
    // /hello
    // ===============================
    if (req.method === 'GET' && pathname === '/hello') {
        const nom = query.nom || 'visiteur';
        return render(res, 'hello.html', { nom });
    }

    // ===============================
    // /add (GET)
    // ===============================
    if (req.method === 'GET' && pathname === '/add') {
        return render(res, 'form.html');
    }

    // ===============================
    // /add (POST)
    // ===============================
    if (req.method === 'POST' && pathname === '/add') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            const data = querystring.parse(body);
            const { nom, categorie } = data;

            // Validation
            if (!nom || !categorie) {
                return render(res, 'error.html', {
                    message: 'Tous les champs sont obligatoires !'
                });
            }

            // Sauvegarde asynchrone
            await saveTechno({ nom, categorie });

            // Redirection
            res.writeHead(302, { Location: '/list' });
            res.end();
        });
        return;
    }

    // ===============================
    // /list
    // ===============================
    if (req.method === 'GET' && pathname === '/list') {
        let items = '';

        technos.forEach(t => {
            // Couleurs selon la catégorie
            const colors = {
                'Frontend': 'bg-blue-100 text-blue-800 border-blue-300',
                'Backend': 'bg-green-100 text-green-800 border-green-300',
                'Base de données': 'bg-purple-100 text-purple-800 border-purple-300',
                'DevOps': 'bg-orange-100 text-orange-800 border-orange-300',
                'Mobile': 'bg-pink-100 text-pink-800 border-pink-300',
                'IA/ML': 'bg-indigo-100 text-indigo-800 border-indigo-300',
                'Cloud': 'bg-cyan-100 text-cyan-800 border-cyan-300',
                'Autre': 'bg-gray-100 text-gray-800 border-gray-300'
            };

            const colorClass = colors[t.categorie] || colors['Autre'];

            items += `
                <li class="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span class="font-semibold text-gray-800">${t.nom}</span>
                    </div>
                    <span class="px-3 py-1 ${colorClass} rounded-full text-sm font-medium border">
                        ${t.categorie}
                    </span>
                </li>
            `;
        });

        return render(res, 'list.html', { items });
    }

    // ===============================
    // API JSON
    // ===============================
    if (req.method === 'GET' && pathname === '/api/technos') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' // CORS pour permettre les tests
        });
        return res.end(JSON.stringify(technos, null, 2));
    }

    // ===============================
    // 404
    // ===============================
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Page non trouvée</title>
            <link rel="stylesheet" href="/output.css">
        </head>
        <body class="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-9xl font-bold text-gray-300">404</h1>
                <p class="text-2xl text-gray-600 mb-8">Page non trouvée</p>
                <a href="/" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Retour à l'accueil
                </a>
            </div>
        </body>
        </html>
    `);
});

// ===============================
// LANCEMENT DU SERVEUR
// ===============================
const PORT = 3000;
server.listen(PORT, () => {
    console.log('╔══════════════════════════════════════╗');
    console.log('║  🚀 Serveur Node.js lancé !          ║');
    console.log('║                                      ║');
    console.log(`║  👉 http://localhost:${PORT}            ║`);
    console.log('║                                      ║');
    console.log('║  Routes disponibles:                 ║');
    console.log('║  • GET  /                            ║');
    console.log('║  • GET  /hello?nom=...               ║');
    console.log('║  • GET  /add                         ║');
    console.log('║  • POST /add                         ║');
    console.log('║  • GET  /list                        ║');
    console.log('║  • GET  /api/technos                 ║');
    console.log('╚══════════════════════════════════════╝');
});