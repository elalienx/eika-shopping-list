// NPM Packages
import { useState, useEffect } from "react";

export default function User({ id }) {
  const [user, setUser] = useState(null);

  // Methods
  async function fetchUserData(id) {
    const response = await fetch("/" + id);

    setUser(await response.json());
  }

  useEffect(() => fetchUserData(id), [id]);

  if (!user) {
    return "loading...";
  }

  return (
    <div>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </div>
  );
}
