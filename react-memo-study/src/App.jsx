import { useState, useEffect } from "react";
import { getMemos } from "./api/memo.jsx";
import MemoForm from "./components/MemoForm.jsx";
import MemoList from "./components/MemoList.jsx";

function App() {

  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  const fetchMemos = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getMemos();
      setMemos(data.items);
    } catch(err) {
      console.error(err);
      setError("데이터 못 불러옴");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMemos();
  }, []);
  
  return (
    <>
      <MemoForm />

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

