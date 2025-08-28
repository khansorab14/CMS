import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconUserCheck } from "@tabler/icons-react";
import { BookIcon, GiftIcon, HeartIcon } from "lucide-react";

const tabs = [
  {
    name: "Case Management",
    value: "case-management",

    content: (
      <>
        Discover{" "}
        <span className="text-foreground font-semibold">fresh ideas</span>,
        trending topics, and hidden gems curated just for you. Start exploring
        and let your curiosity lead the way!
      </>
    ),
  },
  {
    name: "Modules",
    value: "modules",

    content: (
      <>
        All your{" "}
        <span className="text-foreground font-semibold">favorites</span> are
        saved here. Revisit articles, collections, and moments you love, any
        time you want a little inspiration.
      </>
    ),
  },
  {
    name: "Teams",
    value: "teams",

    content: (
      <>
        <span className="text-foreground font-semibold">Surprise!</span>{" "}
        Here&apos;s something unexpected—a fun fact, a quirky tip, or a daily
        challenge. Come back for a new surprise every day!
      </>
    ),
  },
  {
    name: "Automation",
    value: "automation",

    content: (
      <>
        <span className="text-foreground font-semibold">Surprise!</span>{" "}
        Here&apos;s something unexpected—a fun fact, a quirky tip, or a daily
        challenge. Come back for a new surprise every day!
      </>
    ),
  },
  {
    name: "Maste",
    value: "master",

    content: (
      <>
        <span className="text-foreground font-semibold">Surprise!</span>{" "}
        Here&apos;s something unexpected—a fun fact, a quirky tip, or a daily
        challenge. Come back for a new surprise every day!
      </>
    ),
  },
  {
    name: "Email",
    value: "email",

    content: (
      <>
        <span className="text-foreground font-semibold">Surprise!</span>{" "}
        Here&apos;s something unexpected—a fun fact, a quirky tip, or a daily
        challenge. Come back for a new surprise every day!
      </>
    ),
  },
  {
    name: "Data",
    value: "data",

    content: (
      <>
        <span className="text-foreground font-semibold">Surprise!</span>{" "}
        Here&apos;s something unexpected—a fun fact, a quirky tip, or a daily
        challenge. Come back for a new surprise every day!
      </>
    ),
  },
];
export function RoleInfo() {
  return (
    <div className=" px-3">
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Label htmlFor="name">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input id="name" placeholder="Enter Name" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="description">Description</Label>
          <Input id="description" placeholder="Enter Role Description" />
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <Checkbox id="sendInvite" defaultChecked />
          <Label htmlFor="sendInvite" className="font-medium">
            Send Invite
          </Label>
        </div>

        <div className="w-full ">
          <Tabs defaultValue="permission" className="w-full ">
            <TabsList>
              <IconUserCheck />
              <TabsTrigger value="permission">Permission</TabsTrigger>
            </TabsList>
            <Separator />
            <TabsContent value="permission">
              <div className="w-full h-full p-6">
                <Tabs defaultValue="case-management" className="flex-row gap-4">
                  <TabsList className="h-full    flex-col gap-4">
                    {tabs.map(({ name, value }) => (
                      <TabsTrigger
                        defaultValue="case-management"
                        key={value}
                        value={value}
                        className="flex w-full h-full flex-col items-start gap-1"
                      >
                        {name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {tabs.map((tab) => (
                    <TabsContent
                      key={tab.value}
                      value={tab.value}
                      className="ml-6"
                    >
                      <Card className="w-full max-w-[1200px] shadow-lg">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex justify-between w-full ">
                              <CardTitle className="text-xl">
                                {tab.name}
                              </CardTitle>
                              <div className="flex items-center gap-3">
                                <Label htmlFor="case-management">
                                  Select All
                                </Label>
                                <Checkbox id="case-management" />
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <Separator />

                        <CardContent className="mt-6 space-y-6">
                          {/* Example section */}
                          <div className="space-y-4">
                            {/* Section title with checkbox on right */}
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold">
                                User Management
                              </h3>
                              <div className="flex items-center gap-2">
                                <Checkbox id="user-management-selectall" />
                              </div>
                            </div>

                            <Separator />

                            {/* Sub-items list */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Checkbox id="view-users" />
                                <Label htmlFor="view-users" className="text-sm">
                                  View Users
                                </Label>
                              </div>
                              <div className="flex items-center gap-2">
                                <Select>
                                  <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="All Selected" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Fruits</SelectLabel>
                                      <SelectItem value="apple">
                                        Apple
                                      </SelectItem>
                                      <SelectItem value="banana">
                                        Banana
                                      </SelectItem>
                                      <SelectItem value="blueberry">
                                        Blueberry
                                      </SelectItem>
                                      <SelectItem value="grapes">
                                        Grapes
                                      </SelectItem>
                                      <SelectItem value="pineapple">
                                        Pineapple
                                      </SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex items-center gap-2">
                                <Checkbox id="add-users" />
                                <Label htmlFor="add-users" className="text-sm">
                                  Add Users
                                </Label>
                              </div>
                              <div className="flex items-center gap-2">
                                <Checkbox id="edit-users" />
                                <Label htmlFor="edit-users" className="text-sm">
                                  Edit Users
                                </Label>
                              </div>
                              <div className="flex items-center gap-2">
                                <Checkbox id="delete-users" />
                                <Label
                                  htmlFor="delete-users"
                                  className="text-sm"
                                >
                                  Delete Users
                                </Label>
                              </div>
                            </div>
                          </div>

                          {/* Another section */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold">
                                Case Management
                              </h3>
                              <div className="flex items-center gap-2">
                                <Checkbox id="case-management-selectall" />
                              </div>
                            </div>

                            <Separator />

                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Checkbox id="view-cases" />
                                <Label htmlFor="view-cases" className="text-sm">
                                  View Cases
                                </Label>
                              </div>
                              <div className="flex items-center gap-2">
                                <Checkbox id="assign-cases" />
                                <Label
                                  htmlFor="assign-cases"
                                  className="text-sm"
                                >
                                  Assign Cases
                                </Label>
                              </div>

                              <div className="flex items-center gap-2">
                                <Checkbox id="close-cases" />
                                <Label
                                  htmlFor="close-cases"
                                  className="text-sm"
                                >
                                  Close Cases
                                </Label>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </form>
    </div>
  );
}
