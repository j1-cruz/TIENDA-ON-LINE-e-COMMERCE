import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Card = ({ data }) => {
  return (
    <Col>
      <div className="card shadow-sm">
        <img src={data.image} alt={data.title} className="bd-placeholder-img card-img-top"  style={{ width: '100%', height: '225px'}}/>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    </Col>
  );
};

const Muebles: React.FC = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <section className="py-5 text-center container">
        <Row className="py-lg-5">
          <Col lg={6} md={8} className="mx-auto">
            <h1 className="fw-light text-dark">Muebles</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi eligendi illo aliquam nisi quia repellendus fuga odio beatae accusantium, quidem hic inventore ducimus, quibusdam ullam corrupti cum earum, obcaecati consequuntur?
            </p>
          </Col>
        </Row>
      </section>
      <div className="album py-5 bg-light">
        <Container>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cards.map((card) => (
              <Card key={card.id} data={card} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Muebles;