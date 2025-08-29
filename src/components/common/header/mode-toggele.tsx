import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/api/provider/them-providers";

const brands = ["default", "brand_a", "brand_b", "brand_c"] as const;
const modes = ["light", "dark", "system"] as const;

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
          <Moon className="absolute hidden h-[1.2rem] w-[1.2rem] dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 rounded-md border bg-gray-100 p-1 shadow-md"
      >
        <DropdownMenuLabel>Theme Options</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {brands.map((brand) => (
          <div key={brand}>
            <DropdownMenuLabel className="text-xs font-semibold opacity-70">
              {brand === "default" ? "Default" : brand.replace("-", " ")}
            </DropdownMenuLabel>
            {modes.map((mode) => {
              const value = `${brand}-${mode}`;
              return (
                <DropdownMenuItem
                  key={value}
                  onClick={() => setTheme(value)}
                  className={
                    theme === value ? "bg-accent text-accent-foreground" : ""
                  }
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
