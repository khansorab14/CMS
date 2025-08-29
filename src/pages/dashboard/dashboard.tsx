import { Outlet, useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/common/header/site-header";
import { SidebarInset } from "@/components/ui/sidebar";
import { ListChecks } from "lucide-react"; // Example icon

export default function Dashboard() {
  const location = useLocation();

  let activeTab: { label: string; icon?: React.ReactNode } = {
    label: "Workspace",
  };

  if (location.pathname.includes("organization-profile"))
    activeTab = { label: "Organization" };
  if (location.pathname.includes("user")) activeTab = { label: "User" };
  if (location.pathname.includes("role")) activeTab = { label: "Role" };
  if (location.pathname.includes("department-groups"))
    activeTab = { label: "Department Groups" };
  if (location.pathname.includes("product-types"))
    activeTab = { label: "Product Types" };
  if (location.pathname.includes("form-fields"))
    activeTab = { label: "Form & Fields" };
  if (location.pathname.includes("investigation"))
    activeTab = { label: "Investigation" };
  if (location.pathname.includes("notices")) activeTab = { label: "Notices" };
  if (location.pathname.includes("masterlist"))
    activeTab = {
      label: "Master List",
      icon: <ListChecks className="w-5 h-5" />,
    };
  if (location.pathname.includes("awaiting-my-action"))
    activeTab = {
      label: "Awaiting My Action",
      icon: <ListChecks className="w-5 h-5" />,
    };
  if (location.pathname.includes("my-active-cases"))
    activeTab = {
      label: "My Active Cases",
      icon: <ListChecks className="w-5 h-5" />,
    };
  if (location.pathname.includes("my-close-cases"))
    activeTab = {
      label: "My Close Cases",
      icon: <ListChecks className="w-5 h-5" />,
    };
  if (location.pathname.includes("all-close-cases"))
    activeTab = {
      label: "All Close Cases",
      icon: <ListChecks className="w-5 h-5" />,
    };

  return (
    <SidebarInset>
      <SiteHeader tabs={activeTab} />

      <Outlet />
    </SidebarInset>
  );
}
