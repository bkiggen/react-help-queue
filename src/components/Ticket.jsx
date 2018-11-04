import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  var TicketStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  var issueStyle = {
    color: 'blue',
    fontSize: '33px'
  }

  return (
    <div style={TicketStyles}>
      <h3>{props.location} - {props.names}</h3>
      <p style={issueStyle}><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
