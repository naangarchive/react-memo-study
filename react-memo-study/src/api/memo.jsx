import client from './client.jsx';

// 목록 조회
export const getMemos = async (params = {}) => {
  const response = await client.get('/memos', { params });
  return response.data;
};

// 생성
export const createMemo = async (payload) => {
  const response = await client.post('/memos', payload);
  return response.data;
};