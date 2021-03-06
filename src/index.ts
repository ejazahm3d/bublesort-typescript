import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([3000, 41, 54, 6, -1]);

numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("XXaa");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(344);
linkedList.add(-44);
linkedList.add(44);
linkedList.add(4);
linkedList.add(2);
linkedList.sort();
linkedList.print();
