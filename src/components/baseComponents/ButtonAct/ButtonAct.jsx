import PropTypes from 'prop-types';
import { Button } from "@nextui-org/react";

const ButtonAct = ({value}) => {
  return (
    <Button className='submit_btn searchBtn' type='submit'>
      {value}
    </Button>
  );
};

ButtonAct.propTypes = {
  value: PropTypes.string,
  event: PropTypes.func,
}
export default ButtonAct;
