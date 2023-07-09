import PropTypes from 'prop-types';
import { Input as InputNextUi, Grid } from "@nextui-org/react";


const Input = (props) => {
  const {
    label,
    placeholder,
    color="secondary",
    value,
  } = props;


  return (
    <Grid className='gridNextUi'>
      <InputNextUi 
        { ...props }
        className='inputWithFoutingLabel'
        rounded
        bordered
        label={label}
        placeholder={placeholder}
        color={color}
        value={value}
      />
    </Grid>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  labelPlaceholder: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  status: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputNextUi;