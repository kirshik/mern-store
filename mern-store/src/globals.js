const serverURL = "http://localhost:4100";
const axiosConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true
};
export default serverURL;
export { axiosConfig };