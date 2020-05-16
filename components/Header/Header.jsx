import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header} data-testid="header">
    <div className={styles['header-content']}>
      <Link href="/">
        <img src="/logo.png" alt="logo" className={styles.logo} />
      </Link>
    </div>
  </header>
);

export default Header;
