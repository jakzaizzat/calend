import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addEvent, getEvents } from "../store/modules/event/actions";
import * as api from "../api/events-api-mock";

class Home extends Component {
  componentDidMount() {
    api.findAll().then(res => {
      this.props.getEvents(res);
    });
  }

  render() {
    return (
      <div>
        <pre>{this.props.eventState.length}</pre>
        <button
          onClick={() => {
            this.props.addEvent({
              id: 0,
              name: "test"
            });
          }}
        >
          Add event
        </button>
      </div>
    );
  }
}

function mapStateToProps({ eventState }) {
  return { eventState };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addEvent, getEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
