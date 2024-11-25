// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "./Layout"; // Import Layout from earlier code
// import Panel from "./Panel"; // Import Panel
// import "./styles/UserManagement.css"; // Or another appropriate CSS file

// const UpdateToken = () => {
//   const [token, setToken] = useState("");
//   const [isTokenExists, setIsTokenExists] = useState(false);
//   const [newToken, setNewToken] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     fetchBotToken();
//   }, []);

//   // Fetch the bot token to check if it exists
//   const fetchBotToken = async () => {
//     try {
//       const response = await axios.get("/api/settings/telegram-bot-token");
//       setToken(response.data.token);
//       setIsTokenExists(response.data.exists);
//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//       setError("Error fetching bot token.");
//     }
//   };

//   // Handle update or insert bot token
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/settings/telegram-bot-token", {
//         token: newToken,
//       });
//       setSuccessMessage(response.data.message); // Show success message
//       setNewToken(""); // Reset input field
//       fetchBotToken(); // Refresh the token
//     } catch (err) {
//       setError("Error submitting the token.");
//     }
//   };

//   return (
//     <Layout title="Admin Dashboard" description="Manage bot settings">
//       <div className="container-fluid m-3 p-3 user-management">
//         <div className="row">
//           {/* Sidebar Panel */}
//           <div className="col-md-3">
//             <Panel />
//           </div>

//           {/* Main Content */}
//           <div className="col-md-9">
//             <div className="card p-3">
//               <h1 className="text-center mb-4">
//                 Telegram Bot Token Management
//               </h1>
//               {loading ? (
//                 <div>Loading...</div>
//               ) : error ? (
//                 <div className="alert alert-danger">{error}</div>
//               ) : (
//                 <div>
//                   <h4>Current Telegram Bot Token:</h4>
//                   <p>{token ? token : "No token set."}</p>

//                   {/* Success Message */}
//                   {successMessage && (
//                     <div className="alert alert-success">{successMessage}</div>
//                   )}

//                   {/* Token update/insert form */}
//                   <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                       <label htmlFor="botToken">Bot Token:</label>
//                       <input
//                         type="text"
//                         id="botToken"
//                         className="form-control"
//                         value={newToken}
//                         onChange={(e) => setNewToken(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <button type="submit" className="btn btn-primary mt-3">
//                       {isTokenExists ? "Update Token" : "Insert Token"}
//                     </button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default UpdateToken;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "./Layout"; // Import Layout from earlier code
// import Panel from "./Panel"; // Import Panel
// import "./styles/UserManagement.css"; // Or another appropriate CSS file

// const UpdateToken = () => {
//   const [token, setToken] = useState("");
//   const [isTokenExists, setIsTokenExists] = useState(false);
//   const [newToken, setNewToken] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     fetchBotToken();
//   }, []);

//   // Fetch the bot token to check if it exists
//   const fetchBotToken = async () => {
//     try {
//       setLoading(true); // Start loading state
//       const response = await axios.get("/api/settings/telegram-bot-token");
//       setToken(response.data.token);
//       setIsTokenExists(response.data.exists);
//     } catch (err) {
//       setError("Failed to fetch bot token. Please try again.");
//     } finally {
//       setLoading(false); // End loading state
//     }
//   };

//   // Handle update or insert bot token
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors
//     setSuccessMessage(""); // Clear previous success messages

//     try {
//       const response = await axios.post("/api/settings/telegram-bot-token", {
//         token: newToken,
//       });
//       setSuccessMessage(response.data.message); // Show success message
//       setNewToken(""); // Reset input field
//       fetchBotToken(); // Refresh the token
//     } catch (err) {
//       setError("Failed to update token. Please try again.");
//     }
//   };

//   return (
//     <Layout title="Admin Dashboard" description="Manage bot settings">
//       <div className="container-fluid m-3 p-3 user-management">
//         <div className="row">
//           {/* Sidebar Panel */}
//           <div className="col-md-3">
//             <Panel />
//           </div>

//           {/* Main Content */}
//           <div className="col-md-9">
//             <div className="card p-4">
//               <h1 className="text-center mb-4">
//                 Telegram Bot Token Management
//               </h1>
//               {loading ? (
//                 <div className="text-center">Loading...</div>
//               ) : error ? (
//                 <div className="alert alert-danger">{error}</div>
//               ) : (
//                 <>
//                   <div className="mb-4">
//                     <h4>Current Telegram Bot Token:</h4>
//                     <div className="bg-light p-3 rounded">
//                       {isTokenExists ? (
//                         <span>{token}</span>
//                       ) : (
//                         <span className="text-muted">No token set.</span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Success Message */}
//                   {successMessage && (
//                     <div className="alert alert-success">{successMessage}</div>
//                   )}

//                   {/* Error Message */}
//                   {error && <div className="alert alert-danger">{error}</div>}

//                   {/* Token update/insert form */}
//                   <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                       <label htmlFor="botToken">
//                         {isTokenExists
//                           ? "Update Telegram Bot Token:"
//                           : "Insert Telegram Bot Token:"}
//                       </label>
//                       <input
//                         type="text"
//                         id="botToken"
//                         className="form-control"
//                         placeholder="Enter new token"
//                         value={newToken}
//                         onChange={(e) => setNewToken(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <button type="submit" className="btn btn-primary mt-3">
//                       {isTokenExists ? "Update Token" : "Insert Token"}
//                     </button>
//                   </form>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default UpdateToken;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout"; // Import Layout
import Panel from "./Panel"; // Import Panel
import "./styles/UserManagement.css"; // Add styling as needed

const UpdateToken = () => {
  const [token, setToken] = useState("");
  const [isTokenExists, setIsTokenExists] = useState(false);
  const [newToken, setNewToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch bot token on component mount
  useEffect(() => {
    fetchBotToken();
  }, []);

  const fetchBotToken = async () => {
    try {
      setLoading(true);

      // Log the endpoint to debug the issue
      const endpoint = "https://admin-panel-weather-server.onrender.com/api/settings/telegram-bot-token";
      console.log("Fetching from endpoint:", endpoint);

      // Make the API call
      const response = await axios.get(endpoint);

      if (response?.data) {
        setToken(response.data.token || "");
        setIsTokenExists(!!response.data.token);
      } else {
        throw new Error("Invalid API response");
      }
    } catch (err) {
      console.error("Error fetching bot token:", err.response || err.message);

      // Show detailed error if available
      setError(
        err.response?.data?.message ||
          "Failed to fetch bot token. The server returned an error."
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle token submission for insert/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!newToken.trim()) {
      setError("Token cannot be empty.");
      return;
    }

    try {
      const endpoint = "https://admin-panel-weather-server.onrender.com/api/settings/telegram-bot-token";
      const response = await axios.post(endpoint, {
        token: newToken,
      });
      setSuccessMessage(response.data.message || "Token updated successfully!");
      setNewToken(""); // Clear input field
      fetchBotToken(); // Refresh the current token
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to update token. Please try again."
      );
    }
  };

  return (
    <Layout title="Admin Dashboard" description="Manage bot settings">
      <div className="container-fluid m-3 p-3 user-management">
        <div className="row">
          {/* Sidebar Panel */}
          <div className="col-md-3">
            <Panel />
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div className="card p-4">
              <h1 className="text-center mb-4">
                Telegram Bot Token Management
              </h1>

              {loading ? (
                <div className="text-center">Loading...</div>
              ) : (
                <>
                  {/* Display current token */}
                  <div className="mb-4">
                    <h4>Current Telegram Bot Token:</h4>
                    <div className="bg-light p-3 rounded">
                      {isTokenExists ? (
                        <span>{token}</span>
                      ) : (
                        <span className="text-muted">No token set.</span>
                      )}
                    </div>
                  </div>

                  {/* Display success or error messages */}
                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}
                  {error && <div className="alert alert-danger">{error}</div>}

                  {/* Token Update/Insert Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="botToken">
                        {isTokenExists
                          ? "Update Telegram Bot Token:"
                          : "Insert Telegram Bot Token:"}
                      </label>
                      <input
                        type="text"
                        id="botToken"
                        className="form-control"
                        placeholder="Enter new token"
                        value={newToken}
                        onChange={(e) => setNewToken(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                      {isTokenExists ? "Update Token" : "Insert Token"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateToken;
