import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggele";
import { Alert, AlertDescription } from "./ui/alert";

export function SiteHeader({
  tabs,
}: {
  tabs: { label: string; icon?: React.ReactNode };
}) {
  console.log(tabs, "TABS");
  return (
    <>
      <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
        <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          {tabs.icon && <span className="text-gray-600">{tabs.icon}</span>}
          <h1 className="text-lg font-semibold">{tabs.label}</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="ghost"
              asChild
              size="sm"
              className="hidden sm:flex"
            >
              <ModeToggle />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <h1 className="text-2xl font-bold">{tabs.label}</h1>

              {/* Alert Info */}
              <Alert className="bg-blue-50 mt-3.5 border-blue-200">
                <AlertDescription>
                  The Masterlist page provides a centralized view to manage and
                  organize all key configuration items across modules.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
