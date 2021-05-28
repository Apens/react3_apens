import React, { Fragment, useState } from 'react';
import Text from '../subcomponents/formComponents/Text';
import tasks from '../data/tasks';
import Task from './Task';

const TaskList = () => {
  const [tasksList, setTasksList] = useState(tasks);
  const [taskTitle, setTaskTitle] = useState('');

  //  On doit target, donc on accepte le e
  const handleChange = e => {
    setTaskTitle(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();

    const task = {
      id: Math.random().toString(16),
      title: taskTitle,
      done: false,
    };

    setTasksList([task, ...tasksList]);
  };

  const handleUpdate = id => {
    // {/*Si on passe un parametre, on a besoin d'un callback (au clique sur le bouton )*/}
    const task = tasksList.filter(task => task.id === id)[0];

    // setTaskDone(!task.done);
  };

  return (
    <Fragment>
      <form onSubmit={addTask}>
        <Text
          name={'title'}
          type={'text'}
          value={taskTitle}
          onChange={handleChange}
          placeHolder={'Ajouter une tache'}
        />
        <button className={'btn btn-xs btn-success'}>Add Task</button>
      </form>
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
            return <Task key={task.id} task={task} update={handleUpdate} />;
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TaskList;
