import React from "react";
import Moment from "react-moment";

const Submissions = ({ submissions }) => {
  return (
    <div className="max-w-2xl mx-auto mb-4">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="flex items-center justify-between text-lg leading-6 font-medium text-gray-900">
            Submission
            <span className="flex items-center justify-center h-8 w-8 rounded-full text-xs font-medium leading-4 bg-red-100 text-red-800">
              {submissions.length}
            </span>
          </h3>
        </div>
        <div>
          {submissions.map((submission) => (
            <span
              key={submission}
              className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                    {submission.name}
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      <Moment fromNow>{submission.timeslot}</Moment>
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
  );
};

export default Submissions;
