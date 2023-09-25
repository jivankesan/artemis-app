import React from "react";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="flex h-screen overflow-hidden" data-id="1">
      <aside className="w-64 bg-gray-800 text-white p-6" data-id="2">
        <h1 className="text-2xl mb-4" data-id="3">
          Dashboard
        </h1>
        <nav data-id="4">
          <Link to="/test">Home</Link>
          <Link to="/test">Home</Link>
          <Link to="/test">Home</Link>
          <Link to="/test">Home</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6" data-id="9">
        <h1 className="text-3xl font-semibold" data-id="10">
          Welcome back!
        </h1>
        <p className="mt-2 text-gray-600" data-id="11">
          Here's what's been happening since your last visit.
        </p>
        <div className="grid gap-6 mt-6 grid-cols-2" data-id="12">
          <div className="p-6 bg-white rounded shadow" data-id="13">
            <h2 className="text-xl font-semibold" data-id="14">
              Project1
            </h2>
            <p className="mt-2 text-gray-600" data-id="15">
              Continue on project 1.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow" data-id="16">
            <h2 className="text-xl font-semibold" data-id="17">
              Project2
            </h2>
            <p className="mt-2 text-gray-600" data-id="18">
              Continue on Project 2.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
