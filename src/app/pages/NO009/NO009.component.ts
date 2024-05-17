import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no009',
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
  .container{
    background-color: #562870;
    height: 100vh;
  }
  .wrap{
    padding: 10px 0;
    background: #ec008b;
    box-shadow: 0px 5px 5px hsla(260,100%,20%,.5);
  }
  .breadcrumb{
    width: 90%;
    margin: auto;
    display: flex;
  }
  .breadcrumb li{
    padding: 0 20px;
  }
  .breadcrumb a{
    text-decoration: none;
    color: #fff;
    font-family: 'Noto Sans TC', sans-serif;
  }
  .breadcrumb a:hover,
  .breadcrumb li:last-child a{
    color: #ff0;
  }
  .breadcrumb li + li{
    padding-left: 0;
  }
  // 重點：在 li 後面加上 li:before，意思是除了第一個 li 以外，每個 li 前面都會加上一個 > 符號
  .breadcrumb li + li:before{
    content: '>';
    color: #fff;
    margin-right: 20px;
  }
  `,
  template: `
    <div class="container">
      <div class="wrap">
        <ol class="breadcrumb">
          <li><a href="#">CSS可樂</a></li>
          <li><a href="#">CSS教學</a></li>
          <li><a href="#">金魚系列</a></li>
          <li><a href="#">切版技巧</a></li>
          <li><a href="#">Flex</a></li>
          <li><a href="#">麵包屑</a></li>
        </ol>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO009Component { }
