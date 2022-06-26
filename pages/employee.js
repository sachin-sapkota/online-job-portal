import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/users`);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: { data },
//   };
// }

const employee = () => {
  const [token, settoken] = useState('');
  const [user, setuser] = useState([]);
  const [name, setName] = useState('');
  const [expire, setExpire] = useState('');
  useEffect(() => {
    getUsers();
  }, []);
  const router = useRouter();

  const getUsers = async () => {
    axios
      .get('http://localhost:3000/api/users')

      .then((res) => {
        setuser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
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
            {/* {user.map((data) => {
              const a = (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                </tr>
              );
              return a;
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default employee;