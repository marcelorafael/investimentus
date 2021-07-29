import React, { useEffect, useState } from 'react';
import { Keyboard, ActivityIndicator, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '../../../Base/components/Card';
import { ChartHeader } from '../../../Base/components/ChartHeader';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  CenterViewCard,
  CenterView,
  TextTaxes,
  TextUSD,
  TitleUSD,
  CenterViewUSD,
  ContainerTextUSD,
  TextCurrencie,
  CenterViewCurrencie,
  ContainerTextCurrencie,
} from './CurrencieScreenPresenter.styles';
import Stocks from '../../../../services/axios/GetDatas/Stocks';

const CurrencieScreenPresenter: React.FC = ({navigation}: any) => {
  // const navigation = useNavigation();
  const [activity, setActivity] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [stocksName, setStocksName] = useState([]);
  const [taxes, setTaxes] = useState([]);
  const [currencie, setCurrencie] = useState([]);
  const [USD, setUSD] = useState([]);

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
          { id: '1', name: 'cdi', value: response.taxes[0].cdi },
          { id: '2', name: 'cdi dia', value: response.taxes[0].cdi_daily },
          { id: '3', name: 'fator dia', value: response.taxes[0].daily_factor },
          { id: '4', name: 'selic', value: response.taxes[0].selic },
          { id: '5', name: 'selic dia', value: response.taxes[0].selic_daily },
        ]

        setTaxes(adapterTaxes)

        // Datas Currencies
        const keysCurrencies = Object.keys(response.currencies);
        const entrieCurrencies = Object.entries(response.currencies);
        let adapterCurrencies: any = entrieCurrencies.map(item => item[1]);
        let teste = entrieCurrencies.map(item => item[1])
        setCurrencie(adapterCurrencies);

        // Data USD
        let adapterUSD: any = [
          {
            name: response.currencies.USD.name,
            buy: response.currencies.USD.buy
          }
        ]
        setUSD(adapterUSD)

        console.log(currencie);
      } catch (error) {
        console.log(error);
      }
    }

    handleStock();

  }, []);

  return (
    <Container>
      {activity === false
        ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator color="#37E39F" size={60} /></View>
        : <><ChartHeader
          labels={stocksName.map((item: any) => item)}
          datasets={[{ data: stocks }]}
          title="Pontuação na bolsa"
        />

          <ScrollView
            style={{ marginTop: 10 }}
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
                    <TextTaxes>{item.value} %</TextTaxes>
                  </CenterViewCard>
                </>
              </Card>
            ))}
          </ScrollView>
          <CenterView>
            <Card
              background="#0e3516"
              height={150}
              width="95%"
            >
              <>
                <TitleUSD>Valor de compra do dolar atualizado.</TitleUSD>
                {USD.map((item: any) => (
                  <CenterViewUSD>

                    <ContainerTextUSD>
                      <TextUSD>Real</TextUSD>
                      <TextUSD>R$ = {item.buy}</TextUSD>
                    </ContainerTextUSD>
                    <ContainerTextUSD style={{ alignItems: 'center', justifyContent: 'center' }}>
                    </ContainerTextUSD>
                    <ContainerTextUSD>
                      <TextUSD>{item.name}</TextUSD>
                      <TextUSD>U$$ = 1,00</TextUSD>
                    </ContainerTextUSD>
                  </CenterViewUSD>
                ))}
              </>
            </Card>
            <Card
              background="#000"
              height={555}
              width="95%"
            >
              <>{currencie.map((item: any) => (
                <CenterViewCurrencie key={item.name}>
                  {typeof item.name !== 'undefined' &&
                    <ContainerTextCurrencie onPress={() => navigation.navigate('InfoCurrencyPresenter', { item: item })}>
                      <TextCurrencie>{item.name}</TextCurrencie>
                      <Icon name="chevron-right" color="#FFF" size={20} />
                    </ContainerTextCurrencie>
                  }
                </CenterViewCurrencie>
              ))}
              </>
            </Card>
          </CenterView></>}
    </Container>
  )
}
const CurrencieScreenPresenterMemo = React.memo(CurrencieScreenPresenter);
export { CurrencieScreenPresenterMemo as CurrencieScreenPresenter };