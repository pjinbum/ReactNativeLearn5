import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import rootReducer from './reducers/Index'
import History from './components/History'
import Input from './components/Input'


const store = createStore(rootReducer)


const Container = styled.SafeAreaView`
 flex:1%;
 background-color: #fff;
 align-items: center;
 justify-content: center;
`

const App = () => {
  return (
   <Provider store={store}>
      <Container>

         <StatusBar barStyle='light-content'></StatusBar>   
          <Input></Input>       
          <History></History>
      </Container>

   </Provider>
  )
}

export default App