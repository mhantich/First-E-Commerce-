import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DisplayProducts from '../components/DisplayProducts'
import FilterComp from '../components/FilterComp'

function Prodact() {
  return (
    <div>
        <Container>
            <Row>
                <Col sm={12} md={3}>
                     <FilterComp/>
                </Col>
                <Col sm={12} md={3} >
                    <DisplayProducts/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Prodact