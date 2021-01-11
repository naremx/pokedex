import React, { Component } from 'react';
import './index.scss';
import Modal from '../Modal/index';
import { connect } from 'react-redux';
import { getPokedex, updatePokedex } from '../../action'
import ProgressBar from '../ProgressBar/dexProgress'
import DexHappiness from '../Happiness/dexHappiness'

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpened: false,
        }
        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle() {
        this.setState({ modalOpened: !this.state.modalOpened })
    }

    componentDidMount = () => {
        this.props.Pokedex()
    }

    removePokedex(val) {
        const cardRemoveList = this.props.list.filter((item) => item.id !== val.id);
        this.props.putPokedex(cardRemoveList)
    }

    ListPokedex = () => {
        if (this.props.list && this.props.list.length !== 0) {
            return (
                this.props.list.map((val, index) =>
                    <div className="box" key={index}>
                        <div className="box-scale">
                            <div className="card-scale">
                                <img className="img" src={val.imageUrl} alt="" />
                            </div>
                            <div>
                                <p className="text-card-name">{val.name}</p>
                                <p className="text-card-dex">HP <ProgressBar key={index} bgcolor={'#f3701a'} hp={val ? val.hp : null} /></p>
                                <p className="text-card-dex">STR <ProgressBar key={index} bgcolor={'#f3701a'} str={val ? val.attacks : null} /></p>
                                <p className="text-card-dex">WEAK <ProgressBar key={index} bgcolor={'#f3701a'} weak={val ? val.weaknesses : null} /></p>
                                <div><DexHappiness str={val ? val.attacks : null} hp={val ? val.hp : null} str={val ? val.attacks : null} weak={val ? val.weaknesses : null}/></div>
                            </div>
                            <div>
                                <h1 className="text-close" onClick={() => this.removePokedex(val)}>X</h1>
                            </div>
                        </div>
                    </div>
                )
            )
        }
    }

    render() {
        let result = this.props.pokedex && this.props.pokedex.cards
        if (this.props.list) {
            if (this.props.pokedex && this.props.pokedex.cards) {
                result = this.props.pokedex.cards.filter(item => !this.props.list.some(val => item.id === val.id));
            }
        }
        return (
            <div>
                <h1 className="topic">My Pokedex</h1>
                <nav>
                    <div className="container-card">
                        {this.ListPokedex()}
                    </div>
                </nav>
                <div className="bg-red">
                    <h1 className="button" onClick={this.modalToggle}>+</h1>
                </div>
                <Modal
                    show={this.state.modalOpened}
                    handleClose={this.modalToggle}
                    pokedex={result}
                    listPokedex={this.props.list ? this.props.list : []}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        pokedex: state.pokedex.data,
        list: state.updatePokedex.data
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Pokedex: () => dispatch(getPokedex()),
        putPokedex: (data) => dispatch(updatePokedex(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);


