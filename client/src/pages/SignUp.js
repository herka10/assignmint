import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignUp = (props) => {
    const [formState, setFormState] = useState({ 
        name: '',
        email: '',
        password: '',
     });
    const [addUser, { error, data}] = useMutation(SIGNUP_USER);

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
            const { data } = await signin({
                variables: { ...formState },
            })

            Auth.login(data.addUser.token);
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
                                    placeholder='Your Name'
                                    name='name'
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
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

export default SignUp ;