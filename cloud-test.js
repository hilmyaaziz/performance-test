import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
    stages: [
      { duration: '1m', target: 50 },
      { duration: '2m', target: 50 },
      { duration: '1m', target: 0 },
    ],

  ext: {    
    loadimpact: {      
      projectID: 3636854,      
      // Test runs with the same name groups test runs together              
      name: "test hilmy"    
    }  
  }
};

export default function () {
  http.get('https://tweet-app-hilmy-performance-test-aijk54j36a-et.a.run.app'); // Ganti dengan cloudrun URL
  sleep(1);
}