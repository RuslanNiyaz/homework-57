import React from 'react';
import UserItem from './UserItem';
import {User} from '../../types';
interface Props {
    users: User[];
}

const Users: React.FC<Props> = ({users}) => {
    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};

export default Users;
