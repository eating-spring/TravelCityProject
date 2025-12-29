import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../assets/css/user.css'
import CryptoJS from 'crypto-js';
import axios from 'axios'

function COUL1001() {
  // 1. 입력값을 관리하는 State 정의
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });
  
  const navigate = useNavigate(); // 2. navigate 함수 생성

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value // name 속성값을 키로 사용하여 값 업데이트
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    // 유효성 검사 (간단한 예시)
    if (!formData.id || !formData.password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
    

    const pwize_pwd = CryptoJS.SHA512(formData.password).toString(CryptoJS.enc.Base64);

    const param = {
      id : formData.id,
      password : pwize_pwd
    }

    try {
      const response = await axios.get('/userLogin', { params: param });

      // 성공 로직
      if (response.data.success) {
        navigate('/GR/ME/GRME1001'); // App.js에 설정한 Route path의 경로를 호출해야 함
      } else {
        alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("에러 상세:", error);
      alert(error.response.data.message);
    }

  };

  // 아이디/비번 찾기 버튼 클릭 핸들러 (페이지 이동 로직 적용 필요)
  const handleFindId = () => {
    alert("아이디 찾기");
  };

  const handleFindPassword = () => {
    alert("비밀번호 찾기");
    // 예: navigate('/find-password');
  };

  // 회원가입 페이지로 이동 함수
  const handleSignUp = () => {
    navigate('/CO/UJ/COUJ1001'); // App.js에 설정된 회원가입 경로로 이동
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">로그인</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="login-id">아이디</label>
            <input
              type="text"
              id="login-id"
              name="id"
              placeholder="아이디를 입력하세요"
              value={formData.id}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="login-password">비밀번호</label>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="login-button">
            로그인
          </button>
        </form>

        <div className="find-actions">
          <button type="button" className="find-btn" onClick={handleFindId}>아이디 찾기</button>
          <span className="separator">|</span>
          <button type="button" className="find-btn" onClick={handleFindPassword}>비밀번호 찾기</button>
        </div>

        {/* 3. 회원가입 버튼 영역 추가 */}
        <div className="signup-box">
          <span className="signup-text">아직 회원이 아니신가요?</span>
          <button type="button" className="signup-btn" onClick={handleSignUp}>
            회원가입 하기
          </button>
        </div>

      </div>
    </div>
  );
}

export default COUL1001;