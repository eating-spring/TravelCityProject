import {useRef, useState} from "react"
import "./TodoEditor.css"
import axios from 'axios'

const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("")
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    let inputRef = useRef();

    const onSubmit = () => {
        if(!content) {
            inputRef.current.focus()
            return
        }
        onCreate(content) // vue의 $emit과 같은 의미
        setContent("")
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기</h4>
            <div className="editor_wrapper">
                <input ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}
export default TodoEditor;