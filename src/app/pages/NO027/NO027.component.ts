import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no027',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styleUrl: './NO027.component.scss',
  template: `
  	<header class="main-header">
      <div class="container">
        <a href="https://csscoke.com" class="logo">
          <img src="./assets/goldfish/csscoke-logo.png" alt="CSS coke | CSS 可樂">
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
              <img src="./assets/goldfish/fish4.jpg">
            </div>
            <div class="txt">
              <h2>中壢送重機</h2>
              <p>因為看了金魚，治好了我多年的網盲症啊，真是太感謝金魚教學系列了</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="./assets/goldfish/fish5.jpg">
            </div>
            <div class="txt">
              <h2>新竹金城武</h2>
              <p>有了金魚教學系列，就算當今魚我都願意，金魚實在讓我進步太多啦</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="./assets/goldfish/fish6.jpg">
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
          <img src="./assets/goldfish/HTML.png">
          <div class="txt">
            <h2>暴力網頁入門課程</h2>
          <p>一個優質的技術型 Youtube 頻道，旨在讓更多網路新手跳坑學習網站開發技術，平日用簡單易懂的教學方式讓新手能跨進網頁設計領域，並開設知名的網路課程「網頁設計暴力入門班」用紮實的原理解析讓新手能學習到深入的網頁製作技術及知識。知識。知識。</p>
          </div>
        </div>
        <div class="item">
          <img src="./assets/goldfish/RWD.jpg">
          <div class="txt">
            <h2>RWD醬子簡單課程</h2>
            <p>現任 Youtube CSScoke 頻道直播主，屬緣分系直播主，平日不定時會突然發懶不直播（過分！），頻道內分享業界實務技巧，不定時邀請業界大神免費分享實用技巧與經驗，你若有機會跟到直播的話表示你我有緣，何不斗內一下支持直播主製作更多優質節目呢。</p>
          </div>
        </div>
        <div class="item">
          <img src="./assets/goldfish/bs.jpg">
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
              <img src="./assets/goldfish/fish1.jpg">
            </div>
            <div class="txt">
              <h2>台中謝籠戒</h2>
              <p>經過老師詳實的糾正後，我覺得我現在的原始碼看了都神清氣爽，有種回春的感覺啊</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="./assets/goldfish/fish2.jpg">
            </div>
            <div class="txt">
              <h2>台南彭魚厭</h2>
              <p>一次聽不夠就聽兩次，沒想到我第二次還能學到新東西，暴力班真的是隨時都有新東西，太過份啦 。</p>
              <a href="#" class="btn">more</a>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="./assets/goldfish/fish3.jpg">
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
