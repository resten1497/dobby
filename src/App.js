import React, {useState, useEffect} from 'react';
import style from "./css/App.module.css";

function App() {
    const now = new Date();

    const countDownDate = new Date("March 19, 2020 11:00:00").getTime();
    const countDownNonsanDate = new Date("February 18, 2020 14:00:00").getTime();
    const countDownAllDate = new Date(" December 18, 2021 00:00:00").getTime();

    const [times, setTimes] = useState({
        time: countDownDate - now.getTime(),
        allTime: countDownAllDate - now.getTime(),
        nonsanTime: countDownNonsanDate - now.getTime(),
    });

    useEffect(() => {
        const test = setInterval(() => {
            const now = Date.now();

            const distance = countDownDate - now;
            const alldistance = countDownAllDate - now;
            const Nonsandistance = countDownNonsanDate - now;

            setTimes({
                time: distance,
                allTime: alldistance,
                nonsanTime: Nonsandistance,
            });
        }, 1000);

        return () => {
            clearInterval(test)
        }

        // eslint-disable-next-line
    }, []);

    return (
        <div className={style.App}>
            <img src="images/slave_nonsan.jpg" alt="이곳은 호국 요람의 도시, 논산입니다." className={style.background} />

            <div className={style.text}>
                <h3 className={style.title}>복귀까지</h3>
                <p className={style.counter}>{date(times)}</p>
            </div>
        </div>
    );
}


const date = (times) => {
    return `${Math.floor(times.allTime / (1000 * 60 * 60 * 24))}일
            ${Math.floor((times.allTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}시간
            ${Math.floor((times.allTime % (1000 * 60 * 60)) / (1000 * 60))}분
            ${Math.floor((times.allTime % (1000 * 60)) / 1000)}초`;
};


export default App;
