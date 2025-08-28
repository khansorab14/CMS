// import type { ChartOptions } from "chart.js";
// import React from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";

// type ChartType = "bar" | "line" | "pie";

// interface ChartCardProps {
//   title: string;
//   type: ChartType;
//   data: any;
//   options?: ChartOptions;
// }

// const ChartMap: Record<ChartType, React.ElementType> = {
//   bar: Bar,
//   line: Line,
//   pie: Pie,
// };

// export const ChartCard: React.FC<ChartCardProps> = ({
//   title,
//   type,
//   data,
//   options,
// }) => {
//   const ChartComponent = ChartMap[type];

//   return (
//     <div className="flex flex-col h-full w-full">
//       <h3 className="mb-2 font-medium text-center">{title}</h3>
//       <div className="flex-1 w-full h-full">
//         <ChartComponent
//           data={data}
//           options={{
//             responsive: true,
//             maintainAspectRatio: false,
//             ...options,
//           }}
//         />
//       </div>
//     </div>
//   );
// };
