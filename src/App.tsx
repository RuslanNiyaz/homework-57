import {useState} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {User} from "./types";

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const handleUserCreate = (user: User) => {
        setUsers([...users, { ...user, id: users.length + 1}]);
    };

    return (
        <>
            <header>
                <Toolbar/>
            </header>
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-6">
                            <UserForm  onCreateUser={handleUserCreate}  />
                        </div>
                        <div className="col-6">
                            <Users users={users} />
                        </div>
                    </div>
            </div>
        </>
    );
};

export default App;