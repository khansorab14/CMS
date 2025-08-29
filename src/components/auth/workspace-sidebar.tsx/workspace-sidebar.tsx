import * as React from "react";
import {
  IconCamera,
  IconFileAi,
  IconFileDescription,
  IconSettingsSearch,
  IconUserCircle,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/common/sidebar/nav-documents";

import { NavUser } from "@/components/common/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  ArrowLeft,
  Briefcase,
  FolderCheck,
  GalleryVerticalEnd,
  LayoutTemplate,
  Network,
  SquareKanban,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { SearchBar } from "@/components/ui/search-bar";

const data = {
  user: {
    name: "IIFL Finanace Ltd",
    personName: "Sohrab khan",
    avatar: GalleryVerticalEnd,
  },

  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],

  // general: [
  //   {
  //     name: "Oragnization Profile",
  //     url: "/workspace/organization Profile",
  //     icon: IconUserCircle,
  //   },
  // ],
  team: [
    {
      name: "User",
      url: "/workspace/user",
      icon: IconUsers,
    },
    {
      name: "Role",
      url: "/workspace/role",
      icon: IconSettingsSearch,
    },
    {
      name: "Department Groups",
      url: "/workspace/department-groups",
      icon: IconUsersGroup,
    },
  ],

  customization: [
    {
      name: "Product Types",
      url: "/workspace/product-types",
      icon: IconUserCircle,
    },
    {
      name: "Form & Fileds",
      url: "/workspace/form-fields",
      icon: IconUserCircle,
    },
    {
      name: "Masterlist",
      url: "/workspace/masterlist",
      icon: IconUserCircle,
    },
  ],
  modules: [
    {
      name: "Investigation",
      url: "/workspace/investigation",
      icon: IconUserCircle,
    },
    {
      name: "Notices",
      url: "/workspace/notices",
      icon: IconUserCircle,
    },
  ],
  automation: [
    {
      name: "Form Rules",
      url: "/form-rules",
      icon: FolderCheck,
    },
    {
      name: "Entity Hierarchy",
      url: "/entity-hierarchy",
      icon: GalleryVerticalEnd,
    },
    {
      name: "Fraud Workflow",
      url: "/fraud-workflow",
      icon: Network,
    },
    {
      name: "Case Workflow",
      url: "/case-workflow",
      icon: SquareKanban,
    },
  ],
  email: [
    {
      name: "Template",
      url: "/template",
      icon: LayoutTemplate,
    },
    {
      name: "Logs",
      url: "/logs",
      icon: Briefcase,
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

export function WorkspaceSidebar({
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
            <h2 className="text-lg font-semibold">Workspace Settings</h2>
          </div>
        </div>
      </SidebarHeader>
      <Separator className="my-4" />
      <div className="flex px-3 justify-center items-center">
        <SearchBar />
      </div>

      <SidebarContent>
        <NavDocuments title="General" items={data.general} />
        <NavDocuments title="Team" items={data.team} />
        <NavDocuments title="Customisation" items={data.customization} />
        <NavDocuments title="Modules" items={data.modules} />
        <NavDocuments title="Automation" items={data.automation} />
        <NavDocuments title="Email" items={data.email} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
