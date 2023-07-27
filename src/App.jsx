import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import FuncLifeCycle from './Components/LifeCycle/FuncLifeCycle';
import FuncLifeCycle2 from './Components/LifeCycle/FuncLifeCycle2';
import { useState } from 'react';
import FormValidation from './Components/Validations/FormValidation';
import Validation from './Components/Validations/Validation';
import UseMemoExample from './Components/UseMemoExample';
import PureComp from './Components/PureComp';
import CustomHook from './Components/CustomHook';
import UseCallBackComp from './Components/CallBackExample/UseCallBackComp';

function App() {
  return (
    <>
      <UseCallBackComp />
    </>
  );
}

export default App;
