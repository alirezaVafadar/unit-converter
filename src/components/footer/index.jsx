import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import StraightenIcon from '@mui/icons-material/Straighten';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import Paper from '@mui/material/Paper';
import { lightBlue, pink } from '@mui/material/colors';

const primary = pink[500];
export default function Footer() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation 
          sx={{bgcolor:"#9c27b0"}}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
        label="Temperature"
        value="temperature"
        icon={<DeviceThermostatIcon />}
      />
      <BottomNavigationAction
        label="Length"
        value="length"
        icon={<StraightenIcon />}
      />
      <BottomNavigationAction
        label="Mass"
        value="mass"
        icon={<MonitorWeightIcon />}
      />
      <BottomNavigationAction label="Area" value="area" icon={<SquareFootIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
