import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no023',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styles: `
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap");
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .wrap{
    margin: 100px 0;
  }
  .container {
    position: relative;
    width: 1200px;
    margin: auto;
  }
  .container h1{
    width: 400px;
    font-size: 90px;
    box-sizing: border-box;
    padding: 15px;
    color: #aaa;
    float: right;
    position: relative;
    font-family: 'Noto Sans', sans-serif;
  }
  .container h1::before{
    content:'';
    display: block;
    position: absolute;
    z-index: -1;
    width: 200px;
    height: 200px;
    /*border: 30px solid #F1C555;*/
    background-color: #F1C555;
    bottom: 0;
    transform: rotate(20deg);
  }
  .container h1::after{
    content:'';
    display: block;
    position: absolute;
    z-index: -2;
    width: 200px;
    height: 200px;
    border: 30px solid #EEE;
    bottom: 0;
    transform: rotate(10deg);
  }
  .container .txt{
    column-count: 2;
    column-gap: 30px;
  }
  .container p{
    line-height: 1.6;
    margin-bottom: 1em;
    font-family: 'Noto Sans', sans-serif;
  }
  `,
  template: `
  <div class="wrap">
    <div class="container">
      <h1>CSS COKE IS AWESOME</h1>
      <div class="txt">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>本文是配合<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623">此教學文章</a>使用的範例，但內容文字所提的都是真實的呦。</p>
      </div>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO023Component { }
