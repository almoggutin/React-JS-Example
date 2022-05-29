import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sidebar.styles.scss';

import { AuthContext } from '../../../contexts/Auth.context';
import { logoutAction } from '../../../actions/auth.actions';

import { logout } from '../../../services/auth.service';
import { removeUserDataFromSessionStorage } from '../../../utils/storage.utils';

const Sidebar = ({ className, hideSidebar }) => {
    const { authState, updateAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSidebarClick = (event) => event.stopPropagation();

    const handleLogout = async () => {
        const { userID } = authState;

        try {
            await logout(userID);

            removeUserDataFromSessionStorage();
            updateAuthState(logoutAction());
            hideSidebar();

            navigate('/');
        } catch (err) {
            const errObj = JSON.parse(err.message);
            if (errObj.status === 400) alert('Bad Request');
        }
    };

    return (
        <div className={`backdrop ${className}`} onClick={hideSidebar}>
            <div className="sidebar" onClick={handleSidebarClick}>
                <button type="button" className="close-btn" onClick={hideSidebar}>
                    X
                </button>

                <ul className="sidebar-items">
                    <li className="sidebar-item">
                        <Link to="/" onClick={hideSidebar}>
                            Home
                        </Link>
                    </li>

                    {authState ? (
                        <li className="sidebar-item">
                            <span onClick={handleLogout}>Logout</span>
                        </li>
                    ) : (
                        <li className="sidebar-item">
                            <Link to="/login" onClick={hideSidebar}>
                                Login
                            </Link>
                        </li>
                    )}

                    {authState && (
                        <li className="sidebar-item">
                            <Link to="/tasks" onClick={hideSidebar}>
                                My Tasks
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
