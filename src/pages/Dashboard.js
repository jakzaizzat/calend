import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEvents } from "../store/modules/event/actions";
import EventList from "../../src/components/Event/EventList";
import * as api from "../api/events-api-mock";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    api
      .findAll()
      .then((res) => {
        let events = JSON.parse(localStorage.getItem("events")) || [];
        this.props.getEvents(events);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <>
        {this.props.eventState.events ? (
          <EventList
            events={this.props.eventState.events}
            isLoading={this.state.isLoading}
          />
        ) : null}
      </>
    );
  }
}

function mapStateToProps({ eventState }) {
  return { eventState };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
