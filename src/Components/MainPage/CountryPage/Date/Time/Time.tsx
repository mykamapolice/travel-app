import React, { useEffect, useState } from "react";

interface ITimeProps {
    reg: string;
    fontSize: string;
}

const Time = (props: ITimeProps) => {
    const { reg, fontSize } = props;
    const [time, setTime] = useState('-');



    useEffect(() => {
        const interval = setInterval(() => {
            const dt = new Date().toLocaleString("en-US", { timeZone: `${reg}` });
            const currentTime = (new Date(dt)).toISOString().slice(11, 19);
            setTime(currentTime);
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <div style={{ fontSize: `${fontSize}` }}>
            {time}
        </div>);
};

export default Time;

