import { LoadingButton } from "@mui/lab";
import Notiflix from "notiflix";
import qs from "query-string";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from "react-router-dom";
import { forgotPassword, recoveryEmail } from "../api/v1/auth";
const Forgot = () => {
  const search = qs.parse(useLocation().search);
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [term, setTerm] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      debugger;
      if (search.validationId) {
        await forgotPassword({
          email: data.email,
          resetToken: search.validationId,
          password: data.password,
        });
        Notiflix.Notify.success("Password changed successfully");
        history.push("/login");
      } else {
        await recoveryEmail({ email: data.email });
        Notiflix.Notify.success(
          "Reset password Link successfuly sent to your Email"
        );
        history.push("/login");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Notiflix.Notify.failure(error);
    }
  };
  return (
    <Fragment>
      <div className="main-wrap">
        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("http://elomoas.uitheme.net/assets/images/login-bg-2.jpg")`,
            }}
          ></div>

          <div className="col-xl-7 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
            <div className="card shadow-none border-0 ml-auto mr-auto login-card">
              <div className="card-body rounded-0 text-left">
                {search.validationId ? (
                  <h2 className="fw-700 display1-size display2-md-size mb-4">
                    Change <br />
                    your password
                  </h2>
                ) : (
                  <h2 className="fw-700 display1-size display2-md-size mb-4">
                    Recovery Email
                  </h2>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group icon-input mb-1">
                    <input
                      style={{
                        borderColor: errors?.email && "red",
                      }}
                      type="text"
                      {...register("email", {
                        required: true,
                      })}
                      className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Recovery Email"
                    />
                    <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                  </div>
                  {search.validationId && (
                    <div className="form-group icon-input mb-1">
                      <input
                        style={{
                          borderColor: errors?.password && "red",
                        }}
                        type="password"
                        {...register("password", {
                          required: true,
                        })}
                        className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                        placeholder="New Password"
                      />
                      <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                    </div>
                  )}
                  <div className="form-check text-left mb-3">
                    <input
                      onChange={(e) => setTerm(e.target.checked)}
                      // value={term}
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label font-xssss text-grey-500"
                      htmlFor="exampleCheck1"
                    >
                      Accept Term and Conditions
                    </label>
                  </div>
                  <div className="form-group mb-1">
                    <LoadingButton
                      type="submit"
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                      disabled={loading || !term}
                    >
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm mr-3"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      )}

                      <span className="">
                        {search.validationId ? "Change Password" : "Submit"}
                      </span>
                    </LoadingButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Forgot;
