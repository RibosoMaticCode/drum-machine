import React, { Component } from 'react'
import DrumPadKey from './DrumPadKey'

const pads = [
    {
        key: "Q",
        soundId: 'Audio-Q',
        audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        keyCode: 81
    },
    {
        key: "W",
        soundId: 'Audio-W',
        audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        keyCode: 87
    },
    {
        key: "E",
        soundId: 'Audio-E',
        audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        keyCode: 69
    },
    {
        key: "A",
        soundId: 'Audio-A',
        audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        keyCode: 65
    },
    {
        key: "S",
        soundId: 'Audio-S',
        audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        keyCode: 83
    },
    {
        key: "D",
        soundId: 'Audio-D',
        audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        keyCode: 68
    },
    {
        key: "Z",
        soundId: 'Audio-Z',
        audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        keyCode: 90
    },
    {
        key: "X",
        soundId: 'Audio-X',
        audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        keyCode: 88
    },
    {
        key: "C",
        soundId: 'Audio-C',
        audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        keyCode: 67
    }
]

class DrumMachine extends Component {

    render() {
        return (
            <div id="drum-machine" className='drum-machine mt-5'>
                <h1 className='mt-3 mb-5 text-center'><i className="fas fa-drum"></i> Drum Machine</h1>
                <div className="row">
                    {
                        pads.map((value, index) => {
                            return (
                                <div key={index} className='col-md-4'>
                                    <DrumPadKey
                                        keyPad={pads[index].key}
                                        keyCode={pads[index].keyCode}
                                        audioSrc={pads[index].audioSrc}
                                        soundId={pads[index].soundId}
                                    />
                                </div>
                            )
                        })
                    }

                </div>
                <div id="display" className='display'>Test</div>
            </div>
        )
    }
}

export default DrumMachine