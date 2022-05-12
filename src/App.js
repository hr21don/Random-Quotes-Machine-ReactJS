//Quotes Credit: https://type.fit/api/quotes

import './App.css';
import React,{useState} from 'react';

export default function App() {

  let initialState={
    quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
    author:"Thomas Edison"
    }
  const [quote, setquote] = useState(initialState);
  let quotes=[
    {
      quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
      author:"Thomas Edison"
    },
    {
      "quote": "You can observe a lot just by watching.",
      "author": "Yogi Berra"
    },
    {
      "quote": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln"
    },
    {
      "quote": "Difficulties increase the nearer we get to the goal.",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "quote": "Fate is in your hands and no one elses",
      "author": "Byron Pulsifer"
    },
    {
      "quote": "Be the chief but never the lord.",
      "author": "Lao Tzu"
    },
    {
      "quote": "Nothing happens unless first we dream.",
      "author": "Carl Sandburg"
    },
    {
      "quote": "Well begun is half done.",
      "author": "Aristotle"
    },
    {
      "quote": "Life is a learning experience, only if you learn.",
      "author": "Yogi Berra"
    },
    {
      "quote": "Self-complacency is fatal to progress.",
      "author": "Margaret Sangster"
    },
    {
      "quote": "Peace comes from within. Do not seek it without.",
      "author": "Buddha"
    },
    {
      "quote": "What you give is what you get.",
      "author": "Byron Pulsifer"
    },
    {
      "quote": "We can only learn to love by loving.",
      "author": "Iris Murdoch"
    },
    {
    "quote": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark"
    },
    {
    "quote": "You'll see it when you believe it.",
    "author": "Wayne Dyer"
    },
    {
    "quote": "To lead people walk behind them.",
    "author": "Lao Tzu"
    },
    {
    "quote": "Having nothing, nothing can he lose.",
    "author": "William Shakespeare"
    },
    {
    "quote": "Trouble is only opportunity in work clothes.",
    "author": "Henry J. Kaiser"
    },
    {
    "quote": "A rolling stone gathers no moss.",
    "author": "Publilius Syrus"
    },
    {
    "quote": "Ideas are the beginning points of all fortunes.",
    "author": "Napoleon Hill"
    },
    {
    "quote": "Everything in life is luck.",
    "author": "Donald Trump"
    },
    {
    "quote": "Doing nothing is better than being busy doing nothing.",
    "author": "Lao Tzu"
    },
    {
    "quote": "Trust yourself. You know more than you think you do.",
    "author": "Benjamin Spock"
    },
    {
    "quote": "Study the past, if you would divine the future.",
    "author": "Confucius"
    },
    {
    "quote": "Well done is better than well said.",
    "author": "Benjamin Franklin"
    },
    {
    "quote": "Bite off more than you can chew, then chew it.",
    "author": "Ella Williams"
    },
    {
    "quote": "Work out your own salvation. Do not depend on others.",
    "author": "Buddha"
    },
    {
    "quote": "One today is worth two tomorrows.",
    "author": "Benjamin Franklin"
    },
    {
    "quote": "Once you choose hope, anythings possible.",
    "author": "Christopher Reeve"
    },
    {
    "quote": "God always takes the simplest way.",
    "author": "Albert Einstein"
    },
    {
    "quote": "One fails forward toward success.",
    "author": "Charles Kettering"
    },
    {
    "quote": "Learning is a treasure that will follow its owner everywhere",
    "author": "Chinese proverb"
    },
    {
    "quote": "Be as you wish to seem.",
    "author": "Socrates"
    },
    {
      "quote": "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
      "author": "Sue Patton Thoele"
    },
    {
      "quote": "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
      "author": "Frank Crane"
    },
    {
      "quote": "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
      "author": "Lao Tzu"
    },
    {
      "quote": "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
      "author": "Kathleen Norris"
    },
    {
      "quote": "Choose a job you love, and you will never have to work a day in your life.",
      "author": "Confucius"
    },
    {
      "quote": "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
      "author": "Eckhart Tolle"
    },
    {
      "quote": "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
      "author": "Anne Bronte"
    },
    {
      "quote": "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
      "author": "Richard Bach"
    },
    {
      "quote": "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
      "author": "Desiderius Erasmus"
    },
    {
      "quote": "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
      "author": "Arthur Rubinstein"
    },
    {
      "quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
      "author": "Louis Pasteur"
    },
    {
      "quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
      "author": "Rumi"
    },
    {
      "quote": "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
      "author": "Sogyal Rinpoche"
    },
    {
      "quote": "We see things not as they are, but as we are. Our perception is shaped by our previous experiences.",
      "author": "Dennis Kimbro"
    },
    {
      "quote": "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
      "author": "William Penn"
    },
    {
      "quote": "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
      "author": "Immanuel Kant"
    },
    {
      "quote": "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
      "author": "Buddha"
    },
    {
      "quote": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
      "author": "Byron Pulsifer"
    },
    {
      "quote": "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
      "author": "Robert Lynd"
    },
    {
      "quote": "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
      "author": "Ralph Emerson"
    },
    {
      "quote": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
      "author": "Donald Trump"
    },
    {
      "quote": "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
      "author": "Eleanor Roosevelt"
    },
    {
      "quote": "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
      "author": "Robert Fulghum"
    },
    {
      "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
      "author": "Bruce Lee"
    },
    {
      "quote": "Every man takes the limits of his own field of vision for the limits of the world.",
      "author": "Arthur Schopenhauer"
    },
    {
      "quote": "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
      "author": "Andre Gide"
    },
    {
      "quote": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
      "author": "Sai Baba"
    },
    {
      "quote": "Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?",
      "author": "Dalai Lama"
    },
    {
      "quote": "Life is like a sewer. What you get out of it depends on what you put into it.",
      "author": "Tom Lehrer"
    },
    {
      "quote": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
      "author": "Bruce Lee"
    },
    {
      "quote": "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
      "author": "Alfred Sheinwold"
    },
    {
      "quote": "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
      "author": "Sri Chinmoy"
    },
    {
      "quote": "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "quote": "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
      "author": "James Freeman Clarke"
    },
    {
      "quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
      "author": "Anais Nin"
    },
    {
      "quote": "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.",
      "author": "Marcus Aurelius"
    },
    {
      "quote": "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
      "author": "Wayne Dyer"
    },
    {
      "quote": "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
      "author": "Buddha"
    },
    {
      "quote": "It is the greatest of all mistakes to do nothing because you can only do little do what you can.",
      "author": "Sydney Smith"
    },
    {
      "quote": "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
      "author": "Confucius"
    },
    {
      "quote": "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
      "author": "Tom Jackson"
    }
  ]
  let generateQuote=()=>{
    console.log(quotes.length);
    var random = Math.floor(Math.random() * (quotes.length - 0) ) + 0;
    console.log(random);
    setquote(quotes[random]);
  };

  return (
      <div className="container" onLoad={()=>{generateQuote()}}>
        {/* <h1>Random Quote Machine</h1> */}
        <div className="wrapper" id="quote-box">
        <h2 id="text">{quote.quote}</h2>
        <br />
        <div>
        <h3 id="author">{quote.author}</h3>
        </div>
        <div>
        <button id="twitter">
          <a id="tweet-quote" 
            target="_blank" rel="noreferrer"     
            href="http://twitter.com/intent/tweet">
           {<i class="fa fa-twitter"></i>}
          </a>
        </button>
        <button id="tumblr">
          <a href="https://www.tumblr.com" rel="noreferrer">
            <i class="fa fa-tumblr"></i>
          </a>
        </button>
        <button id="new-quote" onClick={generateQuote}>Next Quote</button>
        </div>
        </div>
        <div class="footer"><a href="https://github.com/hr21don/Random-Quotes-Machine-ReactJS">Fork me here</a></div>
      </div>
    )
}