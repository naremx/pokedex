import React, { Component } from 'react';
import './index.scss';
import { updatePokedex } from '../../action'
import { connect } from 'react-redux';
import ProgressBar from '../ProgressBar/modalProgress'
import ModalHappiness from '../Happiness/modalHappiness'

class Modal extends Component {
  state = {
    value: "",
    sourceData: [],
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      sourceData: nextProps.pokedex,
      listPokedex: nextProps.listPokedex,
    });
  }


  handleChange = e => {
    this.setState({
      sourceData: this.props.pokedex,
    });
  };

  filterList = e => {
    const updatedList = this.props.pokedex.filter(item => {
      return (item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1) || (item.type.toLowerCase().search(e.target.value.toLowerCase()) !== -1)
    });
    this.setState({ sourceData: updatedList });
  };

  addPokedex(val) {
    if (this.state.listPokedex.indexOf(val) === -1) {
      var cardAddList = this.state.listPokedex;
      cardAddList.push(val)
      this.props.putPokedex(cardAddList)
    }
  }

  ListPokedex = () => {
    if (this.state.sourceData && this.state.sourceData.length !== 0) {
      return (
        this.state.sourceData.map((val, index) =>
          <div className="box-modal" key={index}>
            <div className="box-scale-modal">
              <div className="card-scale-modal">
                <img className="img-modal" src={val.imageUrl} alt="" />
              </div>
              <div>
                <p className="text-modal-name">{val.name}</p>
                <p className="text-card">HP <ProgressBar key={index} bgcolor={'#f3701a'} hp={val ? val.hp : null}/></p>
                <p className="text-card">STR <ProgressBar key={index} bgcolor={'#f3701a'} str={val ? val.attacks : null} /></p>
                <p className="text-card">WEAK <ProgressBar key={index} bgcolor={'#f3701a'} weak={val ? val.weaknesses : null} /></p>
                <div><ModalHappiness str={val ? val.attacks : null} hp={val ? val.hp : null} str={val ? val.attacks : null} weak={val ? val.weaknesses : null}/></div>
              </div>
              <div>
                <h1 className="text-add" onClick={() => this.addPokedex(val)} >Add</h1>
              </div>
            </div>
          </div>

        )
      )
    }
  }

  render() {
    const show = this.props.show;
    const coverClass = show ? 'modal-cover modal-cover-active' : 'modal-cover'
    const containerClass = show ? 'modal-container modal-container-active' : 'modal-container'
    return (
      <div>
        <div className={containerClass}>
          <div className="container-search">
            <label className="search-label">
              <input
                type="text"
                onClick={this.handleChange}
                onChange={this.filterList}
                placeholder="Find pokemon"
                className="search-box"
              />
              <img className="search-input" src={require('../../assets/images/search.png')} alt="search" />
            </label>
          </div>
          <div className="nav-modal">
            {this.ListPokedex()}
          </div>
        </div>
        <div className={coverClass} onClick={this.props.handleClose}></div>
      </div >
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    putPokedex: (data) => dispatch(updatePokedex(data)),
  }
}
export default connect(null, mapDispatchToProps)(Modal);
