import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: 1,
        seconds: 20,
    }
        constructor(props){
             super(props);
             
        }
    componentDidMount() {
    //    const getRestTime = async function (){
    //            let data = await fetch('http://localhost:8080/room/getRestTime',{
    //              method:'GET'
    //            })
    //            let time =await data.json();
    //         //     getSystemTime = time;
    //              console.log(time.body)
    //            this.state.minutes = time.body/60;
    //            this.state.seconds = time.body-(this.state.minutes*60);
    //          }
    //         getRestTime();
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