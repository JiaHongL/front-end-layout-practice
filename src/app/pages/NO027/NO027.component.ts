import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no027',
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
		.container{
			width: 1200px;
			margin: auto;
			display: flex;
			flex-wrap: wrap;
		}
		.main-header .container{
			align-items: center;
			padding: 20px;
		}
		.banner .container{
			height: 100%;
		}


		.main-title{
			margin: 0 0 50px 0;
			text-align: center;

		}
		.main-title h1{
			width: 100%;
			box-sizing: border-box;
			font-size: 70px;
			margin-bottom: .5em;
			display: flex;
			color: #666;
		}
		.main-title h1::before,
		.main-title h1::after{
			content: '';
			display: block;
			width: 4em;
			height: 1px;
			flex-grow: 1;
			background-color: #aaa;
			margin: auto;
		}
		.main-title h1::before{
			margin-right: .5em;
		}
		.main-title h1::after{
			margin-left: .5em;
		}
		.main-title .txt{
			width: 600px;
			margin: auto;
			box-sizing: border-box;
		}
		.main-title .txt p{
			margin-bottom: 1em;
		}
		.main-title .txt p a{
			color: #fa0;
			text-decoration: none;
		}
		.sec-title {
			margin-top: 2em;
		}
		.sec-title h2{
			text-align: center;
			width: 100%;
			font-size: 32px;
			color: #333;
		}

		.studen-msg{
			display: flex;
			align-items: center;
		}
		.studen-msg .item{
			width: 368px;
			margin: 0 15px;
			display: flex;
			background-color: #fff;
			border: 1px solid #888;
			box-shadow: 0 10px 30px rgba(0,0,0,.3);
			font-family: 'Noto Sans TC', sans-serif;
		}
		.studen-msg .item .pic{
			width: 50%;
		}
		.studen-msg .item .pic img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.studen-msg .item .txt{
			width: 50%;
			padding: 20px;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}
		.studen-msg .item .txt h2{
			font-weight: 500;
			margin-bottom: .4em;
		}
		.studen-msg .item .txt p{
			font-weight: 300;
		}
		.studen-msg .item .txt .btn{
			line-height: 1.5em;
			border:1px solid #ccc;
			padding: 0 1em;
			align-self: flex-end;
			text-decoration: none;
			border-radius: 200px;
			margin-top: auto;
			color: #aaa;
		}
		.studen-msg .item .txt .btn:hover{
			background-color: #ccc;
			color: #fff;
		}

		.main-footer {
			padding: 150px 0 0 0;
			background: linear-gradient(-20deg,#ffaa00 30%,#08c7a5); 
		}
		.footer-item{
			width: 0;
			flex-grow: 1;
			margin: 0 20px;
		}
		.footer-item h4{
			font-size: 24px;
			color: #fff;
			border-bottom: 1px dotted #fff;
			margin-bottom: .5em;
			padding-bottom: .5em;
		}
		.footer-item nav{
			display: flex;
			flex-direction: column;
		}
		.footer-item nav a{
			color: #fff;
			line-height: 1.4;
			text-decoration: none;
			padding: 5px 0;
		}
		.footer-item nav a:hover{
			color: #fa0;
		}
		.footer-subs {
			display: flex;
			flex-direction: column;
		}
		.footer-subs form{
			display: flex;
			width: 100%;
			margin: auto 0px;
		}
		.footer-subs input[type="text"],
		.footer-subs input[type="submit"]{
			border:none;
			padding: 5px 10px;
		}

		.footer-subs input[type="text"]{
			width: 0;
			flex-grow: 1;
		}
		.footer-subs input[type="submit"]{
			color: #70f6df;
			background-color: #3e5293; 
		}
		.conpyright{
			width: 100%;
			text-align: center;
			margin: 150px 0 0 ;
			padding: 10px 0px;
			background-color: #000;
			color: #ccc;
		}
		.section-group{
			padding: 100px 0;
		}
		.force-group{
			background-color: #eee;
		}



		.main-header{
			background-color: #000;
		}
		.main-header .logo{
			width: 100px;
		}
		.main-header .logo img{
			width: 100%;
			vertical-align: middle;
		}
		.main-header .main-nav{
			margin: auto;
		}
		.main-header .main-nav a{
			text-decoration: none;
			color: #fff;
			padding: 5px 1em;
			position: relative;
			transform: translateY(10px);
			transition: .3s;
		}
		.main-header .main-nav a:hover{
			transform: translateY(-10px);
		}
		.main-header .header-search{
			display: flex;
		}
		.main-header .header-search button,
		.main-header .header-search input{
			border:none;
			background-color: #fff;
			padding: 5px 10px;
		}
		.main-header .header-search button:focus,
		.main-header .header-search input:focus{
			outline: none;
		}
		.main-header .header-search button{
			border-radius: 0 200px 200px 0;
		}
		.main-header .header-search input{
			border-radius: 200px 0 0 200px;
		}


		.banner{
			width: 100%;
			height: 700px;
			background-color: #ccc;
			background:
			   linear-gradient(115deg, #fa0 50%, transparent 50%) center center / 100% 100%,
			   url("/assets/goldfish/COVER-fish.jpg") right center / auto 100%;
			background-color: #000;
		}
		.banner-txt{
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			color: #fff;
		}
		.banner-txt h1{
			font-size: 80px;
			border-bottom: 1px solid #333;
			font-weight: 900;
			padding-bottom: .3em;
			margin-bottom: .3em;
		}
		.banner-txt h1 small{
			display: block;
			font-size: 53px;
			font-weight: 700;
		}
		.banner-txt h2{
			font-size: 50px;
			font-weight: 700;
		}
		.banner-txt p{
			font-size: 20px;
			font-weight: 300;
		}

		.fish{
			display: flex;
			width: 1200px;
			margin: 0px auto;
			padding-top: 75px;
		}
		.fish .item{
			width: 370px;
			margin: 0 15px;
			text-align: center;
			border: 10px solid  #f9cec2;
			background-color: #fff;
			border-radius: 20px;
		}
		.fish .item h3{
			color: #f5afac;
		}
		.fish .item p{
			color: #ccc;
		}
		.fish .item .icon{
			width: 150px;
			height: 150px;
			background-color: #fff;
			margin: -75px auto 0;
			font-size: 85px;
			line-height: 150px;
			border-radius: 50%;
			color: #f5afac;
			position: relative;
		}
		.fish .item .icon:before{
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			border-top: 10px solid #f9cec2;
			border-right: 10px solid #f9cec2;
			border-bottom: 10px solid transparent;
			border-left: 10px solid transparent;
			left: -10px;
			top: -10px;
			border-radius: 50%;
			transform: rotate(-45deg);
		}
		.fish .item:hover .fa{
			animation: ss .2s linear infinite alternate;
		}
		.fish .item .txt{
			padding: 20px 20px 2em;
		}
		@keyframes ss{
			  0%{ transform: rotate(-10deg); }
			100%{ transform: rotate(10deg); }
		}

		.force{
			width: 1200px;
			display: flex;
			margin: auto;
		}
		.force .item{
			width: 368px;
			margin: 15px;
			text-align: center;
			background-color: #fff;
			border: 1px solid #ccc;
			transform: translateY(0px);
			transition: .5s;
		}
		.force .item img{
			width: 100%;
			vertical-align: middle;
		}
		.force .item h2{
			border-bottom: 1px solid #888;
			padding-bottom: .3em;
			margin-bottom: .4em;
			font-weight: 900;
			transition: .25s;
		}
		.force .item p{
			line-height: 1.6;
			font-weight: 300;
			transition: .25s;
		}
		.force .item .txt{
			padding: 20px;
			position: relative;
		}
		.force .item .txt:before{
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
		.force .item:hover{
			transform: translateY(-50px);
		}
		.force .item:hover .txt{
			background-image: linear-gradient(0deg,#FB8076, #FEB85D);
		}
		.force .item:hover .txt:before{
			border-left: 184px solid #FEB85D;
			border-right: 184px solid #FEB85D;
		}
		.force .item:hover h2{
			color: #fff;
			border-bottom-color: #fff;
		}
		.force .item:hover p{
			color: #fff;
		}
  `,
  template: `
  	<header class="main-header">
      <div class="container">
        <a href="https://csscoke.com" class="logo">
          <img src="/assets/goldfish/csscoke-logo.png" alt="CSS coke | CSS 可樂">
        </a>
        <nav class="main-nav">
          <a href="https://www.youtube.com/playlist?list=PLqivELodHt3iL9PgGHg0_EF86FwdiqCre">金魚的網頁教學</a>
          <a href="https://www.youtube.com/playlist?list=PLqivELodHt3hxeuLX8PYaI8u1GcDaBoJo">金魚的切版教學</a>
          <a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2799">金魚的CSS選取器</a>
          <a href="#">暴力網頁入門</a>
          <a href="https://csscoke.com/">部落格</a>
          <a href="#">RWD醬子系列</a>
        </nav>
        <form class="header-search">
          <input type="search" name="" id="">
          <button><i class="fa fa-search"></i></button>
        </form>
      </div>
    </header>

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
          <p>		這畫面實在常見，在各種樣版網站可說是設計常客<br>
            金魚切不出來實在說不過去阿</p>
        </div>
      </div>
    </div>

    <div class="section-group fish-group">
      <div class="main-title">
        <div class="container">
          <h1>金魚免費課程系列</h1>
          <div class="txt">
            <p>金魚教學系列的出發點就在於讓新手也能快速了解各種必備的網頁入門知識，所以為了針對一些新手對 CSS 選取器不熟的困擾，Amos 又再次規劃了「<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2799">金魚都能懂的 CSS 選取器 系列</a>」讓新手能夠一次看完一些必學的 CSS 選取器，金魚教學系列不僅免費以外，Amos 還有直播「<a href="https://www.youtube.com/playlist?list=PLqivELodHt3igUDMZVPK_Z5rLbhSg1ZvB">大師常來聊</a>」系列影，內容是針對新手與老手都適宜的方向所規劃，節目中安排了一些業界大師來分享不同主題，並提供觀眾與講者之間的互動與解惑，同樣! 免費!!!</p>
          </div>
        </div>
      </div>
      
      <div class="fish">
        <div class="item">
          <div class="icon">
            <i class="fa fa-gavel"></i>
          </div>
          <div class="txt">
            <h3>金魚都能懂的網頁入門</h3>
            <p>年度最佳網頁入門教學影片，輕鬆學會網頁製作，原始碼原來如此有趣啊。</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <i class="fa fa-thumbs-up"></i>
          </div>
          <div class="txt">
            <h3>金魚都能懂的網頁切版</h3>
            <p>沒想到切版竟然如此簡單，以往的困難迎刃而解，技巧原來這般單純。</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <i class="fa fa-bell"></i>
          </div>
          <div class="txt">
            <h3>金魚都能懂的CSS選取器</h3>
            <p>CSS選取器原來是這道理啊，其實之前都誤解她了，對不起我要好好重新認識妳!</p>
          </div>
        </div>
      </div>
      
      
      
      
      <div class="main-title sec-title">
        <div class="container">
          <h2>金魚見證</h2>
        </div>
      </div>
      
      <div class="studen-msg">
        <div class="container">
          <div class="item">
            <div class="pic">
              <img src="/assets/goldfish/fish4.jpg">
            </div>
            <div class="txt">
              <h2>中壢送重機</h2>
              <p>因為看了金魚，治好了我多年的網盲症啊，真是太感謝金魚教學系列了</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="/assets/goldfish/fish5.jpg">
            </div>
            <div class="txt">
              <h2>新竹金城武</h2>
              <p>有了金魚教學系列，就算當今魚我都願意，金魚實在讓我進步太多啦</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="/assets/goldfish/fish6.jpg">
            </div>
            <div class="txt">
              <h2>高雄初音</h2>
              <p>金魚實在是太棒了，買了很多線上課程最終還是金魚最棒。</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-group force-group">
      <div class="main-title">
        <div class="container">
          <h1>暴力網頁課程系列</h1>
          <div class="txt">
            <p>暴力網頁入門是一門強度不低的入門課程，內容彌補了金魚中深度不足的地方，但也考驗各偽的自主訓練與耐心，只要能紮實的把訓練做好與消化，能力立馬提升。</p>
          </div>
        </div>
      </div>

      <div class="force">
        <div class="item">
          <img src="/assets/goldfish/HTML.png">
          <div class="txt">
            <h2>暴力網頁入門課程</h2>
          <p>一個優質的技術型 Youtube 頻道，旨在讓更多網路新手跳坑學習網站開發技術，平日用簡單易懂的教學方式讓新手能跨進網頁設計領域，並開設知名的網路課程「網頁設計暴力入門班」用紮實的原理解析讓新手能學習到深入的網頁製作技術及知識。知識。知識。</p>
          </div>
        </div>
        <div class="item">
          <img src="/assets/goldfish/RWD.jpg">
          <div class="txt">
            <h2>RWD醬子簡單課程</h2>
            <p>現任 Youtube CSScoke 頻道直播主，屬緣分系直播主，平日不定時會突然發懶不直播（過分！），頻道內分享業界實務技巧，不定時邀請業界大神免費分享實用技巧與經驗，你若有機會跟到直播的話表示你我有緣，何不斗內一下支持直播主製作更多優質節目呢。</p>
          </div>
        </div>
        <div class="item">
          <img src="/assets/goldfish/bs.jpg">
          <div class="txt">
            <h2>Bootstrap4 輕鬆上手</h2>
            <p>不是路不平！而是坑太多！閒暇時看到好東西就會推坑給周遭朋友，不管是好物或是好書甚至是好課，無一不推！看似抽庸很大卻是一毛不取，一個佛系推坑方式，希望能讓周遭朋友用較低的負擔獲得更多技術，並努力轉換成收入，讓所有周遭的朋友們～發大財！</p>
          </div>
        </div>
      </div>
      
      
      
      
      
      <div class="main-title sec-title">
        <div class="container">
          <h2>受虐者見證</h2>
        </div>
      </div>
      <div class="studen-msg">
        <div class="container">
          <div class="item">
            <div class="pic">
              <img src="/assets/goldfish/fish1.jpg">
            </div>
            <div class="txt">
              <h2>台中謝籠戒</h2>
              <p>經過老師詳實的糾正後，我覺得我現在的原始碼看了都神清氣爽，有種回春的感覺啊</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="/assets/goldfish/fish2.jpg">
            </div>
            <div class="txt">
              <h2>台南彭魚厭</h2>
              <p>一次聽不夠就聽兩次，沒想到我第二次還能學到新東西，暴力班真的是隨時都有新東西，太過份啦 。</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="/assets/goldfish/fish3.jpg">
            </div>
            <div class="txt">
              <h2>南港劉得划</h2>
              <p>原以為金魚就是一切了，沒想到除了金魚以外還有這麼多未知的內容，真是太超值了(歡呼)</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-footer">
      <div class="container">
        <div class="footer-item">
          <h4>關於暴力課程</h4>
          <nav>
            <a href="#"><i class="fa fa-angle-right"></i> 課程目標</a>
            <a href="#"><i class="fa fa-angle-right"></i> 辦學理念</a>
            <a href="#"><i class="fa fa-angle-right"></i> 課程宗旨</a>
          </nav>
        </div>
        <div class="footer-item">
          <h4>課程列表</h4>
          <nav>
            <a href="#"><i class="fa fa-angle-right"></i> 暴力網頁入門班</a>
            <a href="#"><i class="fa fa-angle-right"></i> RWD網頁深入理解</a>
            <a href="#"><i class="fa fa-angle-right"></i> CSS3互動動畫設計</a>
            <a href="#"><i class="fa fa-angle-right"></i> Bootstrap框架實務</a>
          </nav>
        </div>
        <div class="footer-item">
          <h4>服務項目</h4>
          <nav>
            <a href="#"><i class="fa fa-angle-right"></i> 網站建置顧問</a>
            <a href="#"><i class="fa fa-angle-right"></i> 網站設計建置</a>
            <a href="#"><i class="fa fa-angle-right"></i> 網站規劃</a>
            <a href="#"><i class="fa fa-angle-right"></i> 企業教育訓練</a>
          </nav>
        </div>
        <div class="footer-item footer-subs">
          <h4>訂閱電子報</h4>
          <form>
            <input type="text" name="">
            <input type="submit" value="訂閱">
          </form>
        </div>
      </div>
      <div class="conpyright">
        Copyright &copy; 2019 金魚都能懂得這個網頁畫面怎麼切
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO027Component { }
