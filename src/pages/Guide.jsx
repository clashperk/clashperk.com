import { Container, Col, Row, } from "react-bootstrap";
import React, { Component } from 'react';
import './Guide.css';
import Navbar from './Navbar'

class Guide extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Navbar hide={true} />
                <div id="guide">
                    <Container id="heading">
                        <Row>
                            <Col sm>
                                <h1 style={{ textAlign: 'center', fontSize: '45px' }}>Guide</h1><br />
                                <h2 style={{ textAlign: 'center', fontSize: '20px' }}>A Quick Setup Guide For ClashPerk</h2>
                            </Col>
                        </Row>
                    </Container>

                    <Container id="content">
                        <Row>
                            <Col className="items">
                                <h1>Step 1 : Live Boards and Logs</h1>
                                <h4>
                                    Create a new category (read-only for members) and get bot access to it. Create 5 channels within that category (if you need all of live boards and logs)</h4> <br />
                                <ul>
                                    <li>
                                        <strong>Last Online Board</strong><br />
                                        <blockquote>
                                            <code> *setup onlineboard {'<#clanTag>'}</code> <br />
                                            Once you do that, you will get message to verify that you actually are the Leader or Co-Leader of that clan, read and follow those instructions carefully. Verification is a one time process so you won't have to do it again for any other commands.
                                        </blockquote>
                                    </li>
                                    <hr />
                                    <li>
                                        <strong>Clan Games Board</strong> <br />
                                        <blockquote>
                                            <code> *setup gameboard {'<#clanTag>'}</code>
                                        </blockquote>
                                    </li>
                                    <hr />
                                    <li>
                                        <strong>Donation Log</strong> <br />
                                        <blockquote>
                                            <code> *setup donationlog {'<#clanTag>'}</code>
                                        </blockquote>
                                    </li>
                                    <hr />
                                    <li>
                                        <strong>Live War Board</strong> <br />
                                        <blockquote>
                                            <code> *setup clanwarlog {'<#clanTag>'}</code>
                                        </blockquote>
                                    </li>
                                    <hr />
                                    <li>
                                        <strong>Member Log</strong> <br />
                                        <blockquote>
                                            <code> *setup memberlog {'#clanTag'} [@role]</code>
                                        </blockquote>
                                    </li>
                                    <hr />
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="items">
                                <h1>Step 2 : Linking Clan</h1>
                                <h4>
                                    Once you link your clan, you won't have to type your clan tag for any other lookup commands.								</h4>
                                <ul>
                                    <li>
                                        <blockquote>
                                            <code> *link {'<#clanTag>'} </code>
                                        </blockquote>
                                    </li>
                                    <hr />
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Guide;
