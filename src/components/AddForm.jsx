import React, { useState } from "react";
import { nanoid } from "nanoid";

function AddForm(props) {
  const [form, setForm] = useState({ title: "", zone: "" });
  const { addWatch } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleSubmit (e) {
    e.preventDefault();
    const watch = { id: nanoid(), ...form };
    addWatch(watch);
    setForm({ title: "", zone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__input-box">
        <label htmlFor="title" className="form__label">
          Название
        </label>
        <input
          onChange={handleChange}
          value={form.title}
          id="title"
          type="text"
          name="title"
          className="form__input"
          required
        />
      </div>
      <div className="form__input-box">
        <label htmlFor="zone" className="form__label">
          Временная зона
        </label>
        <input
          onChange={handleChange}
          type="number"
          value={form.zone}
          className="form__input"
          id="zone"
          name="zone"
          required
        />
      </div>
      <button className="form__btn">Добавить</button>
    </form>
  );
}

export default AddForm;
