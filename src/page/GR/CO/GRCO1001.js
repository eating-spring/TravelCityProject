import React, { useState } from 'react';
import '../../../assets/css/group.css'

const GRCO1001 = () => {
  const [myGroups, setMyGroups] = useState([
    {
      id: 1,
      title: "내가 만든 스터디 (나는 관리자)",
      currentMember: 1,
      maxMember: 3,
      isAdmin: true, // 관리자 여부 (true: 관리자 -> 나가기 버튼 안 보임)
    },
    {
      id: 2,
      title: "리액트 스터디 그룹 (나는 멤버)",
      currentMember: 5,
      maxMember: 10,
      isAdmin: false, // 관리자 여부 (false: 일반 멤버 -> 나가기 버튼 보임)
    }
  ]);

  const handleCreateGroup = () => {
    alert("그룹 생성 모달을 띄웁니다.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>그룹 목록</h2>
        <button style={styles.createButton} onClick={handleCreateGroup}>
          생성
        </button>
      </div>

      <div style={styles.listBox}>
        {myGroups.length > 0 ? (
          myGroups.map((group) => (
            <div key={group.id} style={styles.groupItem}>
              <div style={styles.groupTitle}>{group.title}</div>

              <div style={styles.groupInfoRight}>
                <span style={styles.memberCount}>
                  {group.currentMember} / {group.maxMember}
                </span>
            
                {!group.isAdmin && (
                  <button style={styles.actionButton}>나가기</button>
                )}
                    
              </div>
            </div>
          ))
        ) : (
          <div style={styles.emptyState}>
            가입한 그룹이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  headerTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
  },
  createButton: {
    padding: '6px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: 'white',
    border: '1px solid black',
  },
  listBox: {
    border: '1px solid black',
    minHeight: '300px',
    padding: '0',
    backgroundColor: '#fff',
  },
  groupItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    borderBottom: '1px solid #eee',
  },
  groupTitle: {
    fontSize: '16px',
    fontWeight: '500',
    textDecoration: 'underline',
    textDecorationColor: 'red',
    textUnderlineOffset: '3px',
  },
  groupInfoRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  memberCount: {
    marginRight: '10px',
    fontSize: '14px',
  },
  actionButton: {
    padding: '5px 10px',
    fontSize: '13px',
    cursor: 'pointer',
    backgroundColor: 'white',
    border: '1px solid #ccc',
  }
  ,
  emptyState: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    color: '#888',
    fontSize: '16px',
  },
};

export default GRCO1001;