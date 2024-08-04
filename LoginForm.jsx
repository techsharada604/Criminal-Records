// import 'tailwindcss/tailwind.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import ReactDOM from 'react-dom';


// function LoginForm({ onLogin }) {
//   const navigate = useNavigate();
//   const [loginParams, setloginParams] = useState({
//     email:'',
//     password:''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setloginParams(prevParams => ({
//       ...prevParams,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(loginParams, navigate);
//   };

//   return (
//     <div >
// <h1>CRIMINAL DATABASE</h1>
// <div className="background-div">
// <h2>LOGIN </h2>
//         <form onSubmit={handleSubmit}>
//           <div >
//             <label className="backg" >
//               Email:
//               <input type="email" name="email" value={loginParams.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md" />
//             </label>
//           </div>
//           <div className="backg">
//             <label>
//               Password:
//               <input type="password" name="password" value={loginParams.password} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md" />
//             </label></div>
//       <button type="submit">Login</button>
//     </form></div></div>
//   );
// }

// export default LoginForm;

// import 'tailwindcss/tailwind.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginForm({ onLogin }) {
//   const navigate = useNavigate();
//   const [loginParams, setLoginParams] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginParams(prevParams => ({
//       ...prevParams,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors
//     onLogin(loginParams, navigate)
//       .catch(err => {
//         setError('Login failed. Please check your credentials and try again.');
//         console.error('Login error:', err);
//       });
//   };

//   return (
//     <div className="login-container">
//       <h1>CRIMINAL DATABASE</h1>
//       <div className="background-div">
//         <h2>LOGIN</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className="backg">
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={loginParams.email}
//                 onChange={handleChange}
//                 className="mt-1 p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </label>
//           </div>
//           <div className="backg">
//             <label>
//               Password:
//               <input
//                 type="password"
//                 name="password"
//                 value={loginParams.password}
//                 onChange={handleChange}
//                 className="mt-1 p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </label>
//           </div>
//           {error && <div className="error-message">{error}</div>}
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [loginParams, setLoginParams] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    onLogin(loginParams, navigate)
      .catch(err => {
        setError('Login failed. Please check your credentials and try again.');
        console.error('Login error:', err);
      });
  };

  return (
    <div className="login-container">
      <h1>CRIMINAL DATABASE</h1>
      <div className="background-div">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="backg">
              Email:
              <input
                type="email"
                name="email"
                value={loginParams.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </label>
          </div>
          <div className="backg">
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={loginParams.password}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </label>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
