import React from 'react';

const page = () => {
  return (

    <div className="bg-[#001F3F] min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="bg-blue-700 w-full py-6 text-white text-center shadow-lg">
        <h1 className="text-4xl font-bold">About IMR Company</h1>
      </div>

      {/* Content */}
      <div className="mt-10 bg-blue-900 max-w-4xl p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-semibold mb-4">Internet Movies Rental Company (IMR)</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          The Internet Movies Rental Company (IMR) is an online platform that manages a collection
          of movies for rental purposes. IMR has decided to modernize its operations by creating a
          centralized movie database portal. This portal will serve as the core tool for managing
          their movie inventory, streamlining operations, and improving customer experiences.
        </p>

        <h3 className="text-2xl font-medium mb-4">Scenario Goals</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>View the movie catalog.</li>
          <li>Add new movies to the database.</li>
          <li>Edit existing movie details (e.g., title, actors, release year).</li>
          <li>Delete movies that are no longer available.</li>
        </ul>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          The portal will have different levels of <span className="font-semibold">user authentication</span> to ensure secure access:
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          <li>
            <span className="font-medium text-yellow-400">Admin users:</span> Can manage all movies (add, edit, delete).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
