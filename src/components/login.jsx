import { useEffect, useState } from "react";
import { icon } from "../constants/index";
import Input from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  siginUserFailure,
  siginUserSuccess,
  signUserStart,
} from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading , loggedIn } = useSelector((state) => state.auth);
  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { password, email };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(siginUserSuccess(response.user));
      navigate("/")
    } catch (error) {
      dispatch(siginUserFailure(error.response.data.errors));
    }
  };
  useEffect(()=>{
    if(loggedIn){
      navigate("/")
    }
  } , [loggedIn])
  return (
    <div className="w-50 m-auto conatiner">
      <form className="text-center">
        <img className="mb-4" src={icon} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <ValidationError />
        <Input
          label={"Email address"}
          type={"email"}
          state={email}
          setState={setEmail}
        />
        <Input
          type={"password"}
          label={"password"}
          state={password}
          setState={setPassword}
        />
        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          onClick={loginHandler}
          disabled={isLoading}
        >
          {isLoading ? "Loading...." : "Sigin in"}
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </div>
  );
};

export default Login;
