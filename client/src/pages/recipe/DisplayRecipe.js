import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,
Row, Col } from 'reactstrap';

const Recipe = (props) => {
  return (
    <div>
      <Row>
          <Col>
          <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
          </Col>
      </Row>
    </div>
  );
};

export default Recipe;