import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  ClipboardList,
  CheckCircle2,
  FolderSearch,
  Layers,
  FileCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Masterlist() {
  const navigate = useNavigate();

  const items = [
    {
      title: "Fields",
      description:
        "Manage the individual input fields used within various forms for data collection.",
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-100",
      path: "fields",
    },
    {
      title: "Form Type",
      description:
        "Define different types of forms used for specific purposes, such as fraud reporting or case intake.",
      icon: ClipboardList,
      color: "text-orange-500",
      bg: "bg-orange-100",
      path: "form-types",
    },
    {
      title: "Case Status",
      description:
        "Define and manage the different stages or statuses of a case (e.g., Open, In Progress, Closed, On Hold).",
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-100",
      path: "case-status",
    },
    {
      title: "Investigation Types",
      description:
        "Categorize the different types of fraud investigations conducted (e.g., Internal, External, Financial).",
      icon: FolderSearch,
      color: "text-blue-600",
      bg: "bg-blue-100",
      path: "investigation-types",
    },
    {
      title: "Investigation Stages",
      description:
        "Define the distinct stages within the fraud investigation process (e.g., Initial Assessment, Evidence Gathering, Reporting).",
      icon: Layers,
      color: "text-blue-600",
      bg: "bg-blue-100",
      path: "investigation-stage",
    },
    {
      title: "Notice Types",
      description:
        "Manage the different types of official notices that can be issued during investigations or case management.",
      icon: FileCheck,
      color: "text-blue-600",
      bg: "bg-blue-100",
      path: "notice-types",
    },
    {
      title: "Notice Channel",
      description:
        "Manage the different types of official notices that can be issued during investigations or case management.",
      icon: FileCheck,
      color: "text-blue-600",
      bg: "bg-orange-100",
      path: "notice-channel",
    },
    {
      title: "Fraud Nature",
      description:
        "Define the distinct stages within the fraud investigation process (e.g., Initial Assessment, Evidence Gathering, Reporting).",
      icon: Layers,
      color: "text-blue-600",
      bg: "bg-blue-100",
      path: "fraud-nature",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-4">
        {items.map((item, idx) => (
          <Card
            key={idx}
            className="hover:shadow-md transition cursor-pointer"
            onClick={() => navigate(item.path)}
          >
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
