import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, TextField, Grid, Link, Typography, IconButton, InputAdornment, MenuItem } from '@mui/material';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { SignUpAction } from '../../redux/action/authActions';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {

    const dispatch = useDispatch()
    const { successMessage, errorMessage } = useSelector((state) => state.AuthReducer)
    const [showPassword, setShowPassword] = useState(false);
    const [sMessage, setSMessage] = useState(false);
    const [eMessage, setEMessage] = useState(false);
    const formik = useFormik({
        initialValues: {
            first_name: ``,
            last_name: ``,
            user_name: ``,
            password: ``,
            email: ``,
            c_password: ``,
            role_id: 0,
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            console.log(values);
            const data = await dispatch(SignUpAction(values));
            if (data?.success === true) {
                setSubmitting(true);
                setSMessage(true);
                resetForm()
                setTimeout(() => {
                    setSMessage(false)
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
            first_name: Yup.string().required('Firstname is required'),
            last_name: Yup.string().required('Lastname is required'),
            user_name: Yup.string().required('Username is required'),
            email: Yup.string().required('Email is required'),
            password: Yup.string().required('Password is required'),
            role_id: Yup.string().required('Category is required'),
        }),
    });

    const { handleSubmit, errors, touched, getFieldProps, isSubmitting } = formik
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };
    return (
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
                            Sign Up
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

                                        id='first_name'
                                        label='Firstname'
                                        size='small'
                                        fullWidth
                                        {...getFieldProps('first_name')}
                                        error={Boolean(errors.first_name && touched.first_name)}
                                        helperText={touched.first_name && errors.first_name}

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

                                        id='last_name'
                                        label='Lastname'
                                        size='small'
                                        fullWidth
                                        {...getFieldProps('last_name')}
                                        error={Boolean(errors.last_name && touched.last_name)}
                                        helperText={touched.last_name && errors.last_name}

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

                                        id='user_name'
                                        label='Username'
                                        size='small'
                                        fullWidth
                                        {...getFieldProps('user_name')}
                                        error={Boolean(errors.user_name && touched.user_name)}
                                        helperText={touched.user_name && errors.user_name}

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

                                        id='email'
                                        label='Email'
                                        size='small'
                                        fullWidth
                                        type='email'
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

                                        id='role_id'
                                        label='Category'
                                        size='small'
                                        select
                                        fullWidth
                                        {...getFieldProps('role_id')}
                                        error={Boolean(errors.role_id && touched.role_id)}
                                        helperText={touched.role_id && errors.role_id}

                                    >
                                        <MenuItem value="1">Agent</MenuItem>
                                        <MenuItem value="2">Student</MenuItem>


                                    </TextField>
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

                                    <TextField
                                        fullWidth
                                        autoComplete="current-password"
                                        type={showPassword ? 'text' : 'password'}
                                        label="Confirm Password"
                                        size='small'
                                        {...getFieldProps('c_password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleShowPassword} edge="end">
                                                        {/* <Icon icon={showPassword ? eyeFill : eyeOffFill} /> */}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        error={Boolean(touched.c_password && errors.c_password)}
                                        helperText={touched.c_password && errors.c_password}
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
                            Already have an accout? <Link href="/signIn" color="#1565c0">Sing In</Link>
                        </Typography>

                    </Box>


                </CardContent>
            </Card>
        </Container>
    )
}

export default SignUp