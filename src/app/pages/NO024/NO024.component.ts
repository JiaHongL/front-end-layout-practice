import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no024',
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
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 0 30px #ccc;
    position: relative;
    overflow: hidden;
  }
  .container h1{
    width: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
    font-size: 220px;
    padding-left: 15px;
    color: rgba(200,200,200,.3);
    position: absolute;
    left: 0;
    top: 50px;
    line-height: .6em;
  }
  .container .txt{
    width: 600px;
    flex-shrink: 0;
    box-sizing: border-box;
    column-count: 2;
    column-gap: 30px;
    padding: 15px;
    position: relative;
    z-index: 1;
  }
  .container .txt p{
    margin-bottom: 1em;
  }
  .container .txt p:first-child:first-letter{
    font-size: 60px;
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
export class NO024Component { }
