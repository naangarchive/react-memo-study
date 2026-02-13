function MemoList({memos, onEdit, onDelete}) {

    return (
    <>
        <ul>
            {memos.map((memo) => (
                <li key={memo.id}>
                    <h3>{memo.title}</h3>
                    <p>{memo.content}</p>
                    <button onClick={() => onEdit(memo)}>수정</button>
                    <button onClick={() => onDelete(memo.id)}>삭제</button>
                </li>
            ))}
        </ul>
    </>
    )
}

export default MemoList
