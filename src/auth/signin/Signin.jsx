import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signin.css";
const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Dummy Data
    const dummyUsername = 'user';
    const dummyPassword = 'user123';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === dummyUsername && password === dummyPassword) {
            navigate('/');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="form-wrapper">

            <div className="form-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Sign In</button>
                </form>
                <p>
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
