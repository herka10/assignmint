import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import SignUp from './SignUp';

import Auth from '../utils/auth';

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log('data', data)

      Auth.login(data.login.token);
    } catch (e) {
      setErrorMessage('Invalid Login')
      console.log(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4 m-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header p-2">Login</h4>
          <div className="card-body">
            {data && !errorMessage ? (
              <p>
                You have successfully signed in!
              </p>
            ) : (
              <form class="row g-5 m-3 p-3" onSubmit={handleFormSubmit}>
                <input
                  className="form-input w-25 p-1 m-1"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input w-25 p-1 m-1"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info w-25 p-1 m-1"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3">
                {errorMessage ? errorMessage : error.message}
              </div>
            )}
          </div>
        </div>
      </div>
      <h4 className='m-4 p-3'>Don't have a login? Sign Up Below</h4>
      <div>
        <SignUp />
      </div>
    </main>
  );
};

export default Login;
