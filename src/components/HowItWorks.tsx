
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Discover Events",
      description: "Browse through exciting concerts, festivals, and live events happening near you."
    },
    {
      number: "2", 
      title: "Book Your Tickets",
      description: "Select your preferred seats and complete your booking with secure payment options."
    },
    {
      number: "3",
      title: "Enjoy the Experience",
      description: "Show your digital ticket and immerse yourself in unforgettable live entertainment."
    }
  ];

  return (
    <section id="how-it-works" className="bg-black text-white py-20 px-6 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Journey to Live Entertainment
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group bg-[#F59B1D]/10 rounded-3xl px-4 py-3 border border-white/30 "
            >
              <div className="mb-6">
                <div className="w-0 h-20 bg-[#F59B1D] rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="w-14 h-14 flex items-center p-6 justify-center bg-[#F59B1D] text-2xl font-bold rounded-full mx-auto">
  {step.number}
</span>

                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;