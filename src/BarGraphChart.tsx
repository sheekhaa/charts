import {Chart, Settings, BarSeries, ScaleType, PartialTheme} from "@elastic/charts";
import { LIGHT_THEME } from '@elastic/charts';
import React from "react";

interface CommonBarGraphChartProps {
  title: string;
  description: string;
}

const BarGraphChart: React.FC<CommonBarGraphChartProps> = ({
  title,
  description,
}) => {
  const data = [
    { x: 0, y: 2 },
    { x: 1, y: 7 },
    { x: 2, y: 3 },
    { x: 3, y: 6 },
  ];

  const theme: PartialTheme = {chartPaddings: {left: 160,},};

  return (
    <>
    <div className="chart-container">
      <div className="chart-text">
      <h2>{title}</h2>
      <p>{description}</p>
      </div>
    
      <div className="chart-chart">
      <Chart size={{ height: 300}}>
       <Settings theme={theme} baseTheme={LIGHT_THEME} />
        <BarSeries
          id="bars1"
          name="Simple Bar Chart"
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          xAccessor="x"
          yAccessors={["y"]}
          data={data}
        />
      </Chart>
     

      </div>
      </div>
    </>
  );
};

export default BarGraphChart;
