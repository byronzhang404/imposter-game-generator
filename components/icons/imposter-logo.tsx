type Props = React.SVGProps<SVGSVGElement> & { className?: string }

export function ImposterLogoIcon({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {/* Body */}
      <path
        d="M18 26c0-9 7-16 16-16s16 7 16 16v20c0 6-4 10-10 10H28c-6 0-10-4-10-10V26z"
        fill="currentColor"
      />
      {/* Backpack */}
      <rect x="10" y="26" width="10" height="18" rx="5" fill="currentColor" opacity="0.85" />
      {/* Visor */}
      <rect x="25" y="22" width="22" height="12" rx="5" fill="var(--background)" />
      {/* Finger (shhh) */}
      <rect x="47" y="22" width="4" height="16" rx="2" fill="var(--background)" />
    </svg>
  )
}