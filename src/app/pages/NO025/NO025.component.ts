import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no025',
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
    font-family: 'Noto Sans', sans-serif;
  }
  .container{
    width: 1200px;
    margin: auto;
    text-align: center;
  }
  .container h1{
    width: 100%;
    box-sizing: border-box;
    font-size: 70px;
    margin-bottom: .5em;
  }
  .container .txt{
    box-sizing: border-box;
    position: relative;
    padding: 1em;
  }
  .container .txt p{
    margin-bottom: 1em;
  }
  .container .txt::before,
  .container .txt::after{
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
  }
  .container .txt::before{
    left: 0;
    top: 0;
    border-top: 3px solid #AAA;
    border-left: 3px solid #AAA;
  }
  .container .txt::after{
    right: 0;
    bottom: 0;
    border-right: 3px solid #AAA;
    border-bottom: 3px solid #AAA;
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
export class NO025Component { }
