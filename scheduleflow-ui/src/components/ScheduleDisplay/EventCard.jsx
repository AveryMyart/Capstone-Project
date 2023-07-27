// 2.5 rem is used becuse thats the height of each cell block
// I may abstact that away
// Pixel offset: 1px based on the dividers thickness
export default function EventCard({ start, end }) {
  const gridStart = new Date();
  gridStart.setHours(5, 45, 0);
  const getBlocksFromTop = (start) => {
    const startSec =
      start.getHours() * 3600 + start.getMinutes() * 60 + start.getSeconds();
    const gridStartSec =
      gridStart.getHours() * 3600 +
      gridStart.getMinutes() * 60 +
      gridStart.getSeconds();
    return Math.abs(gridStartSec - startSec) / (60 * 15) + 1; // 2 cuz of the length of the header
  };

  const getHeight = (start, end) => {
    const startSec =
      start.getHours() * 3600 + start.getMinutes() * 60 + start.getSeconds();
      const endSec =
      end.getHours() * 3600 + end.getMinutes() * 60 + end.getSeconds();
      return Math.abs(endSec - startSec)/(60 * 15)
  };

  return (
    <div
      className={
        "event-card absolute bg-indigo-200 w-full h-10 border-l-4 border-l-indigo-500 z-10"
      }
      style={{ top: `calc(2rem*${getBlocksFromTop(start)} + 1px)`, height: `calc(2rem * ${getHeight(start, end)})`}}
    >
      {start.getHours()}
    </div>
  );
}
