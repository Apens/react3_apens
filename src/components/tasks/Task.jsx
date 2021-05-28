import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
  return (
    <tr className={'text-primary'}>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.done ? 'Bien' : 'Pas bien'}</td>
      <td>
        <button className={'btn btn-xs btn-warning'}>Done</button>
      </td>
      <td>
        <Link
          className={'btn btn-primary'}
          to={{ pathname: `/task/${task.id}`, task: task }}
        >
          Voir
        </Link>
      </td>
    </tr>
  );
};

export default Task;
