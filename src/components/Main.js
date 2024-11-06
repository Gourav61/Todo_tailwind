// Importing necessary dependencies
import React from 'react';
import MyButton from './MyButton';  // Importing the MyButton component

function Main() {
  return (
    // Main container with padding (py-12 = padding top/bottom, px-6 = padding left/right)
    <main className="py-12 px-6">
      {/* Container for content centering */}
      <div className="container mx-auto">
        {/* First section */}
        <section className="mb-12">  {/* mb-12 = margin bottom */}
          <h2 className="text-3xl font-bold mb-4">Welcome to my app</h2>
          <p className="text-gray-600 mb-6">This is the main content area.</p>
          {/* Centered button container */}
          <div className="flex justify-center">
            <MyButton />
          </div>
        </section>

        {/* Second section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Another section</h2>
          <p className="text-gray-600 mb-6">Here's some more content.</p>
          <div className="flex justify-center">
            <MyButton />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;