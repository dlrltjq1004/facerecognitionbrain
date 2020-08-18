import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signout')}
          className="f4 link dim black  pa3 pointer"
        >
          로그아웃
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signin')}
          className="f4 link dim black  pa3 pointer"
        >
          로그인
        </p>
        <p
          onClick={() => onRouteChange('register')}
          className="f4 lhomenk dim black  pa3 pointer"
        >
          회원가입
        </p>
      </nav>
    );
  }
};

export default Navigation;
