// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./styles/Dashboard.css";

// function Dashboard() {
//   const [users, setUsers] = useState([]);
//   const [botSettings, setBotSettings] = useState({ apiKey: "" });
//   const [newApiKey, setNewApiKey] = useState("");

//   useEffect(() => {
//     fetchUsers();
//     fetchBotSettings();
//   }, []);

//   const fetchUsers = async () => {
//     const response = await axios.get("http://localhost:5000/api/users");
//     setUsers(response.data);
//   };

//   const fetchBotSettings = async () => {
//     const response = await axios.get("http://localhost:5000/api/settings");
//     setBotSettings(response.data);
//   };

//   const updateApiKey = async () => {
//     await axios.post("http://localhost:5000/api/settings", {
//       apiKey: newApiKey,
//     });
//     setBotSettings({ apiKey: newApiKey });
//     setNewApiKey("");
//   };

//   const blockUser = async (id) => {
//     await axios.post(`http://localhost:5000/api/users/${id}/block`);
//     fetchUsers();
//   };

//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:5000/api/users/${id}`);
//     fetchUsers();
//   };

//   return (
//     <div className="dashboard-container">
//       <h1>Admin Dashboard</h1>

//       <div className="bot-settings">
//         <h2>Bot Settings</h2>
//         <p>Current API Key: {botSettings.apiKey}</p>
//         <input
//           type="text"
//           placeholder="New API Key"
//           value={newApiKey}
//           onChange={(e) => setNewApiKey(e.target.value)}
//         />
//         <button onClick={updateApiKey}>Update API Key</button>
//       </div>

//       <div className="user-management">
//         <h2>User Management</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Chat ID</th>
//               <th>City</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user._id}</td>
//                 <td>{user.chatId}</td>
//                 <td>{user.city || "N/A"}</td>
//                 <td>
//                   <button onClick={() => blockUser(user._id)}>Block</button>
//                   <button onClick={() => deleteUser(user._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import "./styles/Dashboard.css";
import Panel from "./Panel";
import Layout from "./Layout";

function Dashboard() {
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <Panel />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h1>Welcome to Admin Dashboard for Telegram Weather Bot</h1>

              <p>Everything Related to Weather Bot</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
