import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no013',
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
    background-color: #546377;
  }
  .side-menu{
    width: 300px;
    height: 100%;
    padding: 50px 0;
    box-sizing: border-box;
    background-image: linear-gradient(0deg,#3381b0,#c2196c);
    display: flex;
    flex-direction: column;
    box-shadow: 5px 0px 10px hsla(240, 40%, 15%,.6);
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
  nav a{
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    position: relative;
    font-family: 'Noto Sans TC', sans-serif;
  }
  // 重點：底線要在文字下方
  nav a + a::before{
    content: '';
    position: absolute;
    border-top: 1px solid rgb(255,255,255,.4);
    left: 10px;
    right: 10px;
    top: 0;
  }
  // 重點：.fa 靠右，且隱藏
  nav a .fa{
    margin-right: -1.1em;
    transform: scale(0);
    transition: .3s;
  }
  // 重點：hover時 .fa 顯示
  nav a:hover .fa{
    margin-right: 0em;
    transform: scale(1);
  }
  `,
  template: `
  <div class="side-menu">
    <form>
      <input type="search" placeholder="請輸入關鍵字">
      <button><i class="fa fa-search"></i></button>
    </form>
    <nav>
      <a href="#">
        <i class="fa fa-users" aria-hidden="true"></i> 
        鐵人賽
      </a>
      <a href="#">
        <i class="fa fa-gavel" aria-hidden="true"></i>
        暴力班
      </a>
      <a href="#">
        <i class="fa fa-object-group" aria-hidden="true"></i>
        RWD 醬子
      </a>
      <a href="#">
        <i class="fa fa-globe" aria-hidden="true"></i>
        金魚網頁
      </a>
      <a href="#">
        <i class="fa fa-cutlery" aria-hidden="true"></i>
        金魚切版
      </a>
    </nav>
  </div>

  <p style="position: fixed;z-index:10; bottom:0; padding: 10px; left:0; right:0; color:#fff;background:#000; text-align:center; font-size:30px;">本文是配合<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623" style="color: #fa0;">此教學文章</a>使用的範例，但內容文字所提的都是真實的呦。</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO013Component { }
