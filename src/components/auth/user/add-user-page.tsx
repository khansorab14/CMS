import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { UserInfo } from "./user-info";
import { RoleInfo } from "../role/role-info";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, Terminal } from "lucide-react";
import { TitleWarning } from "@/components/common/tittle-warning";

export function AddUserAndRolePage() {
  const navigate = useNavigate();
  const location = useLocation();

  // detect context
  const isUserPage = location.pathname.includes("user");

  return (
    <div className="w-full h-full flex justify-center p-10">
      <Card className="w-full max-w-[1200px] shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <TitleWarning
              title={"Role"}
              warning={
                "Mandatory fields are marked; complete the rest as fully as you can."
              }
            />

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="mt-6">
          {isUserPage ? <UserInfo /> : <RoleInfo />}
        </CardContent>
      </Card>
    </div>
  );
}
