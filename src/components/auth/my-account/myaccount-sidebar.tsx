import * as React from "react";

import { NavDocuments } from "@/components/common/sidebar/nav-documents";

import { NavUser } from "@/components/common/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { ArrowLeft, GalleryVerticalEnd } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { SearchBar } from "@/components/ui/search-bar";
import { IconUserCircle } from "@tabler/icons-react";

const data = {
  user: {
    name: "IIFL Finanace Ltd",
    personName: "Sohrab khan",
    avatar: GalleryVerticalEnd,
  },

  item: [
    {
      name: "My-Account",
      url: "/my-account",
      icon: IconUserCircle,
    },
  ],

  teams: [
    {
      name: "IIFL Finanace Ltd",
      logo: GalleryVerticalEnd,
      plan: "sohrab",
    },
    {
      name: "IIFL Finanace Ltd",
      logo: GalleryVerticalEnd,
      plan: "sohrab",
    },
    {
      name: "IIFL Finanace Ltd",
      logo: GalleryVerticalEnd,
      plan: "sohrab",
    },
  ],
};

export function MyAccountSidebar({
  onBack,

  ...props
}: React.ComponentProps<typeof Sidebar> & {
  onBack?: () => void;
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </button>
          <div className="text-center flex-1">
            <h2 className="text-lg font-semibold">My Account</h2>
          </div>
        </div>
      </SidebarHeader>
      <Separator className="my-4" />
      <div className="flex px-3 justify-center items-center">
        <SearchBar />
      </div>

      <SidebarContent>
        <NavDocuments title="Account" items={data.item} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
