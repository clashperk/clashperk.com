import { Container, Col, Row, } from "react-bootstrap";
import React, { Component } from 'react';
import './Guide.css';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

class Guide extends Component {
    componentDidMount() {
        document.title = "ClashPerk - Guide";
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
                                <h1 style={{ textAlign: 'center', fontSize: '40px' }}>Guide</h1><br />
                                <h2 style={{ textAlign: 'center', fontSize: '20px' }}>A Quick Setup Guide For ClashPerk</h2>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="content">
                        <Row>
                            <Col className="items">
                                <h1>Enable Features</h1>
                                <h4>
                                    Create a new category (read-only for members) and get the bot access to it. Create 5 channels within that category (if you need all of live boards and logs)
                                </h4>
                                <br />
                                <ul>
                                    <li>
                                        <h6>Channel Link</h6>
                                        <p>
                                            Assign a clan to a Discord channel. It allows you to run commands without passing clan tag in that channel.
                                            Also it allows you to use all of our tracking based commands without having any Feed channel.<br />
                                        </p>
                                        <code className="border">!setup {'#CLAN_TAG #CHANNEL'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Clan Feed</h6>
                                        <p>
                                            Clan member join / leave log and flagged or banned player alert system. <br />
                                            <Link to={{ pathname: '/faq', hash: '#how-does-flag-notification-system-work' }}>How does it work?</Link>
                                        </p>
                                        <code className="border">!setup FEED {'#CLAN_TAG @ROLE'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>War Feed</h6>
                                        <p>
                                            Self updating live war updates, stats, recent attacks and missed attacks.
                                        </p>
                                        <code className="border">!setup WAR {'#CLAN_TAG'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Last Seen</h6>
                                        <p>
                                            Self updating board which shows last seen of clan members.<br />
                                            <Link to={{ pathname: '/faq', hash: '#how-does-last-seen-work' }}>How does it work?</Link>
                                        </p>
                                        <code className="border">!setup LASTSEEN {'#CLAN_TAG'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Clan Games</h6>
                                        <p>
                                            Self updating board which shows clan games score of clan members.<br />
                                            <Link to={{ pathname: '/faq', hash: '#how-does-clan-games-scoreboard-work' }}>How does it work?</Link>
                                        </p>
                                        <code className="border">!setup GAME {'#CLAN_TAG'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Clan Embed</h6>
                                        <p>
                                            Create live updating clan promotional embeds for recruitment purpose and quick reference to your members.
                                        </p>
                                        <code className="border">!setup EMBED {'#CLAN_TAG'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Donation Log</h6>
                                        <p>
                                            Logs donations and receives in a Discord channel.
                                        </p>
                                        <code className="border">!setup DONATION {'#CLAN_TAG'}</code>
                                    </li>
                                    <hr />
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="items">
                                <h1>Link Players and Clan</h1>
                                <h4>
                                    Once you link your clan / player, you won't have to type your clan / player tag for any other lookup commands.
                                </h4>
                                <br />
                                <ul>
                                    <li>
                                        <h6>Link Clan</h6>
                                        <p>
                                            Links a Clan to a Discord user account.
                                        </p>

                                        <h6 style={{ fontSize: '12px' }}>
                                            Self Link
                                        </h6>
                                        <code className="border">!link {'#CLAN_TAG'} </code>
                                        <br /><br />

                                        <h6 style={{ fontSize: '12px' }}>
                                            On Behalf of @USER
                                        </h6>
                                        <code className="border">!link {'#CLAN_TAG @USER'} </code>
                                        <br /><br />
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Link Players</h6>
                                        <p>
                                            Links a Player to a Discord user account (Max 25)
                                        </p>

                                        <h6 style={{ fontSize: '12px' }}>
                                            Self Link
                                        </h6>
                                        <code className="border">!link {'#PLAYER_TAG'} </code>
                                        <br /><br />

                                        <h6 style={{ fontSize: '12px' }}>
                                            On Behalf of @USER
                                        </h6>
                                        <code className="border">!link {'#PLAYER_TAG @USER'} </code>
                                        <br /><br />

                                        <h6 style={{ fontSize: '12px' }}>
                                            Set Default Account
                                        </h6>
                                        <code className="border">!link {'#PLAYER_TAG --default'} </code>
                                        <br /><br />
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
