import {Subject} from 'rxjs';

const news = new Subject();

const tv1 = news.subscribe(v=> console.log(v+'via Sam TV'))
const tv2 = news.subscribe(v=> console.log(v+'via Lokmat TV'))

news.next('Breaking news...');
news.next('The war is over.....')