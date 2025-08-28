import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function UserInfo() {
  return (
    <form className="grid gap-6 sm:grid-cols-2">
      {/* Employee ID */}
      <div className="grid gap-1">
        <Label htmlFor="employeeId">Employee ID</Label>
        <Input id="employeeId" placeholder="Enter Employee ID" />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="firstName">
          First Name <span className="text-red-500">*</span>
        </Label>
        <Input id="firstName" placeholder="Enter First Name" />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="middleName">Middle Name</Label>
        <Input id="middleName" placeholder="Enter Middle Name" />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="lastName">
          Last Name <span className="text-red-500">*</span>
        </Label>
        <Input id="lastName" placeholder="Enter Last Name" />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="areaCode">
          Mobile Area Code <span className="text-red-500">*</span>
        </Label>
        <Select>
          <SelectTrigger id="areaCode">
            <SelectValue placeholder="Select Mobile Area Code" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="+91">+91</SelectItem>
            <SelectItem value="+1">+1</SelectItem>
            <SelectItem value="+44">+44</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-1">
        <Label htmlFor="mobileNumber">
          Mobile Number <span className="text-red-500">*</span>
        </Label>
        <Input id="mobileNumber" placeholder="Enter Mobile Number" />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input id="email" placeholder="Enter Email ID" />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="reportingManager">Reporting Manager</Label>
        <Select>
          <SelectTrigger id="reportingManager">
            <SelectValue placeholder="Select Reporting Manager" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="manager1">Manager 1</SelectItem>
            <SelectItem value="manager2">Manager 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-1">
        <Label htmlFor="departmentGroup">
          Department Group <span className="text-red-500">*</span>
        </Label>
        <Select>
          <SelectTrigger id="departmentGroup">
            <SelectValue placeholder="Select Department Group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dept1">Department 1</SelectItem>
            <SelectItem value="dept2">Department 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-1">
        <Label htmlFor="timezone">
          Select Timezone <span className="text-red-500">*</span>
        </Label>
        <Select>
          <SelectTrigger id="timezone">
            <SelectValue placeholder="Select Timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="IST">IST</SelectItem>
            <SelectItem value="EST">EST</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-1">
        <Label htmlFor="designation">
          Designation <span className="text-red-500">*</span>
        </Label>
        <Input id="designation" placeholder="Enter Designation" />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="roles">
          Roles <span className="text-red-500">*</span>
        </Label>
        <Select>
          <SelectTrigger id="roles">
            <SelectValue placeholder="Select Roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="sm:col-span-2 flex items-center space-x-2 mt-2">
        <Checkbox id="sendInvite" defaultChecked />
        <Label htmlFor="sendInvite" className="font-medium">
          Send Invite
        </Label>
      </div>
    </form>
  );
}
