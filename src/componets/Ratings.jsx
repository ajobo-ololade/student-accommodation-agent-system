import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

const labels = {
//   0.5: 'Useless',
  1: 'Useless',
//   1.5: 'Poor',
  2: 'Poor',
//   2.5: 'Ok',
  3: 'Ok',
//   3.5: 'Good',
  4: 'Good',
//   4.5: 'Excellent',
  5: 'Excellent',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Ratings() {
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);
  const [rateValue, setRateValue] = React.useState()

  return (
    <Box
      sx={{
        width: 120,
        display: 'flex',
        alignItems: 'center',
        margin: "auto"
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          console.log(newValue)
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]} 
            {/* <Typography>{value}</Typography> */}
        </Box>
      )}
    </Box>
  );
}