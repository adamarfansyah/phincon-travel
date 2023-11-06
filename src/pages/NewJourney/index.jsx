import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAction } from "./actions";

export default function NewJourneyPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    shortDescription: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPostAction(formData));
  };

  return (
    <div>
      <h1>Form Isi Data Postingan</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Judul:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="imageUrl">URL Gambar:</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="shortDescription">Deskripsi Singkat:</label>
        <textarea
          id="shortDescription"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <br />

        <label htmlFor="description">Deskripsi Lengkap:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="8"
          required
        ></textarea>
        <br />

        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}
