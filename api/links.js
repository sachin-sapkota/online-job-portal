import axios from 'axios';

export const post_like = (url, data) => {
  axios.post(url, data, { withCredentials: true }).then((res) => res.data);
};
