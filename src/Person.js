import React, {useState} from "react";
import "./App.css";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Badge, Collapse
  } from 'reactstrap';
  import styled from "styled-components";

const StyledCard = styled(Card)
`
margin-bottom: 10%;
background-color: rgba(0, 0, 0, 0.5);
margin-left: 5%;
margin-right: 5%;
color: lightblue;

`

const Title = styled(CardTitle)
`
font-size: 20px;
text-transform: uppercase;
font-weight: bold;
letter-spacing: 1.2px;
`


export default function Person(props) {
    console.log(props);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
      
           <Col xs="6" md="4" xl="3">
                
                    <StyledCard>
                    <Title>{props.name}</Title>
                            <CardSubtitle style= {{fontSize: '12px', paddingBottom: '3%'}}>{props.gender}, {props.year}</CardSubtitle>
                            <Badge style={{marginBottom: '3%'}} color="info" onClick={toggle} size="sm">Info</Badge>
                            <Collapse isOpen={isOpen}>
                            
                        <CardBody>
                            
                           
                            
                           
                            <CardText style={{fontSize: '14px'}}>{props.name} has {props.hair} hair, {props.eye} eyes, and {props.skin} skin.</CardText>
                         
                           
                        </CardBody>
                        </Collapse>
                    </StyledCard>
              
           </Col>
        
    )
}