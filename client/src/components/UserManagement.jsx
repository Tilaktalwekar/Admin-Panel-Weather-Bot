import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";
import Panel from "./Panel";
import "./styles/UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from the server
  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://admin-panel-weather-server.onrender.com/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Block a user
  const blockUser = async (id) => {
    try {
      await axios.post(`https://admin-panel-weather-server.onrender.com/api/users/${id}/block`);
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  };

  const subscribe = async (id) => {
    try {
      await axios.post(`https://admin-panel-weather-server.onrender.com/api/users/${id}/subscribe`);
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error subscribing user:", error);
    }
  };

  const unsubscribe = async (id) => {
    try {
      await axios.post(`https://admin-panel-weather-server.onrender.com/api/users/${id}/unsubscribe`);
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error unblocking user:", error);
    }
  };

  // Unblock a user
  const unblockUser = async (id) => {
    try {
      await axios.post(`https://admin-panel-weather-server.onrender.com/api/users/${id}/unblock`);
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error unblocking user:", error);
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://admin-panel-weather-server.onrender.com/api/users/${id}`);
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Layout title="User Management" description="Manage bot users">
      <div className="container-fluid m-3 p-3 user-management">
        <div className="row">
          {/* Sidebar Panel */}
          <div className="col-md-3">
            <Panel />
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h1 className="text-center mb-4">Bot User Management</h1>
              <table className="user-table w-75 p-3">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Chat ID</th>
                    <th>City</th>
                    <th>Blocked</th>
                    <th>Subscription</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.chatId}</td>
                      <td>{user.city}</td>
                      <td>{user.blocked ? "Yes" : "No"}</td>
                      <td>{user.subscribed ? "Yes" : "No"}</td>
                      <td>
                        {user.blocked ? (
                          <button
                            onClick={() => unblockUser(user._id)}
                            className="btn btn-success me-2"
                          >
                            Unblock
                          </button>
                        ) : (
                          <button
                            onClick={() => blockUser(user._id)}
                            className="btn btn-warning me-2"
                          >
                            Block
                          </button>
                        )}
                        {user.subscribed ? (
                          <button
                            onClick={() => unsubscribe(user._id)}
                            className="btn btn-success me-2"
                          >
                            Unsubscribe
                          </button>
                        ) : (
                          <button
                            onClick={() => subscribe(user._id)}
                            className="btn btn-warning me-2"
                          >
                            Subscribe
                          </button>
                        )}
                        <button
                          onClick={() => deleteUser(user._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserManagement;
