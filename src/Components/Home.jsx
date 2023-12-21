import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../styles/Home.css';

const Home = () => {
  return (
    <body>
      <div class="topnav">
        <a class="name">RESTOMANAGE</a>
        <a class="active" >HOME</a>
        <div class="dropdown">
        <a class="dropdown-toggle">RESTAURANT TYPES</a>
        
        <div class="dropdown-content">
      <a >FINE DINING</a>
      <a>CASUAL DINING</a>
      <a>CAFE</a>
      <a >BAR</a>
    </div>
    </div>
        <a >PRICING</a>
        <button class="btn1">GET A FREE DEMO</button>
        <button class="btn3">Login</button>
    </div>
    <header id = "header1" class = "vh-100 flex">
        <div class = "container1">
            <div class = "header-content">
                {/* <h3 class="tit1">RESTOMANAGE</h3> */}

    <div class="para">Restaurant software to power your passion,profit and growth</div>
              
            </div>
        </div>
    </header>

    <div class="card">
   
    <Card sx={{ maxWidth: 355,marginLeft:'90px',borderRadius:'20px',marginTop:'30px',transition: 'transform 0.3s ease-in-out', // Add transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Change scale on hover
      boxShadow: '0 0 10px rgba(0, 0.6, 0, 0.8)', // Add box shadow on hover
    }, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="inventory.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" style={{ fontWeight: 'bold' }}>
            Inventory Management
          </Typography>
          <Typography variant="h5" style={{color:'black'}}>
            Take Inventory to the ingredient level
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" style={{color:'red', borderColor:'red'}}>
          More on Inventory Management
        </Button>
      </CardActions>
    </Card>
  
    <Card sx={{ maxWidth: 355,marginLeft:'600px',borderRadius:'20px',marginTop:'-510px',transition: 'transform 0.3s ease-in-out', // Add transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Change scale on hover
      boxShadow: '0 0 10px rgba(0, 0.6, 0, 0.8)', // Add box shadow on hover
    }, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="kds.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" style={{ fontWeight: 'bold' }}>
            Kitchen Display System
          </Typography>
          <Typography variant="h5" style={{color:'white'}}>
            Connect your FOH and BOH Teams with a KDS
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" style={{color:'red', borderColor:'red'}}>
          More on Kitchen Display System
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 355,marginLeft:'1120px',borderRadius:'20px',marginTop:'-510px',transition: 'transform 0.3s ease-in-out', // Add transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Change scale on hover
      boxShadow: '0 0 10px rgba(0, 0.6, 0, 0.8)', // Add box shadow on hover
    },}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image="accounting.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" style={{ fontWeight: 'bold' }}>
            Accounting
          </Typography>
          <Typography variant="h5" style={{color:'black'}}>
            Automate your bookkeeping to avoid errors
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" style={{color:'red', borderColor:'red'}}>
          More on Accounting
        </Button>
      </CardActions>
    </Card>
    {/* <Card sx={{ maxWidth: 455,marginLeft:'850px',marginTop:'-480px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image="payment.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" style={{ fontWeight: 'bold' }}>
            Payment Processing
          </Typography>
          <Typography variant="h5" style={{color:'black'}}>
            Integrated payments powers insights for  a seamless experience
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" style={{color:'red', borderColor:'red'}}>
          More on Payments
        </Button>
      </CardActions>
    </Card> */}
    </div>
    <div class="background">
    <div class="box">
  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV4cGVydHxlbnwwfHwwfHx8MA%3D%3D" alt="Demo Image"></img>
  <div class="text-on-image">
    <p ><strong>Schedule a Free Demo</strong></p>
    <p>See why most restaurants use Restomanage to</p>
    <p>increase sales, control food costs, and optimize labor</p>
    <button class="btn">Request Demo</button>
  </div>
</div>
</div>

    <footer id = "footer" class = "py-7" >
            <div class = "footer-content" id="footer-content">
                <div>
                    <h3>RESTOMANAGE</h3>
                </div>

                <div>
                    <ul class = "flex">
                    
                        <a >About Us  </a>
                        <a >Contact</a>
                        <a >Social</a>
                    </ul>
                    <div className="social-icons">
    <FaFacebook />
    <FaTwitter />
    <FaInstagram />
    {/* Add more React Icons as needed */}
  </div>
</div>
              </div>
        
    </footer>
  </body>
  )
}

export default Home
