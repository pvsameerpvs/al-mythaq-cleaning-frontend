import * as React from "react";

type ToastItem = {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
};

type ToastContextType = {
  toasts: ToastItem[];
  toast: (t: Omit<ToastItem, "id">) => void;
  dismiss: (id: string) => void;
};

const ToastContext = React.createContext<ToastContextType | null>(null);

function randomId() {
  return Math.random().toString(36).slice(2);
}

export function ToastProviderClient({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = React.useCallback(
    (t: Omit<ToastItem, "id">) => {
      const id = randomId();
      setToasts((prev) => [...prev, { id, ...t }]);
      const duration = t.duration ?? 3500;
      window.setTimeout(() => dismiss(id), duration);
    },
    [dismiss]
  );

  const value = React.useMemo(() => ({ toasts, toast, dismiss }), [toasts, toast, dismiss]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProviderClient");
  return ctx;
}
