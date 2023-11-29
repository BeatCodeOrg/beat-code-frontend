import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: 5,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                    if (this.props.onTimerZero) {
                        this.props.onTimerZero();
                    }
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div className="text-3xl font-bold p-2 rounded-md">
                <h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            </div>
        )
    }
}