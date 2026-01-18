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
        setTimeout(() => {
            technos.push(techno);
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

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}

// ===============================
// SERVEUR
// ===============================
const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;


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





    const query = querystring.parse(parsedUrl.query);




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

            if (!nom || !categorie) {
                return render(res, 'error.html', {
                    message: 'Tous les champs sont obligatoires'
                });
            }

            await saveTechno({ nom, categorie });

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
            items += `<li>${t.nom} — ${t.categorie}</li>`;
        });

        return render(res, 'list.html', { items });
    }

    // ===============================
    // API JSON
    // ===============================
    if (req.method === 'GET' && pathname === '/api/technos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(technos));
    }

    // ===============================
    // 404
    // ===============================
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page non trouvée</h1>');
});

// ===============================
server.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000');
});
