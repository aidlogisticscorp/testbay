import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-50 p-6 shadow-md">
        <h1 className="text-3xl font-bold">Test Bay</h1>
        <p className="text-lg text-gray-600">Innovating Tomorrow's Medicine</p>
      </header>

      <main className="p-6 grid gap-6">
        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Welcome to Test Bay</h2>
          <p>
            We are a cutting-edge biomedical research facility dedicated to advancing
            science and improving lives. Join us in shaping the future of healthcare.
          </p>
          <div className="mt-4">
            <video controls className="w-full rounded-xl">
              <source src="sample-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Our Research Areas</h2>
          <ul className="list-disc list-inside">
            <li>Clinical Trials for Chronic Conditions</li>
            <li>Genetic and Immunology Studies</li>
            <li>Neurological and Mental Health Research</li>
            <li>Pharmacological Testing</li>
          </ul>
        </section>

        <section className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Volunteer With Us</h2>
          <p>
            Participate in our clinical studies and help shape medical innovation while
            receiving comprehensive care and compensation.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl">Join a Trial</button>
        </section>
      </main>

      <footer className="bg-blue-50 p-4 mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Test Bay. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
