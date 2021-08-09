import React from 'react'
import { Container, Title } from './ChartHeader.styles'
import { Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

interface ChartHeaderProps {
  labels: string[]
  datasets: any[]
  title: string
}

const ChartHeader: React.FC<ChartHeaderProps> = (props: ChartHeaderProps) => {
  const { labels, datasets, title } = props
  const data = {
    labels: labels,
    datasets: datasets
  }
  // 37E39F
  const chartConfig = {
    backgroundGradientFrom: '#7F5DF0',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#000',
    backgroundGradientToOpacity: 0.1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  }
  const screenWidth = Dimensions.get('window').width

  return (
    <Container>
      <Title>{title}</Title>
      <BarChart
        style={{ width: '100%' }}
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
const ChartHeaderMemo = React.memo(ChartHeader)
export { ChartHeaderMemo as ChartHeader }
