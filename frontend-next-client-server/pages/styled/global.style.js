
import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,600&subset=latin-ext');
  * {
    margin: 5px;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: hsl(0, 1%, 81%);
    font-family: 'Raleway', sans-serif;
  }
  .container {
    padding-bottom: 80px;
  }
  
  .header {
    font-size: 22px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    text-transform: uppercase;
    color: #f1f1f1;
    background: #595a5c;
    padding: 40px;
    border-bottom: 1px solid #474747;
  }
  .note {
    color: #727070;
    padding: 40px;
    margin: 20px;
    background: #fff;
    border: solid 1px #e9e9e9;
    cursor: pointer;
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);
    -webkit-transition:background-color .2s ease-out;
    -o-transition:background-color .2s ease-out;
    transition:background-color .2s ease-out
  }
  .note:hover {
    transform: scale(1.02);
    background-color: #dbb5c7;
  }
  .button {
    position: fixed;
    z-index: 1;
    right: 40px;
    bottom: 40px;
    width: 50px;
    height: 50px;
    border-radius: 20%;
    text-align: center;
    line-height: 50px;
    font-size: 28px;
    font-weight: bold;
    color: #f1f1f1;
    background: #595a5c;
    cursor: pointer;
    box-shadow: 5px 5px 6px 0px rgba(0,0,0,0.8);
    -webkit-box-shadow: 5px 5px 6px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: 5px 5px 6px 0px rgba(0,0,0,0.8);
    transition: transform .06s ease;
  }
  .button:hover {
    transform: scale(1.05);
  }
  .input {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    border: none;
    outline: none;
    background: #595a5c;
    font-size: 16px;
    color: #f1f1f1;
    border-top: 1px solid #474747;
  }
`;