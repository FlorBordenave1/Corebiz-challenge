import React from 'react'
import './Footer.css'
//assets
import CorebizLogoWhite from '../../assets/CorebizLogoWhite.svg'
import headphonesIcon from '../../assets/Icons/headphonesIcon.svg'
import mailIcon from '../../assets/Icons/mailIcon.svg'
import VtexLogo from '../../assets/VtexLogo.png'
//components
import FooterButton from './FooterButton/FooterButon'
import FooterIcon from './FooterIcons/FooterIcon'

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-text-container">
                    <h3 className="footer-text-title">Ubicación</h3>
                    <div className="footer-info-container">
                        <h4>Avenida Andrômeda, 2000. Bloco 6 e 8</h4>
                        <h4>Alphavile SP</h4>
                        <h4>brasil@corebiz.ag</h4>
                        <h4>+55 11 3090 1039</h4>
                    </div>
                </div>

                <div className="footer-buttons-container">
                    <FooterButton
                        text='Contáctanos'
                        icon={mailIcon}
                    />
                    <FooterButton
                        text=' Habla con un consultor'
                        icon={headphonesIcon}
                    />
                </div>

                <div className="footer-logos-container">
                    <FooterIcon
                        text='Desarrollado por'
                        name='corebiz'
                        icon={CorebizLogoWhite}
                    />
                    <FooterIcon
                        text='Powered by'
                        name='vtex'
                        icon={VtexLogo}
                    />
                </div>
            </div>
        </footer>
    )
}