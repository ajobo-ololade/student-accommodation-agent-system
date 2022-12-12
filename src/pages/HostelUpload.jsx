import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, TextField, Grid, Link, Typography, IconButton, InputAdornment, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const HostelUpload = () => {

    const [showPassword, setShowPassword] = useState(false);
    const formik = useFormik({
        initialValues: {
            username: ``,
            password: '',
            email: '',
            category: ''
        },

        onSubmit: async (values, { resetForm }) => {
            console.log(values);
        },

        validationSchema: Yup.object().shape({
            username: Yup.string().required('Username is required'),
            email: Yup.string().required('Email is required'),
            password: Yup.string().required('Password is required'),
            category: Yup.string().required('Category is required'),
        }),
    });

    const { handleSubmit, errors, touched, getFieldProps, resetForm } = formik
    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ margin: 'auto', padding: '5px' }}>
                <Alert severity="success">Login Succeful</Alert>
                <Alert severity="error">Invalid Crediential</Alert>
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
                            {/* <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography component="h3" variant="h5" sx={{ marginTop: '5px', color: '#1565c0' }}>
                            Upload Hostel
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

                                        id='hostel_name'
                                        label='Hostel Name'
                                        size='small'
                                        fullWidth
                                        {...getFieldProps('username')}
                                        error={Boolean(errors.username && touched.username)}
                                        helperText={touched.username && errors.username}

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

                                        id='hostel_location'
                                        label='Hostel Location'
                                        size='small'
                                        fullWidth
                                        type='text'
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

                                        id='hostel_price'
                                        label='Hostel Price'
                                        size='small'
                                        fullWidth
                                        {...getFieldProps('category')}
                                        error={Boolean(errors.category && touched.category)}
                                        helperText={touched.category && errors.category}

                                    />

                                </Grid>

                                <Grid item xs={12}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        // alignItems: 'left',
                                    }}
                                >

                                    <Button variant="contained" component="label">
                                        Upload Hostel Image
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>

                                </Grid>

                                <Grid item xs={12}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >

                                    <Button
                                        variant={'contained'}
                                        fullWidth
                                        type='submit'
                                    >
                                        Post
                                    </Button>

                                </Grid>

                            </Grid>

                        </form>
                        {/* <Typography component="p" variant="p" sx={{ marginTop: '8px', fontSize: '12px' }}>
                            Don't have an accout? <Link href="/signIn" color="#1565c0">Sing In</Link>
                        </Typography> */}

                    </Box>


                </CardContent>
            </Card>
        </Container>
    )
}

export default HostelUpload