import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUserLoginAction } from "./actions";
import { getAllProfilesInitAction } from "../Profile/actions";
import { Link, useNavigate } from "react-router-dom";
import { InputCustom } from "../../components";
import styles from "./login.module.scss";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { profiles } = useSelector((state) => state.profilesReducer);
  const { user, isLoggedIn } = useSelector((state) => state.userLoginReducer);

  console.log(isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    dispatch(getAllProfilesInitAction());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUser = profiles.find(
      (profile) => profile.email === formData.email && profile.password === formData.password
    );

    if (validUser) {
      dispatch(postUserLoginAction(validUser));
      navigate("/");
    } else {
      setError("Login gagal. Coba lagi.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.formLogin}>
      <div className={styles.formLogin__card}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <InputCustom
            required
            label={"Email"}
            onChange={handleChange}
            value={user.email}
            name={"email"}
          />
          <InputCustom
            required
            label={"Password"}
            onChange={handleChange}
            value={user.password}
            name={"password"}
          />

          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
        <p>
          Dont have an account? ? <Link to="/register">Klik Here</Link>
        </p>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
