import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no004',
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
      display: flex;
      align-items: center;
      background-color: #003;
      height: 100vh;
    }
    .wrap{
      width: 1200px;
      display: flex;
      margin: auto;
    }
    .item{
      width: 368px;
      margin: 15px;
      text-align: center;
      background-color: #fff;
      border: 1px solid #ccc;
      transform: translateY(0px);
      transition: .5s;
    }
    .item img{
      width: 100%;
      vertical-align: middle;
    }
    // 重點：文字顏色的動畫效果
    .item h2{
      font-family: 'Noto Sans TC', sans-serif;
      border-bottom: 1px solid #888;
      padding-bottom: .3em;
      margin-bottom: .4em;
      font-weight: 900;
      transition: .25s;
    }
    // 重點：動畫效果
    .item p{
      font-family: 'Noto Sans TC', sans-serif;
      line-height: 1.6;
      font-weight: 300;
      transition: .25s;
    }
    .item .txt{
      padding: 20px;
      position: relative;
    }
    // 重點：畫倒三角形
    .item .txt:before{
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      top: 0;
      border-top: 50px solid transparent;
      border-left: 184px solid #fff;
      border-right: 184px solid #fff;
      transform: translateY(-100%);
    }
    // 重點：hover時的動畫效果(上移)
    .item:hover{
      transform: translateY(-50px);
    }
    // 重點：hover時的漸層背景色
    .item:hover .txt{
      background-image: linear-gradient(0deg,#FB8076, #FEB85D);
    }
    // 重點：hover時的倒三角形顏色
    .item:hover .txt:before{
      border-left: 184px solid #FEB85D;
      border-right: 184px solid #FEB85D;
    }
    // 重點：hover時的文字顏色
    .item:hover h2{
      color: #fff;
      border-bottom-color: #fff;
    }
    // 重點：hover時的文字顏色
    .item:hover p{
      color: #fff;
    }
  `,
  template: `
    <div class="container">
      <div class="wrap">
        <div class="item">
          <img src="https://picsum.photos/300/300?random=10">
          <div class="txt">
            <h2>CSS可樂</h2>
            <p>一個優質的技術型 Youtube 頻道，旨在讓更多網路新手跳坑學習網站開發技術，平日用簡單易懂的教學方式讓新手能跨進網頁設計領域，並開設知名的網路課程「網頁設計暴力入門班」用紮實的原理解析讓新手能學習到深入的網頁製作技術及知識。知識。</p>
          </div>
        </div>
        <div class="item">
          <img src="https://picsum.photos/300/300?random=20">
          <div class="txt">
            <h2>Amos</h2>
            <p>現任 Youtube CSScoke 頻道直播主，屬緣分系直播主，平日不定時會突然發懶不直播（過分！），頻道內分享業界實務技巧，不定時邀請業界大神免費分享實用技巧與經驗，有機會跟到直播的話表示你我有緣，何不斗內支持直播主製作更多優質節目呢。</p>
          </div>
        </div>
        <div class="item">
          <img src="https://picsum.photos/300/300?random=30">
          <div class="txt">
            <h2>推坑大魔王</h2>
            <p>不是路不平！而是坑太多！閒暇時看到好東西就會推坑給周遭朋友，不管是好物或是好書甚至是好課，無一不推！看似抽庸很大卻是一毛不取，一個佛系推坑方式，希望能讓周遭朋友用較低的負擔獲得更多技術，並努力轉換成收入，讓所有周遭的朋友發大財！</p>
          </div>
        </div>
      </div>
    <div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO003Component { }
