import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const date = new Date(2019, 6, 31, 15)
    const hours = date.getHours()
    let timeOffDay
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOffDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOffDay = "afternoon"
        styles.color = "#8914A3"
    } else {
        timeOffDay = "night"
        styles.color = "#D90000"
    }

    return (
        <h1 style={styles}>Good {timeOffDay}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));