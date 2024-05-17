import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no020',
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
  ul{
    width: 960px;
    margin: auto;
    padding: 100px 0;
    display: flex;
    flex-wrap: wrap;
  }
  li{
    width: 200px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    margin: 0 60px -40px;
    position: relative;
    font-size: 30px;
    font-family: 'Noto Sans TC', sans-serif;
  }
  li::before{
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: rotate(45deg);
  }
  li:nth-child(n+4){
    left: 160px;
  }
  li:nth-child(n+7){
    left: 0;
  }
  .box1::before{ background-color: #3ed0cd; }
  .box2::before{ background-color: #b2e086; }
  .box3::before{ background-color: #ef8899; }
  .box4::before{ background-color: #fc7b51; }
  .box5::before{ background-color: #2fccf9; }
  .box6::before{ background-color: #5f539b; }
  .box7::before{ background-color: #fce920; }
  .box8::before{ background-color: #7cc85c; }
  .box9::before{ background-color: #ffa55e; }
  li:hover{
    color: #fff;
  }
  li:hover::before{
    background-color: #000;
  }
  `,
  template: `
  <ul>
    <li class="box1">金魚</li>
    <li class="box2">暴力網頁</li>
    <li class="box3">切版</li>
    <li class="box4">網頁入門</li>
    <li class="box5">CSS</li>
    <li class="box6">HTML</li>
    <li class="box7">網頁教學</li>
    <li class="box8">RWD網頁</li>
    <li class="box9">Bootstrap</li>
  </ul>

  <p style="position: fixed;z-index:10; bottom:0; padding: 10px; left:0; right:0; color:#fff;background:#000; text-align:center; font-size:30px;">本文是配合<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623" style="color: #fa0;">此教學文章</a>使用的範例，但內容文字所提的都是真實的呦。</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO020Component { }
