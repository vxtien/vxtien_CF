let c = 0;

function Hailstone(number) {
  document.write(number + " ");

  if (number == 1 && c == 0) {
    return c;
  } else if (number == 1 && c != 0) {
    c++;
    return c;
  } else if (number % 2 == 0) {
    c++;
    Hailstone(number / 2);
  } else if (number % 2 != 0) {
    c++;
    Hailstone(3 * number + 1);
  }
  return c;
}

let number = prompt("Nhập số N");
let x;

x = Hailstone(number);
