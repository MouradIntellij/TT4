import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function HtmlViewer() {
    const { filename } = useParams();
    const [htmlContent, setHtmlContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`/${filename}.html`)
            .then(response => response.text())
            .then(html => {
                setHtmlContent(html);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur:', error);
                setLoading(false);
            });
    }, [filename]);

    if (loading) return <div>Chargement...</div>;

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}