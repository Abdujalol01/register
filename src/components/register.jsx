import { useEffect, useState } from "react";
import Input from "../ui/input";
import { icon } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  siginUserFailure,
  siginUserSuccess,
  signUserStart,
} from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isLoading ,loggedIn} = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, password, email };
    try {
      const response = await AuthService.userRegister(user);
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
  },[loggedIn])
  return (
    <div className="w-50 m-auto conatiner">
      <form className="text-center">
        <img className="mb-4" src={icon} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <ValidationError />
        <Input label={"Username"} state={name} setState={setName} />
        <Input
          label={"Email address"}
          type={"email"}
          state={email}
          setState={setEmail}
        />
        <Input
          type={"password"}
          label={"Password"}
          state={password}
          setState={setPassword}
        />
        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          onClick={registerHandler}
          disabled={isLoading}
        >
          {isLoading ? "Loading...." : "Sigin up"}
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </div>
  );
};

export default Register;
