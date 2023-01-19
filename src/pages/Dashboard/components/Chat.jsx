import { LoadingButton } from "@mui/lab"
import { Grid, Modal, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { CreateMessageAction } from "../../../redux/action/chatAction";

export const ChatPrompt = ({ open, onClose, obj }) => {
    console.log(obj);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {

            // agent_id: obj.user_id,
            message: '',
            // user_id: obj.id,

        },

        onSubmit: async (values, { resetForm, setSubmitting }) => {
            console.log(values);
            const data = await dispatch(CreateMessageAction({...values, agent_id: obj.user_id, user_id: obj.id, }))
            // console.log(data);
            setSubmitting(true)
            // dispatch(GetHostelAction())
            // handleEditClose()
        },

        validationSchema: Yup.object().shape({
            message: Yup.string().required('Message Address is required'),
        }),
    });
    const { handleSubmit, errors, touched, getFieldProps, isSubmitting, } = formik
    return(
        <Modal
                open={open}
                onClose={onClose}
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
                                        Send a Chat
                                    </Typography>
                                    <Box sx={{ diaplay: 'grid' }}>
                                        <form onSubmit={handleSubmit}>
                                            <TextField
                                                sx={{ my: 1 }}
                                                id='message'
                                                label='Message'
                                                size='small'
                                                fullWidth
                                                {...getFieldProps('message')}
                                                error={Boolean(errors.message && touched.message)}
                                                helperText={touched.message && errors.message}

                                            />

                                            <LoadingButton
                                                sx={{ mb: 2 }}
                                                type="submit"
                                                fullWidth
                                                color="primary"
                                                variant="contained"
                                                loading={isSubmitting}
                                            // onClick={check}
                                            >
                                                Send
                                            </LoadingButton>
                                        </form>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
    )
}