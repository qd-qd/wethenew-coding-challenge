import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header} data-testid="header">
    <div className={styles['header-content']}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
    </div>
  </header>
);

export default Header;
