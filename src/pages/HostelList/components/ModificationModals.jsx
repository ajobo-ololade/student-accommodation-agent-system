import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography, Grid, TextField, CardActionArea, CardMedia, CardContent } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteHostelAction, EditHostelAction, GetHostelAction } from '../../../redux/action/hostelAction';

export const EditModal = ({ open, handleEditClose, handleEditOpen, editObj }) => {
    const [file, setFile] = React.useState('')
    // const { successMessage, errorMessage } = useSelector((state) => state.HostelReducer);
    const dispatch = useDispatch()
    React.useEffect(() => {
        if (editObj) {
            const { amount, hostel_address, } = editObj;
            setFieldValue('amount', amount);
            setFieldValue('hostel_address', hostel_address);
        }
    }, [editObj]);
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

            hostel_address: '',
            amount: ``,
        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            console.log(values);
            const data = await dispatch(EditHostelAction({ ...values, image: file, id: editObj.id, }))
            console.log(data);
            setSubmitting(true)
            dispatch(GetHostelAction())
            // handleEditClose()
        },

        validationSchema: Yup.object().shape({
            hostel_address: Yup.string().required('Hostel Address is required'),
            amount: Yup.string().required('Amount is required'),
        }),
    });
    const { handleSubmit, errors, touched, setFieldValue, isSubmitting, handleChange, handleBlur, values } = formik

    return (
        <div>
            {/* <Button onClick={handleEditOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box xs={12} sm={6} lg={4} sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: '90%', lg: '30%', },
                    border: '2px solid #fff',

                }}>
                    <Grid sx={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Grid item xs={12} sm={12} lg={12} sx={{ boxShadow: 24 }}>
                            <Grid container>
                                <Grid item xs={12} sx={{ backgroundColor: 'white', px: 2 }} >
                                    <Typography variant='h4' sx={{ fontWeight: 500, my: 1, textAlign: 'center', fontSize: '20px' }}>
                                        Edit Hostel
                                    </Typography>
                                    <Box sx={{ diaplay: 'grid' }}>
                                        <form onSubmit={handleSubmit}>
                                            <TextField
                                                sx={{ my: 1 }}
                                                id='amount'
                                                label='Amount'
                                                size='small'
                                                type='number'
                                                fullWidth
                                                value={values.amount}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(errors.amount && touched.amount)}
                                                helperText={touched.amount && errors.amount}

                                            />
                                            <TextField
                                                sx={{ my: 1 }}
                                                id='hostel_address'
                                                label='Address'
                                                size='small'
                                                fullWidth
                                                value={values.hostel_address}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(errors.hostel_address && touched.hostel_address)}
                                                helperText={touched.hostel_address && errors.hostel_address}

                                            />
                                            <Button variant="contained" component="label" type='button' sx={{ my: 1, }}>
                                                Hostel Image
                                                <input hidden accept="image/*" multiple type="file" onChange={onChange} />
                                            </Button>

                                            <LoadingButton
                                                sx={{ mb: 2 }}
                                                type="submit"
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                loading={isSubmitting}
                                            // onClick={check}
                                            >
                                                Edit
                                            </LoadingButton>
                                        </form>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export const DetailsModal = ({ open, handleViewClose, handleViewOpen, details }) => {
    const { image, hostel_address, amount } = details
    return (
        <div>
            {/* <Button onClick={handleViewOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleViewClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: '90%', lg: '30%', },
                    border: '2px solid #fff',
                }}>
                    <Grid sx={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Grid item xs={12} sm={12} lg={12} sx={{ boxShadow: 24 }}>
                            <Grid container>
                                <Grid item xs={12} sx={{ backgroundColor: 'white', px: 2 }} >
                                    <Typography variant='h4' sx={{ fontWeight: 200, my: 1, textAlign: 'center', fontSize: '20px' }}>
                                        Hostel Details
                                    </Typography>
                                    {/* <Card sx={{ maxWidth: 345 }}> */}
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={image}
                                                alt="green iguana"
                                            />
                                            <img src={`http://localhost:8000/public/uploads/${image}`} />
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div">
                                                    Location: {hostel_address}
                                                </Typography>
                                                <Typography variant="p" color="text.secondary">
                                                    Amount: ${amount}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    {/* </Card> */}

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={3} sx={{ padding: "1rem", backgroundColor: "white", }}>
                                           </Grid> */}
                </Box>
            </Modal>
        </div>
    );
}


export const DeleteModal = ({ open, onClose, handleDelClose, handleDelOpen, delObj }) => {

    const dispatch = useDispatch();
    // const { successMessage, errorMessage } = useSelector((state) => state.HostelReducer);
    React.useEffect(() => {}, [delObj]);
    const delHostel = async () => {
        const data = await dispatch(DeleteHostelAction(delObj.id));
        if (data?.success === true) {
            alert("Hostel deleted successfully");
            dispatch(GetHostelAction());
            handleDelClose();
        }
        console.log(data);
    }
    return (
        <div>
            {/* <Button onClick={handleDelOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: '90%', lg: '30%', },
                    border: '2px solid #fff',
                }}>
                    <Grid sx={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Grid item xs={12} sm={12} lg={12} sx={{ boxShadow: 24 }}>
                            <Grid container>
                                <Grid item xs={12} sx={{ backgroundColor: 'white', px: 2 }} >
                                    <Typography variant='h4' sx={{ fontWeight: 20, my: 1, textAlign: 'center', fontSize: '20px' }}>
                                        Delete Hostel
                                    </Typography>

                                    <Typography variant='p' sx={{ fontWeight: 20, display: 'flex', justifyContent: 'center' }}>
                                        Are you sure you want to delete this?
                                    </Typography>
                                    {/* <Card> */}
                                    <Box sx={{ display: 'flex', alignItem: 'center', width: '70%', margin: 'auto' }}>
                                        <Grid xs={6} p={2}>
                                            <Button
                                                variant="contained"
                                                color='error'
                                                onClick={delHostel}
                                            >
                                                Yes
                                            </Button>
                                        </Grid>
                                        <Grid xs={6} p={2}>
                                            <Button
                                                variant="contained"
                                                onClicK={handleDelClose}
                                            >
                                                No
                                            </Button>
                                        </Grid>
                                    </Box>
                                    {/* </Card> */}

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={3} sx={{ padding: "1rem", backgroundColor: "white", }}>
                                           </Grid> */}
                </Box>
            </Modal>
        </div>
    );
}
