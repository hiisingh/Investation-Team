import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";

const jobAlertSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  jobCategory: z.string().min(1, { message: "Please select a job category" }),
  jobCity: z.string().min(1, { message: "Please select a job city" }),
  workExperience: z.string().optional(),
  jobType: z.string().optional(),
});

const jobCategories = [
  "Outbound Tele-caller",
  "Team Leader",
  "Sales",
  "Business Development",
  "Human Resource",
  "Multiple Openings",
  "Administration",
  "Hardware and Networking",
  "Procurement",
  "Supervisor",
  "Marketing",
  "Engineer",
  "No Category",
  "Manager",
  "Quality Analyst",
  "Developer",
  "Finance & Accounts",
  "Receptionist cum Admin",
  "Front Office Executive",
  "Business Analyst",
  "Operation",
  "Across All Departments",
  "Event Manager",
  "Digital Marketing",
  "Personal Secretary",
  "Warehouse / Inventory",
  "Customer Support / Sales Executive / Relationship Manager",
  "Assistant",
  "Research & Development (R&D)",
  "Machine Operator",
  "Quality Controller",
  "Quality Controller - Mechanical Engineering",
  "Others",
  "Multiple Process(Inbound / Outbound / Tele-Sales / Voice / Non-Voice / Customer Support – Call Centre / BPO)",
  "Designer",
  "Export",
  "Head",
  "Management",
];

const jobCities = [
  "Mumbai",
  "New Delhi",
  "Bangalore",
  "Chennai",
  "Noida",
  "Gurugram",
  "Hyderabad",
  "Pune",
  "Work from Home",
  "PAN India",
  "Kolkata",
  "Manesar",
  "Karur Region",
  "Madurai",
  "Kovilpatti",
  "Karur",
  "Patna",
  "Navi Mumbai",
  "Coimbatore",
  "Ludhiana",
  "Jaipur",
  "Nagpur",
  "Ranchi",
  "Indore",
  "Chandigarh",
  "Ahmedabad",
  "Kanpur",
  "Faridabad",
  "Haridwar",
  "Taloja, Maharashtra",
  "North East",
  "Greater Noida",
  "Turbhe, Navi Mumbai",
  "Panvel, Navi Mumbai",
  "Ulwe, Navi Mumbai",
  "Dombivli, Mumbai",
  "Mira Road, Mumbai",
];

interface JobAlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const JobAlertDialog = ({ open, onOpenChange }: JobAlertDialogProps) => {
  const [formData, setFormData] = useState({
    email: "",
    jobCategory: "",
    jobCity: "",
    workExperience: "",
    jobType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      jobAlertSchema.parse(formData);
      toast.success("Job alert created successfully!");
      onOpenChange(false);
      setFormData({
        email: "",
        jobCategory: "",
        jobCity: "",
        workExperience: "",
        jobType: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Job Alert</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="jobCategory">Job Category *</Label>
            <Select
              value={formData.jobCategory}
              onValueChange={(value) => setFormData({ ...formData, jobCategory: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select job category" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {jobCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="jobCity">Job City *</Label>
            <Select
              value={formData.jobCity}
              onValueChange={(value) => setFormData({ ...formData, jobCity: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select job city" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {jobCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="workExperience">Work Experience</Label>
            <Input
              id="workExperience"
              placeholder="e.g., 2-5 years"
              value={formData.workExperience}
              onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="jobType">Job Type</Label>
            <Select
              value={formData.jobType}
              onValueChange={(value) => setFormData({ ...formData, jobType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full Time</SelectItem>
                <SelectItem value="part-time">Part Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Create Alert
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobAlertDialog;
