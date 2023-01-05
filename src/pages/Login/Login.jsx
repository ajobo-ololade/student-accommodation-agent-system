import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, TextField, Grid, Link, Typography, IconButton, InputAdornment, } from '@mui/material';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import Navbar from '../../componets/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../redux/action/authActions';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router';


const Login = () => {

    const dispatch = useDispatch()
    const { successMessage, errorMessage } = useSelector((state) => state.AuthReducer)
    const [showPassword, setShowPassword] = useState(false);
    const [sMessage, setSMessage] = useState(false);
    const [eMessage, setEMessage] = useState(false);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: ``,
            password: '',
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            console.log(values);
            const data = await dispatch(LoginAction(values));
            if (data?.success === true) {
                setSubmitting(true);
                setSMessage(true);
                resetForm()
                setTimeout(() => {
                    setSMessage(false)
                    navigate("/dashboard")
                }, 3000);
            }
            else {
                setEMessage(true)
                setTimeout(() => {
                    setEMessage(false)
                }, 3000);
            }
            setSubmitting(false)
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
    });

    const { handleSubmit, errors, touched, getFieldProps, isSubmitting } = formik
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <Box sx={{ margin: 'auto', padding: '5px' }}>
                    {
                        sMessage ?
                            <Alert severity="success">{successMessage}</Alert>
                            :
                            eMessage ?
                                <Alert severity="error">{errorMessage}</Alert>
                                :
                                null
                    }
                </Box>



                <Card sx={{ margin: 'auto', marginTop: '50px', padding: '2rem' }} >
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <Avatar sx={{ m: 1, bgcolor: '#1565c0' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h3" variant="h5" sx={{ marginTop: '5px', color: '#1565c0' }}>
                                Login
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2} sx={{ marginTop: '5px' }}>

                                    <Grid item xs={12}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >

                                        <TextField

                                            id='email'
                                            label='Email'
                                            size='small'
                                            type='email'
                                            fullWidth
                                            {...getFieldProps('email')}
                                            error={Boolean(errors.email && touched.email)}
                                            helperText={touched.email && errors.email}

                                        />
                                    </Grid>

                                    <Grid item xs={12}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >

                                        <TextField
                                            fullWidth
                                            autoComplete="current-password"
                                            type={showPassword ? 'text' : 'password'}
                                            label="Password"
                                            size='small'
                                            {...getFieldProps('password')}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleShowPassword} edge="end">
                                                            {/* <Icon icon={showPassword ? eyeFill : eyeOffFill} /> */}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={Boolean(touched.password && errors.password)}
                                            helperText={touched.password && errors.password}
                                        />
                                    </Grid>

                                    <Grid item xs={12}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >

                                        <LoadingButton
                                            type="submit"
                                            fullWidth
                                            color="primary"
                                            variant="contained"
                                            loading={isSubmitting}
                                        >
                                            Login
                                        </LoadingButton>

                                    </Grid>

                                </Grid>

                            </form>

                            <Typography component="p" variant="p" sx={{ marginTop: '8px', fontSize: '12px' }}>
                                Don't have an accout? <Link href="/signUp" color="#1565c0">Sign Up</Link>
                            </Typography>
                        </Box>


                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Login