import './App.css';
import './assets/css/signupForm.css'
import { useState } from "react"
import CryptoJS from 'crypto-js';
// import axios from 'axios'

function App() {
  // 1. 입력값을 관리하는 State 정의
  const [formData, setFormData] = useState({
    id: '',
    nickname: '',
    password: '',
    email: ''
  });

  // const getMemList = () => {
  //   axios.get('/members').then(response => {
  //     setuData(response.data);  //JSON.stringify(reponse.data, null, 2)
  //   });
  // }

  // 2. 입력값이 변경될 때 실행되는 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // name 속성값을 키로 사용하여 값 업데이트
    });
  };

  // 3. 폼 제출 시 실행되는 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    
    // 유효성 검사 예시 (필요시 추가 구현)
    if (!formData.id || !formData.password) {
      alert("아이디와 비밀번호는 필수입니다.");
      return;
    }

    const pwize_pwd = CryptoJS.SHA512(formData.password).toString(CryptoJS.enc.Base64)
    //const pwize_email = CryptoJS.SHA512(formData.email).toString(CryptoJS.enc.Base64)

    const secretKey = "secret-email";
    const pwize_email = CryptoJS.AES.encrypt(formData.email, secretKey).toString();
    
    console.log("@@@ 비밀번호 =>", formData.password, "|", pwize_pwd);
    console.log("@@@ 이메일 =>", formData.email, "|", pwize_email);

    // const bytes = CryptoJS.AES.decrypt(pwize_email, secretKey);
    // const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    // 실제로는 여기서 API 호출을 통해 서버로 데이터를 전송합니다.
    console.log('회원가입 데이터 전송:', formData);
    alert(`환영합니다, ${formData.nickname}님! 회원가입 정보가 콘솔에 출력되었습니다.`);
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        
        {/* 아이디 입력 */}
        <div className="form-group">
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="아이디를 입력하세요"
            required
          />
        </div>

        {/* 닉네임 입력 */}
        <div className="form-group">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력하세요"
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>

        {/* 이메일 입력 */}
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
        </div>

        <button type="submit" className="submit-btn">가입하기</button>
      </form>
    </div>
  );
}

export default App;
