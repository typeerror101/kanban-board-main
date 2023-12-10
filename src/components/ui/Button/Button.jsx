import PropTypes from 'prop-types';
import './style.css'

const Button = ({children,onClick}) => {
  return (
    <button className="Button" onClick={onClick}>{children}</button>
  )
}

Button.propTypes = {

  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button