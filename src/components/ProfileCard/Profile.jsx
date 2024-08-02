import React from "react";
import './Profile.css'
import * as url from "node:url";

export default function Profile({data}) {
    return (
        <div className={"profile-body"} >
            <div className="card">
                <div className="cover-photo" style={{backgroundImage: `url(${data.backgroundCoverImage})` }}>
                    <img src={data.imageUrl} className="profile"/>
                </div>
                <h3 className="profile-name">{data.name}</h3>
                <p className="about">{data.designation}<br/></p>
                <a href={"tel:" + data.phone}><button className="btn">Call / Message</button></a>
                <a href={"mailto:" + data.mail}><button className="btn">Mail</button></a>

            </div>
        </div>
    )
}