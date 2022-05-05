import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Layout from "../../components/ModalLayout";
import GoogleButton from "../../components/GoogleButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <Layout backButtonText={"Cerrar"}>
          <div className="flex justify-center items-center py-1">
            <input
                type="text"
                 className="w-10/12 rounded-2xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electrónico"
              />            
          </div>
          <div className="flex justify-center items-center py-1">
            <input
                 type="password"
                 className="w-10/12 rounded-2xl"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="Contraseña"
              />
          </div>
          <div className="flex justify-center items-center py-1">
            <button                
               onClick={() => logInWithEmailAndPassword(email, password)}
               className="bg-blue-500 text-gray-100 dark:bg-red-500  font-semibold  py-2 px-4  rounded-2xl  hover:brightness-125 w-10/12">
                Continuar
           </button>
          </div>
          <div className="flex justify-center items-center py-4">
             <p className="text-l text-center text-gray-900 dark:text-gray-100">O</p>
          </div>

          <GoogleButton onClick={signInWithGoogle} text={"Continuar con Google"}/>


          <div className="flex justify-center items-center py-4">
            <div className="text-center w-10/12">
              <Link to="/register">
                 <p className="text-l font-semibold text-gray-900 dark:text-gray-100">Registrarse</p>
              </Link>
              <Link to="/reset">
                 <p className="text-l font-semibold text-gray-900 dark:text-gray-100">Restablecer Contraseña</p>
              </Link>
            </div>
          </div>


    </Layout>
  );
}

export default Login;
