import React, { useEffect, useState } from 'react'
import { Keyboard, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '../../../Base/components/Card';
import { ChartHeader } from '../../../Base/components/ChartHeader';
import { 
  Container,
  CenterViewCard, 
  TextTaxes 
} from './CurrencieScreenPresenter.styles';
import Stocks from '../../../../services/axios/GetDatas/Stocks';

const CurrencieScreenPresenter: React.FC = () => {
  const [activity, setActivity] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [stocksName, setStocksName] = useState([]);
  const [taxes, setTaxes] = useState([]);
  const [taxesName, setTaxesName] = useState([]);
  let entriesStocks = []

  useEffect(() => {
    async function handleStock() {
      Keyboard.dismiss()

      setActivity(activity ? true : true)
  
      try {
        const response = await Stocks('/?key=34664f77');
        
        // Datas Stocks
        const keysStocks: any = Object.keys(response.stocks);
        setStocksName(keysStocks);
        entriesStocks = Object.entries(response.stocks);
  
        let adapterStocks: any = [];
        // adapterStocks = [{ data: entriesStocks.map((item: any) => item[1].points)}]
        adapterStocks = entriesStocks.map((item: any) => item[1].points)
        setStocks(adapterStocks)
        
        // Datas Taxes
        const adapterTaxes: any = [
          {id:'1', name:'cdi', value: response.taxes[0].cdi},
          {id:'2', name:'cdi dia', value: response.taxes[0].cdi_daily},
          {id:'3', name:'fator dia', value: response.taxes[0].daily_factor},
          {id:'4', name:'selic', value: response.taxes[0].selic},
          {id:'5', name:'selic dia', value: response.taxes[0].selic_daily},
        ]

        

        setTaxes(adapterTaxes)

        // setTaxesName()
        console.log(adapterTaxes)
      } catch (error) {
        console.log(error);
      }
    }

    handleStock();

  },[]);

  return (
    <Container>
      {activity === false
      ?<><ActivityIndicator color="#37E39F" size={60} /></>
      :<><ChartHeader
        labels={stocksName.map((item: any) => item)}
        datasets={[{ data: stocks}]}
      />

      <ScrollView
        style={{marginTop: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {taxes.map((item: any) => (
          <Card
            key={item.id}
            background="#000"
            height={150}
            width={150}
          >
          <>
          <TextTaxes>{item.name.toUpperCase()}</TextTaxes>
          <CenterViewCard>
            <Icon name="dollar" color="#799" size={50} />
            <TextTaxes>R$ = {item.value}</TextTaxes>
          </CenterViewCard>
          </>
        </Card>
        ))}
      </ScrollView></>}
    </Container>
  )
}
const CurrencieScreenPresenterMemo = React.memo(CurrencieScreenPresenter);
export { CurrencieScreenPresenterMemo as CurrencieScreenPresenter };