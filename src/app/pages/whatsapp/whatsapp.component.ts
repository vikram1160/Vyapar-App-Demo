import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild ,HostListener } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-whatsapp-marketing',
  standalone: true,
  imports: [TabsModule, CommonModule, DialogModule,
    InputTextModule,Accordion, AccordionPanel, AccordionHeader, AccordionContent,
    ButtonModule,
    FormsModule],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappMarketingComponent {

  display: boolean = false;
selectedCard: any = null;


  isMobile: boolean = false;

  constructor() {
    this.checkScreen();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 768; // 📱 Mobile breakpoint
  }

showDialog(card: any) {
  this.selectedCard = card;
  this.display = true;
}

  // display = false;
  businessName = 'Vyapar App';
  contactPerson = '';
  contactNumber = '7887769374';
  additionalText = '🎉 Flat 10% discount on Sundays';

  @ViewChild('preview') preview!: ElementRef;

  downloadImage() {
  if (!this.selectedCard || !this.selectedCard.image) {
    console.warn('No image selected to download.');
    return;
  }

  const imageUrl = this.selectedCard.image;

  // Create a hidden <a> element and simulate click
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'selected-image.png';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


  shareOnWhatsApp() {
  if (!this.selectedCard) {
    console.warn("No card selected to share.");
    return;
  }

  const imageUrl = this.selectedCard.image || '';
  const business = this.businessName?.trim() || 'My Company';
  const contact = this.contactNumber?.trim() || '';
  const additional = this.additionalText?.trim() || '';

  const message = `🌟 *${business}*%0A📞 ${contact}%0A📝 ${additional}%0A🔗 ${imageUrl}`;

  const whatsappNumber = '917887589262'; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(whatsappUrl, '_blank');
}


  

selectImage(card: any) {
  this.selectedCard = card;
  console.log("Selected Card:", card);
}
  cards = [
    {
      image: 'assets/images/image_09-07-2025_13-59-22.png',
      title: 'Sensex sees biggest single-day jump in 4 years',
      description: 'Ends 2,975 points higher'
    },
    {
      image: 'assets/images/image_09-07-2025_14-00-18.png',
      title: 'We stopped nuclear conflict<br>between India and Pakistan',
      description: '— US President Trump'
    },
    {
      image: 'assets/images/image_09-07-2025_13-59-55.png',
      title: 'Tiranga Yatra<br><small>13 to 23 May</small>',
      description: 'BJP will conduct a 10-day Yatra to highlight Operation Sindoor.'
    },
    {
      image: 'assets/images/image_09-07-2025_14-02-49.png',
      title: 'NIFTY AT <span class="text-success">over 885 Points</span>',
      description: 'Biggest intraday gain since Feb 2021.'
    },
    {
      image: 'assets/images/image_09-07-2025_14-03-40.png',
      title: 'Congratulations!',
      description: 'Nifty continues to register biggest intraday gain since Feb 2021.'
    },
    {
      image: 'assets/images/image_09-07-2025_14-03-11.png',
      title: 'भारत व पाकिस्तान के बीच<br>सीज़फायर के बाद 2000 अंक बढ़ा सेंसेक्स',
      description: 'Sensex jumps after ceasefire agreement'
    },
    {
      image: 'assets/images/image_09-07-2025_14-01-30.png',
      title: 'THANK YOU <b>Virat Kohli</b>',
      description: 'For redefining test cricket'
    },
    {
      image: 'assets/images/image_09-07-2025_14-02-10.png',
      title: 'THE KING<br><b>VIRAT KOHLI</b>',
      description: 'The King of passion and pride'
    },
    {
      image: 'assets/images/image_09-07-2025_14-02-19.png',
      title: 'There will be another captain...<br>But never another <b>VIRAT KOHLI</b>',
      description: ''
    },
    {
      image: 'assets/images/image_09-07-2025_14-17-22.png',
      title: '<b>VIRAT KOHLI</b>',
      description: 'A player who made test cricket his canvas'
    }
  ];


  // DIV 2 
  // DIV 2 
  // DIV 2 


  newsCards = [
    {
      image: 'assets/images/LN4.png',
      title:
        'Heavy to extremely heavy rainfall warning issued for <b>14 states</b>',
      subtitle: 'Assam, Kerala, Goa, TN, etc.'
    },
    {
      image: 'assets/images/LN2.png',
      title: 'IIT Bombay suspends agreements with Turkish universities'
    },
    {
      image: 'assets/images/LN.png',
      title:
        'Russia launches war\'s largest drone attack against Ukraine after peace talks'
    },
    {
      image: 'assets/images/LN1.png',
      title:
        'Lashkar terrorist <b>Saifullah</b>, mastermind of Indian attacks, shot dead in Pak'
    },
    {
      image: 'assets/images/LN3.png',
      title:
        '2 ex-Jihadists appointed to WH panel by Trump, one trained in LeT camp in Pak'
    },
    {
      image: 'assets/images/LN5.png',
      title:
        'Indian Army shares new video of attack on Pak military targets under Op Sindoor'
    },
    {
      image: 'aassets/images/LN4.png',
      title:
        'Indian javelin star <b>Neeraj Chopra</b> throws personal best at Doha Diamond League'
    },
    {
      image: 'aassets/images/LN7.png',
      title: '800 Gujaratis cancel Turkey trip',
      subtitle: "Say 'Least we can do for India'"
    },
    {
      image: 'aassets/images/LN8.png',
      title:
        'LINE OF BEGGARS begins where Pakistan stands: <b>Defence Minister</b>'
    },
    {
      image: 'assets/images/LN4.png',
      title: '3 terrorists killed under Operation Nader'
    }
  ];



  // DIV 3  
  // DIV 3  

  quotes = [
    {
      title: 'Good Morning',
      text: 'Each sunrise brings a new chance to grow.',
      image: 'assets/images/Gm.png'
    },
    {
      title: 'Good Morning',
      text: 'The world is waiting for your light.',
      image: 'assets/images/gm1.png'
    },
    {
      title: 'Good Morning',
      text: 'Every sunrise is a new opportunity to shine.',
      image: 'assets/images/gm2.png'
    },
    {
      title: 'Good Morning',
      text: 'What we do today is what matters most.',
      image: 'assets/images/gm4.png'
    },
    {
      title: 'Good Morning',
      text: 'Wake up with determination, go to bed with satisfaction.',
      image: 'assets/images/gm5.png'
    },
    {
      title: 'Good Morning',
      text: 'Success begins with a single step. Ignite your potential today.',
      image: 'assets/images/gm6.png'
    },
    {
      title: 'Good Morning',
      text: 'Let’s make today count together.',
      image: 'assets/images/gm7.png'
    },
    {
      title: 'Good Morning',
      text: 'Rise and soar towards your dreams.',
      image: 'assets/images/gm8.png'
    },
    {
      title: 'Good Morning',
      text: 'Each sunrise gives a new beginning.',
      image: 'assets/images/gm9.png'
    }
  ];



}