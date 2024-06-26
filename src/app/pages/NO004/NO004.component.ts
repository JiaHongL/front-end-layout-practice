import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no002',
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
    .container{
      padding: 100px 0;
      // 重點：fixed 可以讓背景圖片不隨著捲動
      background: linear-gradient(20deg,#3d5493,#1aa2a0) fixed center center / 100% 100%;
    }
    .wrap{
      width: 1200px;
      margin: auto;
    }
    .item{
      display: flex;
      align-items: center;
      margin-bottom: 70px;
      font-family: 'Noto Sans TC', sans-serif;
    }
    .item h2{ 
      font-weight: 900;
      margin-bottom: 1em;
    }
    .item p{ 
      font-weight: 300;
      line-height: 1.6;
    }
    .item .pic{
      width: 55%;
      flex-shrink: 0;
    }
    .item .pic img{
      width: 100%;
      // 重點：vertical-align: middle 可以讓圖片垂直置中
      vertical-align: middle;
    }
    .item .txt{
      width: 55%;
      flex-shrink: 0;
      padding: 50px 30px;
      box-sizing: border-box;
      position: relative;
      z-index: 1;
    }
    // 重點：可以選取 item 的第一個子元素 (向右移動 10%)
    .item > :first-child{
      margin-right: -10%;
    }
    // 重點：第一個 item 的背景色
    .item:nth-child(1) .txt{
      background-color: rgba(240, 174, 193, .8);
    }
    // 重點：第二個 item 的背景色
    .item:nth-child(2) .txt{
      background-color: rgba(42, 253, 208, .8);
    }
    // 重點：第三個 item 的背景色
    .item:nth-child(3) .txt{
      background-color: rgba(254, 201, 121, .8);
    }
    // 重點：第四個 item 的背景色
    .item:nth-child(4) .txt{
      background-color: rgba(149, 219, 214, .8);
    }
  `,
  template: `
  <div class="container">
    <div class="wrap">
      <!-- item 1  -->
      <div class="item">
        <div class="pic">
          <img src="https://picsum.photos/600/350?random=10">
        </div>
        <div class="txt">
          <h2>金魚都懂的切版</h2>
          <p>金魚號稱只有七秒的記憶，但其實這是錯誤的，科普一下你就會知道金魚的記憶力其實不只有七秒，所以，你有幾秒的記憶? </p>
        </div>
      </div>
      <!-- item 2  -->
      <div class="item">
        <div class="txt">
          <h2>我的記憶力只有三秒</h2>
          <p>據稱切出稀飯板的人在全世界只有1%不到! 這樣的話你相信嗎? 如果你不相信的話，何不當隻金魚跟著AMOS一起學切版呢? 切完之後你就成為了那稀少的人了，那麼我會...幫你申請瀕臨絕種動物保護(被打)。</p>
        </div>
        <div class="pic">
          <img src="https://picsum.photos/600/350?random=11">
        </div>
      </div>
      <!-- item 3  -->
      <div class="item">
        <div class="pic">
          <img src="https://picsum.photos/600/350?random=12">
        </div>
        <div class="txt">
          <h2>這裡打很重要的暴力班廣告</h2>
          <p>暴力班，Amos 開設的一門線上視訊課程，內容由淺入深，由平和至暴力，從原理到實做，從實做到需求變更，從需求變更到實務理解，從...講那麼多幹嘛? 報名下去你就知道了啦。</p>
        </div>
      </div>
      <!-- item 4  -->
      <div class="item">
        <div class="txt">
          <h2>這邊是敲碗區</h2>
          <p>金魚的切版敲碗敲了一年總算...碗破了，切版的金魚就跑出來了，你還想看甚麼? 你要不要去拿個碗出來敲看看? 把碗敲破了的話，你就會...給你媽媽罵。</p>
        </div>
        <div class="pic">
          <img src="https://picsum.photos/600/350?random=13">
        </div>
      </div>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO004Component { }
