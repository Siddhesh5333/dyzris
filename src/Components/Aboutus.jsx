import React from 'react';
import { Container, Typography, Card, CardContent,Box} from '@mui/material';

const AboutUs = () => {
  return (
    <div id="about-us">
    <Container maxWidth="md" style={{ padding: '20px' }}>
        <Box id="section1"></Box>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Card variant="outlined" style={{ marginTop: '20px' }}>
        <CardContent>
        <Typography variant="h4" gutterBottom>
        Our Story
      </Typography>
      <Typography variant="body1" paragraph style={{ color: 'black', textAlign: 'justify'}}> 
        At Dzyris Group, our journey is defined by innovation, quality, and dedication across multiple sectors. From digital transformation to delightful cuisine and healthcare advancements, our mission is to enhance lives through excellence and creativity.Dzyris Group is driven by a vision to redefine industry standards and set new benchmarks of excellence. Our mission is to leverage our expertise and resources to create value in every sector we operate in. We strive to be at the forefront of technological advancement, culinary artistry, and pharmaceutical innovation, making a positive impact on individuals and communities worldwide.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Our Vision and Mission
      </Typography>
      <Typography variant="body1" paragraph style={{ color: 'black', textAlign: 'justify'}}> 
      Through  <span style={{ fontWeight: 'bold' }}>Dzyris InfoTech</span>, we aim to empower businesses with cutting-edge solutions that streamline operations, foster growth, and unlock new opportunities. Our goal is to be the catalyst for progress, enabling organizations to thrive in an increasingly digital and interconnected world.
      </Typography>
      <Typography variant="body1" paragraph style={{ color: 'black', textAlign: 'justify'}}> 
      Our vision for  <span style={{ fontWeight: 'bold' }}>Dzyris Frozen Foods</span> is to redefine the frozen food industry by blending culinary excellence with accessibility. We strive to make high-quality, delicious, and nutritious meals available to people everywhere. 
      </Typography>
      <Typography variant="body1" paragraph style={{ color: 'black', textAlign: 'justify'}}> 
      Through  <span style={{ fontWeight: 'bold' }}>Dzyris Pharmaceuticals</span>, we envision a future where medical advancements lead to better health outcomes and improved quality of life. Our commitment is to address some of the most pressing health challenges with precision, expertise, and compassion. 
      </Typography>
      <Typography variant="body1" paragraph style={{ color: 'black', textAlign: 'justify'}}> 
      With  <span style={{ fontWeight: 'bold' }}>Firangi Burgers</span>, our vision is to elevate the burger experience by celebrating quality and creativity. We aspire to craft burgers that not only satisfy but also inspire, using premium ingredients and innovative recipes. Our goal is to be recognized for our commitment to flavor, originality, and excellence, offering a diverse menu that caters to every taste and preference.
      </Typography>
        </CardContent>
      </Card>
    </Container>
    </div>
  );
};

export default AboutUs;
