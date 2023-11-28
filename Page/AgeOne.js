import { useParams } from 'react-router-dom';
import './page.css';
import { Link } from 'react-router-dom';

const AgeOne = () => {
    const { category } = useParams();
  
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
        
    </div>
    );
  };
  
  export default AgeOne;