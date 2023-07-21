import css from './Filter.module.css'
import PropTypes from 'prop-types';



const Filter = ({ value, onChange }) => {
    return (
      <div className={css.filterContainer}>
        <label htmlFor="">
          {' '}
          Find contacts by name
          <input type="text" value={value} onChange={onChange} />
        </label>
      </div>
    );
}


export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};