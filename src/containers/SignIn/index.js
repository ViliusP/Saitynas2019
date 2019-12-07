import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grow from '@material-ui/core/Grow';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import useStyles from "./SignInStyle";
import Copyright from "../../components/Copyright";
import Snackbar from '@material-ui/core/Snackbar';

export default function SignIn() {
	const classes = useStyles();
	let history = useHistory();	
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let trySignUp = (email, password) => {
    const options = {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    };
    setLoading(true);
    setError("");
    fetch("http://localhost:8080/signin", options)
      .then(res => res)
      .then(
        result => {
          setTimeout(() => {
            setLoading(false);
          }, 1000); //Fake delay
          if (result.status > 400 && result.status < 500) {
            setError("Bad email or password!!!");
          } else if (result.status >= 500) {
            setError("Internal server error");
          } else {
						localStorage.setItem('token', result.headers.get("authorization"));
						history.push("/");
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
          setError(error);
          setTimeout(() => {
            setLoading(false);
          }, 1000); //Fake delay
        }
      );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color={
              isLoading === false && isError !== "" ? "secondary" : "primary"
            }
            className={classes.submit}
            onClick={evt => {
              if (evt !== undefined && evt.preventDefault) evt.preventDefault();
              trySignUp(email, password);
            }}
          >
            {isLoading === true && <CircularProgress color="secondary" />}
            {isLoading === false && "Sign Up"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>

      <Snackbar
        open={isError != ""}
        onClose={()=>setError("")}
        TransitionComponent={Grow}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{isError}</span>}
      />
    </Container>
  );
}
