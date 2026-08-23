export function SpecChips({ chips }: { chips: string[] }) {
  if (chips.length === 0) return null;

  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Key specifications">
      {chips.map((chip) => (
        <li key={chip}>
          <span className="ae-spec-chip">{chip}</span>
        </li>
      ))}
    </ul>
  );
}
