var wordArray = ["one", "two", "three", "four", "five", "six", "seven"]; //No need for seven lines of push statements
var randNum, finalWord;
randNum = Math.floor(Math.random() * wordArray.length);
finalWord = wordArray[randNum];


//Semi-Randomized insults
var insult_start = ["Late to class ", "IB course taking ", "Smash brothers losing ", "Depressed ", "Deadbeat fake-news reading ", "YouTube comment writing ", "Comic collecting ", "Uphill both ways in the snow walking " , "Hacktoberfest shirt wearing ", "Milk hating " , "Misinformed ", "Uninformed ", "Misled ", "Misguided ", "Insane ", "Murderous ", "Crazy ", "Rotten ", "Knuckle-head ", "Outdated ", "Illiterate ", "Mean ", "Foolish ", "Unfunny ", "Weak minded ", "Feeble minded ", "Silly ", "Sad ", "Off the grid ", "Cave dwelling ", "Sleep deprived ", "Pineapple eating ", "Imgur using ", "Ukulele playing "]
var insult_end = ["skim milk consumer", "person who uses unshortened URLs", "consumer of air", "whale eator", "Roy Moore voter", "Moodle user", "hellicopter parent", "Synergy checker", "Shamwow user", "krill lover", "nihilist", "Justin Bieber song listener", "xkcd comic reader", "Java programmer", "orange juice rights advocate", "water drinker", "anime lover", "potato eator", "juicero investor", "graphite chewer", "aquaman lover", "Urllib2 user", "banana peel eator", "obsessive MySpace checker", "tinder user", "swine", "eraser biter", "instagram selfie taker", "XML user", "Star Wars Prequel lover"]

RE = Math.floor(Math.random() * insult_start.length);
first_insult_part = insult_start[RE];

REE = Math.floor(Math.random() * insult_end.length);
second_insult_part = insult_end[REE];

final_insult = first_insult_part + second_insult_part;
