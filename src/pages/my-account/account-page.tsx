import * as React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, Briefcase, Smartphone, User } from "lucide-react";
import { Drawer } from "@/components/ui/drawer";
import { CustomDrawerContent } from "@/components/ui/custom-drawer-content";

export default function AccountPage() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <CardHeader className="flex items-center gap-4">
        <Avatar className="h-16 w-16 m-2">
          <AvatarFallback className="text-lg">PD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-xl">Pratham Dharawat</CardTitle>
          <p className="text-sm text-gray-500">pratham.dharawat@dbtpl.com</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setOpen(true);
          }}
        >
          Change Password
        </Button>

        <Drawer direction="right" open={open} onOpenChange={setOpen}>
          <CustomDrawerContent title={"Change Passwor"} />
        </Drawer>
      </CardHeader>

      <Separator />

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mt-6">
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Employee ID</p>
            <p className="font-medium">00002</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Designation</p>
            <p className="font-medium">Team Lead</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-medium">pratham.dharawat@dbtpl.com</p>
          </div>
        </div>

        {/* Mobile Number */}
        <div className="flex items-center gap-3">
          <Smartphone className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Mobile Number</p>
            <p className="font-medium">9999999999</p>
          </div>
        </div>

        {/* Member Since */}
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Member Since</p>
            <p className="font-medium">May 20, 2025</p>
          </div>
        </div>

        {/* Reporting Manager */}
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Reporting Manager</p>
            <p className="font-medium">Not Available</p>
          </div>
        </div>
      </CardContent>

      <Separator className="my-6" />

      <CardContent className="flex flex-col gap-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Roles</p>
          <Badge variant="secondary" className="text-sm">
            Super Admin
          </Badge>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Groups</p>
          <Badge variant="outline" className="text-sm">
            FCU
          </Badge>
        </div>
      </CardContent>
    </div>
  );
}
