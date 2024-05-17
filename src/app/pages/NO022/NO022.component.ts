import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no022',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styles: `
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .container{
    width: 1200px;
    margin: auto;
    padding: 100px 0;
  }
  .container h1{
    box-sizing: border-box;
    padding: 0 15px;
    margin-bottom: 30px;
    font-size: 100px;
    color: #aaa;
    position: relative;
  }
  .container h1:after{
    content: '';
    display: block;
    width: 100%;
    height: 70px;
    bottom: 0;
    background-color: #EEE;
    position: absolute;
    z-index: -1;
  }
  // 重點：利用 column-count 製作多欄文字
  .container .txt{
    box-sizing: border-box;
    padding: 0 15px;
    column-count: 2;
    column-gap: 30px;
  }
  // 重點：利用 first-letter 製作首字母大寫
  .container .txt p:first-letter{
    font-size: 40px;
    float: left;
    padding-right: 10px;
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
export class NO022Component { }
