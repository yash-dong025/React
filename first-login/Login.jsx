import './Signup.css'
function Login() {
    return (
    <div className="form-container">
        <h1>Login Page</h1>
        <div className="input-group">
            <svg className="input-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
            </svg>
            <input type="text" placeholder="Username" />
        </div>
        <div className="input-group">
            <svg className="input-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
            </svg>
            <input type="password" placeholder="Password" />
        </div>
        <button>Login</button>
    </div>
    );
}
export default Login;