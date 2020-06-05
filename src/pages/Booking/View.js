import React, { useEffect, useState } from "react";
import * as eventAPI from "../../api/events-api-mock";
import { useParams } from "react-router-dom";

import BaseButton from "../../components/shared/BaseButton";
import Card from "../../components/shared/Card";
import DatePicker from "react-pikaday-datepicker";
import InputSelect from "../../components/shared/InputSelect";

import "pikaday/css/pikaday.css";
import styled from "styled-components";
import Input from "../../components/shared/Input";

const CardContainer = styled.div`
  width: 500px;
`;

const BookingView = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(new Date());
    eventAPI.find(id).then(res => {
      setEvent(res);
    });
  }, []);

  const onDateChange = date => {
    console.log(date);
  };

  return (
    <div className=" flex items-center justify-center min-h-screen">
      {!event ? (
        "none"
      ) : (
        <CardContainer>
          <Card title={event.title}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                    {event.description} - {event.duration} minutes
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
                          maxDate={new Date("2020-07-26")}
                          value={new Date(date)}
                          onChange={onDateChange}
                          className="form-input w-full"
                        />
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Timeslot
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <InputSelect />
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Name
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <Input id="name" />
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Email
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <Input id="email" type="email" />
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="p-4">
                  <BaseButton>Submit</BaseButton>
                </div>
              </div>
            </div>
          </Card>
        </CardContainer>
      )}
    </div>
  );
};

export default BookingView;
