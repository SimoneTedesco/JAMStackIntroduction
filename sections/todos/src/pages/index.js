import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import axios from "axios";
import Todo from "../components/todo";

export default () => {
  const [status, setStatus] = useState("loading");
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    let canceled = false;
    if (status !== "loading") return;

    axios("/api/get-all-todos").then((result) => {
      if (canceled === true) return;
      if (result.status !== 200) {
        console.error("error loading");
        console.error(result);
        return;
      }
      setTodos(result.data.todos);
      setStatus("loaded");
    });

    return () => {
      canceled = true;
    };
  }, [status]);
  return (
    <main>
      <h1 className={styles.heading}>JAMstack Todos</h1>
      {todos ? (
        <ul className={styles.todos}>
          {todos.map((todo) => (
            <li key={todo._id} className={styles.todo}>
              <Todo todo={todo} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.loading}>loading todos...</ul>
      )}
    </main>
  );
};
