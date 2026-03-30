import http from 'k6/http';

export let options = {
  vus: 250,        // 🔥 now 1000 users
  duration: '20s'
};

export default function () {
  http.get('http://localhost:3000/api/todos?page=1&limit=10');
}