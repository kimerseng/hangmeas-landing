
const Hero = () => {
  return (
    <section className="bg-black text-white py-20 px-6 container mx-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
        {/* Left Content */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Your All-in-One Entertainment App
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Discover and book concerts, festivals, and live events—right from your phone.
          </p>
            <div className="flex flex-row justify-center md:justify-start items-center gap-5 w-full max-w-xs sm:max-w-md mx-auto md:mx-0">
              <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 sm:h-14"
                />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10 sm:h-14"
                />
              </a>
            </div>

        </div>

        {/* Right Content - App Mockup */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
            <img 
              src="/hang-mean-landing-page-app-2.png" 
              alt="App Mockup" 
              className="w-full h-auto object-contain" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
