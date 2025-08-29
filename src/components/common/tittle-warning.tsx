import { Info } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

type TitleWarningProps = {
  title: string;
  warning?: string;
};

export function TitleWarning({ title, warning }: TitleWarningProps) {
  return (
    <div className="flex flex-1 flex-col px-4 lg:px-6">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-1 pt-4 md:gap-3 md:pt-6">
          <h1 className="text-2xl font-bold">{title}</h1>

          {warning && (
            <Alert className="bg-blue-50 border border-blue-200 text-blue-900">
              <Info className="h-5 w-5 text-blue-500" />
              <AlertDescription className="text-sm text-blue-700">
                {warning}
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
