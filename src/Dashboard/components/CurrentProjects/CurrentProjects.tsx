import React, { useState, useEffect } from "react";

const CurrentProjects: React.FC = () => {
  const [projects, setProjects] = useState<string[]>([]);

  useEffect(() => {
    // Mock fetching user-specific projects. Replace this with an actual API call.
    const fetchUserProjects = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data
      const userProjects = ["Project A", "Project B", "Project C"];
      setProjects(userProjects);
    };

    fetchUserProjects();
  }, []);

  return (
    <div className="content ml-72 mt-6 p-6">
      <h2 className="text-2xl mb-6">Your Projects:</h2>
      <ul>
        {projects.map((project) => (
          <li key={project} className="mb-2">
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentProjects;
