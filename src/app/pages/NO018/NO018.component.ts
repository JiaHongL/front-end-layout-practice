import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no018',
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
  html,body{
    height: 100%;
  }
  .container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d3effb;
  }
  .dialogue{
    width: 500px;
    padding: 20px;
    box-shadow: 0 0 10px #3e92cc;
    background-color: #f4f5f7;
  }
  .user{
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    font-family: 'Noto Sans TC', sans-serif;
  }
  .local {
    justify-content: flex-end;
  }
  .user .avatar{
    width: 60px;
    text-align: center;
    flex-shrink: 0;
  }
  .user .pic{
    border-radius: 50%;
    overflow: hidden;
  }
  .user .pic img{
    width: 100%;
    vertical-align: middle;
  }
  .user .txt{
    background-color: #aaa;
    padding: 16px;
    border-radius: 10px;
    position: relative;
  }
  .remote .txt{
    margin-left: 20px;
    margin-right: 80px;
    color: #a1b4c5;
    background-color: #fff;
  }
  // 重點：使用 order 來調整順序 text 在 avatar 之前
  .local .txt{
    margin-right: 20px;
    margin-left: 80px;
    order: -1;
    background-color: #3e92cc;
    color: #FFF;
  }
  .remote .txt::before,
  .local .txt::before{
    content: '';
    position: absolute;
    top: 20px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .remote .txt::before{
    border-right: 10px solid #fff;
    left: -10px;
  }
  .local .txt::before{
    border-left: 10px solid #3e92cc;
    right: -10px;
  }
  `,
  template: `
  <div class="container">
    <div class="dialogue">
      <div class="user remote">
        <div class="avatar">
          <div class="pic">
            <img src="https://picsum.photos/100/100?random=12">
          </div>
          <div class="name">Alvee</div>
        </div>
        <div class="txt">
          老公你好帥!
        </div>
      </div>
      <div class="user local">
        <div class="avatar">
          <div class="pic">
            <img src="https://picsum.photos/100/100?random=16">
          </div>
          <div class="name">Amos</div>
        </div>
        <div class="txt">
          那是為了配合超正的妳啊!
        </div>
      </div>
      <div class="user remote">
        <div class="avatar">
          <div class="pic">
            <img src="https://picsum.photos/100/100?random=12">
          </div>
          <div class="name">Alvee</div>
        </div>
        <div class="txt">
          老公你這麼會講話!是不是又偷買了甚麼玩具?
        </div>
      </div>

      <div class="user local">
        <div class="avatar">
          <div class="pic">
            <img src="https://picsum.photos/100/100?random=16">
          </div>
          <div class="name">Amos</div>
        </div>
        <div class="txt">
          怎麼可能，我從來都不說謊的，你想太多了
        </div>
      </div>
      <div class="user remote">
        <div class="avatar">
          <div class="pic">
            <img src="https://picsum.photos/100/100?random=12">
          </div>
          <div class="name">Alvee</div>
        </div>
        <div class="txt">
          玩具拿出來...(直視)
        </div>
      </div>
      <div class="user local">
        <div class="avatar">
          <div class="pic">
            <img src="https://picsum.photos/100/100?random=16">
          </div>
          <div class="name">Amos</div>
        </div>
        <div class="txt">
          ...是......(遞)
        </div>
      </div>
    </div>
    <p style="position:absolute; bottom: 40px;">本文是配合<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623">此教學文章</a>使用的範例，但內容文字所提的都是真實的呦。</p>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO018Component { }
