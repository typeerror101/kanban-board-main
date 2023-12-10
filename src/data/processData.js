import {
    groupTasksByUser,
    groupTasksByStatus,
    groupTasksByPriority,
    sortTasksByPriority,
    sortTasksByTitle,
  } from './dataUtils';
  

  const processTasks = (data, grouping, ordering ) => {
    let processedTasks = [];
    const users = data.users;
    const tasks = data.tickets;
    switch (grouping) {
      case 'user':
        processedTasks = groupTasksByUser(users, tasks);
        break;
      case 'status':
        processedTasks = groupTasksByStatus(tasks);
        break;
      case 'priority':
        processedTasks = groupTasksByPriority(tasks);
        break;
    
      default:
        // Handle default case or error
        break;
    }
  
    switch (ordering) {
      case 'priority':
        processedTasks = sortTasksByPriority(processedTasks);
        break;
      case 'title':
        processedTasks = sortTasksByTitle(processedTasks);
        
        break;
      default:
       console.log('oombi')
        break;
    }
  
    return processedTasks;
  };
  
  export default processTasks;
  

  
