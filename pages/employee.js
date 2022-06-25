import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
const employee = () => {
  const [token, settoken] = useState('');
  const [user, setuser] = useState('');
  const [name, setName] = useState('');
  const [expire, setExpire] = useState('');
  useEffect(() => {
    getUsers();
  }, []);
  const router = useRouter();

  const getUsers = async () => {
    axios.get('http://localhost:3000/api/users').then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <div className="container mt-5">
        <h1>Welcome Back: {name}</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* {user.map((a, index) => (
             return( <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.email}</td>
              </tr>)
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default employee;
