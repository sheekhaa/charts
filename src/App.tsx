import React from 'react';
import SunBrustChart from './SunBrustChart';
import BarGraphChart from './BarGraphChart';


function App() {
  return (
  <>
      <SunBrustChart
        title="Sales by Product Category"
        description="This chart shows a sunburst view of sales data."
      />
      <BarGraphChart
      title='monthly sales on bar chart'
      description='this chart shows monthly sales in a bar format.'
      />

    </>
  );
}

export default App;
