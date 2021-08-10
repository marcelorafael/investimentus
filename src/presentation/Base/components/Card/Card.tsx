import React from 'react'
import { StyleSheet } from 'react-native'
import { Wrapper } from './Card.styles'
export type TypeDimensions = number | string

interface CardProps {
  width: number | string
  height: number
  background: string
  children: React.ReactElement
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { width, height, background, children } = props
  return (
    <Wrapper
      width={width}
      height={height}
      background={background}
      style={{ ...styles.shadow }}
    >
      {children}
    </Wrapper>
  )
}

const CardMemo = React.memo(Card)

export { CardMemo as Card }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadow: {
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    marginHorizontal: 5
  }
})
