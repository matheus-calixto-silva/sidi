// LoggedNavBar.jsx
import { useContext } from 'react';
import { AuthContext } from '../../../app/contexts/AuthContext';
import useNavigation from '../../../app/libs/navigate';
import logo from '../../assets/nav-logo.png';
import styles from './LoggedNavBar.module.css';

const LoggedNavBar = () => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer} onClick={() => navigate('/')}>
        <img src={logo} alt='sidi logo' className={styles.logo} />
      </div>
      <button onClick={handleLogout} className={styles.button}>
        Sair
      </button>
    </nav>
  );
};

export default LoggedNavBar;
