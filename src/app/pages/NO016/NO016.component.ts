import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no016',
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
  html,body{
    height: 100%;
  }
  .wrap{
    height: 100%;
    display: flex;
    align-items: center;
  }
  .list {
    width: 100%;
    display: flex;
    justify-content: center;

  }
  .list li{
    font-family: 'Noto Sans TC', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    background-image: linear-gradient(9deg,#185a9d,#43cea2);
    border-radius: 50%;
    position: relative;
    font-size: 30px;
    color: #fff;
    box-shadow: 0px 0px 0px 4px #fff;
  }
  .list li .fa{
    font-size: 60px;
    margin-bottom: 6px;
  }
  .list li + li{
    margin-left: 100px;
  }
  .list li + li::before{
    content: '';
    position: absolute;
    width: 100px;
    height: 5px;
    background-color: #43cea2;
    z-index: -1;
    box-shadow: 0px 0px 0px 3px #fff;
    top: 0;
    bottom: 0;
    left: -100px;
    margin: auto;
  }
  // 重點：使用 ~ 選擇器，選取 li.active 後面的所有 li
  .list li.active ~ li{
    background-image: linear-gradient(9deg,#999,#ccc);
  }
  // 重點：使用 ~ 選擇器，選取 li.active 後面的所有 li::before
  .list li.active ~ li::before{
    background-color: #999;
  }
  `,
  template: `
  <div class="wrap">
    <ol class="list">
      <li>
        <i class="fa fa-file-text" aria-hidden="true"></i>
        收到訂單
      </li>
      <li class="active">
        <i class="fa fa-archive" aria-hidden="true"></i>
        撿貨中
      </li>
      <li>
        <i class="fa fa-truck" aria-hidden="true"></i>
        運送中
      </li>
      <li>
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        已送達
      </li>
    </ol>

    <p style="position: fixed;z-index:10; bottom:0; padding: 10px; left:0; right:0; color:#fff;background:#000; text-align:center; font-size:30px;">本文是配合<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623" style="color: #fa0;">此教學文章</a>使用的範例，但內容文字所提的都是真實的呦。</p>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO016Component { }
