import React from 'react';
import styles from './Hello.module.scss';

const Hello = () => {
    return (
        <section className={styles.Container}>
            <div className="container">
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 498.9 438.9">
                    <path id={styles.Ditto1} className={styles.ST1} d="M422.9,15v15h16v15h15v106h-15v46h-16v45h-15v91h15v30h16v31h-16v15h-15v15H227v-15h-76v15H91
                        v-15H60v-15H45v-61h15v-30h16v-31h15v-60H76v-45h15v-16h15v-15h30v-15h45v-15h31V91h15V76h15V61h45v15h46V45h15V30h15V15H422.9z"/>
                    <path id={styles.Ditto2} className={styles.ST1} d="M407.9,121v15h31v15h15v31h15v45h-15v30h-15v31h-16v45h16v15h15v46h-15v15h-16v15h-90v-15H197
                        v15H60v-15H30v-15H15v-61h15v-30h15v-46h15v-45h16v-15h15v-15h45v15h30v-15h31v-15h15v-16h30v-15h60v15h46v-15h30v-15H407.9z"/>
                    <path id={styles.Ditto3} className={styles.ST1} d="M106,91v15h30v15h61v-15h60v15h30v15h15v15h31v16h30v-16h45v16h15v15h16v45h-16v45h16v31h15v15
                        h15v76h-15v15h-15v15H318v-15H151v15H60v-15H45v-15H30v-31h15v-30h15v-45H45v-31H30v-45H15v-61h15v-30h15v-15h31V91H106z"/>
                    <path id={styles.Ditto4} className={styles.ST1} d="M136,76v15h15v15h30V91h16V76h45v15h15v15h15v15h30v15h61v15h15v16h15v15h15v45h-15v61h15v30h15
                        v15h16v61h-16v15h-30v15h-60v-15h-91v15H76v-15H60v-15H45v-46h15v-30h16v-61H60v-30H45v-30H30v-46h15v-30h15v-15h16V91h15V76H136z"/>
                    
                    <path id={styles.Face4} d="M212,182v15h-15v-15H212z M318,212v15h-16v-15H318z M242,242v15h45v15h-45v-15h-45v-15 H242z"/>
                    <path id={styles.Face3} d="M212,212v15h-15v-15H212z M302,227v15h-15v-15H302z M287,272v16h-90v-16H287z"/>
                    <path id={styles.Face2} d="M287,242v15h-15v-15H287z M197,257v15h-16v-15H197z M287,303v15h-90v-15H287z"/>
                    <path id={styles.Face1} d="M287,167v15h-15v-15H287z M181,197v15h-15v-15H181z M287,227v15h-45v15h-45v-15h45v-15H287z"/>
                    
                    <path id={styles.Shine1} className={styles.ST2} d="M287,91v30h-30v15h-30v-30h30V91H287z"/>
                    <path id={styles.Shine2} className={styles.ST2} d="M272,167v30h-30v15h-30v-30h30v-15H272z"/>
                    <path id={styles.Shine3} className={styles.ST2} d="M227,121v30h-30v16h-31v-31h31v-15H227z"/>
                    <path id={styles.Shine4} className={styles.ST2} d="M121,91v15h15v30h-30v-15H91V91H121z"/>
                </svg>
                <div className={styles.Credits}>
                    <a href="https://pipe-code.github.io/" target="_blank">
                        <i className={styles.Logo}></i>
                        <span>A PIPE:CODE Theme</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hello
