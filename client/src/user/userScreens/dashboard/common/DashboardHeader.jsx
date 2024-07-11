import './main.scss';
import profilepic from '../../../assets/images/profilepic.svg';
import logout from '../../../assets/images/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../../../../actions/index';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.auth.user)

  const handleLogout = () => {
    dispatch(logoutRequest());
    navigate('/login');
  };

  return (
    <div className='headerContainer'>
      <div className='headerWrapper'>
        <div className='contents'>
          <div className='userInfo'>
            <div className='name'>{ user ? user.LoggedInUser.firstname : "Name" }</div>
            <div className='branch'>{ user ? user.LoggedInUser.branch : "Branch" }</div>
          </div>
          <img className='profile' src={profilepic} alt='' />
          <img className='logout' src={logout} alt='' onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
