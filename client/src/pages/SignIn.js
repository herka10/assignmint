import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data}] = useMutation(LOGIN_USER);

    // UPDATE STATE BASED ON INPUT CHANGES
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            })

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        })
    };

    return (
        <main>
            <div>
                <div>
                    <h4>Sign In</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                You have successfully signed in!
                            </p>
                        )  :  (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    className='form-input'
                                    placeholder='Your email'
                                    name='email'
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className='form-input'
                                    placeholder='*******'
                                    name='password'
                                    type='password'
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <button
                                    className='btn btn-block btn-info'
                                    style={{ cursor: 'pointer'}}
                                    type='submit'
                                >Submit</button>
                            </form>
                        )
                    }

                    {error && (
                        <div className='my-3 p-3 bg-danger'>
                            {error.message}
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;