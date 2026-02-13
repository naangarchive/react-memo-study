import { useState } from "react"

function MemoForm({originalData, onSubmit}) {

  const [title, setTitle] = useState(originalData?.title ?? '');
  const [content, setContent] = useState(originalData?.content ?? '');

  const handleSumbit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    onSubmit({title, content});

    setTitle('');
    setContent('');
  }  
  return (
    <>
      <form onSubmit={handleSumbit}>
        <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button type="submit">{originalData ? '수정하기' : '저장하기'}</button>
      </form>
    </>
  )
}

export default MemoForm
