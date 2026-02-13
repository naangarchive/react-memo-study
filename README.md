📝 **Memo App Project**  
---

📁 **1. API 파일 구조 및 역할**  
- **src/api/client.js**  
  - Axios 인스턴스 생성  
  - `baseURL`, `timeout`, 기본 `headers` 설정  
- **src/api/memos.js**  
  - 메모 CRUD 함수 모음  
    - `getMemos(params)`    : 목록 조회  
    - `createMemo(payload)` : 새 메모 생성  
    - `updateMemo(id,…)`    : 메모 수정  
    - `deleteMemo(id)`      : 메모 삭제  

---

🎨 **2. 상태별 UI 처리 로직**  
| 상태 UI   | 노출 조건                          | 동작                                    |
| --------- | --------------------------------- | --------------------------------------- |
| Loading   | `isLoading === true`              | 스피너 또는 “로딩 중…” 텍스트 표시      |
| Error     | `error !== null`                  | “데이터 불러오기 실패” 메시지 표시      |
| Empty     | `!isLoading && !error && memos.length === 0` | “메모가 없습니다.” 표시                 |
| Content   | `!isLoading && !error && memos.length > 0`  | 실제 메모 리스트를 렌더링               |

---

🛠 **3. CRUD 구현 흐름**  
1. **Create**  
   - `MemoForm` → `createMemo(payload)` 호출  
   - 응답으로 받은 새 메모를 `setMemos(prev => [newMemo, …prev])` 로 추가  

2. **Read**  
   - 앱 마운트 또는 검색 발생 시 `getMemos({ q })` 호출  
   - 받은 `items` 배열을 `setMemos(items)`  

3. **Update**  
   - “수정” 클릭 → `editingMemo` 상태에 해당 메모 올림  
   - `MemoForm` 에 초기값 전달 → 사용자 입력 후 제출  
   - `updateMemo(id, changes)` 호출 → 응답(`updated`)으로  
     `setMemos(prev => prev.map(m => m.id===id ? updated : m))`  

4. **Delete**  
   - “삭제” 클릭 → `deleteMemo(id)` 호출  
   - 성공 시 `setMemos(prev => prev.filter(m => m.id!==id))`  
