import React from 'react';
import './main.scss';

const ModalConfirm = ({ onClose, handleConfirmTest, heading, totalscore, exit }) => {
  return (
    <div className='modal-backdrop'>
      <div className='modal-content'>
        <h2 className='modal-heading'>{heading}</h2>
        {!totalscore && (
          <>
            <button className='yes-button' onClick={handleConfirmTest}>Yes</button>
            <button className='cancel-button' onClick={onClose}>Cancel</button>
          </>
        )}
        {totalscore && (
          <div>
            <p>Total Score: {totalscore}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalConfirm;
