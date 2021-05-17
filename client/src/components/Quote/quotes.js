import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getQuotes, deleteQuote} from '../../actions/quoteAction'
import './quotes.css';
import history from "../../history"
class Quotes extends Component {

  constructor(props){
    super(props);
    this.viewQuote = this.viewQuote.bind(this);
  }

  componentDidMount() {
    this.props.getQuotes();
  }

  static propTypes = {
    getQuotes: PropTypes.func.isRequired,
    quotes: PropTypes.object.isRequired
  }

  deleteQuote(quote){
    this.props.deleteQuote(quote);
  }

  viewQuote = (viewQuoteDetails) => {
    history.push('/quote/view', {'quote' : viewQuoteDetails})
  }

  render() {

    const { quotes } = this.props.quotes;
    const  quoteList = (
      <div>
        <div className="col-lg-12 table-responsive">
          <table className="table table-striped">
            <tbody>
              {
                quotes.map((quote,index) =>
                  <tr key={index}>
                    <td className="columnCSS">“{quote.title}“ - <span className="authorCss">{quote.author}</span></td>                    
                    <td className="buttonGroupCss"> <i className="fa fa-edit btn btn-info" onClick={() => this.viewQuote(quote)}> </i>   &nbsp;
                    <i className="fa fa-trash btn btn-danger" onClick={()=>this.deleteQuote(quote)}> </i></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )

    return (
      <div className="row">
        <div className="col-lg-12">
          <Link to={`/quote/new`} ><button className="btn btn-success pull-right" >New Quote</button></Link>
        </div>
        <div className="col-lg-12 text-center">
        {
          quotes.length ==0 ? 'No Quotes' : quoteList
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  quotes: state.quotes
})

const mapDispatchToProps = (dispatch) => ({
   getQuotes: () => dispatch(getQuotes()),
   deleteQuote: (quote) => dispatch(deleteQuote(quote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
