import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserLoginAction } from "../Login/actions";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userLoginReducer);

  useEffect(() => {
    dispatch(deleteUserLoginAction(user?.id));
  }, []);

  return navigate("/");
}
