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
  .wrap{
    width: 100%;
    display: flex;
    font-family: 'Noto Sans TC', sans-serif;
  }
  .item{
    width: 25%;
    position: relative;
  }
  .item img{
    width: 100%;
    vertical-align: middle;
  }
  .item .txt{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    background-color: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: opacity .5s;
  }
  .item:hover .txt{
    opacity: 1;
  }
  .item h2{
    font-size: 28px;
    color: #ff0;
    font-weight: 500;
  }
  // 重點：設定 h2:after 的樣式 (偽元素，這裡是底線)
  .item h2:after{
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    margin: 10px 0;
    background-color: #ff0;
    transition: width .5s .3s;
  }
  // 重點：使用父層 item hover 時改變 h2:after 的寬度
  .item:hover h2:after{
    width: 100%;
  }
  .item p{
    font-size: 18px;
    color: #fff;
    font-weight: 100;
  }
  `,
  template: `
    <div class="wrap">
      <div class="item">
        <img src="https://picsum.photos/500/400?random=10">
        <div class="txt">
          <h2>金魚都能懂的這個網頁畫面怎麼切 : 互動圖文卡片</h2>
          <p>互動圖文卡片是我們在網頁中經常見到的另一種稀飯版，不會切你就遜掉囉。</p>
        </div>
      </div>
      <div class="item">
        <img src="https://picsum.photos/500/400?random=5">
        <div class="txt">
          <h2>稀飯版都不會切你怎麼轉職？來我的網頁暴力班，保證讓你邊痛邊學會</h2>
          <p>把技能學好是需要一點點痛一點點爽一點點過癮跟一點點的暴力，不信你來報名試試看啊！</p>
        </div>
      </div>
      <div class="item">
        <img src="https://picsum.photos/500/400?random=20">
        <div class="txt">
          <h2>不知道你有沒有聽過網頁的都市傳說，絕對不要相信沒有驗證過的謠言</h2>
          <p>網頁的都市傳說很多種，其中一種叫做兒子絕對定位老爸就要相對定位，這啥鬼？</p>
        </div>
      </div>
      <div class="item">
        <img src="https://picsum.photos/500/400?random=30">
        <div class="txt">
          <h2>買線上課程前停個幾秒想想，還是先把免費的金魚教學練一練吧</h2>
          <p>買了不會看，那不如來看免錢的，縱使不看也不會有罪惡感，更不會心痛啊。</p>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO002Component { }
