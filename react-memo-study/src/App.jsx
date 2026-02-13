import { useState, useEffect } from "react";
import { getMemos, createMemo } from "./api/memo.jsx";
import MemoSearch from "./components/MemoSearch.jsx";
import MemoForm from "./components/MemoForm.jsx";
import MemoList from "./components/MemoList.jsx";

function App() {

  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    fetchMemos({ q: searchQuery });
  }, [searchQuery]);

  const fetchMemos = async (params ={}) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getMemos(params);
      setMemos(data.items);
    } catch(err) {
      console.error(err);
      setError("데이터 못 불러옴");
    } finally {
      setIsLoading(false);
    }
  }

  //검색
  const handleSearch = () => {
    setSearchQuery(inputValue);  // 버튼 클릭 시에만 적용
  };

  //추가
  const handleCreate = async (title, content) => {
    try {
      const newMemo = await createMemo({ title, content });
      setMemos(prev => [newMemo, ...prev]);  // 앞에 추가
    } catch (err) {
      console.error(err);
      setError('추가에 실패했습니다');
    }
  };
  
  
  return (
    <>
      <MemoSearch onSearch={handleSearch} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

      <MemoForm onCreate={handleCreate} />

      {isLoading && <p>로딩중..</p>}

      {error && (
        <div>
        <p>에러: {error}</p>
        {/* <button onClick={refetch}>다시 시도</button> */}
      </div>
      )}

      {!isLoading && !error && memos.length === 0 && (
        <p>메모가 없다.</p>
      )}

      {!isLoading && !error && memos.length > 0 && (
        <MemoList memos={memos} />
      )}
      
    </>
  )
}

export default App

