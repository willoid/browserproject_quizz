/*

### Quiz Game
​
- Add questions
- Random question
- Count-down timer
- Lock the quick when reaching the deadline
- calculate the grade
*/


const questions = [
  {
    question: "what is wrong with pisces?",
    rightAnswer: "They need the unbalance to trigger their creativity.",
    wrongAnswer1: "Nothing in absolute! Everyone is wonderful.",
    wrongAnswer2: "The dead tuna eyes.",
    wrongAnswer3: "If only they could make a decision for once!",
  },

  {
    question: "who is going to get the job done for you?",
    rightAnswer: "Nobody.",
    wrongAnswer1: "Mom and dad.",
    wrongAnswer2: "No one but I can rely on some people to help achieve my goals.",
    wrongAnswer3: "The people I pay to do so.",
  },

  {
    question: "what is meditation good for?",
    rightAnswer: "To train focusing and avoid distractions.",
    wrongAnswer1: "To take decisions.",
    wrongAnswer2: "To become aware of one's feelings.",
    wrongAnswer3: "To do some retrospective.",
  },

  {
    question: "what is the exact moment to stop eating tiramisu?",
    rightAnswer: "When I start hating myself.",
    wrongAnswer1: "When I am full.",
    wrongAnswer2: "When it makes me feel drunk.",
    wrongAnswer3: "When the sugar rush kicks in.",
  },

  {
    question: "what should everyone learn to let go",
    rightAnswer: "Bad feelings about things that are out of one's control.",
    wrongAnswer1: "Friends that don't match the expectations.",
    wrongAnswer2: "Impossible ideas and dreams.",
    wrongAnswer3: "Being hard to one self and others.",
  },
  {
    question: "where is the answer to everything?",
    rightAnswer: "In Willoid's self-awareness quiz.",
    wrongAnswer1: "In the universe.",
    wrongAnswer2: "In the Wikipedia.",
    wrongAnswer3: "In Gwineth Paltrow's eight steps method to achieve a healthy lifestyle.",
  },
  {
    question: "what will Marie Kondo hate about you?",
    rightAnswer: "All the stuff I ordered on Amazon.",
    wrongAnswer1: "The unorganized drawers.",
    wrongAnswer2: "The pile of garbage under my bed.",
    wrongAnswer3: "My rude and ignorant western manners.",
  },
  {
    question: "who will be never disappointed on you.",
    rightAnswer: "Food. Be careful my child.",
    wrongAnswer1: "Jeff Bezos. Be careful my child.",
    wrongAnswer2: "Santa Claus. Be careful my child.",
    wrongAnswer3: "Your inner child. Be careful my child.",
  },
  {
    question: "when should you always ask for help",
    rightAnswer: "Building Ikea furniture.",
    wrongAnswer1: "After spending 4 hours straight looking at my ex's instagram pictures.",
    wrongAnswer2: "On a special program about The Beatles.",
    wrongAnswer3: "When the clothes on the chair look like a demon at night.",
  },
  {
    question: "what is the real taste of victory?",
    rightAnswer: "Sweet like bringing a winner like Willoid into the team.",
    wrongAnswer1: "Salty like tears and sweat.",
    wrongAnswer2: "Bitter like the harsh realty.",
    wrongAnswer3: "Sour like adversity.",
  },
  {
    question: "What is the best present?",
    rightAnswer: "Bath bombs from Lush.",
    wrongAnswer1: "My honest opinion.",
    wrongAnswer2: "Friendship.",
    wrongAnswer3: "Garbage that I don't use but other people actually need.",
  },
  {
    question: "what should you do when you are overwhelmed.",
    rightAnswer: "Just breathe.",
    wrongAnswer1: "Stop being overwhelmed.",
    wrongAnswer2: "Imagine everyone naked.",
    wrongAnswer3: "Think of how my great great great parents survived the war and never had salted caramel ice cream.",
  },
  {
    question: "what is the best medicine for a broken heart?",
    rightAnswer: "I will survive from Gloria Gaynor.",
    wrongAnswer1: "Pilates.",
    wrongAnswer2: "Gin and amphetamines.",
    wrongAnswer3: "Setting that stupid asshole's apartment on fire.",
  },
  {
    question: "what did we learn from Bridget Jones's Diary?",
    rightAnswer: "Loosing 97 minutes of our life can be easy.",
    wrongAnswer1: "Choose someone who loves me for who I am.",
    wrongAnswer2: "Nice people are better than good looking people.",
    wrongAnswer3: "Don't leave the diary open when I have someone over.",
  },
  {
    question: "why are your house plants dying?",
    rightAnswer: "I have the wrong flowerpot size.",
    wrongAnswer1: "Wrong light.",
    wrongAnswer2: "Too much water.",
    wrongAnswer3: "I never sing to them.",
  },
  {
    question: "what should you do before you die?",
    rightAnswer: "Plant a ginko biloba or a oak.",
    wrongAnswer1: "Live life the fullest.",
    wrongAnswer2: "To not die.",
    wrongAnswer3: "Try Willoid's hummus without garlic.",
  },
  {
    question: "how many times are we allowed to make the same mistake.",
    rightAnswer: "I shall look at my siblings and ask my parents.",
    wrongAnswer1: "Three.",
    wrongAnswer2: "Twlce but I can order pizza with gorgonzola cheese thrice.",
    wrongAnswer3: "Four in general and five if it's allowing toxic people into my life.",
  },
  {
    question: "how can you let the pizza delivery guy know that you are not a looser eating her/his feelings alone?",
    rightAnswer: "Giving them a 10% tip. It is all they care about.",
    wrongAnswer1: "Ordering two pizzas and screaming pizza is here when they arrive.",
    wrongAnswer2: "Dressing up and pretending I am going somewhere.",
    wrongAnswer3: "Telling them I have a date and the pizza is for the hunger after sex.",
  },
  {
    question: "who will be always better than you?",
    rightAnswer: "My future self if I stop fucking everything up.",
    wrongAnswer1: "Danish people.",
    wrongAnswer2: "Tesla drivers.",
    wrongAnswer3: "The better version of myself in a parallel universe.",
  },
  {
    question: "why is life so hard?",
    rightAnswer: "Because I am not getting enough sleep.",
    wrongAnswer1: "Because I am poor.",
    wrongAnswer2: "Because I am depending on others to achieve happiness.",
    wrongAnswer3: "Because I am a victim of late capitalism.",
  }
];

//scoring table

var score = 0;
$(`#score`).html(`${score}`);

//Setting a countdowntimer
//delcaring the interval globally so I can access it from other methods
var interval;
var timer = function () {
  var roundTime = 45;
  interval = setInterval(function () {
    $("#counter").html(`${roundTime} seconds remaining`);
    roundTime = roundTime - 1;

    if (roundTime < 0) {
      clearInterval(interval);
      $(`#wrapper`).css("opacity", "0.5");
      $(`#timeOut`).css("visibility", "visible");
    }
  }, 1000);
};

//preparing every round

function assignStuff() {
  //get a random question and pass it to an array
  let displayedQuestion = [];
  let randomIndex = 0;
  if (questions.length < 2) {
    randomIndex = 0;
  } else {
    randomIndex = Math.floor(Math.random() * questions.length);
  }
  let theQuestion = questions[randomIndex];
  questions.splice(randomIndex, 1);
  displayedQuestion.push(theQuestion);
  console.log(`This is the randomIndex: ${randomIndex}`);
  console.log(`This is the question used now: ${theQuestion}`);
  console.log(`This is the Array to display: ${displayedQuestion}`);
  console.log(`The remaining questions: ${questions}`);

  var rightAnswer = displayedQuestion[0].rightAnswer;
  var wrongAnswer1 = displayedQuestion[0].wrongAnswer1;
  var wrongAnswer2 = displayedQuestion[0].wrongAnswer2;
  var wrongAnswer3 = displayedQuestion[0].wrongAnswer3;
  var question = displayedQuestion[0].question;

  //place the questions in random positions

  var numbers = [];

  function randomizeNumbers() {
    var number = Math.floor(Math.random() * 4) + 1;
    if (numbers.indexOf(number) === -1) {
      numbers.push(number);
    } else {
      return randomizeNumbers();
    }
  }
  randomizeNumbers();
  randomizeNumbers();
  randomizeNumbers();
  randomizeNumbers();
  $(`#answer${numbers[0]}`).html(`${rightAnswer}`);
  $(`#answer${numbers[1]}`).html(`${wrongAnswer1}`);
  $(`#answer${numbers[2]}`).html(`${wrongAnswer2}`);
  $(`#answer${numbers[3]}`).html(`${wrongAnswer3}`);
  $(`#question`).html(question);
  $('.displayRightAnswer').html(`${rightAnswer}`);

  //remove classes for wrong answer and rightAnswer and reassign the right answer class

  let answers = $(".panel > div");
  for (el of answers) {
    el.classList.remove("rightAnswer");
    el.classList.remove("active");
  }
  $(`#answer${numbers[0]}`).addClass("rightAnswer");
}

//call the function for the first time

assignStuff();

//making the answers clickable

var answers = $(".panel > div");
var answersArray = Array.from(answers);

$(".panel > div").click((e) => {
  var activeElement = $(".active");

  for (el of answersArray) {
    if (el) {
      el.classList.remove("active");
    }
  }
  //jquery didnt work hier somehow
  e.target.classList.add("active");
});

function submit() {
  clearInterval(interval);

  //getting the results
  var activeElement = $(".active");
  $(`#wrapper`).css("opacity", "0.3");
  if (activeElement.is(".rightAnswer")) {
    $(`#right`).css("visibility", "visible");
    //incrementing the score
    score++;
    $(`#score`).html(`${score} `);
  } else {
    $(`#wrong`).css("visibility", "visible");
  }
}
//function for the game final

function gameFinal() {
  $(`#wrapper`).css("opacity", "0.3");
  $(`#final`).css("visibility", "visible");
  $(`.finalPrompter`).html(
    `Game Finished! You earned ${score} points!`
  );
}

//after sending every answer the displayedQuestion will be push to another array if there is no better solution.

function newQuestion() {
  if (questions.length > 0) {
    assignStuff();
    $(`#wrapper`).css("opacity", "1");
    $(`#right`).css("visibility", "hidden");
    $(`#wrong`).css("visibility", "hidden");
    $(`#timeOut`).css("visibility", "hidden");
    timer();
  } else {
    gameFinal();
  }
}
$(".newQuestion").click(newQuestion());
