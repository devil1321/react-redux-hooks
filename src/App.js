import logo from './logo.svg';
import './App.css';
import {useRef,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import  { actions }  from './state/actions-creators' 

function App() {

  const account = useSelector(state => state.account.account)
  const dispatch = useDispatch()
  const AC = bindActionCreators(actions,dispatch)
  const money = useRef()

  useEffect(()=>{
    console.log(account)
  },[account])
  
  return (
    <div className="App">
      <h1>Money</h1>
      <h3>{account}</h3>
      <input ref={money} type="number" />
      <button onClick={()=>{
        AC.depositMoney(parseInt(money.current.value))
      }}>Deposit</button>
      <button onClick={()=>{
        AC.withdrawMoney(parseInt(money.current.value))
      }}>Withdraw</button>
    </div>
  );
}

export default App;
