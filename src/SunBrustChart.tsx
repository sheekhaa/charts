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
} from "@elastic/charts";

interface CommonSunBrustProps {
  title: string;
  description: string;
}

// Sample data
const mocks = {
  pie: [
    { cat: "A", exportValue: 1000000000 },
    { cat: "B", exportValue: 2000000000 },
    { cat: "C", exportValue: 1500000000 },
  ],
};

// Mapping for labels/colors
const productLookup: Record<string, { color: string; name: string }> = {
  A: { name: "Product A", color: "#FF6384" },
  B: { name: "Product B", color: "#36A2EB" },
  C: { name: "Product C", color: "#FFCE56" },
};

const SunBrustChart: React.FC<CommonSunBrustProps> = ({ title, description }) => {
  const theme: PartialTheme = {
    chartPaddings: { left: 160 },
    chartMargins: { top: 10, bottom: 10, left: 10, right: 10 },
    partition: {
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
      <div className="chart-chart">
      <Chart size={{ height: 300 }}>
        <Settings theme={theme} baseTheme={LIGHT_THEME} />
        <Partition
          id="spec_1"
          data={mocks.pie}
          layout={PartitionLayout.sunburst}
          valueAccessor={(d: Datum) => d.exportValue}
          valueFormatter={(d: number) =>
            `$${defaultPartitionValueFormatter(Math.round(d / 1e9))} Bn`
          }
          layers={[
            {
              groupByRollup: (d: Datum) => d.cat,
              nodeLabel: (cat) =>
                productLookup[String(cat)]?.name ?? String(cat),
              shape: {
                fillColor: (cat: string) =>
                  productLookup[cat]?.color || "#ccc",
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
