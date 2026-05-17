import { useRef, useState } from "react";

export default function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPos({
      x: x * 0.25,
      y: y * 0.25,
    });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <a href="https://youtube.com/@ROHAN-MODI"
      target="_blank"
      rel="noopener noreferrer"
      >
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
      className="
        min-w-[250px]
        min-h-[30px]
        border-black/500
        border-1
        cursor-pointer rounded-2xl
        bg-gradient-to-b from-white-400 to-white-700
        px-10 py-4 font-medium text-gray-750
        shadow-lg shadow-yellow-500/30
        ring-1 ring-white/20
        transition-transform duration-150 ease-out
        active:scale-95
      "
    >
      Subscribe @ROHAN-MODI
    </button>
      </a>
  );
}
