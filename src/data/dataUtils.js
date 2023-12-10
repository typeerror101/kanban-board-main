const groupTasksByUser = (users, tasks) => {
  const groupedTasks = [];

  users.forEach((user) => {

    const userTasks = tasks.filter((task) => task.userId === user.id);

    if (userTasks.length > 0) {

      groupedTasks.push({
        user,
        tasks: userTasks,
        title: user.name,
        grouping: 'user'
      });
    }
  });

  return groupedTasks;
};

const groupTasksByStatus = (tasks) => {
  const groupedTasks = [];

  tasks.forEach((task) => {
    const status = task.status;

    let existingGroup = groupedTasks.find((group) => group.status === status);

    if (!existingGroup) {
      existingGroup = {
        status,
        title: status,
        tasks: [],
        grouping: 'status',
      };
      groupedTasks.push(existingGroup);
    }
    
    existingGroup.tasks.push(task);
  });

  return groupedTasks;
};



const priorityNames = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };

  const groupTasksByPriority = (tasks) => {
    const groupedTasks = [];
    
    tasks.forEach(task => {
      const priority = task.priority;
  
      let existingGroup = groupedTasks.find(group => group.priority === priority);
  
      if (!existingGroup) {
        existingGroup = {
          priority,
          priorityName: priorityNames[priority],
          
          tasks: [],
          title: priorityNames[priority],
          grouping: 'priority'
        };
        groupedTasks.push(existingGroup);
      }
  
      existingGroup.tasks.push(task);
    });
  
    return groupedTasks;
  };
  

const sortTasksByPriority = (tasks) => {

 return tasks.map((task)=> ({
  ...task,
  tasks: task.tasks.sort((a,b)=>b.priority - a.priority),
 }));


  
};

const sortTasksByTitle = (tasks) => {
  return tasks.map((task) => ({
    ...task,
    tasks: task.tasks.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())),
  }));
};


export { groupTasksByUser, groupTasksByStatus , groupTasksByPriority,sortTasksByPriority,sortTasksByTitle};
