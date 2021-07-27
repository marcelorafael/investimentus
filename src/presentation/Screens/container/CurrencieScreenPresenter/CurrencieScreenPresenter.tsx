import React, { useEffect, useState } from 'react'
import { Keyboard, ActivityIndicator } from 'react-native';
import { Card } from '../../../Base/components/Card';
import { ChartHeader } from '../../../Base/components/ChartHeader';
import { Container } from './CurrencieScreenPresenter.styles';
import Stocks from '../../../../services/axios/GetDatas/Stocks';

const CurrencieScreenPresenter: React.FC = () => {
  const [activity, setActivity] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [stocksName, setStocksName] = useState([]);
  let entriesStocks = []

  useEffect(() => {
    async function handleStock() {
      Keyboard.dismiss()

      setActivity(activity ? true : true)
  
      try {
        const response = await Stocks('/?key=34664f77');
  
        const keysStocks: any = Object.keys(response.stocks);
        setStocksName(keysStocks);
        entriesStocks = Object.entries(response.stocks);
  
        let adapterStocks: any = [];
        // adapterStocks = [{ data: entriesStocks.map((item: any) => item[1].points)}]
        adapterStocks = entriesStocks.map((item: any) => item[1].points)
        setStocks(adapterStocks)
         
        console.log(stocks)
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

      <Card
        background="#FFF"
        height={150}
        width={150}
      >
        <></>
      </Card></>}
    </Container>
  )
}
const CurrencieScreenPresenterMemo = React.memo(CurrencieScreenPresenter);
export { CurrencieScreenPresenterMemo as CurrencieScreenPresenter };