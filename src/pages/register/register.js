import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import Layout from "../../components/ModalLayout";
import GoogleButton from "../../components/GoogleButton";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <Layout backButtonText={"Atrás"}>
       <div className="flex justify-center items-center py-1">
         <input
         type="text"
         className="w-10/12 rounded-2xl"
         value={name}
         onChange={(e) => setName(e.target.value)}
         placeholder="Nombre Completo"
         />            
       </div>

       <div className="flex justify-center items-center py-1">
         <input
         type="text"
         className="w-10/12 rounded-2xl"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Correo Electrónico"
         />            
       </div>

       <div className="flex justify-center items-center py-1">
         <input
         type="password"
         className="w-10/12 rounded-2xl"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Cree una contraseña"
         />            
       </div>

       <div className="flex justify-center items-center py-1">
            <button                
               onClick={register}
               className="bg-blue-500 text-gray-100 dark:bg-red-500  font-semibold  py-2 px-4  rounded-2xl  hover:brightness-125 w-10/12">
                Continuar
           </button>
        </div>

        <div className="flex justify-center items-center py-4">
             <p className="text-l text-center text-gray-900 dark:text-gray-100">O</p>
        </div>

        <GoogleButton onClick={signInWithGoogle} text={"Continuar con Google"}/>

    </Layout>
  );
}

export default Register;