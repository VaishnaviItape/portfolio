import React from 'react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', marginTop: '4rem', background: 'white' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <p>© {new Date().getFullYear()} Vaishnavi Itape.</p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
