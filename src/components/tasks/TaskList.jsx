import React, { Fragment, useContext, useState } from 'react';
import { TasksContext } from '../../providers/tasks';
import Text from '../subcomponents/formComponents/Text';
import Task from './Task';

const TaskList = () => {
  const [taskState] = useContext(TasksContext);
  console.log(taskState.tasks);
  const [tasksList, setTasksList] = useState([]);
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
    const newTask = tasksList.filter(task => task.id === id)[0];

    newTask.done = !newTask.done;

    // map retourne un nouveau tableau,
    // celui-ci  contient le meme nombre d'élément que le tableau original
    // ces éléments pourront être modifiés ou pas selon une condition.

    const newTaskList = tasksList.map(task => {
      if (task.id === newTask.id) {
        return newTask;
      }
      return task;
      // return task.id === newTask.id ? newTask : task;
    });

    setTasksList(newTaskList);
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
          {taskState.tasks.map(task => {
            return <Task key={task.id} task={task} update={handleUpdate} />;
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TaskList;
