import { Routes } from '@angular/router';

import { NO000Component } from './pages/NO000/NO000.component';
import { NO001Component } from './pages/NO001/NO001.component';
import { NO002Component } from './pages/NO002/NO002.component';
import { NO003Component } from './pages/NO003/NO003.component';
import { NO004Component } from './pages/NO004/NO004.component';
import { NO005Component } from './pages/NO005/NO005.component';
import { NO006Component } from './pages/NO006/NO006.component';
import { NO007Component } from './pages/NO007/NO007.component';
import { NO008Component } from './pages/NO008/NO008.component';
import { NO009Component } from './pages/NO009/NO009.component';
import { NO010Component } from './pages/NO010/NO010.component';
import { NO011Component } from './pages/NO011/NO011.component';
import { NO012Component } from './pages/NO012/NO012.component';
import { NO013Component } from './pages/NO013/NO013.component';
import { NO014Component } from './pages/NO014/NO014.component';
import { NO015Component } from './pages/NO015/NO015.component';
import { NO016Component } from './pages/NO016/NO016.component';
import { NO017Component } from './pages/NO017/NO017.component';
import { NO018Component } from './pages/NO018/NO018.component';
import { NO019Component } from './pages/NO019/NO019.component';
import { NO020Component } from './pages/NO020/NO020.component';
import { NO021Component } from './pages/NO021/NO021.component';
import { NO022Component } from './pages/NO022/NO022.component';
import { NO023Component } from './pages/NO023/NO023.component';
import { NO024Component } from './pages/NO024/NO024.component';
import { NO025Component } from './pages/NO025/NO025.component';
import { NO026Component } from './pages/NO026/NO026.component';
import { NO027Component } from './pages/NO027/NO027.component';

const goldFish: Routes = [
    {
        path: 'NO001',
        component: NO001Component,
        title: '1.圖文滿版區塊',
    },
    {
        path: 'NO002',
        component: NO002Component,
        title: '2.互動圖文卡片',
    },
    {
        path: 'NO003',
        component: NO003Component,
        title: '3.人員介紹卡片',
    },
    {
        path: 'NO004',
        component: NO004Component,
        title: '4.交錯漂浮版',
    },
    {
        path: 'NO005',
        component: NO005Component,
        title: '5.超通用橫式版面',
    },
    {
        path: 'NO006',
        component: NO006Component,
        title: '6.網頁頁尾版塊',
    },
    {
        path: 'NO007',
        component: NO007Component,
        title: '7.導覽列',
    },
    {
        path: 'NO008',
        component: NO008Component,
        title: '8.變化你的導覽列',
    },
    {
        path: 'NO009',
        component: NO009Component,
        title: '9.網站麵包屑',
    },
    {
        path: 'NO010',
        component: NO010Component,
        title: '10.方塊酥版面',
    },
    {
        path: 'NO011',
        component: NO011Component,
        title: '11.破格式設計',
    },
    {
        path: 'NO012',
        component: NO012Component,
        title: '12.表格怎麼切',
    },
    {
        path: 'NO013',
        component: NO013Component,
        title: '13.側邊選單怎麼切',
    },
    {
        path: 'NO014',
        component: NO014Component,
        title: '14.收合式側邊選單',
    },
    {
        path: 'NO015',
        component: NO015Component,
        title: '15.多層次收合選單',
    },
    {
        path: 'NO016',
        component: NO016Component,
        title: '16.訂單進度條',
    },
    {
        path: 'NO017',
        component: NO017Component,
        title: '17.登入表單',
    },
    {
        path: 'NO018',
        component: NO018Component,
        title: '18.訊息對話紀錄',
    },
    {
        path: 'NO019',
        component: NO019Component,
        title: '19.時間軸',
    },
    {
        path: 'NO020',
        component: NO020Component,
        title: '20.旋轉拼接方塊',
    },
    {
        path: 'NO021',
        component: NO021Component,
        title: '21.不規則邊緣',
    },
    {
        path: 'NO022',
        component: NO022Component,
        title: '22.文字排版-上集',
    },
    {
        path: 'NO023',
        component: NO023Component,
        title: '23.文字排版-中集',
    },
    {
        path: 'NO024',
        component: NO024Component,
        title: '24.文字排版-下集',
    },
    {
        path: 'NO025',
        component: NO025Component,
        title: '25.文字排版-完結',
    },
    {
        path: 'NO026',
        component: NO026Component,
        title: '26.快速版面拼拼樂',
    },
    {
        path: 'NO027',
        component: NO027Component,
        title: '27.拼拼圖-重構',
    },
];

const other: Routes = [];

export const routes: Routes = [
    {
        path: 'NO000',
        component: NO000Component,
        title: '首頁',
    },
    ...goldFish,
    ...other,
    {
        path: '**',
        redirectTo: 'NO000',
    }
];
