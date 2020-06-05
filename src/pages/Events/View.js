import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as eventAPI from "../../api/events-api-mock";

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
        "Empty"
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {event.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                {event.description}
              </p>
            </div>
            <div>
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Status
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {event.active ? "Active" : "Inactive"}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Link
                  </dt>
                  <dd className="mt-1 flex items-center text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    <a
                      href={event.link}
                      target="_blank"
                      id="eventLink"
                      className="text-indigo-700 mr-3"
                    >
                      {event.link}
                    </a>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Duration
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {event.duration}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventView;
