import React from 'react';

const UnderConstruction = () => {
    return (
        <div style={styles.container}>
            <img src="https://reactjs.org/logo-og.png" alt="React Logo" style={styles.logo} />
            <h1>Cette page est en construction</h1>
            <p>Revenez bientôt !</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    logo: {
        width: '150px',
        marginBottom: '20px',
    }
};

export default UnderConstruction;
