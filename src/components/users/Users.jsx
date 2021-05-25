import data from '../data/users';
import { Fragment } from 'react';

const Users = () => {
  return (
    <Fragment>
      {data.map(user => {
        return (
          <div className="card mb-3">
            <img
              src={user.image}
              className="card-img-top img-fluid rounded mx-auto img-thumbnail"
              alt={`${user.name} Profile Picture`}
            />
            <div className="card-body">
              <h5 className="card-title text-info">{user.name}</h5>
              <p className="card-text text-primary">{user.address.line1}</p>
              <p className="card-text text-primary">{user.address.line2}</p>
              <p className="card-text">
                <small className="text-muted">{user.phones.join(' ')}</small>
              </p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Users;
