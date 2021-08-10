import { StyleProp } from 'react-native'

export type Testable<T> = T & { testID?: string }
export type Stylable<T, S> = T & { style?: StyleProp<S> }
