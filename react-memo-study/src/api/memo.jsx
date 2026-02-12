import client from './client.jsx';

// 목록 조회
export const getMemos = async (params = {}) => {
  const response = await client.get('/memos', { params });
  return response.data;
};