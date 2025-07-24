import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

type InputProps = React.ComponentProps<"input"> & {
  variant?: "default" | "solid" | "readonly" | "password";
  icon?: React.ReactNode;
};

function Input({ className, type, variant = "default", icon, ...props }: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = variant === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const baseStyles =
    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

  const variantStyles = {
    default:
      "bg-transparent dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    solid: "bg-white dark:bg-zinc-900 text-sm shadow-sm focus:ring-2 focus:ring-ring focus:border-ring",
    readonly: "bg-muted text-muted-foreground cursor-not-allowed",
    password: "", // Padding is handled separately
  };

  const hasLeftIcon = !!icon;
  const hasRightIcon = isPassword;

  const inputPadding = cn({
    "pl-9": hasLeftIcon,
    "pr-10": hasRightIcon,
  });

  return (
    <div className="relative w-full">
      {/* Icono a la izquierda */}
      {hasLeftIcon && (
        <span className="absolute bottom-0 top-0 left-2 flex items-center">
          {icon}
        </span>
      )}

      <input
        type={inputType}
        readOnly={variant === "readonly"}
        className={cn(baseStyles, variantStyles[variant], inputPadding, className)}
        {...props}
      />

      {/* Icono para ver/ocultar contraseña */}
      {hasRightIcon && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
}

export { Input };
