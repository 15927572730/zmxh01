import img1 from '../images/01.png'
import img2 from '../images/02.png'
import img3 from '../images/03.png'
import img4 from '../images/04.png'
import img5 from '../images/05.png'
import img6 from '../images/06.png'
import bgImg from '../images/bj.jpg'

const myMixin = {
  data() {
    return {
      img1,img2,img3,img4,img5,img6,bgImg,
      cards: [],
      flippedCards: [], // 用于记录已经翻转的卡片
      flipperIds: [], // 用于记录已经翻转的卡片的 ID
    };
  },
  methods: {
    initializeCards() {
      const cardTypes = 6;
      const cardCount = 12;
      const cardsPerType = cardCount / cardTypes;
      const cardImages = [img1,img2,img3,img4,img5,img6];
      let cards = [];
      for (let i = 0; i < cardTypes; i++) {
        for (let j = 0; j < cardsPerType; j++) {
          cards.push({
            frontSrc: cardImages[i],
            id: i + 1,
            backSrc: bgImg,
            isFlipped: false,
            show: true
          });
        }
      }
      // 打乱数组顺序
      this.cards = this.shuffleArray(cards);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    flipCard(item,index) {
        if (this.flippedCards.length < 2) {
          this.cards[index].isFlipped = !this.cards[index].isFlipped;
          if (this.cards[index].isFlipped) {
            this.flippedCards.push(index);
            this.flipperIds = item.id;
          } else {
            this.flippedCards.splice(this.flippedCards.indexOf(index), 1);
          }
        } else if (!this.cards[index].isFlipped) {
          const firstFlippedIndex = this.flippedCards.shift();
          console.log('id', this.flipperIds)
          if (this.cards[firstFlippedIndex].id === item.id) {
            this.cards[firstFlippedIndex].show = false;
            this.cards[index].show = false;
          } else {
            this.cards[firstFlippedIndex].isFlipped = false;
            this.cards[index].isFlipped = true;
            this.flippedCards.push(index);
          }
        }
    }
  },
  mounted() {
    this.initializeCards();       
  }
};
export default myMixin;