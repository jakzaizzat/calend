import React from "react";
import BaseButton from "../shared/BaseButton";
import Input from "../shared/Input";
import { useForm } from "react-hook-form";
import toast from "toasted-notes";

const BookingForm = ({ id, date, timeslot }) => {
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

  return (
    <div className="py-4 w-full">
      <h3 className="px-6 font-medium mb-4 text-gray-800">Enter details</h3>
      <dl>
        <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm leading-5 font-medium text-gray-500">Name</dt>

          <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            <Input id="name" register={register({ required: true })} />
            {errors.name && (
              <p className="text-red-600">This field is required</p>
            )}
          </dd>
        </div>
        <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm leading-5 font-medium text-gray-500">Email</dt>
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
        <div className="p-4">
          <BaseButton onClick={handleSubmit(onSubmit)}>
            Schedule Event
          </BaseButton>
        </div>
      </dl>
    </div>
  );
};

export default BookingForm;
