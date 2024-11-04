import { AppBar, Toolbar, Typography } from '@mui/material';
import AnimatedImage from './AnimatedImage';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          style={{marginRight:'8px', cursor:'pointer'}}
          onClick={() => navigate('/')}
        >
          Financial Tools
        </Typography>
        <AnimatedImage 
          gifPath='/images/home-animated.gif' 
          staticPath='/images/home-static.png'
          altText='homeHover' 
          title='Source img: https://www.flaticon.com/free-animated-icons/real-estate'
          onClick={() => navigate('/buy')}
          />
        <AnimatedImage
          gifPath='/images/money-bag-animated.gif' 
          staticPath='/images/money-bag-static.png'
          altText='homeHover'
          title='Source img: https://www.flaticon.com/free-animated-icons/money-bag'
          onClick={() => navigate('/sell')}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header