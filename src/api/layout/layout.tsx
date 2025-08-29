import * as React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppSidebar } from "@/components/common/sidebar/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function LayoutWithSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSidebar, setActiveSidebar] = React.useState<
    "workspace" | "my-account" | "app"
  >("app");

  React.useEffect(() => {
    if (location.pathname.startsWith("/workspace")) {
      setActiveSidebar("workspace");
    } else if (location.pathname.startsWith("/my-account")) {
      setActiveSidebar("my-account");
    } else {
      setActiveSidebar("app");
    }
  }, [location.pathname]);

  const handleOpenWorkspace = () => {
    navigate("/workspace");
    setActiveSidebar("workspace");
  };

  const handleOpenMyAccount = () => {
    navigate("/my-account");
    setActiveSidebar("my-account");
  };

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <div className="flex h-screen w-full">
        <AppSidebar
          activeSidebar={activeSidebar}
          onOpenWorkspace={handleOpenWorkspace}
          onOpenMyAccount={handleOpenMyAccount}
        />

        <SidebarInset className="flex-1 overflow-y-auto">
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <Outlet />
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
