import React from 'react';
import happy from '../../assets/images/cute.png';

const dexHappiness = (props) => {
    const { str, hp, weak } = props;

    let array = []
    let calSTR = ''
    let calHP = ''
    let calWEAK = ''
    let plusSTR = ''
    let result = ''

    if (hp) {
        calHP = hp == undefined ? 0 : hp > 100 ? 100 : hp
    }
    if (str) {
        calSTR = str == undefined ? 0 : str.length * 50
    }
    if (weak) {
        calWEAK = weak == undefined ? 0 : weak.length * 100
    }

    if (str) {
        str.map((subSubItem) => {
            let replaceSTR = subSubItem.damage == undefined ? 0 : subSubItem.damage.replace(/[^0-9\.-]+/g, "")
            let checkSTR = replaceSTR == '' ? 0 : replaceSTR
            array.push(checkSTR)
        })
        result = array.map(i => Number(i));
        plusSTR = result.reduce((a, b) => a + b, 0)
        result = Math.ceil(((calHP / 10) + (plusSTR / 10) + 10 - (calWEAK / 100)) / 5)
    }


    const imgHappiness = {
        height: '40px',
        width: '40px',
        borderRadius: 'inherit',
        textAlign: 'right'
    }
    return (
        <div >
            <img style={imgHappiness} src={happy} alt="" />
            {result}
        </div>
    );
};

export default dexHappiness;