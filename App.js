import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage';
import AgeOne from './Page/AgeOne.js';
import AgeTwo from './Page/AgeTwo.js';
import AgeThree from './Page/AgeThree.js';
// import Writing from './Writing'; -- 글쓰기
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AgeOne/:category" element={<AgeOne />} />
        <Route path="/AgeTwo/:category" element={<AgeTwo />} />
        <Route path="/AgeThree/:category" element={<AgeThree />} />
      </Routes>
    </Router>
    
  );
};


export default App;


// --- 정민수 ---
// import Writing from './Writing';
// import './App.css';


// const App = ()=>{
//   return (
//     <div className='Main_box'>
//       <Writing />
//     </div>
//     );
// }

// export default App;

//---------김태원 글상세 ------------
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//       <BoardHead></BoardHead>   

//       <BoardNav></BoardNav>

//       <Boarddetail></Boarddetail>

//       <Button></Button>

//       <Comment></Comment>

//     </div>
//   );
// }

// function BoardHead(){
//   return(
//     <div className='board-head'>
//       <div>웹 응용 프로그래밍</div>
//     </div>
//   )
// }


// function Boarddetail(){
//   return(    
//     <div className='board-detail'>
//     <h2>제목</h2>
//     <p>날짜</p>
//     <p>상세내용</p>
//   </div>
//   )
// }

// function BoardBox(){
//   return(
//     <div className='board-box'>
      
//     </div>
//   )
// }

// function BoardNav(){
//   return(
//     <div className='board-nav'>

//     </div>
//   )
// }

// function Button(){
//   return(
//     <>

//     <div className='revise-btn'>
//       <button type='button'><a href='Main.html' target='blank'>수정</a></button>
//     </div>

//     <div className='delete-btn'>
//       <button type='button'><a href='Main.html' target='blank'>삭제</a></button>
//     </div>
    
//     </>
//   )
// }

// function Comment(){
//   return(
//     <div className='comment'>댓글</div>
//   )
// }

// export default App;