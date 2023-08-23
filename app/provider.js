'use client'

import store from './store'
import { Provider } from 'react-redux'

export default function ProviderApp({ children }) {
  return <Provider store={store}>{children}</Provider>
}
