import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/(auth)/login/login";
import Forgot from "./pages/(auth)/forgot/forgot";
import Dashboard from "./pages/dashboard/dashboard";
import LayoutWithSidebar from "./components/layout";

import WorkspaceDashboard from "./pages/workspace/pages/workspace/workspace-dashboard";

import { AddUserAndRolePage } from "./components/auth/user/add-user-page";
import User from "./components/auth/user/user";
import Role from "./components/auth/role/role";
import { Organization } from "./components/auth/organization/organization";
import { DepartmentGroup } from "./components/auth/department/department-group";
import MyAccountDashboard from "./pages/workspace/pages/my-account/my-account-dashboard";
import { ThemeProvider } from "./api/provider/them-providers";
import { ProductType } from "./components/auth/product/product-type";
import { FormAndFieds } from "./components/auth/form-fileds/form-fields";
import Investigation from "./components/auth/investigation/investigation";
import NoticeConfiguration from "./components/auth/notice/notice-configuration";
import Masterlist from "./components/auth/masterlist/master-list";
import AwaitingMyAction from "./components/auth/case-management/awaiting-my-action";
import { AddFmr } from "./pages/dashboard/pages/main-screen/add-fmr";

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
              <Route index element={<Organization />} />{" "}
              {/* default workspace landing */}
              <Route path="organization-profile" element={<Organization />} />
              <Route path="user" element={<User />} />
              <Route path="user/addUser" element={<AddUserAndRolePage />} />
              <Route path="role" element={<Role />} />
              <Route path="role/addRole" element={<AddUserAndRolePage />} />
              <Route path="department-groups" element={<DepartmentGroup />} />
              <Route
                path="customization/product-types"
                element={<ProductType />}
              />
              <Route
                path="customization/form-fields"
                element={<FormAndFieds />}
              />
              <Route path="customization/masterlist" element={<Masterlist />} />
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
