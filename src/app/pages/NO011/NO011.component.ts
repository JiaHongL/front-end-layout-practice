import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no011',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styles: `
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html,body{
    height: 100%;
  }
  body{
    display: flex;
    align-items: center;
    background-image: linear-gradient(-45deg,#fffaf0,#f8c3c1 );
  }
  .wrap{
    display: flex;
    width: 1200px;
    margin: 100px auto;
    /*background-color: #999;*/
    // 重點：加入破格的高度
    padding-top: 75px;
  }
  .item{
    width: 370px;
    margin: 0 15px;
    text-align: center;
    border: 10px solid  #f9cec2;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 10px 20px 50px #f7b6a7;
    font-family: 'Noto Sans TC', sans-serif;
  }
  .item h3{
    color: #f5afac;
    font-size: 24px;
    margin-bottom: 1em;
  }
  .item p{
    color: #ccc;
    line-height: 1.7;
  }
  .item .icon{
    width: 150px;
    height: 150px;
    background-color: #fff;
    margin: -75px auto 0;
    font-size: 85px;
    line-height: 150px;
    border-radius: 50%;
    color: #f5afac;
    position: relative;
  }
  .item .icon:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 10px solid #f9cec2;
    border-right: 10px solid #f9cec2;
    border-bottom: 10px solid transparent;
    border-left: 10px solid transparent;
    // 重點：扣掉圓形往上和往左的位移，讓圓形在正中間
    left: -10px;
    top: -10px;
    border-radius: 50%;
    // 重點：旋轉45度，讓半圓形外框轉到正確的位置
    transform: rotate(-45deg);
  }
  .item:hover .fa{
    animation: ss .2s linear infinite alternate;
  }
  .item .txt{
    padding: 20px 20px 2em;
  }
  @keyframes ss{
      0%{ transform: rotate(-10deg); }
    100%{ transform: rotate(10deg); }
  }
  `,
  template: `
    <div class="wrap">
      <div class="item">
        <div class="icon">
          <i class="fa fa-gavel"></i>
        </div>
        <div class="txt">
          <h3>暴力網頁入門</h3>
          <p>暴力網頁入門是一門強度不低的入門課程，內容彌補了金魚中深度不足的地方，但也考驗各偽的自主訓練與耐心，只要能紮實的把訓練做好與消化，能力立馬提升。</p>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="fa fa-thumbs-up"></i>
        </div>
        <div class="txt">
          <h3>金魚都懂切版</h3>
          <p>金魚都懂的這個網頁怎麼切，是 IThome 鐵人賽的主題，主要訴求在簡單快速將一個網頁畫面完成，但也由於時間有限，所以沒有處理RWD部分，留給廣大網友腦補囉。</p>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="fa fa-bell"></i>
        </div>
        <div class="txt">
          <h3>CSScoke</h3>
          <p>固定每週二晚上在 youtube 平台直播，偶爾會偷懶休息，內容從基礎入門到業界實務應有盡有，從技術到經驗無一不談，還有大師常來聊系列，免費讓你學到大師能力。</p>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO011Component { }
