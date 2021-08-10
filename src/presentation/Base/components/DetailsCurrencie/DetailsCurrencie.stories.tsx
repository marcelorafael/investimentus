import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'

import { DetailsCurrencie } from './DetailsCurrencie'
import { View } from 'react-native'

storiesOf('Base/DetailsCurrencie', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
      <DetailsCurrencie
        company_name={text('companyName', 'Banco Inter - S.A')}
        price={text('price', '120,00')}
        description={text(
          'description',
          'Texto de descrição sobre a desterminada ação a qual estamos pesquisando'
        )}
        currency={text('currency', 'BRL')}
        region={text('region', 'Saõ-Paulo')}
        close="12:00"
        open={text('open', '10:00')}
        change_percert={text('change_percent', '-10')}
        name={text('name', 'Inter')}
        symbol={text('symbol', 'BIDI4')}
        market_cap={text('market', '2222.0')}
      />
    </View>
  ))
