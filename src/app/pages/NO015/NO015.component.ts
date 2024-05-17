import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no015',
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
  .container{
    background-color: #546377;
    height: 100%;
  }
  .side-menu{
    position: relative;
    width: 300px;
    height: 100%;
    padding: 50px 0;
    box-sizing: border-box;
    background-image: linear-gradient(0deg,#3381b0,#c2196c);
    display: flex;
    flex-direction: column;
    box-shadow: 5px 0px 10px hsla(240, 40%, 15%,.6);
    transform: translateX(-100%);
    transition: .3s;
  }
  .side-menu form{
    display: flex;
    margin: 0 10px 50px;
    border-radius: 100px;
    border:1px solid rgb(255,255,255,.4);
  }
  .side-menu form input,
  .side-menu form button{
    border:none;
    background-color: transparent;
    color: #fff;
    padding: 5px 10px;
  }
  .side-menu form input{
    width: 230px;
  }
  .side-menu form button{
    width: 50px;
  }
  .side-menu form input:focus,
  .side-menu form button:focus{
    outline: none;
  }
  .side-menu label{
    position: absolute;
    width: 40px;
    height: 80px;
    background-color: #000;
    color: #fff;
    right: -40px;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 80px;
    text-align: center;
    font-size: 30px;
    border-radius: 0 10px 10px 0;
  }
  #side-menu-switch{
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  #side-menu-switch:checked + .side-menu{
    transform: translateX(0);
  }
  #side-menu-switch:checked + .side-menu label .fa{
    transform: scaleX(-1);
  } 
  .nav a{
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    position: relative;
    font-family: 'Noto Sans TC', sans-serif;
  }
  .nav li{
    position: relative;
  }
  .nav li + li a::before{
    content: '';
    position: absolute;
    border-top: 1px solid rgb(255,255,255,.4);
    left: 10px;
    right: 10px;
    top: 0;
  }
  .nav a .fa{
    margin-right: -1.1em;
    transform: scale(0);
    transition: .3s;
  }
  .nav li:hover .fa{
    margin-right: 0em;
    transform: scale(1);
  }
  // 重點：使用 > 來選取直接子元素，避免子孫元素也被選取，所以可以變多層選單
  .nav li:hover > a{
    background-color: rgba(0,0,0,.5);
  }
  .nav ul{
    display: none;
    position: absolute;
    left: 100%;
    width: 300px;
    top: 6px;
    background-color: rgba(255,255,255,.2);
    box-shadow: 5px 5px 10px hsla(240, 40%, 15%,.6);
  }
  // 重點：使用 > 來選取直接子元素，避免子孫元素也被選取，所以可以變多層選單
  .nav li:hover > ul{
    display: block;
  }
  `,
  template: `
  <div class="container">
    <input type="checkbox" name="" id="side-menu-switch">

    <div class="side-menu">
      <form>
        <input type="search" placeholder="請輸入關鍵字">
        <button><i class="fa fa-search"></i></button>
      </form>
      <ul class="nav">
        <li>
          <a href="#">
            <i class="fa fa-users" aria-hidden="true"></i> 
            鐵人賽
          </a>
          <ul>
            <li>
              <a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2072">金魚都能懂的網頁設計入門</a>
              <ul>
                <li><a href="https://ithelp.ithome.com.tw/articles/10202562">DAY1</a></li>
                <li><a href="https://ithelp.ithome.com.tw/articles/10202928">DAY2</a></li>
                <li><a href="https://ithelp.ithome.com.tw/articles/10202990">DAY3</a></li>
              </ul>
            </li>
            <li>
              <a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2799">金魚都能懂的 CSS 選取器</a>
              <ul>
                <li><a href="https://ithelp.ithome.com.tw/articles/10215667">DAY1</a></li>
                <li><a href="https://ithelp.ithome.com.tw/articles/10216275">DAY2</a></li>
                <li><a href="https://ithelp.ithome.com.tw/articles/10217192">DAY3</a></li>
              </ul>
            </li>
            <li>
              <a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623">金魚都能懂的這個網頁畫面怎麼切</a>
              <ul>
                <li><a href="https://ithelp.ithome.com.tw/articles/10215601">DAY1</a></li>
                <li><a href="https://ithelp.ithome.com.tw/articles/10216684">DAY2</a></li>
                <li><a href="https://ithelp.ithome.com.tw/articles/10217278">DAY3</a></li>
              </ul>
            </li>
            <li>
              <a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2092">連續30天的超實務網頁設計的垂直置中教學</a>
              <ul>
                <li><a href="https://ithelp.ithome.com.tw/articles/10202179">DAY1</a></li>
                <li><a href="https://ithelp.ithome.com.tw/articles/10202205">DAY2</a></li>
                <li><a href="https://ithelp.ithome.com.tw/articles/10202243">DAY3</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-gavel" aria-hidden="true"></i>
            暴力班
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-object-group" aria-hidden="true"></i>
            RWD 醬子
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-globe" aria-hidden="true"></i>
            金魚網頁
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-cutlery" aria-hidden="true"></i>
            金魚切版
          </a>
        </li>
      </ul>
      <label for="side-menu-switch">
        <i class="fa fa-angle-right"></i>
      </label>
    </div>

    <p style="position: fixed;z-index:10; bottom:0; padding: 10px; left:0; right:0; color:#fff;background:#000; text-align:center; font-size:30px;">本文是配合<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623" style="color: #fa0;">此教學文章</a>使用的範例，但內容文字所提的都是真實的呦。</p>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO015Component { }
