interface MarqueeProps {
  items: string[];
  speed?: number;
}

export function Marquee({ items, speed = 40 }: MarqueeProps) {
  const text = items.join('  ✦  ');
  return (
    <div className="marquee">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
