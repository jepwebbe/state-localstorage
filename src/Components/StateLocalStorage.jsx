import React, { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const StateLocalStorage = () => {
  // localStorage er altid en string, så når man gemmer skal det stringify'es
  const storageStr = "myState";
  const userObj = { id: uuidv4(), username: "", email: "" };
  const initialStorage = localStorage.getItem(storageStr)
    ? JSON.parse(localStorage.getItem(storageStr))
    : [];
  const [state, setState] = useState(userObj);
  const [users, setUsers] = useState(initialStorage);
  const { id, username, email } = state;

  console.log("state", state);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers(
      findUser(id) === undefined
        ? (prev) => [...prev, state]
        : users.map((user) => {
            if (user.id === ud) {
              return {
                ...user,
                username: username,
                email: email,
              };
            } else {
              return { ...user };
            }
          })
    );
    // Nulstille så den er klar til en ny user
    setState(userObj);
  };

  useEffect(() => {
    localStorage.setItem(storageStr, JSON.stringify(users));
  }, [users]);

  const findUser = (id) => {
    const user = users.find((user) => user.id === id);
    return user;
  };

 const onDeleteHandler = (id) => {
    setUsers(prev = prev.filter((user) => user.id !== id))
 }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} name="id" readOnly />
      <input
        type="text"
        value={username}
        name="username"
        onChange={onHandleChange}
      />{" "}
      {username}
      <input
        type="text"
        value={email}
        name="email"
        onChange={onHandleChange}
      />{" "}
      {email}
      <button >Add {username}</button>
    </form>
    <ul>
        {users.map((user, i) => (
            <li key={i} onClick={() => setState(findUser(user.id)) }>{user.username} <button onClick={() => onDeleteHandler(user.id)}>Delete</button></li>
        ))}
    </ul>
    </>
  );
};

export default StateLocalStorage;
