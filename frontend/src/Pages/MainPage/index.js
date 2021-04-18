import React, { useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import api from "../../services/api";

function MainPage() {
  const { signOut } = useAuth();
  const [data, setData] = useState([]);

  

  async function getUser() {
 
  
    const users = await api.get("/users/");

    setData(users.data);
  }

  return (
    <div>
      <button onClick={signOut}>X</button>
      <button onClick={getUser}>GetUsers</button>
      <button onClick={() => setData([])}>Clear Users</button>

      <div>
        {data?.map((x) => (
          <p key={x.email}>{x.name}</p>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
