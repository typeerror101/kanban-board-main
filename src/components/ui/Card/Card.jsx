import PropTypes from 'prop-types';
import "./style.css"
import Badge from '../Badge';
import { PriorityMappings  } from '../../IconMappings';


const Card = ({ task,type }) => {


    return (
        <div className="card">
            <div className="card-title">
            <div>{task.id}</div>
            <div></div>
            
            </div>
            <div className="card-content">
                <div>{task.title}</div> 
            </div>
            <div className="card-footer">
          

            {type !== 'priority' && <Badge >
            {PriorityMappings[task.priority]}</Badge>}
            {task.tag.map((e, index) => {
                return (
                    <div key={index}>
                    
                    
                    <Badge  > <div className="circle" /> {e}</Badge>
                    </div>
                );
            })}</div>
        </div>
    )
}

Card.propTypes = {
    task: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    taskData: PropTypes.object.isRequired
}




export default Card;