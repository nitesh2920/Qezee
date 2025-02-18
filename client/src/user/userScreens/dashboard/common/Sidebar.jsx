import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './main.scss';
import logoimage from '../../../assets/images/logo.svg';
import overviewimage from "../../../assets/images/overview.svg";
import mocktestimage from "../../../assets/images/mocktest.svg";
import quizzesimage from "../../../assets/images/quizzes.svg";
import leaderboardimage from "../../../assets/images/leaderboard.svg";
import editprofileimage from "../../../assets/images/editprofile.svg";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(0); 

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const selectorsData = [
    { image: overviewimage, text: 'OVERVIEW', path: '/dashboard/overview' },
    { image: mocktestimage, text: 'MOCK TEST', path: '/dashboard/mocktest' },
    { image: quizzesimage, text: 'QUIZZES', path: '/dashboard/quizzes' },
    { image: leaderboardimage, text: 'LEADER BOARD', path: '/dashboard/leaderboard' },
    // { image: editprofileimage, text: 'EDIT PROFILE', path: '/dashboard/edit' },
  ];

  return (
    <div className="sidebarmain">
      <div className="header">
        <div className="image"><img src={logoimage} alt="logo" /></div>
        <p className="text"><span className="Q">Q</span>ezee</p>
      </div>
      {selectorsData.map((item, index) => (
        <React.Fragment key={index}>
          <Link to={item.path} style={{ textDecoration: 'none' }}>
            <div 
              className={`selectors ${selectedItem === index ? 'selected' : ''}`} 
              onClick={() => handleClick(index)}
            >
              <img src={item.image} className="image" alt={item.text} />
              <p className="text">{item.text}</p>
            </div>
          </Link>
         
          {index < selectorsData.length - 1 && <div className="spacing"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
