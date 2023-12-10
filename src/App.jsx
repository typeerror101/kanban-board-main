
import NavBar from "./components/NavBar/NavBar"
import Main from "./components/Main"
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [taskData,setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
    .then(response => response.json())
    .then(data => {setData(data);
      setLoading(false);
    })
    .catch(error => {console.error('Error fetching data:', error)
    setLoading(false);
  }
    );
},[]);


const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status'); 
const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority'); 

useEffect(() => {
  localStorage.setItem('grouping', grouping);
  localStorage.setItem('ordering', ordering);
}, [grouping, ordering]);

 

  const handleGroupingChange = (event) => {
    const value = event.target.value.toString();
  setGrouping(value);
  };

  const handleOrderingChange = (event) => {
    const value = event.target.value.toString();
  setOrdering(value);
  };

  
  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <NavBar grouping={grouping} ordering={ordering} onGroupingChange={handleGroupingChange} onOrderingChange={handleOrderingChange} />
      <Main data={taskData} grouping={grouping} ordering={ordering} />
    </div>
  );
};



export default App;