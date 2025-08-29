import * as React from "react";
import {
  IconBell,
  IconCamera,
  IconChartHistogram,
  IconClock,
  IconDownload,
  IconFileAi,
  IconFileDescription,
  IconInnerShadowTop,
  IconInputX,
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  ArrowLeft,
  BookOpenText,
  Briefcase,
  FileSearch,
  FolderCheck,
  GalleryVerticalEnd,
  LayoutTemplate,
  Network,
  NotebookText,
  PackageSearch,
  SquareKanban,
  UserSearch,
} from "lucide-react";
import { Separator } from "../../ui/separator";
import { SearchBar } from "../../ui/search-bar";
import { useNavigate } from "react-router-dom";

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

  general: [
    {
      name: "Organization Profile",
      url: "/workspace/general/organization-profile",
      icon: IconChartHistogram,
    },
  ],
  generalMain: [
    {
      name: "Analytics",
      url: "/dashboard/general/analytics",
      icon: IconChartHistogram,
    },
    {
      name: "Notifications",
      url: "/dashboard/general/notifications",
      icon: IconBell,
    },
  ],
  caseManagement: [
    {
      name: "Awaiting My Action",
      url: "/dashboard/case/awaiting-my-action",
      icon: IconClock,
    },
    {
      name: "My Active Cases",
      url: "/dashboard/case/my-active-cases",
      icon: IconUserCircle,
    },
    {
      name: "My Close Cases",
      url: "/dashboard/case/my-close-cases",
      icon: IconUserCircle,
    },
    {
      name: "All Close Cases",
      url: "/dashboard/case/all-close-cases",
      icon: IconInputX,
    },
  ],
  dashboardData: [
    {
      name: "Report Builed",
      url: "/report-builder",
      icon: IconDownload,
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

  team: [
    {
      name: "User",
      url: "/workspace/team/user",
      icon: IconUsers,
    },
    {
      name: "Role",
      url: "/workspace/team/role",
      icon: IconSettingsSearch,
    },
    {
      name: "Department Groups",
      url: "/workspace/team/department-groups",
      icon: IconUsersGroup,
    },
  ],

  customization: [
    {
      name: "Product Types",
      url: "/workspace/customization/product-types",
      icon: PackageSearch,
    },
    {
      name: "Form & Fileds",
      url: "/workspace/customization/form-fields",
      icon: BookOpenText,
    },
    {
      name: "Masterlist",
      url: "/workspace/customization/masterlist",
      icon: NotebookText,
    },
  ],
  modules: [
    {
      name: "Investigation",
      url: "/workspace/modules/investigation",
      icon: FileSearch,
    },
    {
      name: "Notices",
      url: "/workspace/modules/notices",
      icon: UserSearch,
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

  item: [
    {
      name: "My-Account",
      url: "/my-account",
      icon: IconUserCircle,
    },
  ],
};

export function AppSidebar({
  onOpenWorkspace,
  onOpenMyAccount,
  activeSidebar,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  onOpenWorkspace: () => void;
  onOpenMyAccount: () => void;
  activeSidebar: string;
}) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/dashboard");
  };
  return (
    <Sidebar id="dashboard-sidebar" collapsible="offcanvas" {...props}>
      {activeSidebar === "app" && (
        <>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="!p-1.5">
                  <a href="#">
                    <IconInnerShadowTop className="!size-5" />
                    <span className="text-base font-semibold">Acme Inc.</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <NavDocuments title="General" items={data.generalMain} />
            <NavDocuments title="Case Management" items={data.caseManagement} />
            <NavDocuments title="Data" items={data.dashboardData} />
          </SidebarContent>
        </>
      )}

      {activeSidebar === "workspace" && (
        <>
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
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
        </>
      )}

      {activeSidebar === "my-account" && (
        <>
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
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
        </>
      )}
      {activeSidebar === "app" && (
        <SidebarFooter>
          <NavUser
            onOpenMyAccount={onOpenMyAccount}
            onOpenWorkspace={onOpenWorkspace}
            user={data.user}
          />
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
