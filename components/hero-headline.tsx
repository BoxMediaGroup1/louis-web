const TEXT = "The next generation of legal work";
const ACCENT = "work";
const CHAR_MS = 82;
const SPACE_MS = 130;

function characterDelays(text: string) {
  const delays: number[] = [];
  let time = 0;

  for (const char of text) {
    delays.push(time);
    time += char === " " ? SPACE_MS : CHAR_MS;
  }

  return delays;
}

export function HeroHeadline({ className }: { className?: string }) {
  const delays = characterDelays(TEXT);
  const accentStart = TEXT.lastIndexOf(ACCENT);

  return (
    <h1 className={className} aria-label={TEXT}>
      {TEXT.split("").map((char, index) => {
        const isLast = index === TEXT.length - 1;
        const isAccent = index >= accentStart;
        const step = isLast ? 0 : delays[index + 1] - delays[index];

        return (
          <span
            key={`${char}-${index}`}
            className={`hero-type-slot${isLast ? " hero-type-slot-last" : ""}${isAccent ? " text-burgundy-deep" : ""}`}
            style={{
              animationDelay: `${delays[index]}ms`,
              ["--caret-ms" as string]: `${step}ms`,
            }}
            aria-hidden="true"
          >
            <span className="hero-type-char">{char}</span>
            <span className="hero-caret" />
          </span>
        );
      })}
    </h1>
  );
}
