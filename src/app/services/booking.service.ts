import { Injectable } from '@angular/core';
import {Booking} from '../models/Booking.model';
import {Subject} from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  booking: Booking[] = [];
  bookingSubject = new Subject<Booking[]>();

  constructor() { }

  emitBooking(){
    this.bookingSubject.next(this.booking);
  }

  saveBooking(){
    firebase.database().ref('/booking').set(this.booking);
  }

  getBooking(){
    firebase.database().ref('/booking')
      .on('value', (data) => {
        this.booking = data.val() ? data.val() : [];
        this.emitBooking();
      });
  }

  getSingleBooking(id: number){
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/booking/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewBooking(newBooking: Booking){
    this.booking.push(newBooking);
    this.saveBooking();
    this.emitBooking();
  }
}
