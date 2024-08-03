import React from "react";
import classes from "./PreEvent.module.css";
import './PreEvent.css'

const PrevEvent = () => {
    return (<>
            <div className={classes.leaderboard_section}
                 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <h1 className={classes.heading}>Crescendo '23</h1>
                <p className={classes.para}>On October 30, Sairam Engineering College was transformed into a hub of
                    excitement and creativity during Crescendo'23. The event was a spectacular success, filled with
                    breathtaking performances and engaging activities that left everyone in awe. Crescendo'23 showcased
                    the
                    incredible talent and passion of our students. The energy was electric, with a phenomenal turnout
                    from
                    students, faculty, and special guests, all coming together to celebrate and enjoy. It was a day of
                    joy
                    and inspiration, a testament to the hard work and dedication of the organizers and participants.
                    Crescendo'23 was not just an event but a magical experience that will be remembered for a long time.
                </p>

                <div className={"sliderbody"}>
                    <div className="slider">
                        <div className="slide-track">
                            <div className="slide">
                                <img src="/Carousel/1.jpg" height="100"
                                     width="250"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/2.jpg" height="100"
                                     width="250"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/3.jpg" height="100"
                                     width="250"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/4.jpg" height="100"
                                     width="250"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/5.jpg" height="100"
                                     width="250"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/6.jpg" height="100"
                                     width="250"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/7.jpg" height="100"
                                     width="250"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/8.jpg"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/9.jpg"  alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/10.jpg"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/11.jpg"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/12.jpg"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/13.jpg"
                                     alt=""/>
                            </div>
                            <div className="slide">
                                <img src="/Carousel/14.jpg"
                                     alt=""/>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
    </>);
};

export default PrevEvent;
