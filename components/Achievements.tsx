'use client';

export default function Achievements() {
  return (
    <section className="mt-10 text-left w-full max-w-6xl">
      <h2 className="text-3xl font-semibold text-gray-800">Achievements</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700 p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
        <li>Sprint Hero Awards at EPAM</li>
        <li>'Doing the Right Thing the Right Way' Award at Cognizant</li>
        <li>Speaker in TED-like web talk at Cognizant</li>
        <li>Student Coordinator at NIST Counselling Service</li>
      </ul>
    </section>
  );
}