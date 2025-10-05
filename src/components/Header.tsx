import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoginDialog from "./LoginDialog";
import JobAlertDialog from "./JobAlertDialog";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [jobAlertOpen, setJobAlertOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <>
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-destructive">Investation</span>
              <span className="text-primary"> Team</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[160px] h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="hi">🇮🇳 हिन्दी</SelectItem>
                <SelectItem value="es">🇪🇸 Español</SelectItem>
                <SelectItem value="fr">🇫🇷 Français</SelectItem>
                <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                <SelectItem value="zh">🇨🇳 中文</SelectItem>
                <SelectItem value="ar">🇸🇦 العربية</SelectItem>
                <SelectItem value="pt">🇵🇹 Português</SelectItem>
                <SelectItem value="ru">🇷🇺 Русский</SelectItem>
                <SelectItem value="ja">🇯🇵 日本語</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setJobAlertOpen(true)}
            >
              Create job alert
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
          </div>
        </div>
      </header>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      <JobAlertDialog open={jobAlertOpen} onOpenChange={setJobAlertOpen} />
    </>
  );
};

export default Header;
