import { useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset } from "@/components/ui/sidebar";
import AccountPage from "./account-page";

export default function MyAccountDashboard() {
  const location = useLocation();

  let activeTab = "My-Account";

  if (location.pathname.includes("my-account")) activeTab = "My-Account";

  return (
    <SidebarInset>
      <SiteHeader tabs={activeTab} />

      <div className="p-6">
        <AccountPage />
      </div>
    </SidebarInset>
  );
}
