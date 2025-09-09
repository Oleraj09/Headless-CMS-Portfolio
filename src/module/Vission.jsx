import { useState } from "react";

const Vission = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAppointmentClick = () => {
    setLoading(true);
    setTimeout(() => {
      setShowForm(true);
      setLoading(false);
    }, 800);
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-content max-w-2xl mx-auto text-center">
        <div className="cta-content">
          <h1 className="text-[28px] leading-none"> Got a Vision? </h1>
          <h2 className="text-[46px] leading-none">
            Let's Bring It to Life!
          </h2>
          <p className="cta-text">
            I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea
          </p>
        </div>
        {!showForm && (
          <button
            onClick={handleAppointmentClick}
            disabled={loading}
            className={`cta-button cursor-change transition duration-300 ${loading && "opacity-60 cursor-not-allowed"}`}
          >
            {loading ? "Loading..." : "Make an Appointment"}
          </button>
        )}

        {showForm && (
          <>
            <h1 className="text-center text-[24px] uppercase underline">Make A Appointment</h1>
            <form className="mt-10 space-y-6 py-8 px-2 px-2 md:px-8 rounded-2xl text-left animate-fade-in">
              <div className="pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>

              <div className="pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>

              <div className="pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Budget</label>
                <input
                  type="text"
                  placeholder="$1000 - $5000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none"
                  required
                />
              </div>

              <div className="pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Your Idea</label>
                <textarea
                  rows={4}
                  placeholder="Describe your idea in a few sentences..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#333] text-white py-3 rounded-[25px] uppercase font-semibold hover:bg-[#222] transition duration-100 cursor-change"
              >
                Submit Request
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Vission;
