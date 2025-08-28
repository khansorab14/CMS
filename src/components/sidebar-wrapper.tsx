export function SidebarWrapper({
  isActive,
  direction,
  children,
}: {
  isActive: boolean;
  direction: "forward" | "back";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute inset-0 transition-transform duration-300
        ${
          isActive
            ? "translate-x-0"
            : direction === "forward"
            ? "translate-x-full"
            : "-translate-x-full"
        }
      `}
    >
      {children}
    </div>
  );
}
