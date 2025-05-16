const horizontalLines = [0, 13, 30, 51, 80, 121, 176, 249, 346, 475, 636, 829];
const verticalLines = [8.5, 17]; 

export default function BackgroundGrid() {
  return (
    <div className="fixed top-3/5 w-full h-screen overflow-hidden pointer-events-none">
      <div className="absolute left-0 top-0 w-full h-full">
        {horizontalLines.map((top, index) => (
          <div
            key={`h-${index}`}
            className="absolute left-0 w-full h-px"
            style={{
              top: `${top}px`,
              backgroundImage: "linear-gradient(to right, #00f0ff, #0066ff)",
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        {verticalLines.map((left, index) => (
          <div
            key={`v-${index}`}
            className="absolute top-0 h-full w-px"
            style={{
              left: `${left}%`,
              backgroundImage: "linear-gradient(to bottom, #00f0ff, #0066ff)",
              opacity: 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
