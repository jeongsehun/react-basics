import React from 'react'

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요 저는 {name}입니다.
      </div>
  );
}

MyName.defaultProps = {
  name: '낙타쓰'
};

export default MyName;