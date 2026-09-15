const TEXT = "The next generation of legal work";
const CHAR_MS = 56;
const SPACE_MS = 90;

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

  return (
    <h1 className={className} aria-label={TEXT}>
      {TEXT.split("").map((char, index) => {
        const isLast = index === TEXT.length - 1;

        return (
          <span
            key={`${char}-${index}`}
            className={`hero-type-char${isLast ? " hero-type-char-last" : ""}`}
            style={{ animationDelay: `${delays[index]}ms` }}
            aria-hidden="true"
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
}
