import React from 'react';
import { Carousel, Card, Row, Col } from 'antd';
import CountUp from 'react-countup'; // Import react-countup if using directly

import myImage1 from './group-of-company-img.jpeg';
import './Slider.css'; // Import custom CSS if needed

const NumberCounter = ({ end, duration = 2, prefix = '', suffix = '', className = '' }) => (
  <div className={`number-counter ${className}`}>
    <CountUp
      end={end}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
      separator=","
      delay={0}
    />
  </div>
);

const Slider = () => (
  <Carousel autoplay>
    <div className="carousel-slide">
      <img src={myImage1} alt="Slide 1" className="carousel-image" />
      <div className="carousel-overlay">
        <h3 className="carhead">Dzyris Group of Companies</h3>
        <Row gutter={16} justify="center" style={{ marginTop: '20px' }}>
          <Col span={8} style={{ textAlign: 'center' }}>
            <NumberCounter end={10000} prefix="+" />
            <p className='countfoot'>Happy Customers</p>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <NumberCounter end={500} prefix="+" />
            <p className='countfoot'>Expert Employees</p>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <NumberCounter end={50} prefix="+" />
            <p className='countfoot'>Years in Business</p>
          </Col>
        </Row>
      </div>
    </div>
  </Carousel>
);

export default Slider;



