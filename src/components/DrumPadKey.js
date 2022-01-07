import React, { Component } from 'react'

class DrumPadKey extends Component {
    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this)

        this.state = {
            stylePad : {backgroundColor: '#e60000', boxShadow: '1px 1px 5px gray'}
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound()
        }
    }
    playSound() {
        let audio = document.getElementById(this.props.keyPad)
        audio.play();
        let display = document.getElementById('display');
        display.innerHTML = this.props.soundId

        this.setState({
            stylePad : {backgroundColor: '#FF9800', transform: 'scale(.95)'}
        })

        setTimeout( () => this.setState({
            stylePad : {backgroundColor: '#e60000'}
        }), 100)
        
    } 

    render() {
        return (
            <div id={this.props.soundId}
                className='drum-pad mb-3' style={this.state.stylePad}
                onClick={ this.playSound }> 
                <span>{this.props.keyPad}</span>
                <audio className='clip' id={this.props.keyPad} src={this.props.audioSrc} />
            </div>
        )
    }
}

export default DrumPadKey;