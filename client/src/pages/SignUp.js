import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignUp = (props) => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(SIGNUP_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await addUser({
                variables: { ...formState },
            })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
=======
=======
>>>>>>> 0d1b61020c4c67d4bebdd02fe251b61d4cae8aa5
=======
>>>>>>> 0d1b61020c4c67d4bebdd02fe251b61d4cae8aa5
        const token = data.data.signUpUser.token
           Auth.login(token);
           if (token) {
            navigate('/home')
           }
        } catch (err) {
            setErrorMessage('Duplicate User')
            console.log(err);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0d1b61020c4c67d4bebdd02fe251b61d4cae8aa5
=======
>>>>>>> 0d1b61020c4c67d4bebdd02fe251b61d4cae8aa5
=======
>>>>>>> 0d1b61020c4c67d4bebdd02fe251b61d4cae8aa5
        }

        // clear form values
        // setFormState({
        //     email: '',
        //     password: '',
        // })
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
                    <div className="card-body">
                        {data && !errorMessage ? (
                            <p>
                                You have successfully signed up!
                            </p>
                        ) : (
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
                                    style={{ cursor: 'pointer' }}
                                    type='submit'
                                    disabled={!(formState.name && formState.email && formState.password)}
                                    
                                >Submit</button>
                            </form>
                        )
                        }

                        {error || errorMessage && (
                            <div className='my-3 p-3 bg-danger'>
                                {errorMessage ? errorMessage : error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp;