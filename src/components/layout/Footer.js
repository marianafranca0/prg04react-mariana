import styles from "./Footer.module.css";

//* componente Footer - rodapé
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>Proiecte</span> &copy; 2025
      </p>
    </footer>
  );
}

export default Footer;
