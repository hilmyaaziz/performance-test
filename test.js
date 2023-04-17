import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
    stages: [
      { duration: '1m', target: 100 },
      { duration: '30s', target: 100 },
      { duration: '45s', target: 50 },
    ],
  };

export default function () {
  http.get('https://tweet-app-hilmy-performance-test-aijk54j36a-et.a.run.app'); // Ganti dengan cloudrun URL
  sleep(1);
}