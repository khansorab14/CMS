import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TitleWarning } from "@/components/common/tittle-warning";

export function AddFmr() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex justify-center p-10">
      <Card className="w-full max-w-[1200px] shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl">Add Cases</CardTitle>
            </div>
            <div className="flex gap-3">
              <Button type="submit" onClick={() => navigate(-1)}>
                Continue
              </Button>
            </div>
          </div>
        </CardHeader>

        <Separator />
        <div className="px-4 lg:px-6">
          <TitleWarning
            title={"FMR"}
            warning={
              "The Masterlist page provides a centralized view to manage andorganize all key configuration items across modules."
            }
          />
        </div>

        <CardContent className="mt-6">
          <form className="flex flex-col gap-6 w-full">
            {/* Zone */}
            <div className="flex flex-col w-full">
              <Label htmlFor="zone">
                Zone <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger id="zone" className="w-full">
                  <SelectValue placeholder="Select Zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north">North</SelectItem>
                  <SelectItem value="south">South</SelectItem>
                  <SelectItem value="east">East</SelectItem>
                  <SelectItem value="west">West</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* State */}
            <div className="flex flex-col w-full">
              <Label htmlFor="state">
                State <span className="text-red-500">*</span>
              </Label>
              <Select disabled>
                <SelectTrigger id="state" className="w-full">
                  <SelectValue placeholder="First select Zone" />
                </SelectTrigger>
              </Select>
            </div>

            {/* City */}
            <div className="flex flex-col w-full">
              <Label htmlFor="city">
                City <span className="text-red-500">*</span>
              </Label>
              <Select disabled>
                <SelectTrigger id="city" className="w-full">
                  <SelectValue placeholder="First select State" />
                </SelectTrigger>
              </Select>
            </div>

            {/* Branch */}
            <div className="flex flex-col w-full">
              <Label htmlFor="branch">
                Branch <span className="text-red-500">*</span>
              </Label>
              <Select disabled>
                <SelectTrigger id="branch" className="w-full">
                  <SelectValue placeholder="First select City" />
                </SelectTrigger>
              </Select>
            </div>

            {/* Product Type */}
            <div className="flex flex-col w-full">
              <Label htmlFor="productType">
                Product Type <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger id="productType" className="w-full">
                  <SelectValue placeholder="Select Product Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="loan">Loan</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                  <SelectItem value="deposit">Deposit</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
