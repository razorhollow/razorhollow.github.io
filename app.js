alert("connected");

const prizes = [
    "Sitka Stratus WS Beanie",
    "Sitka Neck Gaiter",
    "Field Hip Quiver",
    "Hoyt Backpack",
    "Sitka Incinerator Muff",
    "Stan Xtinction Release",
    "Tru Ball X-Tension RT Release",
    "CBE TroX Hunting Bow Stabilizer Kit",
    "Trophy Ridge H5 Sight",
    "Black Gold Pro 3 pin Sight",
    "Yeti Tundra Haul Hard Cooler",
    "NEW BOW!"
  ];
  
  const names = [
    "1: Bruce Rodenberg",
    "2: Chris Glick",
    "3: Christine Reynolds",
    "4: Clint Welding",
    "5: Chris Donahue",
    "6: Josh Boor",
    "7: Gordy Spangenburg",
    "8: Dave Reynolds",
    "9: Drew Storch",
    "10: Taylor Smith",
    "11: Tim Rohr",
    "12: Andy Rohr"
  ];
  
  function pickAWinner() {
    let winningTicket = Math.floor(Math.random() * names.length);
    let ticketNumber = winningTicket + 1;
    let winner = names[winningTicket];
    names.splice(winningTicket, 1);
    return winner;
  }
  
  function generate() {
    if (prizes.length > 0) {
      let newLine = document.createElement("p");
      let item = prizes.shift();
      newLine.innerText = `${item}: ${pickAWinner()}`;
      newLine.classList.add("winner");
      document.querySelector("div").append(newLine);
    }
  }
  
  let button = document.querySelector("button");
  button.addEventListener("click", generate);