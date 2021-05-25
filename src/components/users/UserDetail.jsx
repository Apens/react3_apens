import { useParams, useLocation } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const { user } = useLocation();
  return (
    <div>
      <p>{user.biography}</p>
    </div>
  );
};

export default UserDetail;
