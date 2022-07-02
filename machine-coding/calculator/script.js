class cal {
  constructor(num) {
    this.value = num;
    return this;
  }
  add(num) {
    this.value += num;
    return this;
  }
  sub(num) {
    this.value -= num;
    return this;
  }
  val = this.value;
}

console.log(new cal(2).add(5).sub(41).val);

// Approach 2

function calculator(num) {
  return {
    value: num,
    add(num) {
      return calculator(this.value + num);
    },

    sub(num) {
      return calculator(this.value - num);
    },
    val() {
      return this.value;
    },
  };
}

console.log(calculator(2).add(5).sub(4).val());
