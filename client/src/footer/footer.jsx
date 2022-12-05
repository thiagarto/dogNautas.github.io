import React from 'react';
import styles from './footer.module.css';

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.site_footer}>
                <div className={styles.copyright}>
                    <p>
                        Page created by Thiago Pirez
                    </p>
                    <p>&copy; All Rights Reserved.</p>
                </div>
                <div className={styles.redes_sociales}>
                    <a href="https://www.linkedin.com/in/thiago-pirez-0b282b1a1/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" />
                    </a>
                    
                   
                </div>
            </div>
        </footer>
    )
}

export default Footer