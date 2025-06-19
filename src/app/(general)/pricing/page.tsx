import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Esta es la página de precios de mi servicio",
};

export default function PricingPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span>Pricing</span>
      <p className="text-center">
        Aquí puedes encontrar los precios de nuestros servicios.
      </p>
    </div>
  );
}
