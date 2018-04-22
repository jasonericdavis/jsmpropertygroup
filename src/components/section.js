import React from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import {css} from 'emotion'

const base = css`
    background-color: white;
    padding: 10px;
    margin-bottom: 0rem; //remove the styling associated with reactstrap
`

export const asSection = (WrappedComponent, cssOverride) => {
    return class extends React.Component {
        render() {
            return (
            <Jumbotron className={`${base} ${cssOverride}`}>
                <Container>
                    <WrappedComponent />
                    <hr />
                </Container>
            </Jumbotron>
            )
        }
    }

}