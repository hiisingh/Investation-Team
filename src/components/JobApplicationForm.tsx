import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    gender: "",
    photo: null as File | null,
    resume: null as File | null,
    age: "",
    maritalStatus: "",
    city: "",
    education: "",
    specialization: "",
    experience: "",
    currentCompany: "",
    department: "",
    joiningTimeline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.whatsapp || !formData.gender) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Application submitted successfully!");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-semibold mb-6">
            Personal Information <span className="text-destructive">*</span>
          </h2>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="fullName">Your Full Name (Required)</Label>
              <Input
                id="fullName"
                placeholder="Your Full Name (Required)"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="whatsapp">Whatsapp Number (Required)</Label>
              <Input
                id="whatsapp"
                placeholder="Whatsapp Number (Required)"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
              />
            </div>

            <div>
              <Label className="mb-3 block">
                Gender <span className="text-destructive">*</span>
              </Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="font-normal cursor-pointer">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="font-normal cursor-pointer">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="others" id="others" />
                  <Label htmlFor="others" className="font-normal cursor-pointer">Others</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="photo" className="mb-3 block">
                Photo <span className="text-destructive">*</span>
              </Label>
              <Input
                id="photo"
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, photo: e.target.files?.[0] || null })}
              />
            </div>
          </div>
        </div>

        {/* CV or Resume Section */}
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-semibold mb-6">
            CV or Resume <span className="text-destructive">*</span>
          </h2>
          
          <div>
            <Input
              id="resume"
              type="file"
              accept=".jpg,.jpeg,.png,.doc,.docx,.rtf,.xls,.xlsx,.pdf"
              onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
            />
            <p className="text-sm text-muted-foreground mt-2">
              We accept JPEG, JPG, PNG, DOC, DOCX, RTF, XLS, XLSX and PDF files
            </p>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-semibold mb-6">Additional Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="maritalStatus">Marital Status</Label>
              <Input
                id="maritalStatus"
                placeholder="Marital Status"
                value={formData.maritalStatus}
                onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="education">Education</Label>
              <Input
                id="education"
                placeholder="Education"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="specialization">Specialization</Label>
              <Input
                id="specialization"
                placeholder="Specialization"
                value={formData.specialization}
                onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="experience">Experience</Label>
              <Input
                id="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="currentCompany">Current Company</Label>
              <Input
                id="currentCompany"
                placeholder="Current Company"
                value={formData.currentCompany}
                onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                placeholder="Department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="joiningTimeline">Joining Timeline</Label>
              <Select
                value={formData.joiningTimeline}
                onValueChange={(value) => setFormData({ ...formData, joiningTimeline: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Please choose one option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate Joiner</SelectItem>
                  <SelectItem value="15days">15 Days</SelectItem>
                  <SelectItem value="30days">30 Days</SelectItem>
                  <SelectItem value="60days">60 Days</SelectItem>
                  <SelectItem value="90days">90 Days</SelectItem>
                  <SelectItem value="more90">More than 90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12"
          >
            Submit Application
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
