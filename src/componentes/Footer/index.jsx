import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a
          href="https://www.facebook.com/cristopher.sanchez.589/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/troeno_yts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>

      <strong>Desarrollado por Cristopher Sanchez</strong>
    </footer>
  );
};

export default Footer;
