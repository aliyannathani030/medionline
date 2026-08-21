export default function Blister({
  count = 12,
  filledEvery = 3,
  size = "md",
}: {
  count?: number;
  filledEvery?: number;
  size?: "sm" | "md";
}) {
  const gap = size === "sm" ? "gap-[5px]" : "gap-2";
  const cols = size === "sm" ? "grid-cols-2" : "grid-cols-6";

  return (
    <div className={`grid ${cols} ${gap}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`blister-dot ${size === "sm" ? "w-[9px] h-[9px]" : ""} ${
            (i + 1) % filledEvery === 0 ? "filled" : ""
          }`}
        />
      ))}
    </div>
  );
}
