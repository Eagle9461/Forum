import axios from 'axios';

export default axios.create({
  baseURL: 'http://167.99.204.238/api.php',
  withCredentials: false,
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
