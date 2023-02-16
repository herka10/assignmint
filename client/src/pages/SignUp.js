import React, {useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';

function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Family Thyme
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const theme = createTheme({
    palette: {
      primary: {
        light: '#66ffa6',
        main: '#00e676',
        dark: '#00b248',
        contrastText: '#000000',
      },
      secondary: {
        light: '#6abf69',
        main: '#388e3c',
        dark: '#00600f',
        contrastText: '#000000',
      },
    },
  });
  export default function SignUp() {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ firstName: '', email: '', password: '' });
    // set state for form validation
    //const [validated] = useState(false);
    // set state for alert
    const [setShowAlert] = useState(false);
    // define mutation for adding a user
    const [createUser] = useMutation(ADD_USER);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await createUser({
                variables: { ...userFormData }
            });
            
            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            firtName: '',
            email: '',
            password: '',
        });
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
         <CssBaseLine />
         <Box
            sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleInputChange}
                  value={userFormData.firstName}
                  autoFocus
                />
              </Grid>

             {/* NO LAST NAME USER MODEL ASK for help */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleInputChange}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                />
              </Grid>
            </Grid>
            <Button
              disabled={!(userFormData.firstName && userFormData.email && userFormData.password)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>