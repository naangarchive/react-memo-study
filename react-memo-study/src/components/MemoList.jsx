function MemoList({memos}) {

    return (
    <>
        <ul>
            {memos.map((memo) => (
                <li key={memo.id}>
                    <h3>{memo.title}</h3>
                    <p>{memo.content}</p>
                </li>
            ))}
        </ul>
    </>
    )
}

export default MemoList
