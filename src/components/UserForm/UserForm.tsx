

const UserForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                />
            </div>
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="active"
                    name="active"
                />
                <label className="form-check-label" htmlFor="active">Активен</label>
            </div>
            <div className="form-group">
                <label htmlFor="role">Роль</label>
                <select
                    className="form-control"
                    id="role"
                    name="role"
                >
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