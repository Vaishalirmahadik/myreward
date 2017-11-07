import { Component, EventEmitter, OnInit, ElementRef, Output } from '@angular/core';
import { AppConfig } from '../../app.config';
import { AppState } from '../../app.service';

declare let jQuery: any;
// import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.template.html'
})
export class Navbar implements OnInit {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  @Output() toggleChatEvent: EventEmitter<any> = new EventEmitter();
  $el: any;
  config: any;
  show:any='';
  showDialog = false;
  radioModel = 'login';
  cart:any;
appState:any;
_subscription:any;
  constructor(el: ElementRef, config: AppConfig,appState:AppState) {
    this.appState = appState;
    this.$el = jQuery(el.nativeElement);
    this.config = config.getConfig();
    console.log(this.radioModel);
          this.cart = this.appState.getcart();
          this._subscription = this.appState.nameChange.subscribe((value) => { 
      this.cart = value; 
    });

  }

  toggleSidebar(state): void {
    this.toggleSidebarEvent.emit(state);
  }

  toggleChat(): void {
    this.toggleChatEvent.emit(null);
  }

  ngOnInit(): void {

    // this.deadlineinput = {
    //     formatted: ''
    // };
    setTimeout(() => {
      let $chatNotification = jQuery('#chat-notification');
      $chatNotification.removeClass('hide').addClass('animated fadeIn')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
          $chatNotification.removeClass('animated fadeIn');
          setTimeout(() => {
            $chatNotification.addClass('animated fadeOut')
              .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd' +
                ' oanimationend animationend', () => {
                $chatNotification.addClass('hide');
              });
          }, 8000);
        });
      $chatNotification.siblings('#toggle-chat')
        .append('<i class="chat-notification-sing animated bounceIn"></i>');
    }, 4000);

    this.$el.find('.input-group-addon + .form-control').on('blur focus', function(e): void {
      jQuery(this).parents('.input-group')
        [e.type === 'focus' ? 'addClass' : 'removeClass']('focus');
    });
  }

   mouseEnter(div : string){
      console.log("mouse enter : " + div);
      this.show=div;
   }

   mouseLeave(div : string){
     console.log('mouse leave :' + div);
      this.show=' ';
     
   }
}
