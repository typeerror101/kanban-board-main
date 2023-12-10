import Card from "../ui/Card/Card"
import PropTypes from "prop-types"
import './style.css'
import ListTile from "../ui/ListTile/ListTile"
import { mapSelector } from "../IconMappings"

const Kanban = ({taskData}) => {
  const leading = mapSelector(taskData.grouping,taskData.title,taskData.priority,taskData)
  const main = <div>{taskData.title}</div>
  return (

    <div className="kanban-main">
    <div className="kanban-title">{
       <ListTile leading={leading} main={main}/>
    }</div>
    <div className="kanban-body">
    
        {taskData.tasks.map((ele,index)=>{
            return(<Card key={index} task={ele} type={taskData.grouping} taskData={taskData} className='task-tile'/>)
        })}
    </div>
    </div>

  )
}

Kanban.propTypes = {
  taskData: PropTypes.object.isRequired,
};

export default Kanban