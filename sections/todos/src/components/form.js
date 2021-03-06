import React, { useState } from "react";
import axios from "axios";
import styles from "./form.module.css";

const Form = ({ reloadTodos }) => {
  const [text, setText] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text === "") return;
    await axios.post("/api/create-todo", { text });

    setText("");
    reloadTodos();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Add a todo
        <input
          type="text"
          value={text}
          className={styles.input}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button className={styles.button}>Save todo</button>
    </form>
  );
};

export default Form;
