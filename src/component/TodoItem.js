import "./TodoItem.css"

const TodoItem = ({id, content, isDone, createDate}) => {
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" checked={isDone} />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button>삭제</button>
            </div>
        </div>
    )
}
export default TodoItem