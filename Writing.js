import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Writing = () => {
    const [isVisible,setIsVisible] = useState(true);
    const handleCancle = () => {
        setIsVisible((prevIsVisible => !prevIsVisible));
    };


    const saveBoard = async(e)=>{
        const title = e.target.title.value;
        const username = e.target.username.value;
        const content = e.target.content.value;
        fetch('http://localhost:3001/api/todo',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([{
                title,
                username,
                content,
            }]),
        });
        
        // await axios.post('http://localhost:3001/api/todo', {title,user,text});
        // alert ('등록 완료');    
    }
    
// name을 키값, value를 내용으로 가져온다
    
    // onchange={handleChangeTitle}함수 변화가 오면 계속 변함

    // 이미지 넣기
    const [image, setImage] = useState(null);
    
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        
        if(selectedImage){
            const reader = new FileReader();

            reader.onload = (readerEvent) => {
                setImage(readerEvent.target.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    }
    // 취소했을때 컴포넌트 안보이게 바꾸기
    
    return isVisible ?(
        <div className="Writing_Compo">
            <header className='head'>
                <h3 className='Title'>짠돌이 커뮤니티</h3>
                <div className='Search'>
                    <input type="text" placeholder='...search'style={{textAlign: 'center'}}></input>
                    <label>검색</label>
                </div>
            </header>
            <main className='Main'>
                <form onSubmit={saveBoard}>
                    <input type="file" value="" onChange={handleImageChange} />
                    {image && <img src={image} alt="이미지" style={{ width: '100px', height: '100px' }} />}
                    <div className='mini_title'>
                        <label for="title">제목: </label>
                        <input className='title_name' name='title' type='text'/>
                    </div>
                    <div className='mini_title'>
                        <label for="title">작성자: </label>
                        <input className='date' name='username' type='text'/>
                    </div>
                    <article>
                        <textarea className='Main_content'type='text'name='content'/>
                    </article>
                    <section>
                        <div>
                            {/* 제목,날짜 등 input 컴포넌트의 name 을 가져와서 saveBoard로 post해서 값을 추가  */}
                            {/* form 안에 post 요청을 보낼때 query 파라미터로 한번 보내버리기 때문에 e.prevent를 실행해야함 */}
                            <input type='submit' value="등록"/>
                            <button onClick={handleCancle}>취소</button>
                        </div>
                    </section>
                </form>
                
            </main>
        </div>
    ) : null ;
}

export default Writing;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const BoardList = () => {
//   const navigate = useNavigate();
//   const [boardList, setBoardList] = useState([]);

//   const getBoardList = async () => {
//     const resp = await (await axios.get('//localhost:8080/board')).data; // 2) 게시글 목록 데이터에 할당
//     setBoardList(resp.data); // 3) boardList 변수에 할당

//     const pngn = resp.pagination;
//     console.log(pngn);
//   };

//   const moveToWrite = () => {
//     navigate('/write');
//   };

//   useEffect(() => {
//     getBoardList(); // 1) 게시글 목록 조회 함수 호출
//   }, []);

//   return (
//     <div>
//       <ul>
//         {boardList.map((board) => (
//           // 4) map 함수로 데이터 출력
//           <li key={board.idx}>
//             <Link to={`/board/${board.idx}`}>{board.title}</Link>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <button onClick={moveToWrite}>글쓰기</button>
//       </div>
//     </div>
//   );
// };

// export default BoardList;
// 