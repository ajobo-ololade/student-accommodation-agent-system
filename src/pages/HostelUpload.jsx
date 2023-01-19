import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, TextField, Grid, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { CreateHostelAction } from '../redux/action/hostelAction';
import { useDispatch, useSelector } from 'react-redux';
import { storageGet } from '../utils/utilities';

const HostelUpload = () => {

    const dispatch = useDispatch()
    // const { user } = useSelector((state) => state.GetUserReducer);
    const {  successMessage, errorMessage } = useSelector((state) => state.HostelReducer)
    const [sMessage, setSMessage] = useState(false);
    const [eMessage, setEMessage] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const [file, setFile] = useState('')
    const onChange = (e) => {
        let picture = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(picture);
        reader.onloadend = () => {
            setFile(reader.result);
        }
    };
    const formik = useFormik({
        initialValues: {
            user_id: user.id,
            hostel_address: '',
            amount: ``,
            info:'',
            facilities:'',
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            console.log(values);
            const data = await dispatch(CreateHostelAction({...values, image: file}))
            // console.log(data);
            if (data?.success === true) {
                resetForm()
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
            hostel_address: Yup.string().required('Hostel Address is required'),
            amount: Yup.string().required('Amount is required'),
            info: Yup.string().required('Hostel Information is required'),
            facilities: Yup.string().required('Hostel Facility is required'),
            
        }),
    });

    const { handleSubmit, errors, touched, getFieldProps, isSubmitting } = formik
    
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

                                        id='hostel_address'
                                        label='Hostel Address'
                                        size='small'
                                        fullWidth
                                        {...getFieldProps('hostel_address')}
                                        error={Boolean(errors.hostel_address && touched.hostel_address)}
                                        helperText={touched.hostel_address && errors.hostel_address}

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

                                        id='amount'
                                        label='Hostel Price'
                                        size='small'
                                        fullWidth
                                        type='text'
                                        {...getFieldProps('amount')}
                                        error={Boolean(errors.amount && touched.amount)}
                                        helperText={touched.amount && errors.amount}

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

                                        id='info'
                                        label='Hostel Information'
                                        size='small'
                                        fullWidth
                                        type='text'
                                        {...getFieldProps('info')}
                                        error={Boolean(errors.info && touched.info)}
                                        helperText={touched.info && errors.info}

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

                                        id='facilities'
                                        label='Hostel Facilities'
                                        size='small'
                                        fullWidth
                                        type='text'
                                        {...getFieldProps('facilities')}
                                        error={Boolean(errors.facilities && touched.facilities)}
                                        helperText={touched.facilities && errors.facilities}

                                    />
                                </Grid>

                                <Grid item xs={12}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        // alignItems: 'left',
                                    }}
                                >

                                    <Button variant="contained" component="label" type='button'>
                                        Hostel Image
                                        <input hidden accept="image/*" multiple type="file" onChange={onChange} />
                                    </Button>

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
                                        // onClick={check}
                                    >
                                        upload
                                    </LoadingButton>

                                </Grid>

                            </Grid>

                        </form>

                    </Box>


                </CardContent>
            </Card>
        </Container>
    )
}

export default HostelUpload