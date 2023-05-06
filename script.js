function remove(event) {
  event.preventDefault();
  var ball = document.getElementById("golf");
  Array.from(ball.children).forEach((input, index) => {
    if (index !== 0) {
      input.remove();
    }
  });

  var scores = document.getElementById("form");
  scores.reset();
}

function addInput(event) {
  event.preventDefault();
  var form = document.getElementById("golf");
  var newInput = document.createElement("input");
  newInput.type = "text";
  form.appendChild(newInput);
}

function calculate(event) {
  var form = document.getElementById("form");

  const scorearray = [];
  Array.from(form.elements).forEach((input) => {
    if (
      input.type === "text" &&
      input.disabled === false &&
      input.value !== ""
    ) {
      scorearray.push(input.value);
    }
  });

  event.preventDefault();

  var sorted = scorearray.sort((a, b) => {
    return a - b;
  });

  var middle = Math.floor(sorted.length / 2);

  var low = sorted.slice(0, middle);

  var handicap = low.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  var sum = handicap / low.length;

  document.getElementById("txtSum").value = sum;
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0bdfae4b32msh944cce92bea9b3ap1ab133jsn438ada11b9cb",
    "X-RapidAPI-Host": "golf-leaderboard-data.p.rapidapi.com",
  },
};

const api_url = "https://golf-leaderboard-data.p.rapidapi.com/world-rankings";
async function getLeader() {
  const response = await fetch(api_url, options);
  const data = await response.json();
  const lead = data.results;
  const rank = lead.rankings.slice(0, 99);
  const names = rank.map((player) => {
    return player.player_name;
  });

  const list = document.getElementById("myList");
  names.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
  
}


getLeader();

function calculateRound(event, inputId, totalId) {
  event.preventDefault();
  const card = document.getElementById(inputId);
  const scorecards = [];
  Array.from(card.elements).forEach((inputs) => {
    if (
      inputs.type === "text" &&
      inputs.disabled === false &&
      inputs.value !== ""
    ) {
      scorecards.push(inputs.value);
    }
  });

  const thesum = scorecards.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  document.getElementById(totalId).value = thesum;
}

function total(event, inputId, inputId2, totalId) {
  event.preventDefault();
  const card = document.getElementById(inputId);
  const scorecards = [];
  Array.from(card.elements).forEach((inputs) => {
    if (
      inputs.type === "text" &&
      inputs.disabled === false &&
      inputs.value !== ""
    ) {
      scorecards.push(inputs.value);
    }
  });

  const thesum = scorecards.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  const cards = document.getElementById(inputId2);
  const scorecardsback = [];
  Array.from(cards.elements).forEach((inputs) => {
    if (
      inputs.type === "text" &&
      inputs.disabled === false &&
      inputs.value !== ""
    ) {
      scorecardsback.push(inputs.value);
    }
  });

  const thesumback = scorecardsback.reduce((acc, curVal) => {
    return Number(acc) + Number(curVal);
  });

  const final = thesumback + thesum;

  document.getElementById(totalId).value = final;
}

function clearScores(event) {
  event.preventDefault();
  if (confirm("Are you sure?")) {
    document.getElementById("front").reset();
    document.getElementById("back").reset();
    document.getElementById("player2front").reset();
    document.getElementById("player2back").reset();
    document.getElementById("player3front").reset();
    document.getElementById("player3back").reset();
    document.getElementById("player4front").reset();
    document.getElementById("player4back").reset();
    document.getElementById("front1").reset();
    document.getElementById("player2front1").reset();
    document.getElementById("player3front1").reset();
    document.getElementById("player4front1").reset();
  }
}

function show_hide0() {
  {
    document.getElementById("green").style.display = "block";
    document.getElementById("handicap").style.display = "none";
    document.getElementById("games").style.display = "none";
    document.getElementById("facts").style.display = "none";
    document.getElementById("leader").style.display = "none";
    document.getElementById("scorecard").style.display = "none";

    return;
  }
}

function show_hide() {
  {
    document.getElementById("green").style.display = "block";
    document.getElementById("handicap").style.display = "none";
    document.getElementById("games").style.display = "none";
    document.getElementById("facts").style.display = "none";
    document.getElementById("leader").style.display = "none";
    document.getElementById("scorecard").style.display = "none";

    return;
  }
}

function show_hide2() {
  {
    document.getElementById("scorecard").style.display = "block";
    document.getElementById("handicap").style.display = "none";
    document.getElementById("games").style.display = "none";
    document.getElementById("facts").style.display = "none";
    document.getElementById("leader").style.display = "none";
    document.getElementById("green").style.display = "none";

    return;
  }
}

function show_hide3() {
  {
    document.getElementById("handicap").style.display = "block";
    document.getElementById("scorecard").style.display = "none";
    document.getElementById("games").style.display = "none";
    document.getElementById("facts").style.display = "none";
    document.getElementById("leader").style.display = "none";
    document.getElementById("green").style.display = "none";

    return;
  }
}

function show_hide4() {
  {
    document.getElementById("handicap").style.display = "none";
    document.getElementById("scorecard").style.display = "none";
    document.getElementById("games").style.display = "block";
    document.getElementById("facts").style.display = "none";
    document.getElementById("leader").style.display = "none";
    document.getElementById("green").style.display = "none";

    return;
  }
}
function show_hide5() {
  {
    document.getElementById("handicap").style.display = "none";
    document.getElementById("scorecard").style.display = "none";
    document.getElementById("games").style.display = "none";
    document.getElementById("facts").style.display = "block";
    document.getElementById("leader").style.display = "none";
    document.getElementById("green").style.display = "none";

    return;
  }
}

function show_hide6() {
  {
    document.getElementById("handicap").style.display = "none";
    document.getElementById("scorecard").style.display = "none";
    document.getElementById("games").style.display = "none";
    document.getElementById("facts").style.display = "none";
    document.getElementById("leader").style.display = "block";
    document.getElementById("green").style.display = "none";

    return;
  }
}

function show_hide7() {
  {
    document.getElementById("handicap").style.display = "none";
    document.getElementById("scorecard").style.display = "none";
    document.getElementById("games").style.display = "none";
    document.getElementById("facts").style.display = "none";
    document.getElementById("leader").style.display = "block";
    document.getElementById("green").style.display = "none";

    return;
  }
}
