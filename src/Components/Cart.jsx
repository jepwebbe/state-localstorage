import React, { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { StyledCart } from "./Styled.Cart";

const Cart = () => {
  // localStorage er altid en string, så når man gemmer skal det stringify'es
  const storageStr = "myState";
  const items = ["smør", "mælk", "ost"];

  const userObj = { id: uuidv4(), item: "", quantity: "" };

  const initialStorage = localStorage.getItem(storageStr)
    ? JSON.parse(localStorage.getItem(storageStr))
    : [];
  const [state, setState] = useState(userObj);
  const [users, setUsers] = useState(initialStorage);
  const { id, item, quantity } = state;

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
            if (user.id === id) {
              return {
                ...user,
                item: item,
                quantity: quantity,
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
    setUsers((prev = prev.filter((user) => user.id !== id)));
  };

  return (
    <StyledCart>
      <div>
        <h2>Tilføj varer</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={id}
            name="id"
            readOnly
            style={{ display: "none" }}
          />
          <div>
            <p>Vare</p>
            <input
              type="text"
              value={item}
              name="item"
              placeholder="Skriv din vare her"
              onChange={onHandleChange}
              required
            />
          </div>
          <div>
            <p>Antal</p>
            <input
              type="number"
              value={quantity}
              name="quantity"
              onChange={onHandleChange}
            />
          </div>
          <button>Add</button>
        </form>
      </div>

      <section>
        <h2>Indkøbsliste</h2>
        <ul>
          {users.map((product, i) => (
            <div>
              <li key={i} onClick={() => setState(findUser(product.id))}>
                {product.item}{" "}
              </li>
              <input
                value={product.quantity}
                type="number"
                onChange={onHandleChange}
                name="quantity"

              />
            </div>
          ))}
        </ul>
      </section>
    </StyledCart>
  );
};

export default Cart;
