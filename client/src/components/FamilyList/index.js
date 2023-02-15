import React from 'react';
import { Link } from 'react-router-dom';

const FamilyList = ({ familyCount, username, familyMember }) => {
    if (!familyMember || !familyMember.length) {
        return <p className="bg-dark text-light p-3">{username}, invite some family members!</p>;
    }

    return (
        <div>
            <h5>
                {username}'s {familyCount} {familyCount ===1 ? 'family member' : 'family members'}
            </h5>
            {familyMember.map(familyMember => (
                <button className="btn w-100 display-block mb-2" key={family._id}>
                    <Link to={`/profiles/${familyMember.username}`}>{familyMember.username}</Link>
                </button>
            ))}
        </div>
    );
};

export default FamilyList;