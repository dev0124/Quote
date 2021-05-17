import React from 'react';
import { updateQuote } from '../../actions/quoteAction';
import {connect } from 'react-redux';
import history from '../../history'

class QuoteDetails extends React.Component {
  constructor(props){
      super(props);
      const location = history.location
      this.state = location.state;
      this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChangeFor = (propertyName) => (event) => {
    const { quote } = this.state;
    const quoteDetails = {
      ...quote,
      [propertyName]: event.target.value
    };
    this.setState({ quote: quoteDetails });
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.updateQuote(this.state.quote);
  }

  render(){

    return(
        <div className="quoteDetail">
            <h2>Quote Detail</h2>
            <div />
            {
              <form onSubmit={this.handleUpdate}>
                <div className="form-group">
                  <label htmlFor="title">Quote Text</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
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
                    name="author"
                    autoComplete="off"
                    onChange={this.handleChangeFor('author')} value={this.state.quote.author}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                  UPDATE
                </button>
               </form>
              }
            
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  updateQuote : quote => dispatch(updateQuote(quote))
  }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(QuoteDetails);