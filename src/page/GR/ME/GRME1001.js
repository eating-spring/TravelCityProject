import React, { useState } from 'react';
import 'assets/css/memo.css'

function MECO1001() {
  // 1. 메모 리스트 상태 (각 메모는 { id, text } 형태의 객체)
  const [memos, setMemos] = useState([]);
  
  // 2. 입력창의 현재 텍스트 상태
  const [inputText, setInputText] = useState('');

  // 입력창 값 변경 핸들러
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // 메모 추가 핸들러
  const handleAddMemo = () => {
    // 빈 값 입력 방지
    if (inputText.trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    const newMemo = {
      id: Date.now(), // 고유 ID로 현재 시간 사용
      text: inputText
    };

    // 기존 리스트 앞에 새 메모 추가 (최신순)
    setMemos([newMemo, ...memos]);
    
    // 입력창 초기화
    setInputText('');
  };

  // 엔터키 입력 시 추가 기능
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddMemo();
    }
  };

  // 메모 삭제 핸들러
  const handleDeleteMemo = (id) => {
    const nextMemos = memos.filter((memo) => memo.id !== id);
    setMemos(nextMemos);
  };

  return (
    <div className="container">
      <h2 className="title">React 메모장</h2>

      {/* 영역 1: 상단 메모 입력 */}
      <div className="input-area">
        <input
          type="text"
          placeholder="메모를 입력하세요..."
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddMemo}>등록</button>
      </div>

      {/* 영역 2: 하단 메모 리스트 출력 */}
      <div className="list-area">
        {memos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>등록된 메모가 없습니다.</p>
        ) : (
          memos.map((memo) => (
            <div key={memo.id} className="memo-item">
              <span>{memo.text}</span>
              <button 
                className="delete-btn" 
                onClick={() => handleDeleteMemo(memo.id)}
              >
                삭제
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MECO1001;