import { useState } from "react";

const Vission = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const handleAppointmentClick = () => {
    setLoading(true);
    setTimeout(() => {
      setShowForm(true);
      setLoading(false);
    }, 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.budget) newErrors.budget = "Budget is required";
    if (!formData.idea) newErrors.idea = "Idea is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitGravityForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://post.olerajhossin.top/wp-json/gf/v2/forms/1/submissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input_1: formData.name,
            input_3: formData.email,
            input_4: formData.budget,
            input_5: formData.idea,
          }),
        }
      );
      const result = await response.json();
      console.log(result);

      if (result.is_valid === false) {
        const gfErrors = {};
        for (const key in result.validation_messages) {
          if (key === "1") gfErrors.name = result.validation_messages[key];
          if (key === "3") gfErrors.email = result.validation_messages[key];
          if (key === "4") gfErrors.budget = result.validation_messages[key];
          if (key === "5") gfErrors.idea = result.validation_messages[key];
        }
        setErrors(gfErrors);
      } else {
        setFormData({ name: "", email: "", budget: "", idea: "" });
        setErrors({});
        setShowForm(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-content max-w-2xl mx-auto text-center">
        <div className="cta-content">
          <h1 className="text-[28px] leading-none">Got a Vision?</h1>
          <h2 className="text-[46px] leading-none">Let's Bring It to Life!</h2>
          <h1 className="text-[28px] leading-none font-bold" style={{ marginTop: "10px" }}>Contact Us</h1>
          <p className="cta-text">
            I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea
          </p>
        </div>

        {!showForm && (
          <button
            onClick={handleAppointmentClick}
            disabled={loading}
            className={`cta-button cursor-change transition duration-300 ${loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Loading..." : "Make an Appointment"}
          </button>
        )}

        {showForm && (
          <>
            <h1 className="text-center text-[24px] uppercase underline">Make An Appointment</h1>
            <form
              onSubmit={submitGravityForm}
              className="mt-10 space-y-6 py-8 px-2 md:px-8 rounded-2xl text-left animate-fade-in"
            >
              <div className="pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Budget</label>
                <input
                  type="text"
                  name="budget"
                  placeholder="$1000 - $5000"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                {errors.budget && <p className="text-red-600 text-sm mt-1">{errors.budget}</p>}
              </div>

              <div className="pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Your Idea</label>
                <textarea
                  name="idea"
                  rows={4}
                  placeholder="Describe your idea in a few sentences..."
                  value={formData.idea}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                ></textarea>
                {errors.idea && <p className="text-red-600 text-sm mt-1">{errors.idea}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#333] text-white py-3 rounded-[25px] uppercase font-semibold hover:bg-[#222] transition duration-100 cursor-change"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>

            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Vission;
