import PropTypes from 'prop-types';
import styles from './Slider.module.css';

const Slider = ({ images }) => (
  <section className={styles.slider} data-testid="slider">
    <div className={styles.slides}>
      {images.map(image => (
        <div
          className={styles.slide}
          key={image}
          data-testid={`slide-${image}`}
        >
          <img src={image} alt="" className={styles.image} />
        </div>
      ))}
    </div>
  </section>
);

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
