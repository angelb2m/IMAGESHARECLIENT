

import { useNavigate } from "react-router-dom";

export const Modal = () => {
  const navigate = useNavigate();
  return (
    <div className="modalDiv">
      <div className="modal">
        <h3>Modal</h3>
        <button onClick={() => navigate(-1)}>Close</button>
      </div>
    </div>
  );
};
    <div className="modalDiv">
    <div className="modal">
    <div className="login">
    <div className="login__container">
     
      <button className="login__btn login__google" onClick={signInWithGoogle}>
        Login with Google
      </button>
      <div>
        <Link to="/reset">Forgot Password</Link>
      </div>
      <div>
        Don't have an account? <Link to="/register">Register</Link> now.
      </div>
    </div>
  </div>        <button onClick={() => navigate(-1)}>Close</button>
    </div>
  </div>

  */