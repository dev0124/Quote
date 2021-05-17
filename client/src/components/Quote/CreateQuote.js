import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addQuote} from '../../actions/quoteAction'

class CreateQuote extends Component {

  constructor() {
    super();
    this.state = {
        quote : {
            title : "",
            author : ""
        }
    };
    this.handleChangeFor = this.handleChangeFor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFor = (propertyName) => (event) => {
    const { quote } = this.state;
    const quoteDetails = {
      ...quote,
      [propertyName]: event.target.value
    };
    this.setState({ quote: quoteDetails });
  }
      
  handleSubmit(event) {
    event.preventDefault();
    this.props.addQuote(this.state.quote);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Quote Text</label>
          <input
            type="text"
            className="form-control"
            id="title"
            autoComplete="off"
            onChange={this.handleChangeFor('title')} value={this.state.quote.title}
            />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author Name</label>
          <input
            type="text"
            className="form-control"
            id="author"
            autoComplete="off"
            onChange={this.handleChangeFor('author')} value={this.state.quote.author}
            />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Add Quote
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  quote: state.quote
})

const mapDispatchToProps = (dispatch) => ({
    addQuote: (data) => dispatch(addQuote(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuote);