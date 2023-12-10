import  { useState } from 'react';
import './style.css';
import Button from '../Button/Button';
import { FaAngleDown } from "react-icons/fa6";
import { SlidersHorizontal } from 'lucide-react';
import PropTypes from 'prop-types'

const Popover = ({grouping,ordering, onGroupChange, onOrderChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popover ${isOpen ? 'open' : ''}`}>
     
        <Button onClick={togglePopover} >
        <div className= 'popover-trigger'>
        <SlidersHorizontal size={'12'}/> 
        <div className='button-head'>Display </div>
        <FaAngleDown></FaAngleDown>
        </div>
        </Button>
   
      <div className="popover-content">{isOpen && (
        <div className="">
        <div className='item'>
        <div className='item-title'>Grouping</div>
        
        
        <select className="dropdown" value={grouping} onChange={onGroupChange}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>

        </div>
        <div className="item">
        <div className='item-title'>Ordering</div>
        
         
         <select className="dropdown" value={ordering} onChange={onOrderChange}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
          
        </select>
        </div>
        
        
        </div>
      )}</div>
    </div>
  );
};

Popover.propTypes = {
  grouping: PropTypes.string.isRequired,
  ordering: PropTypes.string.isRequired,
  onGroupChange: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
};



export default Popover;
