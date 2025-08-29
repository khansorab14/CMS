import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

type BreadcrumbItemType = {
  label: string;
  path?: string;
  menuItems?: { label: string; path: string }[];
  isCurrent?: boolean;
};

interface BreadcrumbNavProps {
  items: BreadcrumbItemType[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {/* Show separator except before first item */}
            {index > 0 && <BreadcrumbSeparator />}

            {item.menuItems ? (
              // Dropdown menu if multiple options
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <BreadcrumbLink asChild>
                    <button className="flex items-center gap-1">
                      {item.label}
                    </button>
                  </BreadcrumbLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {item.menuItems.map((menu, idx) => (
                    <DropdownMenuItem key={idx} asChild>
                      <Link to={menu.path}>{menu.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : item.isCurrent ? (
              // Current page
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : item.path ? (
              // Normal breadcrumb link
              <BreadcrumbLink asChild>
                <Link to={item.path}>{item.label}</Link>
              </BreadcrumbLink>
            ) : (
              // Fallback
              <span>{item.label}</span>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
