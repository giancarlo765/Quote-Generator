var person = []
let element = document.getElementById("selectQuote")

////////// Tells the system the selected person //////////
document.getElementById('Vergil').onclick = function() {people("- Vergil")}
document.getElementById('Ezio').onclick = function() {people("- Ezio Auditore da Firenze")}
document.getElementById('Paarthunax').onclick = function() {people("- Paarthunax")}
document.getElementById('Ulysses').onclick = function() {people("- Ulysses")}
document.getElementById('Price').onclick = function() {people("- Captain John Price")}

////////// Check if a different person is selected //////////
function people(diffPerson){
  if(diffPerson != person){
    person = []
    person.push(diffPerson)
  } else if(diffPerson == null){
    person.push(diffPerson)
  }
  element.removeAttribute("hidden")
  console.log(person)
}

////////// QUOTE //////////
function getQuote() {
  if(person == "- Vergil"){ ////////// Vergil //////////
    var quotes = [
      '"Foolishness, Dante. Foolishness. Might controls everything. And without strength you can not protect anything. Let alone yourself."',
      '"Unfortunately, our souls are at odds, brother. I need more power!"',
      '"That day, if our positions were switched... Would our fates be different? Would I have your life, and you mine? Lets settle this... Dante."',
      '"Of your existence? Or your strength?"',
      '"Well, I cant exactly call them misguided. But soon they shall know this devils power. A power greater than they ever imagined. The power of a son of Sparda"' 
    ]
  } else if(person == "- Ezio Auditore da Firenze"){ ////////// Ezio Auditore da Firenze //////////
    var quotes = [
      '"Do not fear the darkness, but welcome its embrace."',
      '"My story is one of many thousands, and the world will not suffer if it ends too soon."',
      '"Nothing is True. Everything is Permitted."',
      '"We work in the Dark to serve the Light. We are assassins."',
      '"To say that nothing is true is to realize that the foundations of society are fragile and that we must be the shepherds of our civilization. To say that everything is permitted is to understand that we are the architects of our actions, and that we must live with their consequences, whether glorious of tragic.."'
    ]
  } else if(person == "- Paarthunax"){ ////////// Paarthunax //////////
    var quotes = [
      '"There are many hungers it is better to deny than to feed. Dreh ni nahkip. Discipline against the lesser aids in qahnaar... denial of the greater."',
      '"The Blades are wise not to trust me. Onikaan ni ov. I would not trust another dovah."',
      '"So, it is done. Alduin dilon. The Eldest is no more, he who came before all others, and has always been."',
      '"Pruzah. As good a reason as any. There are many who feel as you do, although not all. Some would say that all things must end, so that the next can come to pass. Perhaps this world is simply the Egg of the next kalpa? Lein vokiin? Would you stop the next world from being born?"',
      '"What is better - to be born good, or to overcome your evil nature through great effort?"'
    ]
  } else if(person == "- Ulysses"){ ////////// Ulysses //////////
    var quotes = [
      '"To the Divide they came... in the Divide, they rest."',
      '"My history isnt revenge, or hate. The road that brought us both here - isnt about that."',
      '"Even if it is nothing at all, know what you follow, courier... Just as I followed you to the end."',
      '"You gave it a name. What was it to you? Companion? Slave... weapon? All of that, nothing compared to its primary function. Its a messenger. Like us... and it shares our history."',
      '"All these roads, you walked. These packages you carried. Think it wasnt your choice? Of course it was your choice. You could have stayed in the Mojave. But you chose to come, couldnt let be - not in you to let go. Came for no other reason than you were curious, restless - always have been. Had to know the why of it - now, Ill show you."'
    ]
  } else if(person == "- Captain John Price"){ ////////// Captain John Price //////////
    var quotes = [
      '"There’s a simplicity to war. Attacking is the only secret. Dare—and the world yields. How quickly they forget that all it takes to change the course of history is the will of a single man."',
      '"Makarov, you ever hear the old saying, ‘The enemy of my enemy is my friend’?"',
      '"War used to be simple. Kill or be killed. Survive at all costs. Then everything changed. The action got faster, the weapons got more powerful, the stakes got bigger than anything we’d ever seen. On the eve of our greatest battle, a new hero must rise."',
      '"They say truth is the first casualty of war. But who defines what’s true? Truth is just a matter of perspective. The duty of every soldier is to protect the innocent, and sometimes that means preserving the lie of good and evil—that war isn’t just natural selection played out on a grand scale. The only truth I found is that the world we live in is a giant tinderbox. All it takes is someone to light the match.  "',
      '"This is for the record. History is written by the victor. History is filled with liars. If he lives, and we die, his truth becomes written – and ours is lost. Shepherd will be a hero, ’cause all you need to change the world is one good lie and a river of blood. He’s about to complete the greatest trick a liar ever played on history. His truth will be the truth. But only if he lives, and we die."'
    ]
  }
  var quote = Math.floor(Math.random() * quotes.length)
  document.querySelector("#quote").textContent = quotes[quote]
  document.querySelector("#person").textContent = person
}