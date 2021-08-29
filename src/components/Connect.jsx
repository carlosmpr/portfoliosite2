import React, { useState } from "react";
import * as sanitizeHtml from "sanitize-html";
import * as EmailValidator from "email-validator";
import axios from "axios";

export default function Connect() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSucces] = useState(false);

  const sendMessage = async () => {
    const newEmail = sanitizeHtml(email);
    const newName = sanitizeHtml(name);
    const newMessage = sanitizeHtml(message);

    if (EmailValidator.validate(email) && message !== "") {
      try {
        await axios.post(
          "https://rk82vfsokc.execute-api.us-east-1.amazonaws.com/dev/mailer",
          {
            email: newEmail,
            name: newName,
            message: newMessage,
          }
        );
        setSucces(true);
      } catch (_) {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-screen  flex flex-col items-center  font-mono space-y-6  mt-32">
      <h1 className="font-bold text-4xl">Message me</h1>
      {success ? (
        <div>
          <div className="notification is-success">
            Message sent successfully!
          </div>
        </div>
      ) : (
        <>
          <input
            className="bg-indigo-700 bg-opacity-5 rounded-xl shadow-md p-4 md:w-2/6 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            placeholder="Email"
            value={email}
            name={email}
            onChange={(e) => {
              setError(false);
              setEmail(e.target.value);
            }}
          />

          <input
            className="bg-indigo-700 bg-opacity-5 rounded-xl shadow-md p-4 md:w-2/6 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            placeholder="Name"
            value={name}
            name={name}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
          />

          <textarea
            className="bg-indigo-700 bg-opacity-5 rounded-xl shadow-md p-4 md:w-2/6 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Message"
            value={message}
            name={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>

          {error ? (
            <div className="notification is-danger">
              Please verify Email and Message!
            </div>
          ) : null}

          <button
            className="p-4 bg-red-700 bg-opacity-70 text-white  backdrop-filter backdrop-blur overflow-hidden  shadow-lg  rounded-xl"
            onClick={sendMessage}
          >
            Send Email
          </button>
        </>
      )}
    </div>
  );
}
