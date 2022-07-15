import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
const StndbyImg = "./pic/standby.jpg";
const FoodImg1 ="./pic/yakiniku.jpg";
const FoodImg2 ="./pic/boilpao.jpg";
const FoodImg3 ="./pic/chickin.jpg";
const FoodImg4 ="./pic/friedchickin.jpg";
const FoodImg5 ="./pic/ramen.jpg";
const FoodImg6 ="./pic/soba.jpg";
const FoodImg7 ="./pic/sushi.jpg";
const FoodImg8 ="./pic/chahan.jpg";

export default function App() {
  //JSの記載はここ
  
  //useStateについて記述
  //初期変数a,更新値setA,useStateでで初期値（１）設定
  const [disableQ1, setDisableQ1] = useState(false);
  const [disableQ2, setDisableQ2] = useState(false);
  const [disableQ3, setDisableQ3] = useState(false);
  const [food, setFoodName] = useState("今日のご飯は～～～");
  const [foodImg, setFoodImg] = useState(StndbyImg);
  var [answerCount, setCount] = useState(0);
  const answerImgmap = {
    yakiniku: FoodImg1,
    boilpao: FoodImg2,
    chickin: FoodImg3,
    friedchickin: FoodImg4,
    ramen: FoodImg5,
    soba: FoodImg6,
    sushi: FoodImg7,
    chahan: FoodImg8
  };

  //ボタン押下時の処理
  const traningCheckTrue = () => {
    setDisableQ1(true);
    setCount(answerCount + 1);
  };
  const traningCheckFalse = () => {
    setDisableQ1(true);
    setCount(answerCount + 2);
  };
  const guiltyCheckTrue = () => {
    setDisableQ2(true);
    setCount(answerCount + 10);
  };
  const guiltyCheckFalse = () => {
    setDisableQ2(true);
    setCount(answerCount + 20);
  };
  const awesomeCheckTure = () => {
    setDisableQ3(true);
    setCount(answerCount + 100);
  };
  const awesomeCheckFalse = () => {
    setDisableQ3(true);
    setCount(answerCount + 200);
  };
  const choiceFood = () => {
    switch (answerCount) {
      case 111:
        setFoodImg(answerImgmap.yakiniku);
        setFoodName("焼肉");
        break;
      case 211:
        setFoodImg(answerImgmap.chahan);
        setFoodName("チャーハン");
        break;
      case 121:
        setFoodImg(answerImgmap.ramen);
        setFoodName("ラーメン");
        break;
      case 221:
        setFoodImg(answerImgmap.boilpao);
        setFoodName("水餃子");
        break;
      case 112:
        setFoodImg(answerImgmap.chickin);
        setFoodName("鶏肉とブロッコリー");
        break;
      case 212:
        setFoodImg(answerImgmap.sushi);
        setFoodName("スシロー");
        break;
      case 122:
        setFoodImg(answerImgmap.friedchickin);
        setFoodName("からあげ");
        break;
      case 222:
        setFoodImg(answerImgmap.soba);
        setFoodName("とろろそば");
        break;
      default:
        alert("すべての質問に答えて！！！");
        statusReset();
    }
  };

  const statusReset = () => {
    setDisableQ1(false);
    setDisableQ2(false);
    setDisableQ3(false);
    setFoodImg(StndbyImg);
    setCount(0);
    setFoodName("今日のご飯は～～～");
  };

  return (
    <div className="App">
      <div>
        <h1>今日何食べる？</h1>
        <hr />
        <h2>筋トレした？</h2>
        <button id="Q1" disabled={disableQ1} onClick={traningCheckTrue}>
          した
        </button>
        <button id="Q1" disabled={disableQ1} onClick={traningCheckFalse}>
          してない
        </button>
        <h2>昨日のごはんに罪悪感は？</h2>
        <button id="Q2" disabled={disableQ2} onClick={guiltyCheckTrue}>
          ない！
        </button>
        <button id="Q2" disabled={disableQ2} onClick={guiltyCheckFalse}>
          ある…
        </button>
        <h2>今日いいことあった？</h2>
        <button id="Q3" disabled={disableQ3} onClick={awesomeCheckTure}>
          最高の一日！
        </button>
        <button id="Q3" disabled={disableQ3} onClick={awesomeCheckFalse}>
          ないなぁ
        </button>
      </div>
      <hr />
      <button id="Q3" onClick={choiceFood}>
        判定
      </button>
      <h1>{food}</h1>
      <img src={foodImg} alt="ごはんイメージ" />
      <hr />
      <button onClick={statusReset}>リセット</button>
    </div>
  );
}
