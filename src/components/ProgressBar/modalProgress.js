import React from 'react';

const modalProgress = (props) => {
    const { bgcolor, hp, str, weak } = props;
    
    let calHP = ''
    let calSTR = ''
    let calWEAK = ''

    if (hp) {
        calHP = hp == undefined ? 0 : hp > 100 ? 100 : hp
    }
    if (str) {
        calSTR = str == undefined ? 0 : str.length * 50
    }
    if (weak) {
        calWEAK = weak == undefined ? 0 : weak.length * 100
    }

    const containerStyles = {
        height: 20,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 10,
        marginTop: 0
    }

    const fillerStyles = {
        height: '100%',
        width: `${calHP || calSTR || calWEAK}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span >{`${calHP || calSTR || calWEAK}%`}</span>
            </div>
        </div>
    );
};

export default modalProgress;