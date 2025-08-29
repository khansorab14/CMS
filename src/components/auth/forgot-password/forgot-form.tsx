import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ForgotForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden  p-0 ">
        <CardContent className="grid h-[382px] p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <a href="/" className="underline underline-offset-4">
                Back to Login
              </a>
              <div className="flex flex-col items-start text-center">
                <h1 className="text-2xl font-bold"> Forgot Password?</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Enter your email to receive reset instructions.
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email adress"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Sent Reset Link
              </Button>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="https://www.caseiq.com/wp-content/uploads/2023/04/types-of-fraud.jpg"
              alt="forget"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
