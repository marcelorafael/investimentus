import React from 'react'
import { Container } from './ChartHeader.styles';
import { Dimensions, View } from 'react-native';
import {
  BarChart,
  LineChart,
} from "react-native-chart-kit";

interface ChartHeaderProps {
  labels: string[]
  datasets: any[]
}

const ChartHeader: React.FC<ChartHeaderProps> = (
  props: ChartHeaderProps
) => {
  const { labels, datasets } = props;
  const data = {
    labels: labels,
    datasets: datasets
  };

  const chartConfig = {
    backgroundGradientFrom: "#37E39F",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#5D2DFD",
    backgroundGradientToOpacity: 0.1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const screenWidth = Dimensions.get("window").width;

  return (
    <Container>
      <View>
        <BarChart
          style={{ width:'100%' }}
          data={data}
          width={screenWidth}
          height={375}
          yAxisLabel=""
          chartConfig={chartConfig}
          verticalLabelRotation={55}
          horizontalLabelRotation={-55}
        />
      </View>
    </Container>
  )
}
const ChartHeaderMemo = React.memo(ChartHeader);
export { ChartHeaderMemo as ChartHeader };