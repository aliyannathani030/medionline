import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export default function TopBar() {
  return (
    <div className="bg-teal-deep text-teal-pale font-mono text-[11px] sm:text-xs tracking-wide px-6 sm:px-16 py-2 flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between">
      <span>FREE DELIVERY ACROSS KARACHI ON ORDERS OVER RS. 15,000</span>
      <span>
        SUPPORT:{" "}
        <a href={PHONE_TEL} className="hover:text-white underline-offset-2 hover:underline">
          {PHONE_DISPLAY}
        </a>{" "}
        &nbsp;|&nbsp; MON–SAT 9AM–9PM
      </span>
    </div>
  );
}
