import {  GoogleIcon } from "@/app/components/auth/oauth-icons";
import { Button } from "@/app/components/ui/button";

export function OAuthButtons() {
  return (
    <div className="flex gap-3">
      <Button
        type="button"
        variant="social"
        className="flex-1 rounded-sm text-[10px] tracking-[0.12em] uppercase"
        icon={<GoogleIcon />}
      >
        Google
      </Button>
      
    </div>
  );
}
