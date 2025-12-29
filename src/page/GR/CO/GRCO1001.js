import React, { useState } from 'react';
import 'assets/css/group.css';

const GRCO1001 = () => {
  const [myGroups, setMyGroups] = useState([
    {
      id: 1,
      title: "내가 만든 스터디 (관리자)",
      currentMember: 1,
      maxMember: 3,
      isAdmin: true,
    },
    {
      id: 2,
      title: "리액트 스터디 그룹 (멤버)",
      currentMember: 5,
      maxMember: 10,
      isAdmin: false,
    }
  ]);

  const handleCreateGroup = () => {
    alert("그룹 생성 모달을 띄웁니다.");
  };

  return (
    /* 전체 화면 배경색 적용을 위한 wrapper 추가 */
    <div className="group-list-wrapper">
      
      {/* 흰색 카드 컨테이너 */}
      <div className="group-list-container">
        
        {/* 헤더 */}
        <div className="group-header">
          <h2 className="header-title">그룹 목록</h2>
          <button className="create-btn" onClick={handleCreateGroup}>
            생성
          </button>
        </div>

        {/* 리스트 목록 */}
        <div className="list-box">
          {myGroups.length > 0 ? (
            myGroups.map((group) => (
              <div key={group.id} className="group-item">
                <div className="group-title">{group.title}</div>

                <div className="group-info-right">
                  <span className="member-count">
                    {group.currentMember} / {group.maxMember} 명
                  </span>

                  {/* 관리자가 아닐 때만 나가기 버튼 표시 */}
                  {!group.isAdmin && (
                    <button className="action-btn">나가기</button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              가입한 그룹이 없습니다.
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default GRCO1001;