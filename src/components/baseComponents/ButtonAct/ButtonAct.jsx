import PropTypes from 'prop-types';
import { Button } from "@nextui-org/react";

const ButtonAct = ({
  color="gradient",
  value,
}) => {
  return (
    <Button className='submit_btn' color={color} auto type='submit'>
      {value}
    </Button>
  );
};

ButtonAct.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  event: PropTypes.func,
}
export default ButtonAct;
