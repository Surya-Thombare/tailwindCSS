import React from "react";
import { useState } from "react";

function Alerts() {
  const [alert, setalert] = useState("");
  const dangerAlert = async () => {
    setalert("Danger");
  };

  const successAlert = async () => {
    setalert("Success");
  };

  const infoAlert = async () => {
    setalert("Info");
  };

  const warningAlert = async () => {
    setalert("Warning");
  };

  return (
    <div>
      <button
        className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        onClick={dangerAlert}
      >
        Danger
      </button>
      <button
        className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={successAlert}
      >
        Success
      </button>
      <button
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={infoAlert}
      >
        Info
      </button>
      <button
        className="py-2 px-4 bg-grey-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-grey-400 focus:ring-opacity-75"
        onClick={warningAlert}
      >
        Warning
      </button>
      <div>
        {alert == "Danger" ? (
          <div role="alert">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Danger
            </div>
            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>Something not ideal might be happening.</p>
            </div>
          </div>
        ) : alert == "Success" ? (
          <div
            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">Our privacy policy has changed</p>
                <p class="text-sm">
                  Make sure you know how these changes affect you.
                </p>
              </div>
            </div>
          </div>
        ) : alert == "Info" ? (
          <div
            class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
            role="alert"
          >
            <p class="font-bold">Informational message</p>
            <p class="text-sm">Some additional text to explain said message.</p>
          </div>
        ) : alert == "Warning" ? (
          <div
            class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
            role="alert"
          >
            <p class="font-bold">Be Warned</p>
            <p>Something not ideal might be happening.</p>
          </div>
        ) : (
          <h1>alert</h1>
        )}
      </div>
    </div>
  );
}

export default Alerts;
