import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function InvestigationForm() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <div className="w-full space-y-6">
              {/* Title */}
              <h1 className="text-3xl font-bold">Investigation</h1>

              {/* Info Box */}
              <Alert className="bg-blue-50 border border-blue-200 text-blue-900">
                <Info className="h-5 w-5 text-blue-500" />
                <AlertDescription className="text-sm text-blue-700">
                  Set Investigation tab visibility and customize form
                  configurations.
                </AlertDescription>
              </Alert>

              {/* Enable toggle */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="enable"
                  checked={enabled}
                  onCheckedChange={(checked) => setEnabled(!!checked)}
                />
                <Label htmlFor="enable" className="font-medium">
                  Enable Investigation Module
                </Label>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* Form Type */}
                <div className="flex flex-col space-y-1 w-full">
                  <Label htmlFor="formType" className="font-medium w-full">
                    Form Type <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger id="formType" className="w-full">
                      <SelectValue placeholder="Select form type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="incident">Incident</SelectItem>
                      <SelectItem value="audit">Audit</SelectItem>
                      <SelectItem value="inspection">Inspection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Form Name */}
                <div className="flex flex-col space-y-1 w-full">
                  <Label htmlFor="formName" className="font-medium w-full">
                    Form Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="formName"
                    placeholder="Select form name"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Department Group */}
              <div className="flex flex-col space-y-1">
                <Label htmlFor="department" className="font-medium">
                  Department Group
                </Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select department group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="ops">Operations</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Save Button */}
              <Button className="w-24" variant="default">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
