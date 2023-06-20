import { ResponsiveLine } from '@nivo/line';
import { S } from './EventDetail.js';

const Chart = ({ colors, bid }) => {
  const theme = {
    axis: {
      stroke: 'darkgray',
      ticks: {
        text: {
          fill: 'lightgrey',
        },
      },
    },
    grid: {
      line: {
        stroke: '#5b5b5b',
      },
    },
    crosshair: {
      line: {
        stroke: 'white',
      },
    },
  };

  const CustomTooltip = ({ point, bid }) => {
    return (
      <div
        style={{
          color: '#97fe67',
          padding: '8px',
          border: '1px solid #97fe67',
          borderRadius: '10px',
        }}
      >
        <div>
          <S.TooltipImg src="./images/common/kulture-token.png" alt="token" />
          {Math.floor(point.data.y)}
        </div>
      </div>
    );
  };

  return (
    <ResponsiveLine
      data={bid}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'TIME',
        legendOffset: 36,
        legendPosition: 'middle',
        legendTextColor: 'white',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'TOKEN',
        legendOffset: -40,
        legendPosition: 'middle',
        legendTextColor: 'green',
      }}
      enableGridX={false}
      enableGridY={true}
      colors="#97fe67"
      pointSize={3}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      useMesh={true}
      legends={[]}
      tooltip={CustomTooltip}
      theme={theme}
    />
  );
};

export default Chart;
