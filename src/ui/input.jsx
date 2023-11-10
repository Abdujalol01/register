const Input = ({ type = "text", label ,state,setState}) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        value={state}
        onChange={(e)=> setState(e.target.value)}
        className="form-control mb-3"
        id="floatingInput"
        placeholder={"label"}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
