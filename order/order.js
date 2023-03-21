var price = 0;

function menu(b) {
  var menu = document.getElementById('menu' + b);

  for (var i = 1; i < 4; i++) {
    var num = document.getElementById('menu' + i);
    num.style.background = '';
    num.style.color = '';
  }
  menu.style.background = '#ffffff';
  menu.style.color = '#4e4e4e';
}

function clicks(a) {
  var money = document.getElementById('totalMoney');
  if (a.id == 'fattyTuna8') {
    price += 22000;
  }
  if (a.id == 'fattyTuna2') {
    price += 10000;
  }
  if (a.id == 'bestPartOfRed3') {
    price += 12000;
  }
  if (a.id == 'fattyTuna5') {
    price += 16000;
  }
  money.innerHTML = price.toLocaleString('ko-KR');
}

function sold_out() {
  alert('죄송합니다. 참다랑어 세트는 품절입니다.');
}

function order_menu() {
  var money = document.getElementById('totalMoney');
  if (money.innerHTML != '0') {
    alert('주문완료입니다');
    money.innerHTML = '0';
    price = 0;
  } else {
    alert('담기 후 주문하기버튼을 눌러주세요');
  }
}
