function randomNum(max) {
  let random = Math.random() * max;
  let num = Math.round(random);
  return num;
}

function multiplyTwoNum() {
  let num1 = randomNum(10);
  let num2 = randomNum(20);
  document.getElementById('num').innerHTML = `${num1} * ${num2}`;
  let total = num1 * num2;

  setTimeout(
    function (ans) {
      ans == total;
      document.getElementById('ans').innerHTML = ` = ${ans}`;
    },
    2000,
    total
  );
}

function execute() {
  multiplyTwoNum();
  document.getElementById('ans').innerHTML = ``;
}

document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    execute();
  }
});
