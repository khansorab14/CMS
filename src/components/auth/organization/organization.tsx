import { TitleWarning } from "@/components/common/tittle-warning";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ImageUploader } from "@/components/ui/image-uploader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { IconCircleDashedCheck } from "@tabler/icons-react";

export function Organization() {
  return (
    <>
      <div className="p-4 lg:p-6">
        <Card>
          <CardHeader className="px-0">
            <TitleWarning
              title={"Organization Profile"}
              warning={
                "The Masterlist page provides a centralized view to manage andorganize all key configuration items across modules."
              }
            />
          </CardHeader>
          <Separator />

          <CardContent className="mt-6 space-y-6">
            <ImageUploader
              title="Organisation Logo"
              description="This logo will appear on the tool bar for all users."
              preferredSize="240px x 240px @ 72 DPI"
              maxSizeMB={1}
              onUpload={(file) => console.log("Uploaded file:", file)}
              onDelete={() => console.log("Logo deleted")}
            />
            <form className="flex justify-between items-center gap-6">
              <div className="flex  w-full flex-col gap-1">
                <Label htmlFor="organization-name">
                  Organization Name <span className="text-red-500">*</span>
                </Label>
                <Input id="organization-name" placeholder="Organization Name" />
              </div>

              <div className="flex w-full  flex-col gap-1">
                <Label htmlFor="description">Slug</Label>
                <Input id="slug" placeholder="slug" />
              </div>
            </form>
          </CardContent>
          <div className="w-full mt-2.5 flex justify-end">
            <CardFooter>
              <Button>
                <IconCircleDashedCheck />
                Save Changes
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </>
  );
}
