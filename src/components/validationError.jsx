import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMessages = useCallback(() => {
    return Object.keys(error).map((item) => {
      const msg = error[item].join(",")
            return `${item} - ${msg}`;
    });
  }, [error]);
  return (
    error !== null &&
    errorMessages().map((err) => {
      return(
      <div className="alert alert-danger m-1 p-1" role="alert" key={err}>
        {err}
      </div>
    )})
  );
};

export default ValidationError;
