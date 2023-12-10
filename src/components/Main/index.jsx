import './style.css';
import PropTypes from 'prop-types'
import processTasks from '../../data/processData';
import { useState ,useEffect} from 'react';
import Kanban from '../KanbanSection';

const Main = ({grouping,ordering,data}) => {
  const [processedData, setProcessedData] = useState([]);

  useEffect(()=>{
    const result = processTasks(data,grouping,ordering)
    setProcessedData(result);
  },[grouping,ordering,data])





  return (
    <div className="main-body">
    {processedData.map((e,index) => {
      return (
      
          <Kanban key={index} taskData={e}  />
     
      )
    })}
    </div>
    
  )
}

Main.propTypes = {
  grouping: PropTypes.string.isRequired,
  ordering: PropTypes.string.isRequired,
  data:  PropTypes.object.isRequired,
};


export default Main