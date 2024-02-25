export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1350px] mx-auto px-[1rem] lg:px-[2rem]">
      {children}
    </div>
  );
}
