const quates =[
    {"quote":"Be yourself; everyone else is already taken.",
        "author":"--Oscar Wilde"
    }
    ,
    {"quote":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "author":"--Albert Einstein"
    },
    {"quote":"You only live once, but if you do it right, once is enough.",
        "author":"--Mae West"
    }
    ,
    {"quote":"Be the change that you wish to see in the world.",
        "author":"--Mahatma Gandhi"
    }
    ,
    {"quote":"In three words I can sum up everything I've learned about life: it goes on.",
        "author":"--Robert Frost"
    },
    {"quote":"If you tell the truth, you don't have to remember anything.",
        "author":"--Mark Twain"
    }
    ,
    {"quote":"A friend is someone who knows all about you and still loves you.",
        "author":"--Elbert Hubbard"
    },
    {"quote":"To live is the rarest thing in the world. Most people exist, that is all.",
        "author":"--Oscar Wilde"
    }
    ,
    {"quote":"Always forgive your enemies; nothing annoys them so much.",
        "author":"--Oscar Wilde"
    }
]
var previousNumber = null;
var index=1;

function generateRandomNumber() {
    var min = 1;
    var max = quates.length;
    var randomNumber = getRandomNumber(min, max);

    while (randomNumber === previousNumber) {
      randomNumber = getRandomNumber(min, max);
    }
    previousNumber = randomNumber;
    index=randomNumber;
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max)) + min;
  }
  
function changeQuote(){
    generateRandomNumber();
    document.getElementById("quotee").innerHTML=`"${quates[index].quote}"`;
    document.getElementById("outher").innerHTML=`${quates[index].author}`;
}


