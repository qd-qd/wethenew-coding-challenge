import PropTypes from 'prop-types';
import styles from './Separator.module.css';

const Separator = ({ className }) => (
  <hr className={`${styles.separator} ${className}`} />
);

Separator.defaultProps = {
  className: '',
};

Separator.propTypes = {
  className: PropTypes.string,
};

export default Separator;
