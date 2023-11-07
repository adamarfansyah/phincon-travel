import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "./actions";
import { useNavigate } from "react-router-dom";
import { Layout, InputCustom, TextEditor } from "../../components/";
import generateDates from "../../utils/generateDates";
import styles from "./newJourney.module.scss";

export default function NewJourneyPage() {
  const dispatch = useDispatch();
  const dates = generateDates();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useSelector((state) => state.userLoginReducer);
  const [formData, setFormData] = useState({
    userId: user.id,
    title: "",
    date: dates,
    imageUrl: "",
    shortDescription: "",
    description: "",
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    user && dispatch(createPostAction(formData));
    navigate("/profile");
  };

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      description: e,
    });
  };

  return (
    <Layout title={"New Journey"}>
      <div className={styles.newJourneyPage}>
        <h1>New Journey</h1>
        <div className={styles.newJourney__form}>
          <form onSubmit={handleSubmit}>
            <InputCustom
              label={"Title"}
              name={"title"}
              value={formData.title}
              onChange={handleChange}
              required
            />
            <InputCustom
              label={"Image URL"}
              name={"imageUrl"}
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
            <InputCustom
              label={"Short Description"}
              name={"shortDescription"}
              value={formData.shortDescription}
              onChange={handleChange}
              required
            />
            <div className={styles.textEditor}>
              <h2>Description</h2>
              <TextEditor
                id={"description"}
                value={formData?.description}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>

            <div className={styles.btns}>
              <button type="submit" className={styles.btn}>
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
