import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no001',
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
  .banner{
    width: 100%;
    height: 100vh;
    background-color: #ccc;
    // 重點：多重背景、漸層色彩怎麼寫
    background:
      linear-gradient(115deg, #7bf 50%, transparent 50%) center center / 100% 100%,
      url("https://picsum.photos/1200/600?random=10") right center / auto 100%;
      font-family: 'Noto Sans TC', sans-serif;

      .container{
        width: 100%;
        max-width: 1440px;
        height: 100%;
        margin: auto;
      }

  }

  .banner-txt{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1{
      font-size: 80px;
      border-bottom: 1px solid #333;
      font-weight: 900;
      padding-bottom: .3em;
      margin-bottom: .3em;

      small{
        display: block;
        font-size: 53px;
        font-weight: 700;
      }
      
    }

    h2{
      font-size: 50px;
      font-weight: 700;
    }

    p{
      font-size: 20px;
      font-weight: 300;
    }
  }
  `,
  template: `
  <div class="banner">
    <div class="container">
      <div class="banner-txt">
        <h1>
          金魚都能懂的
          <small>
            這個網頁畫面怎麼切
          </small>
        </h1>
        <h2>圖文滿版區塊</h2>
        <p>這畫面實在常見，在各種樣版網站可說是設計常客<br>金魚切不出來實在說不過去阿</p>
      </div>
    </div>
	</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO001Component {}
