"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChartCard } from "../ui/common-custom/ChartCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DatePicker } from "../ui/common-custom/DatePicker";

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("Zone");
  const [selectedOption, setSelectedOption] = useState("Reporting");

  const [entity, setEntity] = useState("Entity 1");
  const [caseStatus, setCaseStatus] = useState("Active");
  const [fromDate, setFromDate] = React.useState<Date>();
  const [toDate, setToDate] = React.useState<Date>();

  const tabs = ["Zone", "State", "City", "Branch"];
  const dropdownOptions = [
    "Reporting",
    "Investigation",
    "Hearing",
    "Verdict",
    "Recovery",
    "Final Closure",
  ];

  const entityOptions = ["Entity 1", "Entity 2", "Entity 3"];
  const caseStatusOptions = ["Active", "Inactive", "Pending"];

  const chartDataset = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: `${activeTab} Data`,
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#3b82f6",
          "#f59e0b",
          "#10b981",
          "#ef4444",
          "#6366f1",
        ],
      },
    ],
  };

  const handleDownload = () => {
    console.log("Downloading file with filters:", {
      activeTab,
      selectedOption,
      fromDate,
      toDate,
      entity,
      caseStatus,
    });
  };

  return (
    <Card className="relative shadow-lg border rounded-2xl">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-50 bg-white p-4 flex justify-between items-center flex-wrap gap-4 border-b">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab} value={tab}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Dropdown */}
        <Select value={selectedOption} onValueChange={setSelectedOption}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            {dropdownOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Date Pickers */}
        <div className="flex gap-4">
          <DatePicker
            date={fromDate}
            setDate={setFromDate}
            placeholder="From date"
          />
          <DatePicker date={toDate} setDate={setToDate} placeholder="To date" />
        </div>

        {/* Download Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleDownload}
          className="border"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>

      {/* Chart Section */}
      <CardContent className="w-full flex justify-center items-center h-[50vh]">
        {activeTab === "Zone" && (
          <ChartCard title="Zone Data" type="bar" data={chartDataset} />
        )}
        {activeTab === "State" && (
          <ChartCard title="State Data" type="line" data={chartDataset} />
        )}
        {activeTab === "City" && (
          <ChartCard title="City Data" type="pie" data={chartDataset} />
        )}
        {activeTab === "Branch" && (
          <ChartCard title="Branch Data" type="bar" data={chartDataset} />
        )}
      </CardContent>

      {/* Table Section */}
      <CardContent>
        <h2 className="text-sm font-semibold mb-2">{activeTab} - Data Table</h2>
        <div className="rounded-2xl shadow-sm border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Select value={entity} onValueChange={setEntity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Entity" />
                    </SelectTrigger>
                    <SelectContent>
                      {entityOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableHead>
                <TableHead>
                  <Select value={caseStatus} onValueChange={setCaseStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Case Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {caseStatusOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{entity}</TableCell>
                <TableCell>{caseStatus}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
