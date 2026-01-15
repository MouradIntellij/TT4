// ===============================
// server.js
// ===============================

const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// ===============================
// IMPORT DES EXERCICES
// ===============================
const { getEx1Html } = require('./exercices/ex1.js');
const { getEx2Html } = require('./exercices/ex2.js');
const { handleEx3 } = require('./exercices/ex3.js');
const { handleEx4 } = require('./exercices/ex4.js');
const { handleEx5 } = require('./exercices/ex5.js');
const { handleEx6 } = require('./exercices/ex6.js');
const { handleEx7 } = require('./exercices/ex7.js');
const { handleEx8 } = require('./exercices/ex8.js');


const PORT = 3001;

// ===============================
// CRÉATION DU SERVEUR
// ===============================
const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    // ===============================
    // EXERCICE 1 — QUERY STRING
    // ===============================
    if (pathname === '/ex1') {
        const nom = parsedUrl.searchParams.get('nom');
        const age = parsedUrl.searchParams.get('age');

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(getEx1Html(nom, age));
    }

        // ===============================
        // EXERCICE 2 — ROUTAGE
    // ===============================
    else if (pathname.startsWith('/ex2')) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(getEx2Html(pathname));
    }

        // ===============================
        // EXERCICE 3 — POST (FORMULAIRE)
    // ===============================
    else if (pathname === '/ex3') {
        handleEx3(req, res);
    }

        // ===============================
        // EXERCICE 4 — POST + SÉCURITÉ
    // ===============================
    else if (pathname === '/ex4') {
        handleEx4(req, res);
    }

        // ===============================
        // EXERCICE 5 — TABLEAUX & OBJETS
    // ===============================
    else if (pathname === '/ex5') {
        handleEx5(req, res);
    }

        // ===============================
        // EXERCICE 6 — ASYNCHRONE
    // ===============================
    else if (pathname === '/ex6') {
        handleEx6(req, res);
    }

        // ===============================
        // EXERCICE 7 — VALIDATION FORMULAIRE
    // ===============================
    else if (pathname === '/ex7') {
        handleEx7(req, res);
    }

        // ===============================
        // EXERCICE 8 — API JSON
    // ===============================
    else if (pathname === '/ex8' || pathname === '/api/technos') {
        handleEx8(req, res);
    }

        // ===============================
        // FICHIERS STATIQUES (public/)
    // ===============================
    else {
        const filePath = path.join(
            __dirname,
            'public',
            pathname === '/' ? 'index.html' : pathname
        );

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`
                    <h1>404 — Page non trouvée</h1>
                    <p><a href="/">← Retour accueil</a></p>
                `);
            } else {
                const ext = path.extname(filePath).toLowerCase();
                let contentType = 'text/html; charset=utf-8';

                if (ext === '.css') contentType = 'text/css';
                else if (ext === '.js') contentType = 'application/javascript';
                else if (ext === '.png') contentType = 'image/png';
                else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
                else if (ext === '.svg') contentType = 'image/svg+xml';

                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
    }
});

// ===============================
// LANCEMENT DU SERVEUR
// ===============================
server.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
