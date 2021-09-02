import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Casa } from '../interfaces/casa.interface';
// import { HOUSES } from './house.db';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  collection!: AngularFirestoreCollection<Casa>;

  constructor( private firestore: AngularFirestore ) { 
    this.collection = this.firestore.collection<Casa>('houses');
    // console.log(this.collection);
  }

  getAll(): Observable<any[]>{
    return this.collection.valueChanges();
  }

  getById(pId: string): Observable<any> { 
    return this.collection.doc(pId).valueChanges();
  }


  delete(pId: string): Promise<any> { 
    return new Promise((resolve, reject) => {
      try {
        const result = this.collection.doc(pId).delete();   
        resolve({ success: 'ok', result });
      } catch (err) {
        reject(err);
      }
    })
  }


  create(pHouse: Casa): Promise<any> {
    return new Promise((resolve, reject) => {
      // Cuando lo que va a ocurrir aquí dentro no es síncrono (que no lo va a ser porque le tengoq ue hacer una petición a un servidor externo), le devuelva el error con el reject. Así, podemos rediir el resolve o el reject. 
      try{
        // resolve --> recibo una casa pero sin Id. 
        // Firestore tiene un método que me permite crear un id y asignárselo al nuevo elemento. Puntualización: el que voy a generar es el id del documento y es el que luego le voy a tener que pasar a la casa. 
          // Firestore tiene una propiedad ---> createId . Esto me genera un id de un documento
        const id = this.firestore.createId();
        pHouse.id = id;
        const result = this.collection.doc(id).set(pHouse);
        resolve({success: 'ok'});
      } catch (err) {
        // reject
        reject(err);
      }
    });
    ;
  }
}
