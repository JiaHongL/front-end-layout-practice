import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no002',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  styles: `
    .container{
      width:1200px;
      margin:auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1{
        text-align: center;
      }

      .item{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom:10px;
        width: 100%;
      }

      table {
        border-collapse: collapse;
        border: 2px solid rgb(140 140 140);
        font-family: sans-serif;
        font-size: 0.8rem;
        letter-spacing: 1px;
        width:100%;

        thead,
        tfoot {
          background-color: rgb(228 240 245);
        }

        th,
        td {
          border: 1px solid rgb(160 160 160);
          padding: 8px 10px;
        }

        td:last-of-type {
          text-align: center;
        }
      }

    }
  `,
  template: `
    <div class="container">
      <h1>切版練習</h1>
      
      <div class="item">
        <table>
          <thead>
            <tr>
              <th scope="col" colspan="5">
                <a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623" target="blank">
                  金魚都能懂的這個網頁畫面怎麼切
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a routerLink="/NO001">
                  1.圖文滿版區塊
                </a>
              </td>
              <td>
                <a routerLink="/NO002">
                  2.互動圖文卡片
                </a>
              </td>
              <td>
                <a routerLink="/NO003">
                  3.人員介紹卡片
                </a>
              </td>
              <td>
                <a routerLink="/NO004">
                  4.交錯漂浮版
                </a>
              </td>
              <td>
                <a routerLink="/NO005">
                  5.超通用橫式版面 
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a routerLink="/NO006">
                  6.網頁頁尾版塊
                </a>
              </td>
              <td>
                <a routerLink="/NO007">
                  7.導覽列
                </a>
              </td>
              <td>
                <a routerLink="/NO008">
                  8.變化你的導覽列
                </a>
              </td>
              <td>
                <a routerLink="/NO009">
                  9.網站麵包屑
                </a>
              </td>
              <td>
                <a routerLink="/NO010">
                  10.方塊酥版面
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a routerLink="/NO011">
                  11.破格式設計
                </a>
              </td>
              <td>
                <a routerLink="/NO012">
                  12.表格怎麼切
                </a>
              </td>
              <td>
                <a routerLink="/NO013">
                  13.側邊選單怎麼切
                </a>
              </td>
              <td>
                <a routerLink="/NO014">
                  14.收合式側邊選單
                </a>
              </td>
              <td>
                <a routerLink="/NO015">
                  15.多層次收合選單
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a routerLink="/NO016">
                  16.訂單進度條
                </a>
              </td>
              <td>
                <a routerLink="/NO017">
                  17.登入表單
                </a>
              </td>
              <td>
                <a routerLink="/NO018">
                  18.訊息對話紀錄
                </a>
              </td>
              <td>
                <a routerLink="/NO019">
                  19.時間軸
                </a>
              </td>
              <td>
                <a routerLink="/NO020">
                  20.旋轉拼接方塊
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a routerLink="/NO021">
                  21.不規則邊緣
                </a>
              </td>
              <td>
                <a routerLink="/NO022">
                  22.文字排版-上集
                </a>
              </td>
              <td>
                <a routerLink="/NO023">
                  23.文字排版-中集
                </a>
              </td>
              <td>
                <a routerLink="/NO024">
                  24.文字排版-下集
                </a>
              </td>
              <td>
                <a routerLink="/NO025">
                  25.文字排版-完結
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a routerLink="/NO026">
                  26.快速版面拼拼樂
                </a>
              </td>
              <td>
                <a routerLink="/NO027">
                  27.拼拼版-重構
                </a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="item">
        <table>
          <thead>
            <tr>
              <th scope="col" colspan="5">
                其他
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO000Component { }
