import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  //Exemples d’observables
  public obs = new Observable((listXsubscribe) => {
    listXsubscribe.next(Math.random());
  });

  //Exemples de subjects
  public subj = new Subject();

  //Exemples de behaviorSubjects
  public behave = new BehaviorSubject<number>(0);

  public nb!: number;
  constructor() {
    // this.behave = new BehaviorSubject<number>(0);
    //Exemples d’observables
    //this.obs.subscribe((data) => console.log(data));
    //this.obs.subscribe((data) => console.log(data));
    //Exemples de subjects
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('test');
    // this.subj.next('test 2');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next(Math.random());
    // this.subj.subscribe((data) => console.log(data));
    //Exemples de behaviorSubjects
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.next(1);
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.next(2);
    // this.behave.next(Math.random());
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.subscribe((data) => console.log(data));
  }
  public changeBehavior() {
    this.behave.next(this.behave.value + 1);
  }
}
