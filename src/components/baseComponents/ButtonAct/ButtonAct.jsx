import PropTypes from 'prop-types';
import { Button, Grid } from "@nextui-org/react";

const ButtonAct = ({
  color="gradient",
  value,
}) => {
  return (
    <Grid>
      <Button color={color} auto type='submit'>
        {value}
      </Button>
    </Grid>
  );
};

ButtonAct.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  event: PropTypes.func,
}
export default ButtonAct;
