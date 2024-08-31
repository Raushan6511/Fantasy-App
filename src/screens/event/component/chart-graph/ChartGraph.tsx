import React from 'react';
import {Dimensions, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

import {colors} from '../../../../theme';

type LineChartProps = {
  yesMarketPredictionData: number[];
  noMarketPredictionData: number[];
  labels: string[];
};

const ChartGraph: React.FC<LineChartProps> = ({
  yesMarketPredictionData,
  noMarketPredictionData,
  labels,
}) => {
  return (
    <View>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: yesMarketPredictionData,
              color: () => colors.primary,
              strokeWidth: 2,
            },
            {
              data: noMarketPredictionData,
              color: () => colors.secondary,
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={240}
        yAxisSuffix="%"
        yAxisInterval={1}
        chartConfig={{
          decimalPlaces: 1,
          color: () => colors.palette.lightGreen,
          labelColor: () => colors.palette.gray,
          propsForBackgroundLines: {
            stroke: colors.palette.gray,
            strokeWidth: 1,
          },
        }}
        bezier
        style={{
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default ChartGraph;
