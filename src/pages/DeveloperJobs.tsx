import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const developerJobs = [
  {
    id: 1,
    title: "MERN Developer",
    location: "Work from Home",
    type: "Full Time",
    experience: "2-5 years",
    description: "We are looking for an experienced MERN stack developer to join our team. You will be responsible for developing and maintaining web applications using MongoDB, Express.js, React.js, and Node.js.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "REST API", "Git"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    location: "Bangalore",
    type: "Full Time",
    experience: "3-6 years",
    description: "Join our dynamic team as a Full Stack Developer. Work on cutting-edge projects involving both frontend and backend technologies.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS", "GraphQL"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    location: "Mumbai",
    type: "Full Time",
    experience: "1-3 years",
    description: "We need a talented Frontend Developer to create beautiful and responsive user interfaces. Experience with modern frameworks is essential.",
    skills: ["React.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    id: 4,
    title: "Backend Developer",
    location: "Pune",
    type: "Full Time",
    experience: "2-4 years",
    description: "Looking for a Backend Developer to build scalable server-side applications and APIs. Strong knowledge of databases and server technologies required.",
    skills: ["Node.js", "Python", "Django", "MongoDB", "MySQL", "Redis", "Microservices"],
  },
  {
    id: 5,
    title: "React Native Developer",
    location: "Work from Home",
    type: "Full Time",
    experience: "2-5 years",
    description: "Develop cross-platform mobile applications using React Native. Experience with mobile app deployment and optimization is a plus.",
    skills: ["React Native", "JavaScript", "Redux", "Mobile UI/UX", "iOS", "Android", "Firebase"],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    location: "Hyderabad",
    type: "Full Time",
    experience: "3-7 years",
    description: "Seeking a DevOps Engineer to manage our infrastructure, implement CI/CD pipelines, and ensure system reliability.",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "Linux", "Terraform"],
  },
  {
    id: 7,
    title: "Python Developer",
    location: "Delhi",
    type: "Full Time",
    experience: "2-5 years",
    description: "Join our team as a Python Developer to work on data-driven applications and backend services. Knowledge of frameworks like Django or Flask required.",
    skills: ["Python", "Django", "Flask", "PostgreSQL", "REST API", "Pandas", "NumPy"],
  },
];

const DeveloperJobs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Developer Positions</h1>
          <p className="text-muted-foreground">Explore {developerJobs.length} available developer job openings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developerJobs.map((job) => (
            <Card key={job.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <CardDescription className="flex flex-col gap-2 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {job.experience}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => navigate("/")}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperJobs;
