import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_GROUP } from '../utils/mutations';
import { REMOVE_GROUP } from '../utils/mutations';
import { UPDATE_GROUP } from '../utils/mutations';

const GroupList = ({ title, name, users}) => {
    if (!users.length) {
        return <h3>No Users Yet</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {users && 
                users.map((user) => (
                    <div key={user._id} className="col-12 col-xl-6">
                        <div className="card">
                            <h4 className='card-header bg-dark text-light p-2 m-0'>{title.name} <br />
                            <span className='text-white' style={{}}>
                                currently has {}
                            </span>

                            </h4>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default GroupList;