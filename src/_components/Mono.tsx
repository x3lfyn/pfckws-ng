export interface MonoProps {
  children: HTMLElement[];
}

export default function Mono({ children }: MonoProps) {
  return (
    <span className="p-[4px] font-mono bg-bg-soft text-sm li">{children}</span>
  );
}
