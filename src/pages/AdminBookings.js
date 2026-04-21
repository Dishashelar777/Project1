import React, { useEffect, useState } from "react";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:5000/api/bookings")
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  // 🔐 LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px" }}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
  const handleDelete = async (id) => {
  try {
    await fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: "DELETE",
    });

    // remove from UI
    setBookings(bookings.filter((b) => b._id !== id));
  } catch (err) {
    console.log(err);
  }
};

  // ✅ BOOKINGS UI
  return (
  <div style={{ padding: "20px" }}>
    <h2>All Bookings</h2>

    {bookings.map((b) => (
      <div
        key={b._id}
        style={{
          border: "1px solid #ccc",
          margin: "10px",
          padding: "10px",
        }}
      >
        <p><b>Name:</b> {b.name}</p>
        <p><b>Email:</b> {b.email}</p>
        <p><b>Mobile:</b> {b.mobile}</p>

        {/* ✅ DELETE BUTTON */}
        <button
          onClick={() => handleDelete(b._id)}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);
};

export default AdminBookings;