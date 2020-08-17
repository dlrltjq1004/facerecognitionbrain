import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className="white f3">
      {`${name} 귀하의 현재 참가 횟수는...`}
      <div className="white f1"> #{entries}</div>
    </div>
  );
};

export default Rank;
