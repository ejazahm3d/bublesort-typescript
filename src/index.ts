class Sorter {
  constructor(public collection: number[] | string) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        if (this.collection === "string") {
        }
      }
    }
  }
}

const sorter = new Sorter([3, 41, 54, 6, -1]);
sorter.sort();

console.log(sorter.collection);
