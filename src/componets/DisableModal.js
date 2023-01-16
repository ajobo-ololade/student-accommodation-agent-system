/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Typography
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';

function DisableModal({ open, handleClose, name, specificName, disableAction, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const handleDisableAction = async () => {
    setIsLoading(true);
    const response = await dispatch(disableAction(enqueueSnackbar, closeSnackbar, navigate));
    setIsLoading(false);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Disable {name} Status</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item lg={12} gap={4}>
              <Typography variant="body2">
                Are you sure you want to disable{' '}
                <span style={{ fontWeight: 'bold' }}>"{specificName}"</span> {name.toLowerCase()}{' '}
                status?
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ padding: '10px 25px 25px 25px' }}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <LoadingButton
            onClick={() => handleDisableAction()}
            type="submit"
            color="primary"
            variant="contained"
            loading={isLoading}
          >
            Disable {name}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DisableModal;
