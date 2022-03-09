import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Outlet, Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import image from "../assests/images/Login/img1-1.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Systems from "../assests/images/Login/bothimg-login.png";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "../Pages/LoginData";
// import { ThemeProvider, makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import Logo from "../Components/Logo";
import formBg from "../assests/images/Login/loginform-img-bg.png";
import { fontSize, positions } from "@mui/system";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 25px",
  },
  btnLogin: {
    width: "100%",
    marginTop: "39px !important",
    position: "absolute",
    zIndex: "1",
  },
  arrow: {
    color: "white",
  },
}));
const Forgot = () => {
  const classes = useStyles();
  const footerdata = () =>
    data.map((data, i) => (
      <div className="login-footercontent">
        <div className="image-div">
          <img src={data.icon} style={{ width: "20px", height: "auto" }} />
        </div>
        <div>
          <p className={`${data.name ? "footer-name" : ""}`}>{data.name} </p>
        </div>
      </div>
    ));

  return (
    <div className="bg-login">
      {/* <div className="circle"></div> */}
      <div className="container login-container">
        <div>
          <Grid container>
            <Grid xs={12} md={9}>
              <div className="forgot-form-left">
                <div className="logo-img">
                  <Logo />
                </div>
                <div className="loginform-bg">
                  <div className="input-field">
                    <div className="login-form-field">
                      <h4 className="forgot-heading">
                        Enter the email address associated with your account,
                        and we will email you a link to reset your password.
                      </h4>
                      <div className="form-div">
                      <form>
                        {/* <label for="fname" className="label">
                          Full Name
                        </label>
                        <input type="text" id="fname" name="fname" /> */}
                        <label for="lname" className="label">
                          Email
                        </label>
                        <input type="text" id="lname" name="lname" />
                        {/* <label for="lname" className="label">
                          Company Name
                        </label>
                        <input type="text" id="lname" name="lname" />
                        <label for="lname" className="label">
                          Password
                        </label>
                        <input type="text" id="lname" name="lname" />
                        <label for="lname" className="label">
                          Confirm Password
                        </label>
                        <input type="text" id="lname" name="lname" /> */}
                       
                        <Button
                          variant="contained"
                          className={classes.btnLogin}
                        >
                          Signup
                        </Button>
                        <div className="forgot-div">
                          {" "}
                          <p className="forgotpassword">
                            By signing up, you are creating a Feedfleet account
                          </p>
                        </div>
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="forgot-form-right">
                <div className="signup-link">
                  <div>
                    <Link to="/" className="signup-linktext">
                      SignIn{" "}
                    </Link>
                  </div>
                  <div>
                    <ArrowForwardIcon className={classes.arrow} />
                  </div>
                </div>
                <div>
                  <h1 className="forgot-text-right">Forget  Password</h1>
                </div>
                <div className="systemdiv-forgotimg">
                  <img src={Systems} alt="" className="system-img" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="forgot-footer">
                {/* {data && data.map((data,i)=>{ */}

                {footerdata()}

                {/* //    })} */}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>{" "}
    </div>
  );
};

export default Forgot;
