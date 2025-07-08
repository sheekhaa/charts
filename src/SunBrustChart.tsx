// import React from "react";
// import {defaultPartitionValueFormatter, PartitionLayout, Chart, Settings, Partition, Datum, LIGHT_THEME, PartialTheme,} from "@elastic/charts";


// interface CommonSunBrustProps {
//   title: string;
//   description: string;
// }

// // Sample data
// const mocks = {
//   pie: [
//     {cat: "A", exportVal: 54000000000 },
//     { cat: "B", exportVal: 36000000000 },
//     { cat: "C", exportVal: 453000000000 },
//     { cat: "D", exportVal: 1930000000000 },
//     { cat: "E", exportVal: 343000000000 },
//     { cat: "F", exportVal: 848000000000 },
//     { cat: "G", exportVal: 745000000000 },
//     { cat: "H", exportVal: 3110000000000 },
//     { cat: "I", exportVal: 817000000000 },
//     { cat: "J", exportVal: 530000000000 },
//   ],
// };

// // Mapping for labels/colors
// const productLookup: Record<string, { color: string; name: string }> = {
//  "A": { name: "Food and live animals", color: "#8dd3c7" },
//   "B": { name: "Beverages and tobacco", color: "#ffffb3" },
//   "C": { name: "Crude materials, inedible, except fuels", color: "#bebada" },
//   "D": { name: "Mineral fuels, lubricants and related materials", color: "#fb8072" },
//   "E": { name: "Animal and vegetable oils, fats and waxes", color: "#80b1d3" },
//   "F": { name: "Chemicals and related products", color: "#fdb462" },
//   "G": { name: "Manufactured goods classified chiefly by material", color: "#b3de69" },
//   "H": { name: "Machinery and transport equipment", color: "#fccde5" },
//   "I": { name: "Miscellaneous manufactured articles", color: "#d9d9d9" },
//   "J": { name: "Commodities and transactions not elsewhere classified", color: "#bc80bd" },
// };

// const SunBrustChart: React.FC<CommonSunBrustProps> = ({ title, description }) => {
//   const theme: PartialTheme = {
//     chartPaddings: { left: 160 },
//     chartMargins: { top: 10, bottom: 10, left: 10, right: 10 },
//     partition: {
//       linkLabel: {
//         maxCount: 32,
//         fontSize: 14,
//       },
//       fontFamily: "Arial",
//       fillLabel: {
//         fontStyle: "italic",
//       },
//       minFontSize: 1,
//       idealFontSizeJump: 1.1,
//       outerSizeRatio: 0.9,
//       emptySizeRatio: 0.4,
//       circlePadding: 4,
//     },
//   };  

//   return (
//     <>
//     <div className="chart-container">
//       <div className="chart-text">
//       <h2>{title}</h2>
//       <p>{description}</p>
//       </div>
//       <div className="chart-chart" style={{ pointerEvents: 'none' }}>
//       <Chart size={{  width: 600, height: 400}}>
//         <Settings theme={theme} baseTheme={LIGHT_THEME}
//         rotation={0}
//         onElementClick={() => {}} // This disables click behavior
//         />
//         <Partition
//           id="spec_1"
//           data={mocks.pie}
//           layout={PartitionLayout.sunburst}
//           valueAccessor={(d: Datum) => d.exportVal}
//           valueFormatter={(d: number) =>
//             `$${defaultPartitionValueFormatter(Math.round(d / 1e9))}`
//           }
//           layers={[
//             {
//               groupByRollup: (d: Datum) => d.cat,
//               nodeLabel: (cat) =>
//                 productLookup[String(cat)]?.name ?? String(cat),
//               shape: {
//                 fillColor: (cat: string) =>
//                   productLookup[cat]?.color || "#ccc",
//               },
//             },
//           ]}
//         />
//       </Chart>
//       </div>
//       </div>
//     </>
//   );
// };

// export default SunBrustChart;



import React from "react";
import {
  defaultPartitionValueFormatter,
  PartitionLayout,
  Chart,
  Settings,
  Partition,
  Datum,
  LIGHT_THEME,
  PartialTheme,
  Tooltip,  
} from "@elastic/charts";

interface CommonSunBrustProps {
  title: string;
  description: string;
}

// Sample data
const mocks = {
  pie: [
    { cat: "A", exportVal: 54000000000 },
    { cat: "B", exportVal: 36000000000 },
    { cat: "C", exportVal: 453000000000 },
    { cat: "D", exportVal: 1930000000000 },
    { cat: "E", exportVal: 343000000000 },
    { cat: "F", exportVal: 848000000000 },
    { cat: "G", exportVal: 745000000000 },
    { cat: "H", exportVal: 3110000000000 },
    { cat: "I", exportVal: 817000000000 },
    { cat: "J", exportVal: 530000000000 },
  ],
};

// Mapping for labels/colors
const productLookup: Record<string, { color: string; name: string }> = {
  "A": { name: "Food and live animals", color: "#8dd3c7" },
  "B": { name: "Beverages and tobacco", color: "#ffffb3" },
  "C": { name: "Crude materials, inedible, except fuels", color: "#bebada" },
  "D": { name: "Mineral fuels, lubricants and related materials", color: "#fb8072" },
  "E": { name: "Animal and vegetable oils, fats and waxes", color: "#80b1d3" },
  "F": { name: "Chemicals and related products", color: "#fdb462" },
  "G": { name: "Manufactured goods classified chiefly by material", color: "#b3de69" },
  "H": { name: "Machinery and transport equipment", color: "#fccde5" },
  "I": { name: "Miscellaneous manufactured articles", color: "#d9d9d9" },
  "J": { name: "Commodities and transactions not elsewhere classified", color: "#bc80bd" },
};

const SunBrustChart: React.FC<CommonSunBrustProps> = ({ title, description }) => {
  const theme: PartialTheme = {
    ...LIGHT_THEME,
    chartPaddings: { left: 160 },
    chartMargins: { top: 10, bottom: 10, left: 10, right: 10 },
    partition: {
      ...LIGHT_THEME.partition,
      linkLabel: {
        maxCount: 32,
        fontSize: 14,
      },
      fontFamily: "Arial",
      fillLabel: {
        fontStyle: "italic",
      },
      minFontSize: 1,
      idealFontSizeJump: 1.1,
      outerSizeRatio: 0.9,
      emptySizeRatio: 0.4,
      circlePadding: 4,
    },
  };

  return (
    <>
      <div className="chart-container">
        <div className="chart-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="chart-chart" >
          <Chart size={{ width: 600, height: 400 }}>
            <Settings 
              baseTheme={LIGHT_THEME}
              theme={theme}
            />
            <Tooltip/>
            <Partition
              id="spec_1"
              data={mocks.pie}
              layout={PartitionLayout.sunburst}
              valueAccessor={(d: Datum) => d.exportVal as number}
              valueFormatter={(d: number) =>
                `$${defaultPartitionValueFormatter(Math.round(d / 1000000000))}B`
              }
              layers={[
                {
                  groupByRollup: (d: Datum) => d.cat,
                  nodeLabel: (d: Datum) => 
                    productLookup[d as string]?.name ?? String(d),
                  shape: {
                    fillColor: (d: Datum) => 
                      productLookup[d as string]?.color || "#ccc",
                  },
                },
              ]}
            />
          </Chart>
        </div>
      </div>
    </>
  );
};

export default SunBrustChart;