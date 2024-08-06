import React from 'react';
import { Card, Row, Col } from 'antd';
import Button from '@mui/material/Button';
import './Cards.css'; // Import custom CSS if needed
import logo from './Dzyris Infotech.png'; // Import your logo here
import logo1 from './frozenfood.jpeg'
import logo2 from './dzpharma.png'
import logo3 from './firangi.png'
const { Meta } = Card;

const CustomCard = ({ title, description }) => (
    <Card title={title} bordered={false}>
      <div className="custom-meta-description">
        {description}
      </div>
    </Card>
  );
  

const ResponsiveCards = () => (
  <div>
    <div id="our-services"> 
      <h1>Our Services</h1>
    </div>
    <div className="card-container">
      <Card bordered={false}>
      <div className="card-overlay"> {/* Overlay for color on hover */}
          Learn More
        </div>
        <img src={logo} alt="Logo" className="card-logo" />
        <CustomCard
      title="Dzyris Infotech"
      description="At Dzyris InfoTech, we are dedicated to driving digital transformation for businesses of all sizes. Founded in [Year], our mission is to empower organizations with cutting-edge technology and innovative solutions that enhance operational efficiency and foster growth."
    />
          <Button variant="contained" href="https://www.facebook.com/dzyris/">
            Learn More
</Button>
      </Card>

      <Card bordered={false}>
      <div className="card-overlay"> {/* Overlay for color on hover */}
          Learn More
        </div>
        <img src={logo1} alt="Logo" className="card-logo" />
        
        <CustomCard title="Dzyris Frozen Foods" description="At Dzyris Frozen Foods, we believe that great meals should be both delicious and accessible. Our team of culinary experts and food scientists work tirelessly to create a diverse range of frozen products, from wholesome meals and hearty entrees to delightful snacks and desserts. Every item we offer is made with high-quality ingredients." />
        <Button variant="contained" href="https://www.justdial.com/Mumbai/Dzyris-Frozen-Foods-Pvt-Ltd-Near-Ganesh-Visarjan-Ghat-Vasai-East/022PXX22-XX22-181005112023-A5V7_BZDET">
            Learn More
</Button>
        </Card>
      <Card bordered={false}>
      <div className="card-overlay"> {/* Overlay for color on hover */}
          Learn More
        </div>
        <img src={logo2} alt="Logo" className="card-logo" style={{marginTop: '11%' , marginBottom: '19.5%'}}/>
        <CustomCard title="Dzyris Pharmaceuticals" description="At Dzyris Pharmacueticals, our mission is to address some of the world’s most pressing health challenges with precision and excellence. Our diverse portfolio spans across a wide range of therapeutic areas, including [list a few key areas, e.g., oncology, cardiology, neurology], reflecting our dedication to meeting the needs of patients and healthcare." />
        <Button variant="contained" href="https://www.tofler.in/dzyris-pharmaceuticals-private-limited/company/U51909MH2021PTC360043">
            Learn More
</Button>
      </Card>
      <Card bordered={false}>
      <div className="card-overlay"> {/* Overlay for color on hover */}
          Learn More
        </div>
        <img src={logo3} alt="Logo" className="card-logo" style={{marginTop: '11%' , marginBottom: '19.5%'}}/>
        <CustomCard title="Firangi Burgers" description="At Firangi Burgers, we believe that great food is all about quality and creativity. Our burgers are crafted with premium, locally-sourced ingredients and seasoned to perfection, ensuring each bite is a delicious experience. From classic favorites to inventive new creations, our burger menu caters to every craving and preference." />
        <Button variant="contained" href="https://firangiburgers.com/">
            Learn More
</Button>
      </Card>
    </div>
  </div>
);

export default ResponsiveCards;

