import { getDatabase, ref, push, set, onValue, update} from 'firebase/database';

export class studentCard{

    constructor(user){
        //this para atributos
        this.user = user;

    }

    
    render() {

        let partici = document.createElement("div");
        partici.className = "student-card";
        //posts.innerHTML = this.user.post;

        //pre sent post
        let curso = document.createElement("p");
        curso.className = "post-card-curso";
        curso.innerHTML = this.user.curso;

        //nombrer estudiante
        let name = document.createElement("h5");
        name.className = "post-card-name"
        name.innerHTML = this.user.name

        //codigo estudiante
        let code = document.createElement("h5");
        code.className = "post-card-code"
        code.innerHTML = this.user.code

        //participaciones
        let participan = document.createElement("p");
        participan.className = "post-card-code"
        participan.innerHTML = this.user.partic

        //boton para agregar participaciones
        let addPart = document.createElement("button");
        addPart.className = "post-card-participacion";
        addPart.innerHTML = "+";

        let partAdd = this.user.partic

        //agrega la participacion al estudfiante
        addPart.addEventListener("click", (e, event) =>{

            const database = getDatabase();

            const studPart = ref(database, "Student/" + this.user.name);

            partAdd += 1;
            console.log(partAdd)

            update(studPart, {"partic": partAdd});
            //set(studPart, partAdd);

        });

        //boton de borrar
        let delBtn = document.createElement("button");
        delBtn.className = "post-card-borrar";
        delBtn.innerHTML = "X";

        delBtn.addEventListener('click', (e, event) => {

            const database = getDatabase();

            const del = ref(database, 'Student/' + this.user.name);
            
            set(del, null);

        });

        //info en la card
        partici.appendChild(curso);
        partici.appendChild(name);
        partici.appendChild(code);
        partici.appendChild(participan);
       
        //boton para agregar participacion
        partici.appendChild(addPart);
        partici.appendChild(delBtn);

        return partici;

    }

    }