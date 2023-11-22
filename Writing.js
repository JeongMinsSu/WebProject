import React from 'react';
import { useState } from 'react';


const Writing = () => {
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
    return (
        <div className="Writing_Compo">
            <header className='head'>
                <h3 className='Title'>짠돌이 커뮤니티</h3>
                <div className='Search'>
                    <input type="text" placeholder='...search'style={{textAlign: 'center'}}></input>
                    <label>검색</label>
                </div>
            </header>
            <main className='Main'>
                <form action='#' method='get'>
                    <div className='mini_title'>
                        <label for="title">제목 </label>
                        <input className='title_name' name='title' type='text'/>
                    </div>
                    <input type="file" onChange={handleImageChange} />
                    {image && <img src={image} alt="이미지" style={{ width: '100px', height: '100px' }} />}
                </form>
                <article>
                    <textarea className='Main_content'type='text'/>
                </article>
                <section>
                    <div>
                        <button type='submit'>등록</button>
                        <button><a href='#'>취소</a></button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Writing;