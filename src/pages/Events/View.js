import React, { Component } from "react";
import { useParams, Link, withRouter } from "react-router-dom";
import Moment from "react-moment";
import * as eventAPI from "../../api/events-api-mock";
import Loading from "../../components/shared/Loading";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEvent } from "../../store/modules/event/actions";
import Submissions from "../../components/Event/Submissions";

class EventView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const event = events.find((event) => event.id === id);
    this.props.getEvent(event);
  }

  render() {
    const { event } = this.props;

    return (
      <>
        {!event ? (
          <div className="my-4">
            <Loading color="#333333" />
          </div>
        ) : (
          <>
            <nav className="bg-grey-light py-3 rounded font-sans w-full my-4">
              <ol className="list-reset flex text-grey-dark">
                <li>
                  <Link to="/dashboard" className="text-blue font-bold">
                    Events
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="capitalize">{event.name}</li>
              </ol>
            </nav>
            <div className="max-w-2xl mx-auto mb-4">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 capitalize mb-2">
                    {event.name}
                  </h3>

                  <span
                    className={
                      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full " +
                      (event.active
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800")
                    }
                  >
                    {event.active ? "Active" : "Inactive"}
                  </span>
                </div>
                <div className="py-4">
                  <dl>
                    <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Instruction
                      </dt>
                      <dd className="whitespace-pre-wrap mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        {event.instruction}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Invitation link
                      </dt>
                      <dd className="mt-1 flex items-center text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <Link
                          to={"/booking/" + event.id}
                          className="text-indigo-700 mr-3"
                        >
                          {window.location.origin}/booking/{event.id}
                        </Link>
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Meeting link
                      </dt>
                      <dd className="mt-1 flex items-center text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <a
                          href={event.link}
                          className="text-indigo-700"
                          target="_blank"
                        >
                          {event.link}
                        </a>
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Duration
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        {event.duration} minutes
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Date Interval
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <Moment format="DD-MM-YYYY">{event.dateFrom}</Moment>
                        <span className="mx-2">untill</span>
                        <Moment format="DD-MM-YYYY">{event.dateTo}</Moment>
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Time Interval
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <Moment format="hh:mm A">{event.timeFrom}</Moment>{" "}
                        <span className="mx-2">-</span>
                        <Moment format="hh:mm A">{event.timeTo}</Moment>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {event.submissions ? (
              <Submissions submissions={event.submissions} />
            ) : null}
          </>
        )}
      </>
    );
  }
}

function mapStateToProps({ eventState }) {
  return { event: eventState.event };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getEvent }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventView)
);
