import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Card, Link, Typography, Stack, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteHostelAction, EditHostelAction } from '../../../redux/action/hostelAction';

export const EditModal = ({ open, handleEditClose, handleEditOpen, editObj }) => {
    const [file, setFile] = React.useState('')
    const { successMessage, errorMessage } = useSelector((state) => state.HostelReducer);
    const dispatch = useDispatch()
    React.useEffect(() => {
        if (editObj) {
            const { user_id, amount, hostel_address, } = editObj;
            // setFieldValue('user_id', user_id);
            setFieldValue('  amount', amount);
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

const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

export const DetailsModal = ({ open, handleViewClose, handleViewOpen, details }) => {

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
                                        Edit Hostel
                                    </Typography>
                                    <Card>
                                        <Box sx={{}}>
                                            {/* {status && (
                                    <Label
                                        variant="filled"
                                        color={(status === 'sold' && 'error') || 'info'}

                                        sx={{
                                            zIndex: 9,
                                            top: 16,
                                            right: 16,
                                            position: 'absolute',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {status}
                                    </Label>
                                )} */}
                                            <StyledProductImg alt={'name'} src={details.image} />

                                        </Box>

                                        <Stack spacing={2} sx={{ p: 3 }}>
                                            <Link color="inherit" underline="hover">
                                                <Typography variant="subtitle2" noWrap>
                                                    {details.name}
                                                </Typography>
                                            </Link>

                                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                {/* <ColorPreview colors={colors} /> */}
                                                <Typography
                                                    component="span"
                                                    variant="p"
                                                    sx={{
                                                        fontSize: "12px"
                                                    }}
                                                >
                                                    {details.hostel_adress}
                                                </Typography>
                                                <Typography variant="p" sx={{
                                                    fontSize: "12px"
                                                }}>
                                                    &nbsp;
                                                    {details.hostel_amount}
                                                    {/* {fCurrency(price)} */}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Card>

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


export const DeleteModal = ({ open, handleDelClose, handleDelOpen, delObj }) => {

    const dispatch = useDispatch();
    const { successMessage, errorMessage } = useSelector((state) => state.HostelReducer);
    React.useEffect(() => {
        if (delObj) {
            const { user_id, amount, hostel_address, } = delObj;
            // setFieldValue('user_id', user_id);
            // setFieldValue('  amount', amount);
            // setFieldValue('hostel_address', hostel_address);
        }
    }, [delObj]);
    const delHostel = async () => {
        const data = await dispatch(DeleteHostelAction(delObj.id));
        console.log(data);
    }
    return (
        <div>
            {/* <Button onClick={handleDelOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleDelClose}
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
                                    {/* <Card> */}
                                    <Box sx={{ display: 'flex', alignItem: 'center', width: '80%', margin: 'auto' }}>
                                        <Grid xs={6} p={2}>
                                            <Button
                                                variant="contained"
                                                color='error'
                                                onClick={delHostel}
                                            >
                                                Delete
                                            </Button>
                                        </Grid>
                                        <Grid xs={6} p={2}>
                                            <Button
                                                variant="contained"
                                                onClicK={handleDelClose}
                                            >
                                                Cancel
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
