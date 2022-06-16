import { CircularProgress } from "@mui/material";
import Notiflix from "notiflix";
import * as React from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { confirmEmail } from "../api/v1/auth";

const EmailConfirmation = () => {
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = useLocation();

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    if (id) confirmEmailFun();
    else history.goBack();
  }, [id]);
  const confirmEmailFun = async () => {
    try {
      setLoading(true);
      if (pathname.includes("reset/password")) {
        history.push(`/forgot-password?validationId=${id}`, { replace: true });
        return;
      }
      await confirmEmail(id);
      Notiflix.Notify.success("Email Verified");
      history.push("/login", { replace: true });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Notiflix.Notify.failure("something went wrong");
      history.goBack();
    }
  };
  return (
    <>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size="6rem" />
        </div>
      )}
    </>
  );
};
export default EmailConfirmation;
