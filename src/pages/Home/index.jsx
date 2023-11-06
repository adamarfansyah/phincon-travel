import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetAllPosts } from "./actions";
import Layout from "../../components/Layout";
import styles from "./home.module.scss";
import Input from "../../components/Input";
import ListCardPost from "../../container/ListCardPosts";

const HomePage = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.homeReducer.posts);
  const isLoading = useSelector((state) => state.homeReducer.isLoading);
  const isError = useSelector((state) => state.homeReducer.isError);

  useEffect(() => {
    dispatch(initGetAllPosts());
  }, []);

  return (
    <Layout title="Home Page">
      <div className={styles.homePage}>
        <div className={styles.homePage__wrapper}>
          <h1>Journey</h1>
          <Input placeholder={"Find Journey"} label="Search" />
        </div>
      </div>
      <ListCardPost payload={listPost} isLoading={isLoading} isError={isError} />
    </Layout>
  );
};

export default HomePage;
