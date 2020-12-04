import { Container, Col, Row, } from "react-bootstrap";
import React, { Component } from 'react';
import './Faq.css';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

class FAQ extends Component {
    componentDidMount() {
        document.title = "ClashPerk - FAQ";

        let div = document.getElementById(this.props.location.hash.replace('#', ''));
        if (div) window.scrollTo(0, div.offsetTop - 40); // div.scrollIntoView();
        else window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        let div = document.getElementById(this.props.location.hash.replace('#', ''));
        if (div) window.scrollTo(0, div.offsetTop - 40);
    }

    render() {
        return (
            <>
                <Navbar hide={true} />
                <div id="faq">
                    <Container className="heading">
                        <Row>
                            <Col sm>
                                <h1 style={{ textAlign: 'center', fontSize: '40px' }}>FAQ</h1><br />
                                <h2 id="frequently-asked-questions" style={{ textAlign: 'center', fontSize: '20px' }}>Frequently Asked Questions</h2>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="content">
                        <Row id="is-clashperk-legal">
                            <Col className="items">
                                <h1><Link to={{ pathname: '/faq', hash: "#is-clashperk-legal" }}>#</Link> Q1: Is ClashPerk Legal / Fair Play?</h1>
                                <h4>
                                    Yes, we always support Fair Play. <br />
                                    ClashPerk collects all the data directly from <a style={{ color: 'white' }} href="https://developer.clashofclans.com/#/">Supercell API</a>.
                                </h4>
                            </Col>
                        </Row>

                        <Row id="why-the-bot-is-not-working">
                            <Col className="items">
                                <h1><Link to={{ pathname: '/faq', hash: "#why-the-bot-is-not-working" }}>#</Link> Q2: Why the bot is not working in my server?</h1>
                                <h4>
                                    Make sure that ClashPerk has all required permissions in your Discord.
                                </h4>
                            </Col>
                        </Row>

                        <Row id="what-is-clan-verification">
                            <Col className="items">
                                <h1><Link to={{ hash: "#what-is-clan-verification", pathname: '/faq' }}>#</Link> Q3: What is clan verification?</h1>
                                <h4>
                                    It's a security feature of the bot to ensure you are a Leader or Co-Leader in the clan
                                    and you're not trying to abuse the bot by tracking clans which you don't own.
                                </h4>

                                <strong >How to verify?</strong>

                                <ul style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                    <li>
                                        In order to verify your clan, you need to be a Leader / Co-Leader of the clan.
                                    </li>
                                    <li>
                                        Add the code CPXX at end of the clan description. (actual code will be provided by the bot).
                                    </li>
                                </ul>

                                <strong>Things to know...</strong>

                                <h4 style={{ paddingTop: '5px' }}>
                                    You should wait at least 2 minutes before you run the command again and the code could be removed once the command has been successfully run.
                                </h4>
                            </Col>
                        </Row>

                        <Row id="how-does-last-online-work">
                            <Col className="items">
                                <h1><Link to={{ hash: "#how-does-last-online-work", pathname: '/faq' }}>#</Link> Q4: How does last online work?</h1>
                                <h4>
                                    The bot can't see who is online in your clan. So, it uses the following points to determine an approximate last online time.
                                </h4>
                                <ul>
                                    <li>
                                        Donated or Received Troops
                                    </li>
                                    <li>
                                        Gained or Lost Versus Trophies
                                    </li>
                                    <li>
                                        Player Name Change
                                    </li>
                                    <li>
                                        Increased XP Level
                                    </li>
                                    <li>
                                        Gained Legend Trophies
                                    </li>
                                    <li>
                                        Attacked in War (Coming Soon)
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <Row id="how-does-clan-games-scoreboard-work">
                            <Col className="items">
                                <h1><Link to={{ hash: "#how-does-clan-games-scoreboard-work", pathname: '/faq' }}>#</Link> Q5: How does Clan Games scoreboard work?</h1>
                                <h4>
                                    The Clan Games points can't be obtained directly! It's only possible by comparing <strong>Games Champion</strong> achievement. <br />
                                    Our system pulls everyone's <strong>Games Champion</strong> achievement in the beginning of Clan Games and compares every 30 minutes.
                                </h4>
                            </Col>
                        </Row>

                        <Row id="how-does-flag-notification-system-work">
                            <Col className="items">
                                <h1><Link to={{ hash: "#how-does-flag-notification-system-work", pathname: '/faq' }}>#</Link> Q6: How does flag notification system work?</h1>
                                <h4>
                                    This is a feature to mark players as banned or flagged and get notified whenever they join back to the clan or clan family. <br />
                                </h4>

                                <strong>How to flag?</strong>
                                <ul style={{ margin: '10px', padding: '10px' }}>
                                    <li style={{ listStyleType: 'none' }}>
                                        <code className="border" style={{ color: '#aeaeae', margin: 1 }}>*flag {'<#playerTag>'} {'<...reason>'}</code>
                                    </li>
                                </ul>

                                <strong style={{ paddingTop: '5px' }}>Things to know...</strong>
                                <h4 style={{ paddingTop: '5px' }}>
                                    The bot only notifies when <strong>Clan Feed</strong> is enabled. <br />
                                    Flags are per server basis. It doesn't travel among Discord servers and not accessible from other servers.
                                </h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default FAQ;
