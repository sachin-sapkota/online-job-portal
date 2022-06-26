import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';

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

  //   useEffect(() => {
  //     getUsers();
  //   }, []);
  //   const router = useRouter();

  //   const getUsers = async () => {
  //     axios
  //       .get('http://localhost:3000/api/users')

  //       .then((res) => {
  //         setuser(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   console.log(user);

  return (
    <div>
      <div className="">
        <h1>Welcome Back: {user.name}</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
export default employee;
