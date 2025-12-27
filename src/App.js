import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import COUJ1001 from './page/CO/UJ/COUJ1001';
import COUL1001 from './page/CO/UL/COUL1001';
import MECO1001 from './page/ME/CO/MECO1001';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 주소(/) 접속 시 로그인 화면 표시 */}
        <Route path="/" element={<COUL1001 />} />

        {/* /CO/UJ/COUJ1001 주소 접속 시 회원가입 화면 표시 */}
        <Route path="/CO/UJ/COUJ1001" element={<COUJ1001 />} />
        
        {/* /ME/CO/MECO1001 주소 접속 시 메모장 화면 표시 */}
        <Route path="/ME/CO/MECO1001" element={<MECO1001 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;