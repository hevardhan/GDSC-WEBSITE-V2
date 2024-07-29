import '../SplashScreen.css';
import { useState, useEffect } from 'react';

const SplashScreen2 = () => {

    const [hideSplash, setHideSplash] = useState(false);

    useEffect(() => {
        const hideSplashTimer = setTimeout(() => setHideSplash(true), 6000);

        return () => {
            clearTimeout(hideSplashTimer);
        }
    })

    return (
        <div className={`${hideSplash ? 'hideSplash' : ''}`}>
            <div className="loading-container">
            <div className="loader"></div>
            <section className="space">
                <div className="shapes">
                    <div className="shape red"></div>
                    <div className="shape blue"></div>
                    <div className="shape yellow"></div>
                    <div className="shape green"></div>
                </div>
            </section>
        </div>
        <div className="website-content">
            <img src='/BG-GDSC.png' alt="Website Content Placeholder"/>
        </div>
        </div>
    );
}

export default SplashScreen2;