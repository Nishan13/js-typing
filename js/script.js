(function() {
  var Utils = (function() {
    /**
     * Get a computed style of a DOM element
     * @param  {DOM Element} element The target DOM element
     * @param  {String} style   Name of style eg. width, margin-left
     * @return {Float}         Computed style value
     */
    var getStyle = function(element, style) {
      return parseFloat(window.getComputedStyle(element).getPropertyValue(style));
    };

    /**
     * Get a random number between two numbers
     * @param  {Integer} low  Lower limit of interval
     * @param  {Integer} high Upper limit of interval
     * @return {Integer}      Random number between interval
     */
    var getRandomNumber = function(low, high) {
      return Math.floor(Math.random() * (high - low + 1)) + low;
    };

    /**
     * Get a random color
     * @param {Float} opacity Opacity of color
     * @return {String} Color in rgba(r, g, b, opacity) format
     */
    var getRandomColor = function(opacity) {
      if (!opacity) {
        opacity = 1;
      }
      var R = parseInt(Math.random() * 255);
      var G = parseInt(Math.random() * 255);
      var B = parseInt(Math.random() * 255);
      var color = "rgba(" + R + "," + G + "," + B + "," + opacity + ")";
      return color;
    };

    return {
      getStyle: getStyle,
      getRandomNumber: getRandomNumber,
      getRandomColor: getRandomColor
    };
  })();


  var WIDTH = 1364,
    HEIGHT = 690,
    WORDSLIST = ["curl", "recondite", "cars", "unhealthy", "utopian", "bear", "regret", "squeeze", "rice", "line", "language", "discovery", "brash", "level", "error", "wrap", "geese", "childlike", "rough", "imported", "hope", "momentous", "adaptable", "young", "star", "dinosaurs", "smoke", "flag", "cave", "sleet", "waste", "unarmed", "zany", "ripe", "hate", "decision", "breathe", "dirt", "stiff", "wait", "instinctive", "beautiful", "closed", "pencil", "caption", "yielding", "alleged", "marble", "screw", "dear", "reflective", "venomous", "grip", "base", "trade", "numerous", "start", "better", "twist", "limping", "brave", "well-made", "camera", "prepare", "spurious", "mate", "exciting", "bright", "pedal", "tent", "possible", "morning", "bustling", "crowd", "sharp", "tiger", "tearful", "precious", "float", "electric", "simple", "volatile", "plan", "fire", "bloody", "undress", "potato", "coach", "craven", "injure", "vacation", "bouncy", "toe", "decorate", "woozy", "intelligent", "melted", "destruction", "second-hand", "plot", "bury", "maddening", "crayon", "unknown", "shaggy", "stick", "tooth", "letters", "easy", "pale", "symptomatic", "sense", "medical", "attach", "use", "color", "satisfying", "back", "wine", "support", "tendency", "room", "pleasant", "aboriginal", "nifty", "prevent", "expect", "level", "depend", "carry", "jump", "fear", "weak", "cut", "bedroom", "lake", "humdrum", "form", "pathetic", "tart", "sort", "calendar", "sky", "nimble", "head", "fail", "attack", "kneel", "sign", "drain", "woman", "elastic", "murder", "waggish", "number", "arm", "brake", "cheese", "judge", "hellish", "sour", "delirious", "abaft", "sack", "rod", "sugar", "military", "nine", "powder", "multiply", "light", "juice", "dust", "useful", "joke", "icicle", "common", "parallel", "curious", "bushes", "detailed", "abusive", "shade", "quick", "pie", "somber", "alive", "muddle", "ad hoc", "ruddy", "rambunctious", "highfalutin", "absurd", "attack", "nonstop", "jealous", "form", "record", "unbiased", "wink", "stingy", "crook", "distance", "like", "force", "conscious", "fear", "standing", "toothsome", "burly", "pets", "borrow", "thought", "actor", "disgusting", "simplistic", "box", "lethal", "horse", "worthless", "untidy", "sheet", "approval", "memory", "kindhearted", "gaze", "damaging", "hilarious", "skate", "overwrought", "experience", "endurable", "drab", "verse", "towering", "own", "mom", "dreary", "unit", "jittery", "theory", "offer", "aboard", "ready", "high-pitched", "jog", "end", "moaning", "quiver", "remarkable", "slap", "machine", "purring", "saw", "giddy", "tired", "comfortable", "health", "trick", "long", "government", "pipe", "slimy", "laugh", "cheap", "spoon", "shiny", "blink", "paper", "annoyed", "appear", "blushing", "discover", "sick", "adjustment", "meaty", "regular", "befitting", "roof", "mature", "glorious", "trot", "scintillating", "humor", "twig", "difficult", "wish", "whole", "hook", "skin", "godly", "hum", "haircut", "laugh", "party", "perform", "groovy", "science", "massive", "cushion", "crazy", "last", "creepy", "sea", "empty", "eager", "purple", "disillusioned", "aloof", "languid", "descriptive", "tank", "fallacious", "bath", "scarecrow", "tree", "encourage", "program", "nosy", "lonely", "curly", "tour", "belong", "way", "rot", "impartial", "silk", "pin", "scatter", "educated", "spicy", "kind", "grass", "mammoth", "copy", "type", "impress", "bridge", "hollow", "puzzled", "thick", "bad", "dusty", "advice", "petite", "unwritten", "side", "enter", "yell", "fish", "glossy", "ill-fated", "roomy", "fit", "double", "glamorous", "sister", "tasteful", "premium", "pink", "dazzling", "well-groomed", "garrulous", "tangible", "stop", "offer", "harsh", "eye", "person", "wary", "wide-eyed", "trains", "adamant", "suggest", "pickle", "communicate", "sofa", "talk", "range", "mind", "office", "half", "drunk", "agreement", "baby", "stove", "early", "mend", "arrange", "detect", "stale", "playground", "irritating", "spiffy", "snails", "merciful", "post", "vest", "quarter", "innate", "dispensable", "orange", "zealous", "men", "jagged", "record", "piquant", "plucky", "fade", "examine", "airplane", "iron", "radiate", "obey", "wriggle", "decisive", "infamous", "steadfast", "physical", "possess", "straw", "attempt", "undesirable", "skip", "alert", "pizzas", "fantastic", "bit", "repeat", "hug", "normal", "gray", "plastic", "devilish", "melt", "imminent", "vengeful", "thinkable", "frighten", "nose", "observation", "property", "soft", "typical", "blue-eyed", "picayune", "work", "finicky", "roasted", "station", "stomach", "obeisant", "step", "bleach", "picture", "noisy", "luxuriant", "treatment", "women", "attraction", "rhythm", "functional", "enchanting", "system", "protective", "enthusiastic", "spoil", "look", "spark", "visit", "splendid", "unique", "society", "crib", "snatch", "deceive", "pointless", "race", "pen", "mighty", "rainstorm", "obsolete", "screw", "callous", "shock", "envious", "alike", "organic", "exchange", "various", "hideous", "flight", "branch", "domineering", "alcoholic", "cracker", "lie", "wax", "seemly", "desk"],
    WORDSLISTCOUNT = WORDSLIST.length,
    SPEED = 1,
    SCORE = 0;

  var Word = function(word) {
    var that = this;

    if (!word) {
      word = "";
    }

    this.word = word;
    this.position = {
      x: Utils.getRandomNumber(0, WIDTH - 100),
      y: -20
    };

    this.remove = false;
    this.index = 0;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.left = this.position.x + "px";
    this.element.style.top = this.position.y + "px";
    this.element.setAttribute("data-first-letter", this.word[0]);

    for (var i = 0; i < this.word.length; i++) {
      var span = document.createElement("span");
      span.innerHTML = this.word[i];
      this.element.appendChild(span);
    }

    this.move = function() {
      this.position.y += SPEED;
      this.element.style.top = this.position.y + "px";
      this.element.style.left = (this.position.x + Utils.getRandomNumber(0, 0)) + "px";
      if (this.position.y > HEIGHT) {
        this.remove = true;
        this.element.setAttribute("data-first-letter", "");
      }
    };

    this.destroy = function(fail) {
      if (!fail) fail = false;

      var yDirection = 1;
      var length = this.element.children.length;
      /*for(var i = 0, span; span = this.element.children[i]; i++) {
        var xDirection = 1;
        yDirection = -yDirection;

        if(i < (length / 2)) {
          xDirection = -xDirection;
        }

        

        if(fail) {
          yDirection = 1; 
          span.parentElement.style.transition = "2s";
          span.parentElement.style.position = "absolute";
          span.parentElement.style.marginTop = HEIGHT * yDirection + "px";
        }else {
          span.style.marginLeft = WIDTH * xDirection + "px";
          span.style.position = "absolute";
          span.style.marginTop = HEIGHT * yDirection + "px";
          span.style.transition = "2s";
          span.style.opacity = "0";
        }
      }*/
      span.parentElement.style.transition = "2s";
      span.parentElement.style.position = "absolute";
      if (fail) {
        this.element.style.marginTop = HEIGHT + "px";
      } else {
        this.element.style.marginTop = -this.position.y + "px";
        this.element.style.marginLeft = -this.position.x + "px";
        this.element.style.opacity = "0.25";
      }
      setTimeout(function() {
        that.element.parentElement.removeChild(that.element);
        if (!fail) {
          SCORE += that.word.length;
          document.getElementById("score").innerHTML = SCORE;
        }
      }, 1000)
    }
  };

  var Game = function(containerID) {
    var that = this;

    if (!containerID) {
      containerID = "container";
    }

    var gameInterval = null;
    var timeCounter = 0;
    var wordsArray = [];

    this.container = document.getElementById(containerID);
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.setAttribute("id", containerID);
      document.body.appendChild(this.container);
    };

    this.init = function() {
      SPEED = 1;
      this.container.innerHTML = "";
      this.container.style.width = WIDTH + "px";
      this.container.style.height = HEIGHT + "px";
      this.container.style.position = "relative";
      this.container.style.overflow = "hidden";
      this.container.style.borderBottom = "1px solid #ccc";

      var selectedWord;

      gameInterval = setInterval(function() {
        timeCounter++;
        if (timeCounter > 5000) {
          timeCounter = 0;
        };

        if (timeCounter % Utils.getRandomNumber(50, 100) === 0) {
          var word = new Word(WORDSLIST[Utils.getRandomNumber(0, WORDSLISTCOUNT - 1)]);
          that.container.appendChild(word.element);
          wordsArray.push(word);
          //console.log(wordsArray);
          if (SPEED < 5) {
            SPEED += 0.05;
          }
        };

        var newWordsArray = [];
        for (var i = 0; i < wordsArray.length; i++) {
          wordsArray[i].move();

          if (!wordsArray[i].remove) {
            newWordsArray.push(wordsArray[i]);
          } else {
            console.log("ESCAPE");
            if (wordsArray[i] === selectedWord) {
              selectedWord = null;
            }
          };
        };
        wordsArray = newWordsArray;


      }, 20);

      document.addEventListener("keyup", function(e) {
        if (e.code === "Escape") {
          console.log("ESCAPE", selectedWord);
          if (selectedWord) {
            for (var i = 0, span; span = selectedWord.element.children[i]; i++) {
              span.style.color = "#a22";
              span.style.fontSize = "20px";
            }
            selectedWord.element.setAttribute("data-first-letter", "");
            selectedWord.destroy(true);
            selectedWord.remove = true;
          }
          selectedWord = null;
        } else {
          var key = String.fromCharCode(e.keyCode).toLowerCase();
          if (!selectedWord) {
            var selectedWordDiv = document.querySelector('[data-first-letter="' + key + '"]');
            console.log(selectedWordDiv);
            selectedWordDiv.children[0].style.color = "#47a";
            selectedWordDiv.children[0].style.fontSize = "25px";
            for (var i = 0; i < wordsArray.length; i++) {
              if (wordsArray[i].element === selectedWordDiv) {
                selectedWord = wordsArray[i];
                console.log(selectedWord.word);
                selectedWord.index++;
                return;
              }
            }
          } else {
            //console.log(selectedWord.word);
            if (selectedWord.word[selectedWord.index] === key) {
              selectedWord.element.children[selectedWord.index].style.color = "#47a";
              selectedWord.element.children[selectedWord.index].style.fontSize = "25px";
              selectedWord.index++;
              if (selectedWord.index === selectedWord.word.length) {
                selectedWord.element.setAttribute("data-first-letter", "");
                selectedWord.remove = true;
                selectedWord.destroy();
                selectedWord = null;
              }
            }
            return;
          }
        }
      })
    };
  };

  new Game().init();
})();