import React from "react";

export const EpisodeCard = ({ name, air_date, episode}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center",
                gap: "10px",
                border: '1px solid gray',
                borderRadius: '4px',
                boxShadow:'0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
                width: '240px',
                height: '128px',
                background: '#FAFAFA'
            }}
        >
            <span style={{color: "rgba(0, 0, 0, 0.87", fontSize:'20px', fontWeight:'500'}}>{name}</span>
            <span style={{color: '#00000099',fontSize:'14px'}}>{air_date}</span>
            <span style={{color: '#00000099', fontWeight:'700',fontSize:'14px'}}>{episode}</span>
        </div>
    );
};
