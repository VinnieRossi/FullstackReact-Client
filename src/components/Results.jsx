import React from 'react';
import Tally from './Tally';
import Winner from './Winner';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Results = React.createClass ({

  getPair: function() {
    return this.props.pair || [];
  },

  getVotes: function(entry) {
    if(this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  },
  
  
  render() {
    return (
      <div className="results">
	{this.props.winner ?
	   <Winner ref="winner" winner={this.props.winner} /> :
	 <div className="tally">
	  {this.getPair().map(entry=>
	    <Tally key={entry} entry={entry} getVotes={this.getVotes}/>
	   )}
	 </div>
	 }
	<div className="management">
	  <button ref="next" className="next" onClick={this.props.next}>
	    Next
	  </button>
	</div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(
  mapStateToProps,
  actionCreators
  
)(Results);
