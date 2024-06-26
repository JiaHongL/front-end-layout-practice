import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no019',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styles: `
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .wrap{
    width: 960px;
    margin: auto;
    font-family: 'Noto Sans TC', sans-serif;
  }
  h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }
  h1 ~ p{
    line-height: 1.7;
  }
  .wrap:after{
    content: '';
    display: block;
    width: 100%;
    height: 0px;
    clear: both;
  }
  .timeline{
    padding: 100px 0 200px;
  }
  .timeline li{
    width: 50%;
    box-sizing: border-box;
    padding: 20px 0;
    position: relative;
  }
  .timeline li:nth-child(odd){
    float: left;
    padding-right: 100px;
  }
  .timeline li:nth-child(even){
    float: right;
    padding-left: 100px;
    transform: translateY(50%);
  }
  .timeline li:nth-child(odd)::after{
    content: '';
    position: absolute;
    z-index: -1;
    width: 1px;
    top: 0;
    height: 100%;
    background-color: #ccc;
    right: 0;
  }
  .timeline li:last-child::after{
    height: 50%;
  }

  .timeline li:before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #aaa;
    z-index: 2;
  }
  .timeline li:nth-child(odd)::before{
    right: -10px;
  }
  .timeline li:nth-child(even)::before{
    left: -10px;
  }
  .timeline a{
    display: block;
    text-decoration: none;
    background-color: #fff;
    border:1px solid #aaa;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px #888; 
  }
  .timeline a:hover{
    background-color: #6fa5f6;
  }
  .timeline a:hover h2,
  .timeline a:hover p{
    color: #fff;
  }
  .timeline h2{
    color: #333;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 700;
    margin-bottom: 1em;
  }
  .timeline p{
    color: #666;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 100;
    line-height: 1.5;
  }

  .timeline h2::after{
    content: '';
    position: absolute;
    height: 1px;
    width: 100px;
    background-color: #aaa;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .timeline li:nth-child(odd) h2::after{
    right: 0;
  }
  .timeline li:nth-child(even) h2::after{
    left: 0;
  }
  `,
  template: `
  <div class="wrap">
    <h1>金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎 系列</h1>
    <p>金魚都能懂的系列教學，是 Amos 針對網頁設計新手所設計的一套入門教學影片，一系列的教學影片從 HTML 到 CSS 以及 bootstrap 框架還有 jQuery 通通都包含在內了，可謂是新手入門最佳教學影片阿，重點是...完全免費!!!</p>
    <p>本文是配合<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623">此教學文章</a>使用的範例，但內容文字所提的都是真實的呦。</p>
    <ul class="timeline">
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10215601">
          <h2>圖文滿版區塊</h2>	
          <p>本篇重點問題回顧: 列出重點希望各位可以好	好的將影片回放複習喔，另外幾個重點問題中，Amos已經有影片的會直接附上連結給各位參考取用。 為何需要reset...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10216684">
          <h2>互動圖文卡片</h2>	
          <p>大家好～ 我是 Amos，這次要跟大家分享的是	切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10217278">
          <h2>人員介紹卡片</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10217785">
          <h2>交錯漂浮版</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10218334">
          <h2>超通用橫式版面</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10218494">
          <h2>1到5切版技巧原理彙整</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10219352">
          <h2>網頁頁尾版塊</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10219845">
          <h2>導覽列</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10220327">
          <h2>變化你的導覽列</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10220837">
          <h2>網站麵包屑</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10221293">
          <h2>方塊酥版面</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10221779">
          <h2>破格式設計</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10222225">
          <h2>表格怎麼切</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10222665">
          <h2>側邊選單怎麼切</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10222969">
          <h2>動態收合式側邊選單</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10223584">
          <h2>進化了!多層次收合選單!</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10223902">
          <h2>訂單進度條</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10224402">
          <h2>登入表單</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10224481">
          <h2>訊息對話紀錄</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
      <li>
        <a href="https://ithelp.ithome.com.tw/articles/10225133">
          <h2>時間軸</h2>
          <p>大家好～ 我是 Amos，這次要跟大家分享的是切版的教學，如果您本身對於 HTML & CSS 的基礎還不了解的話，建議您可以先看去年鐵人的基礎教學 本...</p>
        </a>
      </li>
    </ul>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO019Component { }
