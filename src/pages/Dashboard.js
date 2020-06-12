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
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    api
      .findAll()
      .then(res => {
        this.props.getEvents(res);
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    return (
      <>
        <EventList
          events={this.props.eventState}
          isLoading={this.state.isLoading}
        />
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
