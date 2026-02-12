function MemoSearch({onSearch, value, onChange}) {
  
  const handleSumbit = (e) => {
    e.preventDefault();
    onSearch();
  }

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input type="text" placeholder="메모 검색..." value={value} onChange={onChange}/>
        <button type="submit">검색</button>
      </form>
    </>
  )
}

export default MemoSearch
