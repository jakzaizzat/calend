import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as eventAPI from "../../api/events-api-mock";
import Loading from "../../components/shared/Loading";

const EventView = () => {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    eventAPI.find(id).then(res => {
      setEvent(res);
    });
  }, []);

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
              <li>{event.title}</li>
            </ol>
          </nav>
          <div className="max-w-2xl mx-auto mb-4">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {event.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                  {event.description}
                </p>
              </div>
              <div className="py-4">
                <dl>
                  <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm leading-5 font-medium text-gray-500">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      {event.active ? "Active" : "Inactive"}
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
                      12-03-2020 untill 12-06-2020
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm leading-5 font-medium text-gray-500">
                      Time Interval
                    </dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                      9:00 A.M - 05.00 P.M
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          {event.submissions ? (
            <div className="max-w-2xl mx-auto mb-4">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 className="flex items-center justify-between text-lg leading-6 font-medium text-gray-900">
                    Submission
                    <span className="flex items-center justify-center h-8 w-8 rounded-full text-xs font-medium leading-4 bg-red-100 text-red-800">
                      {event.submissions.length}
                    </span>
                  </h3>
                </div>
                <div>
                  {event.submissions.map(submission => (
                    <span
                      key={submission.id}
                      className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                            {submission.name}
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {submission.timeslot}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                              {submission.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default EventView;
