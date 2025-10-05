import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-80 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">MERN Developer</h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span>Job Openings</span>
          <span>›</span>
          <span>MERN Developer</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
