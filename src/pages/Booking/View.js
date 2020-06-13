import React, { Component, useEffect, useState } from "react";
import * as eventAPI from "../../api/events-api-mock";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import BaseButton from "../../components/shared/BaseButton";
import Card from "../../components/shared/Card";
import DatePicker from "react-pikaday-datepicker";
import InputSelect from "../../components/shared/InputSelect";

import "pikaday/css/pikaday.css";
import styled from "styled-components";
import Input from "../../components/shared/Input";
import { intervals } from "../../utils/getTimeSlot";
import { uuid } from "uuidv4";
import toast from "toasted-notes";

const CardContainer = styled.div`
  width: 500px;
`;

const BookingView = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [date, setDate] = useState(null);
  const [timeslot, setTimeslot] = useState("");
  const [intervalOptions, setIntervalOptions] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    let payload = {
      ...data,
      date,
      timeslot,
    };
    let events = JSON.parse(localStorage.getItem("events")) || [];
    let index = events.findIndex((event) => event.id === id);
    events[index].submissions.push(payload);
    localStorage.setItem("events", JSON.stringify(events));
    toast.notify("Submission created 🎉");
    reset({});
  };

  let minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  let maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 14);

  const calculateInterval = (from, to, duration) => {
    let results = intervals(from, to, duration);
    return results.map((result) => {
      return {
        id: uuid(),
        value: result,
      };
    });
  };

  useEffect(() => {
    setDate(new Date());

    const events = JSON.parse(localStorage.getItem("events")) || [];
    const event = events.find((event) => event.id === id);
    setEvent(event);

    let results = calculateInterval(
      event.timeFrom,
      event.timeTo,
      event.duration
    );

    setIntervalOptions(results);
    setTimeslot(results[0].value);
  }, []);

  const onDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className=" flex items-center justify-center min-h-screen">
      {!event ? (
        "none"
      ) : (
        <CardContainer>
          <Card title={event.name}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <p className="mb-1 text-sm">Instructions</p>
                    <div className="whitespace-pre-wrap text-gray-500  text-sm mb-4">
                      {event.instruction}
                    </div>
                    <p className="mb-1 text-sm">Durations</p>
                    <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                      {event.duration} minutes
                    </p>
                  </div>
                  <div className="py-4">
                    <dl>
                      <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Date
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <DatePicker
                            placeholder="Select Date"
                            format="YYYY/MM/DD"
                            minDate={minDate}
                            maxDate={maxDate}
                            value={minDate}
                            onChange={onDateChange}
                            className="form-input w-full text-sm"
                          />
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Timeslot
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <InputSelect
                            value={timeslot}
                            options={intervalOptions}
                            ref={register}
                            onChange={(e) => {
                              e.persist();
                              setTimeslot(e.target.value);
                            }}
                          />
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Name
                        </dt>

                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <Input
                            id="name"
                            register={register({ required: true })}
                          />
                          {errors.name && (
                            <p className="text-red-600">
                              This field is required
                            </p>
                          )}
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <Input
                            id="email"
                            type="email"
                            register={register({
                              required: true,
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              },
                            })}
                          />
                          {errors.email && (
                            <p className="text-red-600">
                              This field is required and valid email
                            </p>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="p-4">
                    <BaseButton onClick={handleSubmit(onSubmit)}>
                      Submit
                    </BaseButton>
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </CardContainer>
      )}
    </div>
  );
};

export default BookingView;
