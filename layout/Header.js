import React from 'react';
import { Link } from 'react-router-dom';

//검색 변수 선언, 부모에서 자식 컴포넌트로 전송.props로 넘기기


const Header = () => {

  const goToSearch=()=>{
    //window.location.href = '/';
  }

  return (
    <header>
    <tr width="100%">
      <td width="85%" bgcolor="#9D9D9D"><h1>거지방 커뮤니티</h1></td>

      <td width="500px" bgcolor="#D9D9D9">
        <div><input id='searchKeyword'type="text" placeholder="검색어를 입력해주세요."/>
        <button onClick={goToSearch}>검색</button></div>
      
      </td>
    </tr>
    <hr/>
  </header>
  );
};

export default Header;