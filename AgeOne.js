import { useParams } from 'react-router-dom';
import './page.css';
import { Link } from 'react-router-dom';
import Writing from '../Writing.js';
import Header from '../layout/Header.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AgeOne = () => {

    const { category } = useParams();
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
      // 데이터를 불러오는 비동기 함수
      const fetchData = async () => {
        try {
          const response = await (await axios.get('http://localhost:3001/posts')).data; // 데이터를 가져올 엔드포인트 URL로 변경하세요
          setDataList(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
        // 컴포넌트가 마운트될 때 데이터를 불러옴
    fetchData();
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 함

    //
    
    const [showComponent,setShowComponent]= useState(false);
    const showWrite = () =>{

      //글쓰기 페이지를 보이게 하기
      // state 값을 true로 바꾼다 클릭 될때 마다 T -> F -> T

      setShowComponent(!showComponent);

      
      // 글쓰기 한번 클릭 됐을 때 작동 안되게 하기
      
      
    }
  
    return (
      <div>
      <div>
        <table>
            <colgroup>
            <col width="20%" />
            <col width="55%" />
            <col width="*%" />
            <col width="*%" />
            </colgroup>
          
            <thead>
              <tr>
                <th>사진</th>
                <th>제목</th>
                <th>작성일</th>
                <th>작성자</th>
              </tr>
              
            </thead>

            <tbody>
            <tr>
            {dataList.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
          // 실제 데이터의 구조에 따라 변경하세요
        ))}
                <th>임시데이터사진</th>
                <th>임시데이터제목넣기</th>
                <th>임시데이터날짜2023.11.15</th>
                <th>임시데이터작성자익명1</th>
              </tr>
            </tbody>
          </table>
      </div>

      <br/>
        페이지네이션 구현 공간
      <button onClick={showWrite}> 글 쓰기 </button>
      {showComponent && <Writing />}
    </div>
    );
  };
  
  export default AgeOne;