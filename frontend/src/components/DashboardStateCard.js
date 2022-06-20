import React from "react";

export default function DashboardStateCard(props) {
    return (
        <div className={'dash-card-cont'} style={{
            background: `linear-gradient(to right, ${props.begin}, ${props.end})`,
            borderRadius: '10px',
            // color: `rgb(${props.text})`

        }}>
            <div className={'dash-card-info'}>
                <h1><div>{props.count}</div></h1>
                <div>{props.name}</div>


            </div>
            <div>
                {props.img}
            </div>
        </div>
    )
}
