import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, 
  timeout: 5000, // 5초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});

// (선택사항) 요청 인터셉터: 필요 시 토큰 등을 여기서 자동으로 실어 보낼 수 있음
axiosInstance.interceptors.request.use(
  (config) => {
    // console.log("요청 보냄:", config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * API 호출을 수행하는 만능 함수
 * @param {string} url - 호출할 API 경로 (예: '/login')
 * @param {string} method - 'GET', 'POST', 'PUT', 'DELETE' (기본값 'GET')
 * @param {object} params - 전송할 데이터 (GET이면 쿼리파라미터, POST면 Body로 자동 변환)
 */
export const callApi = async (url, method = 'GET', params = {}) => {
  try {
    const config = {
      url: url,
      method: method,
    };

    method = method.toUpperCase();

    console.log("@@@ method:", method);

    // method 대소문자 구분 없이 처리 (get, GET 모두 가능)
    if (method.toUpperCase() === 'GET') {
      config.params = params; // GET 방식은 쿼리 스트링으로
    } else {
      config.data = params;   // POST, PUT 등은 Body 데이터로
    }

    // 실제 Axios 호출
    const response = await axiosInstance(config);

    // 응답 데이터(response.data)만 추출해서 리턴
    return response.data;

  } catch (error) {
    // 에러 발생 시 콘솔에 찍고, 화면으로 에러를 던짐
    console.error(`[API Error] ${url}:`, error);
    throw error;
  }
};

export default callApi;