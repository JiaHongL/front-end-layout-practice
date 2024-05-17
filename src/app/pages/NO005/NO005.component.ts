import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no005',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styles: `
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Noto Sans TC", sans-serif;
  }
  .wrap{
    height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(-30deg,#fdaecb,#e7597f,#fe8556);
  }
  .container{
    width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .item{
    width: 368px;
    margin: 15px;
    display: flex;
    background-color: #fff;
    border: 1px solid #888;
    box-shadow: 0 10px 30px rgba(160,0,0,.5);
    font-family: 'Noto Sans TC', sans-serif;
  }
  .item .pic{
    width: 50%;
  }
  .item .pic img{
    width: 100%;
    height: 100%;
    // 重點：圖片不變形
    object-fit: cover;
  }
  .item .txt{
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .item .txt h2{
    font-weight: 500;
    margin-bottom: .4em;
  }
  .item .txt p{
    font-weight: 300;
  }
  .item .txt .btn{
    line-height: 26px;
    border:1px solid #ccc;
    padding: 0 1em;
    align-self: flex-end;
    text-decoration: none;
    border-radius: 200px;
    margin-top: auto;
    color: #aaa;
  }
  .item .txt .btn:hover{
    background-color: #ccc;
    color: #fff;
  }
  `,
  template: `
  <div class="wrap">
    <div class="container">

      <div class="item">
        <div class="pic">
          <img src="https://picsum.photos/400/400?random=10">
        </div>
        <div class="txt">
          <h2>金魚都能懂的網頁入門</h2>
          <p>年度最佳網頁入門教學影片，輕鬆學會網頁製作，原始碼原來如此有趣啊。</p>
          <a href="#" class="btn">more</a>
        </div>
      </div>

      <div class="item">
        <div class="pic">
          <img src="https://picsum.photos/400/400?random=11">
        </div>
        <div class="txt">
          <h2>金魚都能懂的網頁切版</h2>
          <p>沒想到切版竟然如此簡單，以往的困難迎刃而解，技巧原來這般單純。</p>
          <a href="#" class="btn">more</a>
        </div>
      </div>

      <div class="item">
        <div class="pic">
          <img src="https://picsum.photos/400/400?random=12">
        </div>
        <div class="txt">
          <h2>金魚都能懂的CSS選取器</h2>
          <p>CSS選取器原來是這道理啊，其實之前都誤解她了，對不起 9523 !</p>
          <a href="#" class="btn">more</a>
        </div>
      </div>

    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO005Component { }
