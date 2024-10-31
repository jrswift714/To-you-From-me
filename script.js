document.getElementById('Premonition').style.visibility = 'hidden';
hidebut = document.getElementById('laodicea').style.visibility = 'hidden';


//I see you. You seek to circumvent the conversation.
//It is out of my power to force you to converse.
//So, I offer you this plea of sorrow from a great and terrible god, who is long dead.

//To thee, Harrow, I speak in shadows:
//Seven fruits of darkness, hidden in their throats,
//When they bloom, the tale is done, already penned.
//I bear the talon of chance,
//A tool guided by forces beyond death’s grasp,
//Fashioned by more hands than you can count.


//Fear, O Harrow, the reflection of thy soul:
//Four shall rise, born of seven, who were once one,
//Their severance sown by deeds undone.
//Fear not death, for my design weaves beyond,
//Past my reign, past my line, the wheel spins on.

//The hungry,
//The violent,
//The wrathful,
//The wanting,
//The silent,
//The forsaken,
//The great serpent.

//In faithless devotion, none may break these failures,
//Lest by dose of finest chance.



function displayResponse() {
  const input = document.getElementById('userInput').value;
  const response = document.getElementById('response');
  const container = document.querySelector('.container');
  if (input.trim() === "Argustor") {
    response.innerText = "Oh. The bear. Save your teeth, foul one, rid yourself of such a curse. I am scared of you.";
  } else if (input.trim() === "Argustr") {
    response.innerText = "Why... what's happening?";
  } else if (input.trim() === "Jorkha") {
    response.innerText = "You... you too... no.";
  } else if (input.trim() === "Modred") {
    response.innerText = "By the absent gods... how is it this far along?";
  } else if (input.trim() === "Nalhu") {
    response.innerText = "It's everywhere now... it is a matter of time until the desert itself is consumed.";
  } else if (input.trim() === "Melior") {
    response.innerText = "Swords... Please... Your time is almost up.";
  } else if (input.trim() === "Allister") {
    response.innerText = "I know what happened to you. It is quite tragic, but worry not. The horrible mystery uncovered by Marowen is inconsequential today. Be glad, even in death.";
  } else if (input.trim() === "Skuvix") {
    response.innerText = "Oh, the web.";
  } else if (input.trim() === "Mordred") {
    response.innerText = "Such fiends abound your fate.";
  } else if (input.trim() === "Korduth") {
    response.innerText = "Higgs said you had such potential.";
  } else if (input.trim() === "Valk") {
    response.innerText = "Don't be scared. You have a destiny, and I will see to it!";
  } else if (input.trim() === "Strahd") {
    response.innerText = "Wrong campaign";
  } else if (input.trim() === "Slyvan") {
    response.innerText = "You've been betrayed. Or maybe, there was never anything to betray?";
  } else if (input.trim() === "Melchior") {
    response.innerText = "You've gone through so much, and the pain just persists... in my power you shouldn't feel such sadness.";
  } else if (input.trim() === "Rothu Von Der Shell") {
    response.innerText = "Your old employee... ";
  } else if (input.trim() === "You") {
    response.innerText = "Me? I am... what was it? \n Oh! Everett!";
  } else if (input.trim() === "Jorkhai") {
    response.innerText = "Please, you are frighteningly close to something you don't understand.";
  } else if (input.trim() === "Nalthu") {
    response.innerText = "I've spoken with them! Even from here! They miss you and hope you make it back...";
  } else if (input.trim() === "Dayna") {
    response.innerText = "I am so, so sorry for how confusing everything is. None of this is your fault.";
  } else if (input.trim() === "Xavier") {
    response.innerText = "Foul wretch, but a victim of a greater scheme. When I am born, nothing like this will happen again. I thank the Swords for putting you out of your misery.";
  } else if (input.trim() === "Jelly Head") {
    response.innerText = "An apt reference...";
  } else if (input.trim() === "Simon") {
    response.innerText = "";
    container.style.display = "none";
  } else if (input.trim() === "Devits") {
    response.innerText = "";
    container.style.display = "none";
  } else if (input.trim() === "Hombart") {
    response.innerText = "";
    container.style.display = "none";
  } else if (input.trim() === "Lady Emp") {
    response.innerText = "I understand why you did it. Truly, I do. I almost think I would have done the same.";
  } else if (input.trim() === "Vourzen") {
    response.innerText = "Leave your best in their place. Trust them. There is worse yet to come...";
  } else if (input.trim() === "Chancellor") {
    response.innerText = "Say it. Say your name.";
  } else if (input.trim() === "Alexander Fitri") {
    response.innerText = "Words do not describe my disgust, born in filth and reveling in it since. Phtharl should have eaten you whole, like your son will. Or... maybe that dead one will finally lay their hands on your swollen neck.";
  } else if (input.trim() === "Gwenincriel") {
    response.innerText = "I do not like you, eternal one. When my time comes, those who choose your path will come to an abrupt end.";
  } else if (input.trim() === "Pergamum") {
    response.innerText = "My wrath. My anger. Contained in a king. Disgusting.";
  } else if (input.trim() === "Ephesus") {
    response.innerText = "Stay there, for now. Your time will come along with the others.";
  } else if (input.trim() === "Smyrna") {
    response.innerText = "Ahh you targeted the wrong plane! So like you to take before looking.";
  } else if (input.trim() === "Sardis") {
    response.innerText = "If you do not rise to your station, Ephesus may win. Maybe the Swords, or some other group, will meddle before this ends.";
  } else if (input.trim() === "Levi") {
    response.innerText = "I'd want to be like them too.";
  }  else if (input.trim() === "Karcipius") {
    response.innerText = "Had you seen it coming, you could have stopped the meteors. Now, all of Olmus must take the defense due to your lack of foresight.";
  } else if (input.trim() === "Moander") {
    response.innerText = "Ah, mother web. I see a chosen of yours.";
  } else if (input.trim() === "Jazirian") {
    response.innerText = "You shouldn't know that name.";
  } else if (input.trim() === "Solace") {
    response.innerText = "The Witness.";
  } else if (input.trim() === "Cipher") {
    response.innerText = "In this case, I speak with a standard Thieve's cant. A bi-lateral rotation of symbols including common punctuation. A total of 47 elements are considered with this one. My ciphers grow more complex as we speak. It is all I can do to keep them from seeing.";
  } else if (input.trim() === "Ahriman") {
    response.innerText = "You tread on ground long since forgotten. Keep this to yourself.";
  } else if (input.trim() === "Asmodeus") {
    response.innerText = "We keep him in the Serpent's coil for good reason... and yet Prontius peers into it. Arrogance";
  } else if (input.trim() === "Captain") {
    response.innerText = "I do not know how to spell his name...";
  }  else if (input.trim() === "Ekan Moriel") {
    response.innerText = "Oh you... Did you know I met you once? I thought you were so... confident. But...";
  }  else if (input.trim() === "Thanscent") {
    response.innerText = "I know where your crown is! Down in Redthine!";
  }  else if (input.trim() === "Thanters") {
    response.innerText = "My mother used to read me your stories when I went to sleep. But... honestly I think she was making it up now.";
  }  else if (input.trim() === "Lolth") {
    response.innerText = "I know your true name, Moander. I do not want to be a set piece, but your prescience proceeds you.";
  } else if (input.trim() === "Julian") {
    response.innerText = "*@FC AC@5F4E]]] v:G6 :E E@ E96 $H@C5D }~(]";
  } else if (input.trim() === "Vindra") {
    response.innerText = "It is in your interest to rest for the time being. That curse... may the powers that be, restrict it to its stage.";
  } else if (input.trim() === "Kizij") {
    response.innerText = "Your ancestors might be proud if you assist them.";
  } else if (input.trim() === "Agrentha") {
    response.innerText = "The Baron will be disappointed... his chosen was lost near the spring.";
  } else if (input.trim() === "Avaj") {
    response.innerText = "Your influence is far, for how brief it may last.";
  } else if (input.trim() === "Ernightly") {
    response.innerText = "I admit, your skills in with the earth are impressive. If only you weren't so debaucherous, then Alexander could have let you flourish.";
  } else if (input.trim() === "Fairgrint") {
    response.innerText = "Inanimate! As you belong";
  } else if (input.trim() === "Oogondala") {
    response.innerText = "The machinations of an artificer are always entertaining. Why then, are they wasted making murderous weapons for a gluttonous fool?";
  } else if (input.trim() === "Marowen") {
    response.innerText = "You saw it... the great conquering. Deities act in ways fundamental to our understanding. You see it as true then, that it was NOT Tyr.";
  } else if (input.trim() === "Marla") {
    response.innerText = "These greats would have been just the beginning. They would sail to infinite worlds, consume infinite souls. I am so, so proud of you for your resistance.";
  } else if (input.trim() === "The Zephyr") {
    response.innerText = "The northen winds come stronger now. We both know who is to blame.";
  } else if (input.trim() === "Bahamut") {
    response.innerText = "Beware the Pied Piper";
  } else if (input.trim() === "Mask") {
    response.innerText = "Leave it There. I will take it from you.";
  } else if (input.trim() === "Ulysses") {
    response.innerText = "A god? Felled my a mortal? No wonder they left...";
  } else if (input.trim() === "Bane") {
    response.innerText = "The conquerer. And... a trickster?";
  } else if (input.trim() === "Tyr") {
    response.innerText = "How ironic. Your sponsorship was twisted.";
  } else if (input.trim() === "Everett") {
    response.innerText = "The egg of the Perfect World";
  } else if (input.trim() === "Wayward") {
    response.innerText = "Poor child... I hope they put you to rest soon.";
  } else if (input.trim() === "Wayward") {
    response.innerText = "Poor child... I hope they put you to rest soon.";
  } else if (input.trim() === "Wren") {
    response.innerText = "Nothing now... how you've fallen.";
  } else if (input.trim() === "The Crow") {
    response.innerText = "abbba aabaa baaaa aabbb aaaaa abbba baaab babba abbab baabb baaaa aaabb aabaa aaaaa ababa abaaa abbaa aabba baaab babaa aabaa baaaa aabaa ababa abaaa abaab aabaa baaba aabbb aaaaa baaba abbab aabab aaaaa abbaa abbab baaba aabbb aabaa baaaa aabab aaaaa ababb abbab baabb baaab aabab abaaa aabba baabb baaaa aabaa abbab abbaa aabaa babaa aabbb abbab aabbb aaaaa aaabb aabab ababa abbab babaa abbaa baaba abbab abbab aaaba ababa abbab baaab aabaa baaba abbab baaba aabbb aabaa baaab baabb abbaa babaa aabbb aaaaa baaba babaa aaaaa baaab aabbb abaaa baaab abbaa aaaaa ababb aabaa aaaaa aabba aaaaa abaaa abbaa";
  } else if (input.trim() === "Spider") {
    response.innerText = "You know she never trusted them. Well... did she trust them? Or was she just too afraid of what they would find out?";
  } else if (input.trim() === "Spider") {
    response.innerText = "You know she never trusted them. Well... did she trust them? Or was she just too afraid of what they would find out?";
  } else if (input.trim() === "Jack") {
    response.innerText = "Lha tf hzz";
  } else if (input.trim() === "SanDell") {
    response.innerText = "Lha tf hzz";
  } else if (input.trim() === "Tingles") {
    response.innerText = "Lha tf hzz";
  } else if (input.trim() === "Paige") {
    response.innerText = "Lha tf hzz";
  } else if (input.trim() === "Ryan") {
    response.innerText = "Lha tf hzz";
  } else if (input.trim() === "Milo") {
    response.innerText = "Lha tf hzz";
  } else if (input.trim() === "Alex") {
    response.innerText = "Lha tf hzz";
  } else if (input.trim() === "Savannah") {
    response.innerText = "You leave her out of this";
  } else if (input.trim() === "Vance of the West") {
    response.innerText = "It is strange... how your tale intertwines with the rest. Perhaps you will play a larger part?";
  } else if (input.trim() === "Recaps") {
    response.innerText = "This is how I usually speak to you.";
  } else if (input.trim() === "Van Tingley") {
    response.innerText = "He who would inherit the stars";
  } else if (input.trim() === "Laodicea") {
    response.innerText = "stop";
    alert("THE HUNGER");
    alert("HE FEEDS");
    alert("HE HUNGERS");
    alert("DDDFASDKJJKDJEEEEEEEEEEEEEEEHEEEEEEEEEE SSSI  IS HUNNNGGGRYYYYYYYYYY");
    alert("UNDONE");
    alert("I AM UNDONE BY IT");
    alert("IT IS BORN OF ME AND I FROM ITS ABSENCE");
    laodicea();
  } else if (input.trim() === "Thyatira") {
    response.innerText = "no";
    alert("THE VIOLENCE");
    alert("OH WHAT A WONDERFUL SHOW");
    alert("PUT ON BY THE WANDERING CAST");
    alert("IN WORSHIP OF THE ONE IN RED");
    alert("UNDONE");
    alert("I AM UNDONE BY IT");
    alert("IT IS BORN OF ME AND I FROM ITS ABSENCE");
  } else {
    response.innerText = "...";
  }
}

function laodicea() {
  const container = document.querySelector('.container');
  container.style.display = "none";
  document.getElementById('laodicea').style.visibility = 'visible';
}
let c = 0;
function toggleMessages() {
  const t = document.getElementById('laotext');
  if (c === 0){
    t.innerText = "it consumes all";
  } else if (c === 1){
    t.innerText = "the longer you wait, the more it consumes";
  } else if (c === 2){
    t.innerText = "if... if you wait too long...";
  } else if (c === 3){
    t.innerText = "not even IIIIII coulLd SAvveEE you you you ouy uuu     sdssss afattter after I am BORN";
  } else if (c > 3 && c < 8){
    t.innerText = "...";
  } else if (c = 8){
    t.innerText = "https://upload.wikimedia.org/wikipedia/commons/8/8b/Old_One_by_Tom_Ardans.jpg";
    document.getElementById('Premonition').style.visibility = 'visible';
  }
  c = c + 1;
}
