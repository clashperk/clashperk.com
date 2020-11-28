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
                                <h1>Live Boards and Logs</h1>
                                <h4>
                                    Create a new category (read-only for members) and get the bot access to it. Create 5 channels within that category (if you need all of live boards and logs)
                                </h4>
                                <br />
                                <ul>
                                    <li>
                                        <h6>Last Online Board</h6>
                                        <p>
                                            Self updating board which shows last seen of clan members.<br />
                                            <Link to={{ pathname: '/faq', hash: '#how-does-last-online-work' }}>How does it work?</Link>
                                        </p>
                                        <code className="border">*setup lastonline {'<#clanTag>'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Clan Games Board</h6>
                                        <p>
                                            Self updating board which shows clan games score of clan members.<br />
                                            <Link to={{ pathname: '/faq', hash: '#how-does-clan-games-scoreboard-work' }}>How does it work?</Link>
                                        </p>
                                        <code className="border">*setup clangames {'<#clanTag>'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Donation Log</h6>
                                        <p>
                                            Logs donations and receives in a Discord channel.
                                        </p>
                                        <code className="border">*setup donations {'<#clanTag>'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Live War Board</h6>
                                        <p>
                                            Logs donations and receives in a Discord channel.
                                        </p>
                                        <code className="border">*setup clan-wars {'<#clanTag>'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Live Clan Promotional Embed</h6>
                                        <p>
                                            Create live updating clan promotional embeds for recruitment purpose and quick reference to your members.
                                        </p>
                                        <code className="border">*setup clanembed {'<#clanTag>'}</code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Clan Feed (aka Member Log)</h6>
                                        <p>
                                            Clan member join / leave log and flagged or banned player alert system. <br />
                                            <Link to={{ pathname: '/faq', hash: 'how-to-flag-players' }}>How does it work?</Link>
                                        </p>
                                        <code className="border">*setup clan-feed {'<#clanTag>'} [@role]</code>
                                    </li>
                                    <hr />
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="items">
                                <h1>Linking Player and Clan</h1>
                                <h4>
                                    Once you link your clan / player, you won't have to type your clan / player tag for any other lookup commands.
                                </h4>
                                <br />
                                <ul>
                                    <li>
                                        <h6>Link Clan</h6>
                                        <p>
                                            Links a clan to a Discord user account.
                                        </p>
                                        <code className="border">*link {'<#clanTag> [@user]'} </code>
                                    </li>
                                    <hr />
                                    <li>
                                        <h6>Link Player</h6>
                                        <p>
                                            Links a player to a Discord user account.
                                        </p>
                                        <code className="border">*link {'<#playerTag> [@user]'} </code>
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
