import React from 'react'
import { Container } from './ChartHeader.styles';
import { Dimensions, View } from 'react-native';
import {
  BarChart,
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
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
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
        />
      </View>
    </Container>
  )
}
const ChartHeaderMemo = React.memo(ChartHeader);
export { ChartHeaderMemo as ChartHeader };