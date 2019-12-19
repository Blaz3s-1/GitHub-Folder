var input = document.getElementById("parser");
var y = 1;
var z = 0;
var reset = 0;
var a = 0;
var b = 0;
var c = 0;
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
  west2 = "Travel [North] / [South] / [West]";

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
