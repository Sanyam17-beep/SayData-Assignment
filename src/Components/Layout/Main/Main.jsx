import React from 'react'
import { useState } from 'react';
import Modal from '../../Modal/Modal';
import TranscribeBox from '../../TranscribeBox/TranscribeBox';
import Navbar from '../../Navbar/Navbar';
import TopHeader from '../../TopHeader/TopHeader';
import CardsSvg1 from '../../CardsSvg/CardsSvg1';
import CardsSvg2 from '../../CardsSvg/CardsSvg2';
import CardsSvg3 from '../../CardsSvg/CardsSvg3';
import Card from '../../Card/Card';
import RecentTableBox from '../../RecentTableBox/RecentTableBox';
import './style.css'
function Main(props) { {/*This is Right component of Layout */}
    const [showModal, setShowModal] = useState(false);
    const cards = [{ svg: <CardsSvg1 />, content: "100", text: "Uploaded Files" }, { svg: <CardsSvg2 />, content: "50", text: "Transcribed" }, { svg: <CardsSvg3 />, content: "20", text: "Saved" }]; {/*Cards Array is used to store object of card & multiple card can be created only using this array*/}
    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TranscribeBox onClick={() => setShowModal(false)} /> {/*Modal Box Component*/}
                </Modal>
            )}
            <div className="main">
                <Navbar img={props.img} />
                <div className="home">
                    <TopHeader onClick={() => setShowModal(true)} /> {/*Top Header or Welcome Component*/}
                    <div className="cards-container">
                        <div className="cards">
                            {cards.map(function (e, idx) {    {/*Multiple cards can be mapped as objects*/}
                                return <Card svg={e.svg} content={e.content} text={e.text} />;
                            })}
                        </div>
                    </div>
                    <RecentTableBox/> {/* Recent Files Table's Box Component */}
                </div>
            </div>
        </>
    )
}

export default Main
