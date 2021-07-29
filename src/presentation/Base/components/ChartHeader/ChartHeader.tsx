import React from 'react'
import { Container, Title } from './ChartHeader.styles';
import { Dimensions, Text } from 'react-native';
import {
  BarChart,
} from "react-native-chart-kit";

interface ChartHeaderProps {
  labels: string[]
  datasets: any[]
  title: string
}

const ChartHeader: React.FC<ChartHeaderProps> = (
  props: ChartHeaderProps
) => {
  const { labels, datasets, title } = props;
  const data = {
    labels: labels,
    datasets: datasets
  };

  const chartConfig = {
    backgroundGradientFrom: "#37E39F",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#000",
    backgroundGradientToOpacity: 0.1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const screenWidth = Dimensions.get("window").width;

  return (
    <Container>
        <Title>{title}</Title>
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
    </Container>
  )
}
const ChartHeaderMemo = React.memo(ChartHeader);
export { ChartHeaderMemo as ChartHeader };