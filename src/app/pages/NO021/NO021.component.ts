import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no021',
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
		.banner{
			height: 700px;
			background: url('https://picsum.photos/1200/700?random=240') center top / cover;
		}
		.sec {
			position: relative;
		}
		.sec .container{
			width: 1200px;
			margin: auto;
			display: flex;
			padding: 100px 0;
			position: relative;
			z-index: 2;
		}
		.sec .item{
			width: 570px;
			margin: 0 15px;
			font-family: 'Noto Sans TC', sans-serif;
		}
		.sec .item h2{
			margin-bottom: 1.3em;
		}
		.sec .item p{
			line-height: 1.7;
			margin-bottom: 1.6em;
		}
    // 重點：利用 box-shadow 製作不規則圓形
		.sec::after{
			content: '';
			display: block;
			position: absolute;
			width: 200px;
			height: 200px;
			background-color: #FFF;
			top: 0;
			left: 50%;
			transform: translateX(-30%) translateY(-50%);
			border-radius: 50%;
			box-shadow: 178px 0 0 30px #fff,
					       327px 34px 0 20px #fff,
					       480px 9px 0 60px #fff,
					       690px 71px 0 60px #fff,
					       880px 0 0 89px #fff,

					       -178px 0 0 30px #fff,
					       -327px 34px 0 20px #fff,
					       -480px 9px 0 60px #fff,
					       -690px 71px 0 60px #fff,
					       -880px 0 0 89px #fff,
					       -1100px 50px 0 89px #fff,
					       
					       100px 0px 0 56px rgba(0,0,10,.5),
					       298px 10px 0 56px rgba(0,0,10,.5),
					       540px -40px 0 50px rgba(0,0,10,.5),
					       740px -30px 0 30px rgba(0,0,10,.5),
					       880px -100px 0 80px rgba(0,0,10,.5),
					       1000px 0px 0 80px rgba(0,0,10,.5),

							/*...*/
					       -60px 0px 0 56px rgba(0,0,10,.5),
					       -298px 10px 0 56px rgba(0,0,10,.5),
					       -540px -40px 0 50px rgba(0,0,10,.5),
					       -740px -30px 0 30px rgba(0,0,10,.5),
					       -780px -70px 0 80px rgba(0,0,10,.5),
					       -1200px 0px 0 80px rgba(0,0,10,.5);
		}
// 重點：利用 ::before 製作遮罩，讓不規則圓形只顯示在特定區域
.sec::before{
	content: '';
	position: absolute;
	width: 100%;
	height: 200px;
	background-color: #fff;
	z-index: 1;
	top: 0;
	left: 0;
}
  `,
  template: `
  <div class="banner"></div>
  <div class="sec">
    <div class="container">
      <div class="item">
        <h2>關於金魚都能懂的網頁切版</h2>
        <p>金魚都能懂的切版系列是 Amos 精心規劃的一系列切版入門教學影片，針對新手入門網頁設計的人士來說，這是一個非常適合的教學影片，甚麼! 你說你切不出來?! 有沒有搞錯啊!? 這樣你都切不出來你要怎麼去業界混!? 你這金魚都不如的傢伙! 咳...咳...突然開啟了吐槽模式，對不起!</p>
        <p>由於業界可能會拿到的版面各式各樣都有，在金魚都能懂的網頁切版中，每一個範例都能夠深入的延伸思考更多的變化與使用情境，縱使教學中沒有提到RWD的網頁設計，但仍舊能引發思考這類版面在RWD設計時應該要有怎樣的變化，金魚都能懂的網頁切版可謂是非常棒的一套入門教學影片阿。</p>
      </div>
      <div class="item">
        <h2>關於暴力網頁入門班</h2>
        <p>暴力網頁入門班是 Amos 為了補足金魚影片中不足的內容所特別開設的一門視訊收費課程，其中會將金魚中無法一一講解清楚的觀念都深入的解析，畢竟太多原理面的講解大家可能看不下去啊啊啊!</p>
        <p>在暴力網頁入門班中會有高強度的觀念洗禮外，還有切版實務的思考模式，並將 CSS 原始觀念融入到切版實務中，並且會有詳細的作業檢討，作業檢討會從觀念、心態、精神狀態到個人壞習慣一一的揪取出來，讓你精氣神都獲得最大的<del>折磨</del>>升級，進而知道如何改善錯誤並提升原始碼的撰寫品質。暴力網頁入門班實在是一門跟鐵人賽一樣<del>自虐</del>精實的優質課程啊。</p>
      </div>
    </div>
  </div>

  <p style="position: fixed;z-index:10; bottom:0; padding: 10px; left:0; right:0; color:#fff;background:#000; text-align:center; font-size:30px;">本文是配合<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623" style="color: #fa0;">此教學文章</a>使用的範例，但內容文字所提的都是真實的呦。</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO021Component { }
