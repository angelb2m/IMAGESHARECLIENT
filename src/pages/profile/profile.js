import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <div className="w-full py-4">
        <div className="flex justify-center items-center py-1">
          <div className="bg-gray-200 dark:bg-gray-400 h-48 w-48 rounded-full flex items-center justify-center overflow-hidden">
             <p className="text-7xl text-gray-900 semi-bold  dark:text-gray-100">{name.trim().charAt(0)}</p>
          </div>
        </div>
        <div className="py-4">
             <p className="text-5xl py-2 text-center text-gray-900 dark:text-gray-100">{name}</p>
             <p className="text-xl py-2 text-center text-gray-900 dark:text-gray-100">@AngelB2M</p>
        </div>

    <div className="flex justify-center items-center py-4 gap-4">
      <button onClick={logout} className="bg-blue-500 text-gray-100 dark:bg-red-500  font-semibold  py-2 px-4 border rounded transition duration-500 ease-in-out transform hover:scale-110 w-48">Editar Perfil</button>
      <button onClick={logout} className="bg-blue-500 text-gray-100 dark:bg-red-500  font-semibold  py-2 px-4 border rounded transition duration-500 ease-in-out transform hover:scale-110 w-48">LogOut</button>
    </div>
  </div>
  );
}

export default Dashboard;
