import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button, FormControl, InputLabel, FilledInput, InputAdornment, } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetHostelAction, GetHostelIdAction } from '../../../redux/action/hostelAction';
import { DeleteModal, DetailsModal, EditModal } from './ModificationModals';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const HostelList = () => {
  const dispatch = useDispatch()
  const { hostel } = useSelector((state) => state.HostelReducer);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);
  const [details, setDetails] = useState({})
  const [editObj, setEditObj] = useState({});
    const [delObj, setDelObj] = useState({});
  const handleEditOpen = (e) => {
    setEditOpen(true)
    setEditObj(e)
  };
  const handleEditClose = () => setEditOpen(false);
  const handleViewOpen = async (id) => {
    const host = await dispatch(GetHostelIdAction(id));
    console.log(host);
    setDetailsOpen(true)
    setDetails(host)
  }
  const handleViewClose = () => {
    setDetailsOpen(false)
    // setDetails()
  }
  const handleDelOpen = (e) =>{
    setDelOpen(true)
    setDelObj(e)
  }
  const handleDelClose = () => {
    setDelOpen(false)
    // setDetails()
  }
  // console.log(hostel);

  useEffect(() => {
    dispatch(GetHostelAction())
  }, [])


  const headerData = [
    {
      label: 'S/N',
    },
    {
      label: 'Hostel Amount',
    },
    {
      label: 'Hostel Location',
    },
    {
      label: 'Avalability',
    },
    {
      label: 'Details',
    },
    {
      label: 'Edit',
    },
    {
      label: 'Delete',
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [searchAccomo, setSearchAccomo] = useState('')
  console.log(searchAccomo);
  return (
    <>
    <EditModal handleEditOpen={handleEditOpen} handleEditClose={handleEditClose} open={editOpen} editObj={editObj} />
    <DetailsModal handleViewOpen={handleViewOpen} handleViewClose={handleViewClose} details={details} open={detailsOpen} />
    <DeleteModal  handleDelOpen={handleDelOpen} handleDelClose={handleDelClose} onClose={handleDelClose} open={delOpen} delObj={delObj} setDelOpen={setDelOpen} />
    
    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-search">Search</InputLabel>
          <FilledInput
            id="filled-adornment-search"
            value={searchAccomo} 
            onChange={(e) => setSearchAccomo(e.target.value)}
            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
          />
        </FormControl>
      <TableContainer>
        {/* {isLoading ? <LinearProgress /> : null} */}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerData.map((data, id) => (
                <TableCell key={id} sx={{ textAlign: 'center' }}>
                  {data.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {hostel?.filter((accomo) => {
                            if (searchAccomo === '') {
                                return accomo
                            } else if (accomo.hostel_address.includes(searchAccomo)) {
                                return accomo
                            }
                            else {
                                return "User does not exist"
                            }
                        }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((host, id) => (
              <TableRow key={id}>
                <TableCell sx={{ textAlign: 'center' }}>{id + 1}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>${host.amount}.00</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{host.hostel_address}</TableCell>
                {/* <TableCell sx={{ textAlign: 'center' }}><Avatar alt="Remy Sharp" src={image} variant='squre'/> </TableCell> */}
                <TableCell sx={{ textAlign: 'center' }}>available </TableCell>
                <TableCell sx={{ textAlign: 'center' }}><Button variant="text" onClick={() => handleViewOpen(host.id)}>View Details</Button></TableCell>
                <TableCell sx={{ textAlign: 'center' }}><EditIcon sx={{ color: 'green', cursor:'pointer' }} onClick={() => handleEditOpen(host)} /></TableCell>
                <TableCell sx={{ textAlign: 'center' }}><DeleteIcon sx={{ color: 'red', cursor:'pointer' }} onClick={() => handleDelOpen(host)} /></TableCell>
                {/* {host.image} */}
                {/* <img src={image} alt="" /> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={hostel.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default HostelList