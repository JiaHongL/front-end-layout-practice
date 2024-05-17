import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no012',
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
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: linear-gradient(90deg,#3d5894,#08c7a5);
  }
  .table{
    width: 800px;
    margin: auto;
  }
  .table table{
    width: 100%;
    border: 3px double #666;
    background: #fff;
    border-radius: 10px;
  }
  .table thead {
    background: #333;
    color: #fff;
  }
  // 重點：第一個th的左上角和最後一個th的右上角要有圓角
  .table thead th:first-child{
    border-radius: 7px 0 0 0;
  }
  .table thead th:last-child{
    border-radius: 0 7px 0 0;
  }
  .table tbody tr:nth-child(even){
    background-color: #ffa;
  }
  .table tbody a{
    color: #777;
  }
  .table tbody a:hover{
    color: #f00;
  }
  .table tbody tr:hover{
    background-color: #FEE;
  }
  // 重點：第一個td的左下角和最後一個td的右下角要有圓角
  .table tfoot td:first-child{
    border-radius: 0 0 0 7px;
  }
  .table tfoot td:last-child{
    border-radius: 0 0 7px 0;
  }
  .table th,
  .table td{
    border: 1px solid #666;
    padding: 10px 10px;
    font-family: 'Noto Sans TC', sans-serif;
  }
  // 重點：caption-side: bottom; 讓caption在下方
  .table caption{
    caption-side: bottom;
    text-align: right;
    padding: 10px 0;
    color: #CCC;
  }
  .table caption a{
    color: #eee;
  }
  `,
  template: `
  <div class="container">
    <div class="table">
      <table>
        <caption>
          CSS coke 範例一覽表:資料來源-<a href="https://www.youtube.com/c/csscoke">CSS coke Youtube頻道</a>
        </caption>
        <thead>
          <tr>
            <th scope="col">基礎版面</th>
            <th scope="col">破格式版面</th>
            <th scope="col">滿版</th>
            <th scope="col">選單</th>
            <th scope="col">表單</th>
            <th scope="col">表格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://youtu.be/rwTMBmnIHcY" target="_blank">圖文滿版</a>
            </td>
            <td>
              <a href="https://youtu.be/aN7zFs_AT8s" target="_blank">交錯漂浮版</a>
            </td>
            <td>
              <a href="https://youtu.be/rwTMBmnIHcY" target="_blank">圖文滿版</a>
            </td>
            <td>
              <a href="https://youtu.be/7BydlKueTgY" target="_blank">導覽列</a>
            </td>
            <td>敬請期待</td>
            <td>
              <a href="https://youtu.be/zRREfvlLFIU" target="_blank">表格怎麼切</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://youtu.be/IocyLERRdko" target="_blank">互動圖文卡片</a>
            </td>
            <td>
              <a href="https://youtu.be/l-sQNXNrw3s" target="_blank">破格式設計</a>
            </td>
            <td>
              <a href="https://youtu.be/-mmzaE6eLzY" target="_blank">超通用橫式版面</a>
            </td>
            <td>
              <a href="https://youtu.be/9xT8kziyYko" target="_blank">變化你的導覽列</a>
            </td>
            <td>敬請期待</td>
            <td>敬請期待</td>
          </tr>
          <tr>
            <td>
              <a href="https://youtu.be/2Qs0EuqJIYA" target="_blank">人員介紹卡片</a>
            </td>
            <td>敬請期待</td>
            <td>敬請期待</td>
            <td>
              <a href="https://youtu.be/n0yPFtpVRLU" target="_blank">網站麵包屑</a>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a href="https://youtu.be/-mmzaE6eLzY" target="_blank">超通用橫式版面</a>
            </td>
            <td></td>
            <td></td>
            <td>敬請期待</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a href="https://youtu.be/Y02yl_QQNv0" target="_blank">網頁頁尾</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a href="https://youtu.be/Xhhzzc9YZW4" target="_blank">方塊酥版面</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>備註</td>
            <td colspan="5">以上資料經 CSS coke 同意轉貼</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <p style="position: fixed;z-index:10; bottom:0; padding: 10px; left:0; right:0; color:#fff;background:#000; text-align:center; font-size:30px;">本文是配合<a href="https://ithelp.ithome.com.tw/users/20112550/ironman/2623" style="color: #fa0;">此教學文章</a>使用的範例，但內容文字所提的都是真實的呦。</p>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NO012Component { }
