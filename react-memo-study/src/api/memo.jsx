import client from './client.jsx';

// 목록 조회
export const getMemos = async () => {
  const response = await client.get('/memos');
  return response.data;
};