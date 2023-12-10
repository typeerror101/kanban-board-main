import './style.css'
// import Button from '../ui/Button/Button'
import Popover from '../ui/Popover/Popover'
import PropTypes from 'prop-types'

const NavBar = ({ grouping, ordering, onGroupingChange, onOrderingChange }) => {

  return (
    <div className="navbar">
    <Popover grouping={grouping} ordering={ordering}   
     onGroupChange={onGroupingChange}
        onOrderChange={onOrderingChange}/>
    </div>
  )
}

NavBar.propTypes = {
  grouping: PropTypes.string.isRequired,
  ordering: PropTypes.string.isRequired,
  onGroupingChange: PropTypes.func.isRequired,
  onOrderingChange: PropTypes.func.isRequired,
};

export default NavBar