import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './Rules.css';
import Navbar from './Navbar'

class Feature extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Navbar hide={true} />
                <section id="rules" style={{ background: '#2a2c30' }}>
                    <Container>
                        <h2 style={{ textAlign: 'center', fontSize: '30px' }}>
                            Rules
						</h2>

                        <h3 style={{ textAlign: 'center', padding: '30px', borderBottom: 'solid 1px' }}>
                            By using ClashPerk, you agree to these rules. If you break any rules, we reserve the right to ban you from ClashPerk
                        </h3>

                        <Row>
                            <Col className="items" sm>
                                <h2>Rule One</h2>
                                <h3>
                                    Userbotting or anything else used to automate running commands is strictly forbidden.  As well as massive amounts of spam is not allowed.
            					</h3>
                            </Col>
                            <Col className="items" sm>
                                <h2>Rule Two</h2>
                                <h3>
                                    Sharing bugs with other users is forbidden. Please report all bugs to staff on ClashPerk's Support Server so we can fix it as soon as possible.
            					</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="items" sm>
                                <h2>Rule Three</h2>
                                <h3>
                                    Using the bot to advertise anything will result in punishment. This includes other discord servers.
								</h3>
                            </Col>
                            <Col className="items" sm>
                                <h2>Rule Four</h2>
                                <h3>
                                    The Discord TOS and Discord Community Guidelines also are enforcable through our bot.
            					</h3>
                            </Col>
                        </Row>

                        <h3 style={{ textAlign: 'center', paddingTop: '5px', color: 'red' }}>
                            Thank You! ❤
                        </h3>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Feature;