import type { ReactNode } from "react";

export default function Alert({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 mb-8 bg-red-600 text-center text-white uppercase">
      <span>{children}</span>
    </div>
  );
}
