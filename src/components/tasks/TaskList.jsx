import React, { useState } from 'react';

import tasks from '../data/tasks';
import Task from './Task';
const TaskList = () => {
  const [tasksList, setTasksList] = useState(tasks);

  return (
    <table className={'table table-striped mb-5'}>
      <thead>
        <tr className={'text-info'}>
          <th>Id</th>
          <th>Title</th>
          <th>Done</th>
          <th>Mark Done ?</th>
          <th>Voir</th>
        </tr>
      </thead>
      <tbody>
        {tasksList.map(task => {
          return <Task key={task.id} task={task} />;
        })}
      </tbody>
    </table>
  );
};

export default TaskList;
