import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ThongPage} from '../thong/thong';
import { SlidesPage} from '../slides/slides';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoAbout(){
    this.navCtrl.push(AboutPage);
  }
  gotoContact(){
    this.navCtrl.push(ContactPage);
  }
  gotoThong(){
    this.navCtrl.push(ThongPage);
  }
  gotoSlides(){
    this.navCtrl.push(SlidesPage);
  }



}
