import React from 'react';
//새항목에서 사용할 고유id useRef

function User({user}){
  return(
    <div>
      name:{user.username} email:{user.email}
    </div>
  );
}

function UserList({users}) {

  return(
    <>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {
        users.map(
          user => (<User user={user} key={user.id} />)
          // (user, index) => (<User user={user} key={user.index} />)
          //어쩔수 없을 경우 map함수 두번째 파라미터 index사용, 하지만 요래 사용했을때 성능적으로 나아지진 않음 id있을경우 id사용
        )
      }
    </>
  )
}

export default UserList;