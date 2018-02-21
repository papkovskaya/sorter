class Sorter {
  constructor() {
    this.array = [];
    this.setCom = false;
    this.f;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var new_array = [];
    for (var i = 0; i < indices.length; i++) {
      for (var j = 0; j < indices.length - i; j++) {
        if (indices[j] > indices[j + 1]) {
          var temp = indices[j];
          indices[j] = indices[j + 1];
          indices[j + 1] = temp;
        }
      }
    }
    for (var i = 0; i < indices.length; i++){
      new_array.push(this.array[indices[i]]);
    }
    if (this.setCom == false){
      for (var i = 0; i < new_array.length; i++){
        for (var j = 0; j < new_array.length - i; j++) {
          if (new_array[j] > new_array[j + 1]) {
            var temp = new_array[j];
            new_array[j] = new_array[j + 1];
            new_array[j + 1] = temp;
          }
        }
      }
    } else {
      new_array = step(new_array, this.f);
    }
    for (var i = 0; i < indices.length; i++) {
      this.array[indices[i]] = new_array[i];
    }
    return this.array;
  }

  setComparator(compareFunction) {
    this.setCom == true;
    this.f = compareFunction;
  }
}

function step(par, f) {
  for (var i = 0; i < par.length; i++)
    if (f(par[i], par[i + 1]) > 0) {
      var x = par[i];
      par[i] = par[i + 1];
      par[i + 1] = x;
    } else {
      continue;
    }
  return par;
}

module.exports = Sorter;

var sorter = new Sorter;
sorter.add(6);
sorter.add(5);
sorter.sort([0, 1]);

sorter.add(2);
sorter.add(1);
sorter.sort([1, 0]);

sorter.toArray();