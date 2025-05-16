export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#151515]">
      <div className="relative">
        <div className="relative w-10 h-10">
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-blue-600 border-b-blue-600 animate-spin"
            style={{ animationDuration: '3s' }}
          ></div>

          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-blue-600 animate-spin"
            style={{ animationDuration: '2s', animationDirection: 'reverse' }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"></div>
      </div>
    </div>
  );
}
