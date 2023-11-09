import Toolbar from './components/Toolbar/Toolbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

const App = () => {
    return (
        <>
            <header>
                <Toolbar/>
            </header>
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-6">
                            <UserForm/>
                        </div>
                        <div className="col-6">
                            <Users/>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default App;