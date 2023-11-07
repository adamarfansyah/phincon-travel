import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postProfileAction } from "./actions";
import { getAllProfilesInitAction } from "../Profile/actions";
import { InputCustom } from "../../components";
import styles from "./register.module.scss";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { profiles } = useSelector((state) => state.profilesReducer);

  useEffect(() => {
    dispatch(getAllProfilesInitAction());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUser = profiles.some(
      (profile) => profile.name === user.username && profile.email === user.email
    );

    if (user.password.length < 6) {
      return setError("Password kurang dari 6");
    }

    if (validUser) {
      return setError("User sudah terdaftar");
    } else {
      dispatch(postProfileAction(user));
      navigate("/");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerCard}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <InputCustom
            label={"Full Name"}
            name={"username"}
            value={user.username}
            onChange={handleChange}
            required
          />
          <InputCustom
            label={"Email"}
            name={"email"}
            value={user.email}
            onChange={handleChange}
            required
          />
          <InputCustom
            label={"Password"}
            type="password"
            name={"password"}
            value={user.password}
            onChange={handleChange}
          />

          <div className={styles.btns}>
            <button type="submit" className={styles.btn}>
              Register
            </button>
          </div>
        </form>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
