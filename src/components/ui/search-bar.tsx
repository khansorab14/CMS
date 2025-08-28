import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar({
  placeholder = "Search...",
}: {
  placeholder?: string;
}) {
  return (
    <div className="relative  w-full">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input type="search" placeholder={placeholder} className="pl-8" />
    </div>
  );
}
