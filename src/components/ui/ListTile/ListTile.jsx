import { MoreHorizontal, Plus } from 'lucide-react';
import PropTypes from 'prop-types';


import './style.css'


const ListTile = ({leading,main}) => {
  return (
    <div className="list-tile">
    <div className='l-head'>
    <div className="leading">{leading}</div>
    <div className="main">{main}</div>
    </div>
    <div className="trailing">
    <div className='action'><Plus size={20}/> <MoreHorizontal size={20}/></div>
    </div>
    </div>

  )
}

ListTile.propTypes = {
    leading: PropTypes.node,
    main: PropTypes.node,
}

export default ListTile