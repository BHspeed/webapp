import { Injectable } from '@angular/core';
import Backendless from 'backendless';
const PersonsStore = Backendless.Data.of('Person');
@Injectable({
providedIn: 'root'
})
export class PersonsService {
public persons: Object[] = [];
loadAll() {
  PersonsStore.find().then((persons: Object[]) => {
    this.persons = persons;
  });
}
}