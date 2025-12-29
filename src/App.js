import React from 'react';
import { Routes, Route } from 'react-router-dom';
import COUJ1001 from 'page/CO/UJ/COUJ1001';
import COUL1001 from 'page/CO/UL/COUL1001';
import GRCO1001 from 'page/GR/CO/GRCO1001';
import GRME1001 from 'page/GR/ME/GRME1001';

function App() {
  return (
    <Routes>
      {/* 기본 주소(/) 접속 시 로그인 화면 표시 */}
      <Route path="/" element={<COUL1001 />} />

      {/* /CO/UJ/COUJ1001 주소 접속 시 회원가입 화면 표시 */}
      <Route path="/CO/UJ/COUJ1001" element={<COUJ1001 />} />

      {/* /GR/CO/GRCO1001 주소 접속 시 그룹 목록 화면 표시 */}
      <Route path="/GR/CO/GRCO1001" element={<GRCO1001 />} />

      {/* /GR/ME/GRME1001 주소 접속 시 메모장 화면 표시 */}
      <Route path="/GR/ME/GRME1001" element={<GRME1001 />} />
    </Routes>
  );
}

export default App;