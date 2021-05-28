import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Text from '../subcomponents/formComponents/Text';

const TaskDetail = () => {
  const [taskTitle, setTaskTitle] = useState();
  const id = useParams();
  const { task } = useLocation();

  const handleChange = e => {
    setTaskTitle(e.target.value);
  };

  const updateTasks = () => {
    // Récuperer la task
    // La mettre a jour
    // Remettre les nouvelles taches dans le state
  };

  return (
    <form onSubmit={updateTasks}>
      <Text
        value={task.title}
        placeHolder={''}
        type={'text'}
        onChange={handleChange}
      />
      <button className={'btn btn-xs btn-success'}>Submit</button>
    </form>
  );
};

export default TaskDetail;
