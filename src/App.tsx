import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/(auth)/login/login";
import Forgot from "./pages/(auth)/forgot/forgot";
import Dashboard from "./pages/dashboard/dashboard";
import LayoutWithSidebar from "./api/layout/layout";

import { AddUserAndRolePage } from "./components/auth/user/add-user-page";
import User from "./components/auth/user/user";
import Role from "./components/auth/role/role";
import { Organization } from "./components/auth/organization/organization";
import { DepartmentGroup } from "./components/auth/department/department-group";
import MyAccountDashboard from "./pages/my-account/my-account-dashboard";
import { ThemeProvider } from "./api/provider/them-providers";
import { ProductType } from "./components/auth/product/product-type";
import { FormAndFieds } from "./components/auth/form-fileds/form-fields";
import Investigation from "./components/auth/investigation/investigation";
import NoticeConfiguration from "./components/auth/notice/notice-configuration";
import Masterlist from "./components/auth/masterlist/master-list";
import AwaitingMyAction from "./components/auth/case-management/awaiting-my-action";
import { AddFmr } from "./pages/dashboard/pages/main-screen/add-fmr";
import WorkspaceDashboard from "./pages/workspace/workspace-dashboard";
import { Fields } from "./pages/masterlist/fields";
import { FormType } from "./pages/masterlist/form-type";
import { CaseStatus } from "./pages/masterlist/case-status";
import { InvestigationTypes } from "./pages/masterlist/investigation-status";
import { InvestigationStage } from "./pages/masterlist/investigation-stage";
import { NoticeTypes } from "./pages/masterlist/notice-type";
import { NoticeChannel } from "./pages/masterlist/notice-channel";
import { FraudNature } from "./pages/masterlist/fraud-nature";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {/* Standalone routes (no sidebar layout) */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot />} />

          {/* All routes wrapped with sidebar */}
          <Route element={<LayoutWithSidebar />}>
            {/* Dashboard parent */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="general/analytics" element={<AwaitingMyAction />} />
              <Route
                path="general/notifications"
                element={<AwaitingMyAction />}
              />
              <Route
                path="case/awaiting-my-action"
                element={<AwaitingMyAction />}
              />
              <Route
                path="case/awaiting-my-action/addfmr"
                element={<AddFmr />}
              />
              <Route
                path="case/my-active-cases"
                element={<AwaitingMyAction />}
              />
              <Route path="case/my-active-cases/addfmr" element={<AddFmr />} />
              <Route
                path="case/my-close-cases"
                element={<AwaitingMyAction />}
              />
              <Route path="case/my-close-cases/addfmr" element={<AddFmr />} />
              <Route
                path="case/all-close-cases"
                element={<AwaitingMyAction />}
              />
              <Route path="case/all-close-cases/addfmr" element={<AddFmr />} />
            </Route>

            {/* My Account */}
            <Route path="/my-account" element={<MyAccountDashboard />} />

            {/* Workspace parent */}
            <Route path="/workspace" element={<WorkspaceDashboard />}>
              {/* <Route index element={<Organization />} /> */}

              <Route
                path="general/organization-profile"
                element={<Organization />}
              />
              <Route path="team/user" element={<User />} />
              <Route
                path="team/user/addUser"
                element={<AddUserAndRolePage />}
              />
              <Route path="team/role" element={<Role />} />
              <Route
                path="team/role/addRole"
                element={<AddUserAndRolePage />}
              />
              <Route
                path="team/department-groups"
                element={<DepartmentGroup />}
              />
              <Route
                path="customization/product-types"
                element={<ProductType />}
              />
              <Route
                path="customization/form-fields"
                element={<FormAndFieds />}
              />
              <Route path="customization/masterlist" element={<Masterlist />} />
              {/* inside master list route */}
              <Route
                path="customization/masterlist/fields"
                element={<Fields />}
              />
              <Route
                path="customization/masterlist/form-types"
                element={<FormType />}
              />
              <Route
                path="customization/masterlist/case-status"
                element={<CaseStatus />}
              />
              <Route
                path="customization/masterlist/investigation-types"
                element={<InvestigationTypes />}
              />
              <Route
                path="customization/masterlist/investigation-stage"
                element={<InvestigationStage />}
              />
              <Route
                path="customization/masterlist/notice-types"
                element={<NoticeTypes />}
              />
              <Route
                path="customization/masterlist/notice-channel"
                element={<NoticeChannel />}
              />
              <Route
                path="customization/masterlist/fraud-nature"
                element={<FraudNature />}
              />

              <Route path="modules/investigation" element={<Investigation />} />
              <Route path="modules/notices" element={<NoticeConfiguration />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
