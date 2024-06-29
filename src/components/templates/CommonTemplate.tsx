import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavBar } from '../organisms/NavBar';

type Props = {
  children: React.ReactNode;
}

const CommonTemplate = ({ children }: Props) => {
  return (
    <>
      <NavBar/>
      <main data-testid="main" className="bg-dark-2 text-dark-gray min-h-full mt-16">
        <Container fluid="md">
          <Row>
            <Col>
              <div className="px-3 py-4">
                {children}
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className='bg-dark-gray p-6'>
        <p className='font-bold'>Weather App</p>
        <p>By Fernando Badin</p>
      </footer>
    </>
  )
}

export { CommonTemplate };