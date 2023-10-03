import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  // other fields...
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    // other fields...
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users/api/register/",
        formData
      );
      console.log(response.data.message); // Handle success

      // Reset the form data
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        // other fields...
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error); // Handle error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {/* First Name Input */}
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-lg"
                placeholder="John"
                required
              />
            </div>

            {/* Last Name Input */}
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-lg"
                placeholder="Doe"
                required
              />
            </div>

            {/* Company Input */}
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-lg"
                placeholder="Your Company"
                required
              />
            </div>

            {/* Other Input Fields... */}
            {/* Add additional input fields similar to the above, adjusting for any specific needs */}

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full p-2.5 bg-blue-600 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
