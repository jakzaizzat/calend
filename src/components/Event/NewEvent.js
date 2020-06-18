import React from "react";
import { uuid } from "uuidv4";
import toast from "toasted-notes";
import moment from "moment";

import BaseButton from "../shared/BaseButton";
import ButtonGroups from "../shared/ButtonGroups";
import DatePicker from "react-pikaday-datepicker";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";

import { useSemiPersistenceState } from "../../hook/useSemiPersistenceState";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addEvent } from "../../store/modules/event/actions";

const NewEvent = (props) => {
  const initialState = {
    name: "",
    link: "",
    instruction: "",
    duration: "",
    dateFrom: "",
    dateTo: "",
    timeFrom: "",
    timeTo: "",
    active: true,
    submissions: [],
  };

  let minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const durations = [15, 30, 60];

  const [event, setEvent] = useSemiPersistenceState("event", initialState);

  const handleInputChange = (e) => {
    e.persist();
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleButton = () => {
    event.timeFrom = moment(event.timeFrom, "H:mm A");
    event.timeTo = moment(event.timeTo, "H:mm A");
    event.id = uuid();
    let events = [];
    if (localStorage.getItem("events"))
      events = JSON.parse(localStorage.getItem("events"));

    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));

    props.addEvent(event);

    toast.notify("Event created 🎉");
    setEvent(initialState);
    props.onClose();
  };

  return (
    <div>
      <Input
        id="name"
        label="Event name"
        value={event.name}
        onChange={handleInputChange}
        placeholder="Daily Standup"
      />

      <Input
        id="link"
        label="Meeting link"
        value={event.link}
        onChange={handleInputChange}
        placeholder="http://google.com"
      />

      <Textarea
        label="Instructions"
        id="instruction"
        value={event.instruction}
        onChange={handleInputChange}
      ></Textarea>

      <div className="mb-3">
        <label className="block text-sm font-medium leading-5 mb-2 text-gray-700">
          Event duration
        </label>
        <ButtonGroups
          durations={durations}
          active={event.duration}
          handleChanges={(duration) => {
            setEvent((event) => {
              return {
                ...event,
                duration: duration,
              };
            });
          }}
        ></ButtonGroups>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium leading-5 mb-2 text-gray-700">
          Date interval
        </label>
        <div className="flex items-center -mx-2">
          <div className="w-1/2 px-2">
            <DatePicker
              placeholder="From"
              format="YYYY/MM/DD"
              className="form-input w-full text-sm"
              name="dateFrom"
              minDate={minDate}
              onChange={(date) => {
                setEvent((event) => {
                  return {
                    ...event,
                    dateFrom: date,
                  };
                });
              }}
            />
          </div>

          <div className="w-1/2 px-2">
            <DatePicker
              placeholder="End"
              format="YYYY/MM/DD"
              className="form-input w-full text-sm"
              name="dateTo"
              minDate={minDate}
              onChange={(date) => {
                setEvent((event) => {
                  return {
                    ...event,
                    dateTo: date,
                  };
                });
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-5 mb-2 text-gray-700">
          Time interval
        </label>
        <div className="flex items-center -mx-2">
          <div className="w-1/2 px-2">
            <Input
              id="timeFrom"
              type="time"
              value={event.timeFrom}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-1/2 px-2">
            <Input
              id="timeTo"
              type="time"
              value={event.timeTo}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <BaseButton onClick={handleButton}>Submit</BaseButton>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addEvent }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewEvent);
