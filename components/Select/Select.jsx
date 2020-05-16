import PropTypes from 'prop-types';
import styles from './Select.module.css';

const Select = ({ label, values, valueSelected, onChange }) => {
  return (
    <label
      htmlFor={`${label}-select`}
      className={styles.label}
      data-testid="label"
    >
      {label}
      <div className={styles.select__container}>
        <select
          id={`${label}-select`}
          className={styles.select}
          onChange={e => onChange(e.target.value)}
          value={valueSelected}
          data-testid="select"
        >
          {values.map(({ label: optionLabel, value }) => (
            <option value={value} key={value} data-testid={`option-${value}`}>
              {optionLabel}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

Select.defaultProps = {
  onChange: () => {},
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
  valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onChange: PropTypes.func,
};

export default Select;
