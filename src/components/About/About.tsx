import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 relative overflow-hidden bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
          We're making it easy to increase research productivity
        </h1>
        <p className="text-xl text-gray-800">
          Artemis is building the world's best platform for assistive research
        </p>
        <div className="mt-6 space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            At <span className="font-semibold">ARTEMIS</span>, innovation is at
            the heart of our journey, and our story begins with a spark of
            inspiration that has since ignited a revolution in healthcare
            research.
          </p>
          <p>
            Who are we, you might wonder? We're{" "}
            <span className="font-semibold">Jivan Kesan</span>,{" "}
            <span className="font-semibold">Kishan Muhundhan</span>, and{" "}
            <span className="font-semibold">Sheldon Lewis</span>, three
            engineering students enrolled at the University of Waterloo. Our
            founders were brought together by a shared passion for harnessing
            the power of artificial intelligence to drive positive change.
          </p>
          <p>
            The initial idea for ARTEMIS took root when we triumphed as 1st
            place winners at the prestigious Waterloo Generative AI Hackathon.
            Competing against the brightest minds in the Waterloo undergraduate
            and graduate student community, we not only emerged victorious but
            also recognized the transformative potential of our concept.
          </p>
          <p>
            This early success fueled our determination to turn our vision into
            reality. With a clear mission in mind, we sought to take ARTEMIS to
            the next level. We embarked on a journey of growth and development,
            securing vital support from visionary venture capitalists who
            recognized the game-changing potential of our venture.
          </p>
          <p>
            The partnership with VCs allowed us to continue our pursuit of
            excellence through Waterloo's Velocity Startup Program, an esteemed
            ecosystem that fosters innovation and nurtures emerging startups.
            This invaluable support has propelled ARTEMIS to new heights,
            enabling us to refine our technology and bring it to the forefront
            of healthcare research.
          </p>
          <p>
            Today, <span className="font-semibold">ARTEMIS</span> stands as a
            testament to the power of determination, innovation, and
            collaboration. We remain committed to our founding principles of
            speeding up healthcare research, improving accuracy, and
            democratizing access to knowledge. Our journey is just beginning,
            and we are excited to shape the future of healthcare research, one
            systematic review at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
