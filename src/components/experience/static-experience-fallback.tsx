export function StaticExperienceFallback() {
  return (
    <div className="relative h-full min-h-dvh overflow-hidden bg-[radial-gradient(circle_at_50%_32%,rgba(225,25,61,0.24),transparent_34%),linear-gradient(180deg,#030305_0%,#12070a_46%,#030305_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(90deg,transparent_0_8%,rgba(225,25,61,0.18)_8%_9%,transparent_9%_18%,rgba(255,159,189,0.22)_18%_19%,transparent_19%_32%,rgba(225,25,61,0.16)_32%_33%,transparent_33%_46%,rgba(255,79,134,0.2)_46%_47%,transparent_47%_62%,rgba(225,25,61,0.18)_62%_63%,transparent_63%_78%,rgba(255,159,189,0.18)_78%_79%,transparent_79%_100%)] opacity-80 blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_28%,rgba(255,159,189,0.26),transparent_9%),radial-gradient(circle_at_70%_22%,rgba(225,25,61,0.28),transparent_11%),radial-gradient(circle_at_44%_48%,rgba(255,79,134,0.24),transparent_12%)] blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,3,5,0.84))]" />
      <div className="film-grain absolute -inset-[10%] opacity-[0.055]" />
    </div>
  );
}
