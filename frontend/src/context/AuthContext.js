const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/tesssttiinnng"; // Adjust the base URL

const login = async (username, password) => {
  try {
    console.log("Attempting login with:", { username, password });

    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }), // Ensure the payload matches backend expectations
    });

    console.log("Login response status:", response.status);

    if (response.ok) {
      const data = await response.json();
      console.log("Login successful:", data);
      setUser(data.user); // Assuming the backend returns a `user` object
      navigate("/"); // Redirect after successful login
    } else {
      const errorData = await response.json();
      console.error("Login failed:", errorData.message || "Unknown error");
    }
  } catch (error) {
    console.error("Error during login:", error.message);
  }
};
