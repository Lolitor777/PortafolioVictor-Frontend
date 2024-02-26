

export const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-container-child">
            <img src="https://storage.googleapis.com/logo_victor/Logo_Victor.png" alt="Logo Victor Carvajal" className="footer-logo"/>
            <h3 className="footer-phrase">Vivir y aprender un día a la vez.</h3>
            <nav className="social-container">
                <a href="https://www.linkedin.com/in/victor-carvajal-dev/" target="_blank" className="social-anchor">
    	            <img src="https://storage.googleapis.com/imagenesportafolio/linkedin.png" alt="Logo de Linkedin" className="social-img" />
                </a>
                <a href="https://www.instagram.com/vc_1539/?hl=es" target="_blank" className="social-anchor">
                    <img src="https://storage.googleapis.com/imagenesportafolio/instagram%20(1).png" alt="Logo de instagram" className="social-img" />
                </a>
            </nav>
            
        </div>
    </footer>
  )
}
