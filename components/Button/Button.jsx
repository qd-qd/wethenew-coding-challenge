import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ label, onClick }) => (
  <button onClick={onClick} type="button" className={styles.button}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
