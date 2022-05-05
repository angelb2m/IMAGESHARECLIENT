import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import Layout from "../../components/ModalLayout";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

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
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Correo Electrónico"
         />            
       </div>

       <div className="flex justify-center items-center py-1">
            <button                
               onClick={() => sendPasswordReset(email)}
               className="bg-blue-500 text-gray-100 dark:bg-red-500  font-semibold  py-2 px-4  rounded-2xl  hover:brightness-125 w-10/12">
                Enviar Link
           </button>
        </div>
    </Layout>
  );
}

export default Reset;