import React, {useState } from 'react';
import {User} from '../../types';

interface Props {
    onCreateUser: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onCreateUser}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [role, setRole] = useState('user');

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsActive(e.target.checked);
    };

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser = {
            id: 0,
            active: true,
            name,
            email,
            isActive,
            role
        };

        onCreateUser(newUser);
        setName('');
        setEmail('');
        setIsActive(false);
        setRole('user');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Имя</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-check-label">Активен</label>
                <input type="checkbox" className="form-check-input" checked={isActive} onChange={handleCheckboxChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Роль</label>
                <select className="form-select" value={role} onChange={handleRoleChange}>
                    <option value="user">Пользователь</option>
                    <option value="editor">Редактор</option>
                    <option value="admin">Администратор</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    );
};

export default UserForm;
