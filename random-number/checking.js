var win = 0;
var lose = 0;
var draw = 0;

function makeTable() {
  tWin.innerHTML = win + ' 회';
  tLose.innerHTML = lose + ' 회';
  tDraw.innerHTML = draw + ' 회';
  tcount.innerHTML = win + lose + draw + ' 회';
  t.innerHTML = parseInt((win / (win + lose)) * 100) + ' %';
}

function start() {
  var result = document.getElementById('result');

  var user = parseInt(Math.random() * 100) + 1;
  var user1 = document.getElementById('what1');

  user1.innerHTML = user;

  var com = parseInt(Math.random() * 100) + 1;
  var com1 = document.getElementById('what2');

  com1.innerHTML = com;

  if (user > com) {
    result.innerHTML =
      '유저 : ' + user + ' vs ' + ' 컴퓨터 : ' + com + ' = 유저 승!!!';
    win = win + 1;
  } else if (user == com) {
    result.innerHTML =
      '유저 : ' + user + ' vs ' + ' 컴퓨터 : ' + com + ' = 비김...';
    draw = draw + 1;
  } else {
    result.innerHTML =
      '유저 : ' + user + ' vs ' + ' 컴퓨터 : ' + com + ' = 컴퓨터 승ㅠㅠ';
    lose = lose + 1;
  }
  makeTable();
}
function reset() {
  location.reload(true);
}
