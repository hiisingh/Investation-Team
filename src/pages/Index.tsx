import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobApplicationForm from "@/components/JobApplicationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <JobApplicationForm />
    </div>
  );
};

export default Index;
