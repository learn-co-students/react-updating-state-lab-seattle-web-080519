// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{

    constructor() {
        super()
        this.state = {
            "errors": [],
            "settings": {
                "bitrate": 8,
                "video": {
                    "resolution": "1080p"
                },
            },
            "user": null
        }
    }

    hanldeBitRate = event => {
        this.setState(prev => ({...prev, settings: {...prev.settings, bitrate: 12}}))
    }

    handleResolution = event => {
        this.setState({settings: { bitrate: 8,video: {resolution: "720p"}}})
    }

    render () {
        return (<div><button className="bitrate" onClick={event=>this.hanldeBitRate(event)}>no</button>
        <button className="resolution" onClick={event => this.handleResolution(event)}>resolute me</button>
        </div>)
    }
}