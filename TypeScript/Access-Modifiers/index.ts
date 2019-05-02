import { Bear } from './bear.model';
import { Animal } from './animal.model';

const bear = new Bear({name: 'Omega', tail: true});
bear.claws = 3;
bear.add(1, 2);