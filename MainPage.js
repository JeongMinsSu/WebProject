import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './MainPage.css';
import Search from './Search';
import { useState } from 'react';
import axios from 'axios';

const MainPage = () => {
  
  const [todoList, setTodoList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/api/todo');
    setTodoList(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  


  const linksTen = [
    { id: 1, text: '10대 개시판', path: '/AgeOne/10age' },
  ];

  const linkstwenty = [
    { id: 2, text: '20대 개시판', path: '/AgeTwo/20age' },
  ];

  const linksthirty = [
    { id: 3, text: '30대 개시판', path: '/AgeThree/30age' },
  ];
  const onSubmitHandler = async (e) => {
    const text = e.target.text.value;
    await axios.post('http://localhost:3001/api/todo', { text });
    fetchData();
    alert('등록 성공');   
        
  //   fetch('http://localhost:3001/api/todo',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       text,
  //     }),
  //   });
  };
  return (
    
    <div>
      <form onSubmit={onSubmitHandler}>
        <input name ='text'/>
        <input type='submit'value='추가'/>
      </form>
      <div className='Titles'>
        <Link to="/" style={{ textDecoration: "none" }}>거지 키우기</Link>
        {/* 검색 */}
        <Search className='search'/>
       
        {/* 찾을 내용 검색 박스 */}
       
      </div>

      <div className='agecomunuty'>
        <div className='ten'>
          <Link to="/AgeOne/10age" style={{ textDecoration: "none" }}>10대</Link>
        </div>

        <div className='twenty'>
          <Link to="/AgeTwo/20age" style={{ textDecoration: "none" }}>20대</Link>
        </div>

        <div className='thirty'>
          <Link to="/AgeThree/30age" style={{ textDecoration: "none" }}>30대</Link>
        </div>
      </div>
    
      {/* 카테고리 별 개시물 목록 */}
      <div className='category'>
        {/* 10대 개시물 링크 */}
        <div className='One'>
          <ul>
          {/* 배열의 각 항목에 대해 Link를 생성 */}
            {linksTen.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
            <li>
            
            {todoList.map((todo) => (
              <div key={todo.id}>
                
                <div>{todo.title}</div>
        
              </div>
            ))}
            
            </li>
          </ul>
        </div>
        {/* {renderLinksByClass('One')} */}
        

        {/* 20대 개시물 링크 */}
        <div className='Two'>
          <ul>
          {/* 배열의 각 항목에 대해 Link를 생성 */}
            {linkstwenty.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* {renderLinksByClass('Two')} */}

        {/* 30대 개시물 링크 */}
        <div className='Three'>
          <ul>
          {/* 배열의 각 항목에 대해 Link를 생성 */}
            {linksthirty.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* {renderLinksByClass('Three')} */}
      </div>
      <hr/>

      {/* 홍보 영상 */}
      <div className='movie'>
        <div>
          영상 아무거나
        </div>
      </div>
    </div>
  );
}

export default MainPage;