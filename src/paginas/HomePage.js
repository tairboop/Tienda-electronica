import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function HomePage() {
  return (
    <div style={{alignContent: 'center', marginTop:'20%', fontWeight:'bold'}}>
      Bienvenido a la tienda online de productos tecnologicos, busque todo los aparatos tecnologicos
      de diferentes marcas y distribuidores
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://tienda.sawers.com.bo/image/cache/catalog/03751-200x200.jpg" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://tienda.sawers.com.bo/image/cache/catalog/03624-228x228.jpg" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://tienda.sawers.com.bo/image/cache/catalog/03623-228x228.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://tienda.sawers.com.bo/image/cache/catalog/0014-190x190.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default HomePage