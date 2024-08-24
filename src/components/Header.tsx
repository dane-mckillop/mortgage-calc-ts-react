import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Mortgage Calculator - Fees + Stamp Duty to come
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header