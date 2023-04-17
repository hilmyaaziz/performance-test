import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '2m', target: 100 },
    { duration: '10s', target: 1000 },
    { duration: '2m', target: 1000 },
    { duration: '10s', target: 100 },
    { duration: '2m', target: 100 },
    { duration: '10s', target: 1000 },
    { duration: '2m', target: 1000 },
    { duration: '10s', target: 100 },
    { duration: '2m', target: 100 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  http.get('https://tweet-app-hilmy-performance-test-aijk54j36a-et.a.run.app'); // Ganti dengan cloudrun URL
  sleep(1);
}