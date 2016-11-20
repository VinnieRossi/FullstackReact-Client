import React, {Component} from 'react';

class Tally extends Component {
    render() {
    return (
	<div className="entry">
	  <h1>{this.props.entry}</h1>
	  <div className="voteCount">
	    {this.props.getVotes(this.props.entry)}
	  </div>
	</div>
      );
  }
}
export default Tally;
