import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  FileText,
  ClipboardList,
  CheckCircle2,
  FolderSearch,
  Layers,
  FileCheck,
} from "lucide-react";

export default function Masterlist() {
  const items = [
    {
      title: "Fields",
      description:
        "Manage the individual input fields used within various forms for data collection.",
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      title: "Form Type",
      description:
        "Define different types of forms used for specific purposes, such as fraud reporting or case intake.",
      icon: ClipboardList,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      title: "Case Status",
      description:
        "Define and manage the different stages or statuses of a case (e.g., Open, In Progress, Closed, On Hold).",
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Investigation Types",
      description:
        "Categorize the different types of fraud investigations conducted (e.g., Internal, External, Financial).",
      icon: FolderSearch,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Investigation Stages",
      description:
        "Define the distinct stages within the fraud investigation process (e.g., Initial Assessment, Evidence Gathering, Reporting).",
      icon: Layers,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Notice Types",
      description:
        "Manage the different types of official notices that can be issued during investigations or case management.",
      icon: FileCheck,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {items.map((item, idx) => (
          <Card key={idx} className="hover:shadow-md transition">
            <CardContent className="flex items-start gap-4 ">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${item.bg}`}
              >
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
