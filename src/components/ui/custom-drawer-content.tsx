import {
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "./input";
import { Label } from "./label";

import { ComboboxDemo } from "./ComboboxDemo";
import { Button } from "./button";
import { useLocation, useNavigate } from "react-router-dom";
import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react";

export function CustomDrawerContent({ title }: any) {
  const navigate = useNavigate();
  const location = useLocation();

  // detect context
  const isMyAccountPage = location.pathname.includes("my-account");
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>{title}</DrawerTitle>
      </DrawerHeader>
      <div className="p-4">
        {isMyAccountPage ? (
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="Current Password" placeholder="Enter First Name" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="current-password">New Password</Label>
              <Input id="New Password" placeholder="Enter your new password" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="current-password">Confirm New Password</Label>
              <Input
                id="Confirm new Password"
                placeholder="Enter New password"
              />
            </div>
          </form>
        ) : (
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input id="firstName" placeholder="Enter First Name" />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="description">
                Description <span className="text-red-500">*</span>
              </Label>
              <Input id="description" placeholder="Enter Description..." />
            </div>

            <div className="flex w-full  flex-col gap-1">
              <Label htmlFor="departmentGroup">
                Select Department Email <span className="text-red-500">*</span>
              </Label>
              <ComboboxDemo />
            </div>
          </form>
        )}
      </div>
      <DrawerFooter>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <IconCircleDashedX className="text-red-500"  />
            Cancel
          </Button>
          <Button type="submit">
            <IconCircleDashedCheck />
            Submit
          </Button>
        </div>
      </DrawerFooter>
    </DrawerContent>
  );
}
