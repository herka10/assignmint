import react, { useState } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../utils/mutations';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright'}
            <Link color="inherit" href="https://mui.com/">
                Assignmint
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
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

export default function SignIn() {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // set state for form validation
    const [validated] = useState(falst);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    // define mutation for adding a user
    const [loginUser] = useMutation(LOGIN);

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
            const { data } = await loginUser({
                variables: { ... userFormData }
            });

            Auth.login(data.loginUser.token);
        }catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

            <Typography components="h1" variant="h5">
                Sign in
            </Typography>
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
                value={userFormData.email}
                autoFocus
            />
            <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleInputChange}
            value={userFormData.password}
            autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember Me"
            />
            <Button
                disabled={!(userFormData.email && userFormData.password)}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot Password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
                </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
        
     );
}