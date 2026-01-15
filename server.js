// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Import des exercices
const { getEx1Html } = require('./exercices/ex1.js');
const { getEx2Html } = require('./exercices/ex2.js');
const { getEx3Html } = require('./exercices/ex3.js');
const { getEx4Html } = require('./exercices/ex4.js');
// Ajouter ex5 → ex8 de la même manière
// const { getEx5Html } = require('./exercices/ex5.js');
// ...

const PORT = 3001;

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    // 1️⃣ Page d'accueil / index
    if (pathname === '/' || pathname === '/index.html') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>Erreur lecture index.html</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data);
            }
        });
    }

    // 2️⃣ Exercices
    else if (pathname === '/ex1') {
        const nom = parsedUrl.searchParams.get('nom');
        const age = parsedUrl.searchParams.get('age');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(getEx1Html(nom, age));
    }
    else if (pathname.startsWith('/ex2')) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(getEx2Html(pathname));
    }

    else if (pathname === '/ex3') {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk.toString());
            req.on('end', () => {
                const data = Object.fromEntries(new URLSearchParams(body));
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(getEx3Html(data));
            });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(getEx3Html());
        }
    }
    else if (pathname === '/ex4') {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk.toString());
            req.on('end', () => {
                const data = Object.fromEntries(new URLSearchParams(body));
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(getEx4Html(data));
            });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(getEx4Html());
        }
    }

    // 3️⃣ Fichiers statiques (CSS, JS, images…) dans public/
    else if (pathname.startsWith('/public/')) {
        const filePath = path.join(__dirname, pathname);
        const ext = path.extname(filePath).toLowerCase();

        let contentType = 'application/octet-stream';
        if (ext === '.css') contentType = 'text/css';
        else if (ext === '.js') contentType = 'application/javascript';
        else if (ext === '.html') contentType = 'text/html';
        else if (ext === '.png') contentType = 'image/png';
        else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.svg') contentType = 'image/svg+xml';

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>Fichier non trouvé</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
    }

    // 4️⃣ 404 par défaut
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 — Page non trouvée</h1><p><a href="/">← Retour accueil</a></p>');
    }
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} déjà utilisé. Essaie un autre port.`);
    } else {
        console.error(err);
    }
});

server.listen(PORT, () => {
    console.log(`Serveur TP complet démarré sur http://localhost:${PORT}`);
});
