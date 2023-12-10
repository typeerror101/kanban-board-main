import './style.css'
import PropTypes from 'prop-types'

const Badge = ({children}) => {
  return (
    <div className="badge">
   {children}</div>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge