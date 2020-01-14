var input = document.getElementById("parser");
var y = 1;
var z = 0;
var reset = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var death = 0;
input.addEventListener("keyup", function(event) {
  var x = document.getElementById("parser").value;

  //Void
  empty = "";

  //Start
  start0 =
    "You are in a house. There are 2 exits from the house with their respective doorway";
  start1 =
    "There is also a doorway to the basement of the house. Where do you want to travel to?";
  start2 = "[East] / [West] / [Down]";

  //Travel East from start
  east0 =
    "You travelled East. There is a wide grassy field in front of you. By your left there is a forest.";
  east1 =
    "There is a big tree stood alone in the middle of the grassy field. By the forest, the howling of the waterfall can be heard. Where do you want to go?";
  east2 = "[Field] / [Forest]";

  //Travel Field from East
  field0 = "You step in the field. Or plain, whatever you call for.";
  field1 = "You could go closer to the field to observe the tree.";
  field2 =
    "Though something whispers you to just lie down and enjoy the peaceful surrounding.";
  field3 =
    "Though something whispers you to just lie down and enjoy the peaceful surrounding. For some reason, you sudder upon hearing those...";
  field4 = "[Inspect] the tree / [Lie] down";

  //Inspect Tree from the Field

  //Lie down
  lie0 = "You lie down and sleep.";
  lie1 = "And that is the deepest sleep you ever got.";
  lie2 = "You never woke up again.";
  lie3 =
    "The field was a place for the dead, and they have consumed you for good.";
  lie4 = "<b>[Restart] from beginning?</b>";

  //Travel Forest from East

  //Travel West from start
  west0 =
    "You travelled West. After walking for 15 minutes, you stumble a dirt road, out stretching on both North and South direction.";
  west1 =
    "You can see the mountain range up on the North, with the top covered with snow. By the South, there is a small village that isn't so far away from where you are now.";
  west2 = "Travel [North] / [South]";

  //Travel down from start
  down0 =
    "You enter the basement of the house. It is dimly lit with a weak light. There is not much to see except a door in front of you.";
  down1 =
    "Further inspection of the door, you realized it is engrave with strange symbols on the doorframe. Other than that there isn't much to see about the door.";
  down2 = "[Enter] door / [Inspect] other things";
  //Inpsect around the room
  down3 =
    "You look through the surrounding a bit more. And out of the blue, you look under the rug. There is a trapdoor underneath it.";
  down4 = "[Enter] door / Go [Down] through the trapdoor";

  //Start of the game
  if (event.keyCode === 13 && x == "Start" && y == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = start0;
    document.getElementById("other_game_text").innerHTML = start1;
    document.getElementById("parser_option").innerHTML = start2;
    y = 2;
  }

  //Travel East from house
  if (event.keyCode === 13 && x == "East" && y == 2) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = east0;
    document.getElementById("other_game_text").innerHTML = east1;
    document.getElementById("parser_option").innerHTML = east2;
    y = 3;
  }
  //Travel Field from East
  if (event.keyCode === 13 && x == "Field" && y == 3 && a == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = field0;
    document.getElementById("other_game_text").innerHTML = field1;
    document.getElementById("game_text2").innerHTML = field2;
    document.getElementById("parser_option").innerHTML = field4;
    y = 4;
  }
  //Travel Field from East (have lie down before)
  if (event.keyCode === 13 && x == "Field" && y == 3 && a == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = field0;
    document.getElementById("other_game_text").innerHTML = field1;
    document.getElementById("game_text2").innerHTML = field3;
    document.getElementById("parser_option").innerHTML = field4;
    y = 5;
  }
  //Lie down (first time)
  if (event.keyCode === 13 && x == "Lie" && y == 4) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = lie0;
    document.getElementById("other_game_text").innerHTML = lie1;
    document.getElementById("game_text2").innerHTML = lie3;
    document.getElementById("parser_option").innerHTML = lie4;
    z++;
    y = 69420;
    a = 1;
    death++;
  }

  //Lie down (second time and onward)
  if (event.keyCode === 13 && x == "Lie" && y == 5) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = lie0;
    document.getElementById("other_game_text").innerHTML = lie1;
    document.getElementById("game_text2").innerHTML = lie3;
    document.getElementById("parser_option").innerHTML = lie4;
    y = 69420;
    death++;
  }

  //Inspect tree from field
  if (event.keyCode === 13 && x == "Inspect" && (y == 4 || y == 5)) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "You walk closer to the huge tree which stood in the middle of the field. There is nothing particular interesting about it.";
    document.getElementById("other_game_text").innerHTML =
      "Had it been a cactus, then you might have tease for its Tsundere-ness. Alas, it wasn't.";
    document.getElementById("game_text2").innerHTML =
      "You decide to take a look around the tree to see if there is anything that caught your eyes. Hmm... Oh look! There is something, it's a ...";
    document.getElementById("parser_option").innerHTML = "[Mushroom] / [Rope]";
    y = 6;
  }

  //Choose mushroom
  if (event.keyCode === 13 && x == "Mushroom" && y == 6 && b == 0 && c == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = "A Mushroom!";
    document.getElementById("other_game_text").innerHTML = "...";
    document.getElementById("game_text2").innerHTML =
      "That was dissapointing. You are not here for finding just a sole mushroom. Seems edible though";
    document.getElementById("parser_option").innerHTML =
      "[Eat] it a whole / [Consume] it slowly";
    y = 7;
  }

  //Choose mushroom (after eat it)
  if (event.keyCode === 13 && x == "Mushroom" && y == 6 && b == 1 && c == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = "A Mushroom!";
    document.getElementById("other_game_text").innerHTML = "...";
    document.getElementById("game_text2").innerHTML =
      "That was dissapointing. You are not here for finding just a sole mushroom. Seems edible... though maybe you should be careful";
    document.getElementById("parser_option").innerHTML =
      "[Eat] it a whole / [Consume] it slowly";
    y = 7;
  }

  //Choose mushroom (after consume it)
  if (event.keyCode === 13 && x == "Mushroom" && y == 6 && b == 0 && c == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = "A Mushroom!";
    document.getElementById("other_game_text").innerHTML = "...";
    document.getElementById("game_text2").innerHTML =
      "That was dissapointing. You are not here for finding just a sole mushroom. Seems edible... you just seems to have weird colorful flashback upon seeing this...";
    document.getElementById("parser_option").innerHTML =
      "[Eat] it a whole / [Consume] it slowly";
    y = 7;
  }

  //Choose mushroom (after choose both option)
  if (event.keyCode === 13 && x == "Mushroom" && y == 6 && b == 1 && c == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = "A Mushroom!";
    document.getElementById("other_game_text").innerHTML = "...";
    document.getElementById("game_text2").innerHTML =
      "That was dissapointing. You are not here for finding just a sole mushroom. You got a feeling that you are about to do something stupid...";
    document.getElementById("parser_option").innerHTML =
      "[Eat] it a whole / [Consume] it slowly";
    y = 7;
  }

  //Eat mushroom (first time)
  if (event.keyCode === 13 && x == "Eat" && y == 7 && b == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "You plop it into your mouth, thinking nothing. Welp, least you deserves a treat from that.";
    document.getElementById("other_game_text").innerHTML =
      "Looking down, at the mushroom you just picked, you suddenly found something.";
    document.getElementById("game_text2").innerHTML =
      "That was a <b>Fly Agaric</b>. And just before you can do anything, blackness overwhelms you. Goodbye cruel world...";
    document.getElementById("parser_option").innerHTML =
      "<b>[Restart] from beginning?</b>";
    y = 69420;
    z++;
    b = 1;
    death++;
  }

  //Eat mushroom (second time and onward)
  if (event.keyCode === 13 && x == "Eat" && y == 7 && b == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "You plop it into your mouth, thinking nothing. Welp, least you deserves a treat from that.";
    document.getElementById("other_game_text").innerHTML =
      "Looking down, at the mushroom you just picked, you suddenly found something.";
    document.getElementById("game_text2").innerHTML =
      "That was a <b>Fly agaric</b>. And just before you can do anything, blackness overwhelms you. Goodbye cruel world...";
    document.getElementById("parser_option").innerHTML =
      "<b>[Restart] from beginning?</b>";
    y = 69420;
    death++;
  }

  //Consumed mushroom (first time)
  if (event.keyCode === 13 && x == "Consume" && y == 7 && c == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "Oh well, you put it in the mouth and chew it slowly. Mmm, doesn't taste that bad afterall.";
    document.getElementById("other_game_text").innerHTML =
      "If only you have not seen the sky turns into trippy colorful rainbow color.";
    document.getElementById("game_text2").innerHTML =
      "HoLy CrAb, WtF wAs GoInG oN?!1?1?! dId I jUsT sEe SnOpP dOg DiD tHe ThInG?? OwQ ImBlUeDaBaDiDaBaDaIdAbAdAdI...";
    document.getElementById("parser_option").innerHTML =
      "<b>[Restart] fRoM bEgInNiNg?</b>";
    y = 69420;
    z++;
    c = 1;
    death++;
  }

  //Consumed mushroom (second time and onward)
  if (event.keyCode === 13 && x == "Consume" && y == 7 && c == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "Oh well, you put it in the mouth and chew it slowly. Mmm, doesn't taste that bad afterall.";
    document.getElementById("other_game_text").innerHTML =
      "If only you have not seen the sky turns into trippy colorful rainbow color.";
    document.getElementById("game_text2").innerHTML =
      "HoLy CrAb, WtF wAs GoInG oN?!1?1?! dId I jUsT sEe SnOpP dOg DiD tHe ThInG?? OwQ ImBlUeDaBaDiDaBaDaIdAbAdAdI...";
    document.getElementById("parser_option").innerHTML =
      "<b>[Restart] fRoM bEgInNiNg?</b>";
    y = 69420;
    death++;
  }

  //Choose rope (first time)
  if (event.keyCode === 13 && x == "Rope" && y == 6 && c == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = "...";
    document.getElementById("other_game_text").innerHTML = "...";
    document.getElementById("game_text2").innerHTML =
      "This is fucking dissapointing, you yelled, and proceed to tie the rope in a knot and...<br> Oh dear... <br> I guess I shouldn't describe what happen next, should I?";
    document.getElementById("parser_option").innerHTML =
      "<b>[Restart] from beginning?</b>";
    y = 69420;
    z++;
    d = 1;
    death++;
  }

  //Choose rope (second time and beyond)
  if (event.keyCode === 13 && x == "Rope" && y == 6 && c == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = "...";
    document.getElementById("other_game_text").innerHTML = "...";
    document.getElementById("game_text2").innerHTML =
      "This is fucking dissapointing, you yelled, and proceed to tie the rope in a knot and...<br> Oh dear... <br> I guess I shouldn't describe what happen next, should I?";
    document.getElementById("parser_option").innerHTML =
      "<b>[Restart] from beginning?</b>";
    y = 69420;
    death++;
  }

  //Travel to Forest
  if (event.keyCode === 13 && x == "Forest" && y == 3) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "You step in the Forest, with a stream flowing nearby as you travel in deeper.<br>I would not say it is as Snow White beautiful when the animals are minding their own businesses, but the scene is gourgoes enough for you to fall in love with. <br> As you traverse your way through, there is something that caught your attention...";
    document.getElementById("other_game_text").innerHTML = "";
    document.getElementById("parser_option").innerHTML =
      "A stone [Ruin]! / A [Shadow] figure of some sort?";
    y = 8;
  }

  //Choose Ruin (first time)
  if (event.keyCode === 13 && x == "Ruin" && y == 8 && i == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "A hidden Ruin in the Forest! Who would have thought of that! (Except from the great brain like you <i>*cough cough*</i>)";
    document.getElementById("other_game_text").innerHTML =
      "You stepped in the ruin, with excitement fills within you. Perhaps even with the excitement, I suggest you to look around before... <br> *click* <br> ...trigger any booby trap...";
    document.getElementById("parser_option").innerHTML =
      "A stone door open rights in front of you, and rolling out is a giant boulder heading towards you. There is only one way to run. <br> You turn back and run, but it is too late, the boulder runs over you. It seems like your inner Indianna John does not protect you fro rolling boulder huh?<br><b>[Restart] from beginning?</b>";
    y = 69420;
    z++;
    i = 1;
    death++;
  }

  //Choose Ruin (second time)
  if (event.keyCode === 13 && x == "Ruin" && y == 8 && i == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "A hidden Ruin in the Forest! Who would have thought of that! (Except from the great brain like you <i>*cough cough*</i>)";
    document.getElementById("other_game_text").innerHTML =
      "You stepped in the ruin, with excitement fills within you. Perhaps even with the excitement, I suggest you to look around before... <br> *click* <br> ...trigger any booby trap...";
    document.getElementById("parser_option").innerHTML =
      "A stone door open rights in front of you, and rolling out is a giant boulder heading towards you. You suddenly act out of instict, dash towards the entrance and turn left just in time as the boulder hits you. <br> Phew, so close. And with the smug grin on your face, you step back in the ruin<br>Just only to be overrun by another boulder.... Ouch<br><b>[Restart] from beginning?</b>";
    y = 69420;
    i = 2;
    death++;
  }

  //Choose Ruin (third time and onward)
  if (event.keyCode === 13 && x == "Ruin" && y == 8 && i == 2) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "The ruin...<br> [Insert The Good, the Bad and the Ugly theme here] <br> You will not get crush by this time. Assuming that you have risin from the death for the 3rd time just to do this";
    document.getElementById("other_game_text").innerHTML =
      "Foot step against the stony surface, eyes gleaming to the structure, hands in akimbo stype. You are ready to strike down and claim the holy grail once and for all <br> Flash step, and you avoid the first trap <br> Duck down, and you avoid being decapited by an axe <br> Teleport to the front, and the whole floor where you have stood before collaspe";
    document.getElementById("parser_option").innerHTML =
      "BAM! <br>You now stood in the treasure room, gold glitters everywhere, and stand in the middle, is the holy grail. <br>This is it!<br>You reach your hand out, it's...<br>'A trap', said a mysterious voice, and the whole ruin collaspe right on you.<br>(C-B-A-G-A-E-E#-B-A-B-C-D-G-E-C-B-A-G-A-E-E#-B-A-B-C-B-G-A)<b>[Restart] from beginning?</b>";
    y = 69420;
    death++;
  }

  //Choose Shadow
  if (event.keyCode === 13 && x == "Shadow" && y == 8) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "You walk closer, with caution, of course. Sneak behind the tree, you make a peak to see who is on the opposite side.";
    document.getElementById("other_game_text").innerHTML =
      "?!... Couldn't that be...";
    document.getElementById("parser_option").innerHTML =
      "[DIO]!!! / Your archnemesis! Your great [Rival]!";
    y = 200;
  }

  //Choose DIO
  if (event.keyCode === 13 && x == "DIO" && y == 200 && g == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "...<br> That's it, I'm out. I'm not going to do the stupid JoJo reference thing again. I had enough of that";
    document.getElementById("other_game_text").innerHTML =
      "And if you want more of that, go and watch some instead of telling me about these things and yelled 'Mudadadadada' to me ever again";
    document.getElementById("parser_option").innerHTML =
      "To be continue?<b> Or [Restart]?</b>";
    y = 69420;
    z++;
    g = 1;
  }

  //Choose DIO (second time)
  if (event.keyCode === 13 && x == "DIO" && y == 200 && g == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = "...<br> Nope";
    document.getElementById("other_game_text").innerHTML =
      "Don't come closer to me";
    document.getElementById("parser_option").innerHTML =
      "To be continue?<b> Or [Restart]?</b>";
    y = 69420;
    g = 2;
  }

  //Choose DIO (final time)
  if (event.keyCode === 13 && x == "DIO" && y == 200 && g == 2) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "...<br> Oh ho ho. So you insist me to do this huh?";
    document.getElementById("other_game_text").innerHTML =
      "Good, because if I can beat the shit out off you without you getting closer to me, then you would not dare to come back to me again<br>Brace yourself!";
    document.getElementById("parser_option").innerHTML =
      "<b>You have been killed by the narrator. There is no continue from this point. [Restart] to continue</b>";
    y = 69420;
    g = 3;
    z++;
    death++;
  }

  //Choose DIO (onward)
  if (event.keyCode === 13 && x == "DIO" && y == 200 && g == 3) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = "You did not learn!";
    document.getElementById("other_game_text").innerHTML = "";
    document.getElementById("parser_option").innerHTML =
      "<b>You have been killed by the narrator. There is no continue from this point. [Restart] to continue</b>";
    y = 69420;
    death++;
  }

  //Choose Rival
  if (event.keyCode === 13 && x == "Rival" && y == 200) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "You gasped. Perhaps a little too loud, causing your archnemesis to snap back and turn at you. You fell to the ground out of surprise.<br> 'So you did come back', he said, sneering.";
    document.getElementById("other_game_text").innerHTML =
      "You knew he was out for blood this time. The last time you have humiliate him in front of thousands of people, so no wonder he would go on the hunt for you. <br> You swipe the ground beind you to see if you can find anything good to fight. Suddunly yoy touch something cold... It's a...";
    document.getElementById("parser_option").innerHTML =
      "Metal [Ball] / FLEX [Tape]";
    y = 202;
    z++;
  }

  //Choose Ball
  if (event.keyCode === 13 && x == "Ball" && y == 202) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "You look at what you just hold on. It's a metal ball... No, a Pokemon ball? 'I see you got the gut to challenge me again huh?', your rival shout to you.<br> Great, you muttered to yourself, since when does this become a Pokemon battle?";
    document.getElementById("other_game_text").innerHTML =
      "Your opponent fish out a Poke ball from his pocket. There is no turning back now, you whispered bitterly.<br>Hold the ball firmly, you throw. ";
    document.getElementById("parser_option").innerHTML =
      "Lo and behold, it's a FUCKING [Charizard] X, WTF?! / [Magikarp]...";
    y = 203;
  }

  //Choose Magikarp (first time)
  if (event.keyCode === 13 && x == "Ball" && y == 203 && g == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "...<br>...<br>'Pathetic, isn't it?' your rival says, summoning Decidueye (please don't actually hate my boy, he's precious). Oh great, you exhale in desperation. <br> 'Use whatever you got, Magikarp', you said, hoping at least it's a tackle, not a splash";
    document.getElementById("other_game_text").innerHTML =
      "The Magikarp flops a few time, then unleashed A FREAKING HYPER BEAM!<br> That settles the deal as it not only vaporise the Pokemon but your rival too.<br>Normally you would be sue for killing someone intentionally but oh well, at least you got to kick someone off of your life, right?";
    document.getElementById("parser_option").innerHTML =
      "You have triumphant with your... Magikarp? And become the best Poke trainer in the world (sorta)<br><b>[Restart] to find more ending?</b>";
    y = 69420;
    z++;
    g = 1;
  }

  //Choose Magikarp (second time and onward)
  if (event.keyCode === 13 && x == "Ball" && y == 203 && g == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "...<br>...<br>'Pathetic, isn't it?' your rival says, summoning Decidueye (please don't actually hate my boy, he's precious). Oh great, you exhale in desperation. <br> 'Use whatever you got, Magikarp', you said, hoping at least it's a tackle, not a splash";
    document.getElementById("other_game_text").innerHTML =
      "The Magikarp flops a few time, then unleashed A FREAKING HYPER BEAM!<br> That settles the deal as it not only vaporise the Pokemon but your rival too.<br>Normally you would be sue for killing someone intentionally but oh well, at least you got to kick someone off of your life, right?";
    document.getElementById("parser_option").innerHTML =
      "You have triumphant with your... Magikarp? And become the best Poke trainer in the world (sorta)<br><b>[Restart] to find more ending?</b>";
    y = 69420;
  }

  //Choose Charizard (first time)
  if (event.keyCode === 13 && x == "Charizard" && y == 203 && f == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "WHAT?! WHAT?! HOLY <strike>COW</strike> MILTANK, WHAT IS THIS WORLD! WE ARE ALL GOING TO DIE BECAUSE THAT CHARIZARD IS GOING INSANE BECAUSE IT STAYED IN THAT FORM FOR YEARS AND IT LOST ITS MIND!";
    document.getElementById("other_game_text").innerHTML =
      "Yep. And just as expected, that Charizard went berzerk and thrashed everything including your opponent. Say goodbye to where you live and forget about funeral as your body was incinerated, stomped and smeared into pieces.";
    document.getElementById("parser_option").innerHTML =
      "<b>[Restart] from beginning?</b>";
    y = 69420;
    z++;
    f = 1;
    death++;
  }

  //Choose Charizard (second time and onward)
  if (event.keyCode === 13 && x == "Charizard" && y == 203 && f == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "WHAT?! WHAT?! HOLY <strike>COW</strike> MILTANK, WHAT IS THIS WORLD! WE ARE ALL GOING TO DIE BECAUSE THAT CHARIZARD IS GOING INSANE BECAUSE IT STAYED IN THAT FORM FOR YEARS AND IT LOST ITS MIND!";
    document.getElementById("other_game_text").innerHTML =
      "Yep. And just as expected, that Charizard went berzerk and thrashed everything including your opponent. Say goodbye to where you live and forget about funeral as your body was incinerated, stomped and smeared into pieces.";
    document.getElementById("parser_option").innerHTML =
      "<b>[Restart] from beginning?</b>";
    y = 69420;
    death++;
  }

  //Choose Flex tape (first time)
  if (event.keyCode === 13 && x == "Tape" && y == 202 && e == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "A roll of Flex Tape? What can it... A thought suddenly snap in your head. You grin with the thought <br> You quickly take the tape and taped around your wrist as you approach your rival.<br> 'Well well well' ";
    document.getElementById("other_game_text").innerHTML =
      "Your rival suddenly summon a light saber out of nowhere and slash right at you. You put your hand in defend, making sure that your wrist will intercept the light saber. <br> BOW! <br> Your hand still there, holding off the light saber. Your opponent eye widen in surprise. 'I got the high ground, Anakin', cheesy, but best badass boast of yours at the moment.<br> A swift kick , knocking the light saber off his hand and you use the Force and grab it. The tide has turned";
    document.getElementById("parser_option").innerHTML =
      "A decapitation on his head is enough to end the conflict. You thank the meme for making flex tape being so powerful, otherwise you would be sawed in half already. <br> And so you now become the uncontested Jedi in all parallel universe.<br> <b>[Restart] to find more ending?</b> ";
    y = 69420;
    z++;
    e = 1;
  }

  //Choose Flex tape (second time and onward)
  if (event.keyCode === 13 && x == "Tape" && y == 202 && e == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML =
      "A roll of Flex Tape? What can it... A thought suddenly snap in your head. You grin with the thought <br> You quickly take the tape and taped around your wrist as you approach your rival.<br> 'Well well well' ";
    document.getElementById("other_game_text").innerHTML =
      "Your rival suddenly summon a light saber out of nowhere and slash right at you. You put your hand in defend, making sure that your wrist will intercept the light saber. <br> BOW! <br> Your hand still there, holding off the light saber. Your opponent eye widen in surprise. 'I got the high ground, Anakin', cheesy, but best badass boast of yours at the moment.<br> A swift kick , knocking the light saber off his hand and you use the Force and grab it. The tide has turned";
    document.getElementById("parser_option").innerHTML =
      "A decapitation on his head is enough to end the conflict. You thank the meme for making flex tape being so powerful, otherwise you would be sawed in half already. <br> And so you now become the uncontested Jedi in all parallel universe... Again...<br><b>[Restart] to find more ending?<b> ";
    y = 69420;
  }

  //Travel West from house
  if (event.keyCode === 13 && x == "West" && y == 2) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = west0;
    document.getElementById("other_game_text").innerHTML = west1;
    document.getElementById("parser_option").innerHTML = west2;
    y = 10;
  }

  //Travel to the Basement from house
  if (event.keyCode === 13 && x == "Down" && y == 2) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = down0;
    document.getElementById("other_game_text").innerHTML = down1;
    document.getElementById("parser_option").innerHTML = down2;
    y = 100;
  }

  //Inspect other things in basement
  if (event.keyCode === 13 && x == "Inspect" && y == 100) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("parser_option").innerHTML = down3;
    document.getElementById("parser_option2").innerHTML = down4;
  }

  //Help
  if (event.keyCode === 13 && x == "Help") {
    event.preventDefault();
    document.getElementById("parser").value = "";
    alert(
      "Type in the command inside [this] without including [] to proceed the story. "
    );
    alert("Type in [Ending] to see how many ending you have achieve. ");
    alert("Type in [Reset] to reset all the story from the beginning. ");
    alert("Type in [Credit] to see the credit and special thanks note ");
  }

  //Credit and inspiration
  if (event.keyCode === 13 && x == "Credit") {
    event.preventDefault();
    document.getElementById("parser").value = "";
    alert("Original story by Tung N. and Duy T.");
    alert("Assist contribution: Moumini");
    alert(
      "Concept taken from Colossal Cave (1977), Zork (1980) and in-universe Bandersnatch from Black Mirror series (2018)"
    );
    alert("Special thanks to Undertale (2015) for the inspiration");
  }

  //Stats
  if (event.keyCode === 13 && x == "Ending") {
    event.preventDefault();
    document.getElementById("parser").value = "";
    alert(
      "Ending found: " + z + " out of 16" //Imma put 16 for now
    );
  }

  //Death count
  document.getElementById("deathcount").innerHTML = "Death count: " + death;

  //Reset yes
  if (event.keyCode === 13 && x == "Reset" && reset == 0) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("confirm").innerHTML =
      "Are you sure you want to reset the game (including all ending you have achieved)? [Yes] / [No]";
    reset = 1;
  }
  //Reset yes
  if (event.keyCode === 13 && x == "Yes" && reset == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = start0;
    document.getElementById("game_text2").innerHTML = "";
    document.getElementById("other_game_text").innerHTML = start1;
    document.getElementById("parser_option").innerHTML = start2;
    document.getElementById("confirm").innerHTML = "";

    y = 2;
    z = 0;
    a = 0;
    reset = 0;
  }

  //Reset no
  if (event.keyCode === 13 && x == "No" && reset == 1) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("confirm").innerHTML = "";
    reset = 0;
  }

  //Restart game
  if (event.keyCode === 13 && x == "Restart" && y == 69420) {
    event.preventDefault();
    document.getElementById("parser").value = "";
    document.getElementById("game_text").innerHTML = start0;
    document.getElementById("game_text2").innerHTML = "";
    document.getElementById("other_game_text").innerHTML = start1;
    document.getElementById("parser_option").innerHTML = start2;
    document.getElementById("confirm").innerHTML = "";

    y = 2;
  }

  //Secrete code
});
