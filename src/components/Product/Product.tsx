import React from "react";

const Product: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold leading-9 text-gray-900 dark:text-white mb-6 text-center">
        The Product
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>
          ARTEMIS, or AI Review Technology for Evidence-based Information
          Synthesis is an assistive tool proven to reduce time spent on
          systematic review generation by an average of 90%, and reducing the
          rapidly escalating cost of labour in tandem.
        </p>
        <p>
          ARTEMIS is your ultimate tool for a smarter, faster, and more
          efficient approach to systematic reviews. ARTEMIS steps into the shoes
          of the researcher, taking your prompt for a systematic review topic
          and seamlessly navigating the vast collection of databases of medical
          review articles. It then synthesizes relevant information, and crafts
          all of the content for the systematic review.
        </p>
        <p>
          This leaves the researcher solely with the task of editing, checking,
          and perfecting what’s been generated. The technology within ARTEMIS is
          poised to revolutionize the medical field. It’s not just about saving
          costs and freeing up industry personnel; it’s about modernizing
          medical decision making. It will soon be used as an incredibly quick
          way to gather information for medical decisions with just a simple
          prompt, saving countless lives in the process.
        </p>
        <p>
          ARTEMIS isn't just a tool; it's the future of evidence-based medicine.
          Join us in this paradigm shift, where efficiency meets excellence, and
          where research becomes a journey of discovery, not a laborious grind.
        </p>
        <p>
          Embrace technology, embrace ARTEMIS, and become a pioneer in the
          medical world.
        </p>
      </div>
    </div>
  );
};

export default Product;
