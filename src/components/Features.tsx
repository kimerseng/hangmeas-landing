
const Features = () => {
  const features = [
    {
      title: "Easy Event Discovery",
      description: "Browse concerts and shows happening near you.",
      image: "/easy-event-discovery.png"
    },
    {
      title: "Venue & Event Info",
      description: "Get event details, timing, and locations instantly.",
      image: "/venue-event-info.png"
    },
    {
      title: "Secure Ticket Booking",
      description: "Fast checkout with reliable confirmation.",
      image: "/secure-ticket-booking.png"
    },
    {
      title: "Fast & Flexible Payments",
      description: "Pay via ABA KHQR and Credit/Debit cards",
      image: "/fast-flexible-payments.png"
    },
    {
      title: "All Your Tickets in One Place",
      description: "Access upcoming, past, or cancelled bookings with ease.",
      image: "/all-your-tickets.png"
    },
    {
      title: "Instant Ticket Access",
      description: "Your ticket is ready as soon as payment completes.",
      image: "/instant-ticket-access.png"
    }
  ];

  return (
    <section id="features" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-4">

            Experience Entertainment 
            Like Never Before
          </h2>
           <p className="mb-10 text-gray-300 text-lg">
            Explore powerful features that make HangMeas your go-to event ticketing app</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
           <div 
            key={index}
            className="rounded-3xl overflow-hidden  transition duration-300"
          >
            <img 
              src={feature.image} 
              alt={feature.title}
              className="w-full h-100 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;