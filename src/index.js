import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue} from 'firebase/database';

import { getFirebaseConfig } from './firebase-config';

import {studentCard} from './student-card';

//inicializa firebase
const firebaseAppConfig = getFirebaseConfig(); 
const firebaseApp = initializeApp(firebaseAppConfig);

//agrega participacion al estudiante
function addStudent (addS) {

    const database = getDatabase();

    const studentN = ref(database, 'Student/' + addS.name);

    //addS ["id"] = studentN.key

    set(studentN, addS);

}

//busca los student
function getStudent () {

    const database = getDatabase();

    const studentN = ref(database, 'Student');

     //firebase data
     onValue(studentN, (snapshot)=> {

        const data = snapshot.val();

        //data pasa aca
        actStudent(data);

    });
}

function actStudent(data) {

    if (data) {

        noBono.innerHTML = " ";
        bonP.innerHTML = " ";
        bonO.innerHTML = " ";
        
        //actCards.innerHTML = " ";
        
        Object.keys(data).forEach((key, index)=> {
            
            const user = new studentCard(data[key]);
            //actCards.appendChild(card.render());

            let studParti = data[key].partic;

            if (studParti <= 5){

                noBono.appendChild(user.render());
            }

            if (studParti > 5 && studParti <= 10){

                bonP.appendChild(user.render());
            }

            if (studParti > 10){

                bonO.appendChild(user.render());
            }

        });

    }
}

//DECLARACIONES
const curso = document.getElementById('curso');
const name = document.getElementById('name');
const code = document.getElementById('code');
//bonos
const noBono = document.getElementById('Nobono');
const bonP = document.getElementById('bonoP');
const bonO = document.getElementById('bonoO');
//boton
const regisBtn = document.getElementById('regisBtn');
//tarjetas
//const actCards = document.getElementById('actCards');

//EVENTOS
const agreStudent = (e, event) => {

    let particiapcion = 0;

    const partici = {

    curso: curso.value,
    name: name.value,
    code: code.value,
    partic: particiapcion,

    }

    addStudent(partici);

}

regisBtn.addEventListener('click', agreStudent);
getStudent();
