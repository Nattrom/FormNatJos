const estudiates = [
    {
        id: 106789,
        name: "Josttin",
        lastname: "Perez",
        age: 19,
        phone: 3022428031,
        sex: "Masculino",
        profession: "Programmer",
        univer: "Universidad de la costa"
    },
    {
        id: 100194,
        name: "Natalia",
        lastname: "Romerin",
        age: 20,
        phone: 3022428030,
        sex: "Femenino",
        profession: "Programmer",
        univer: "Universidad de la costa",
    },
    {
        id: 100717,
        name: "Andrea",
        lastname: "Dominguez",
        age: 20,
        phone: 3022428028,
        sex: "Femenino",
        profession: "Programmer",
        univer: "Universidad de la costa"
    }
];

let id = document.getElementById("Id");
let nombre = document.getElementById("Nombre");
let apellido = document.getElementById("Apellido");
let edad = document.getElementById("Edad");
let telefono = document.getElementById("Telefono");
let sexo = document.getElementById("Sexo");
let profesion = document.getElementById("Profesion");
let universidad = document.getElementById("Universidad");

const Guardar = () => {

    if (id.value == "" || nombre.value == "" || apellido.value == "" || edad.value == "" || telefono.value == "" || sexo.value == "" || profesion.value == "" || universidad.value == "" || sexo.value == "Sexo") {
        alert("Porfavor llenar todos los campos");
    }else if(verificar() == true) {
        alert("Esta id ya existe");
    }else{
        let nuevo = {
            id: id.value,
            name: nombre.value,
            lastname: apellido.value,
            age: edad.value,
            phone: telefono.value,
            sex: sexo.value,
            profession: profesion.value,
            univer: universidad.value
        }
        estudiates.push(nuevo);
        alert("Estudiante guardado con exito")
        id.value = "";
        nombre.value = "";
        apellido.value = "";
        edad.value = "";
        telefono.value = "";
        sexo.value = 'Sexo';
        profesion.value = "";
        universidad.value = "";
        Mostrar();
    }
}

let cuerpotabla = document.getElementById("CuerpoTabla")

const Mostrar = () => {
    let tabla = "";
    for (let i = 0; i < estudiates.length; i++) {
        tabla += `
        <tr>
            <td>${estudiates[i].id}</td>
            <td>${estudiates[i].name}</td>
            <td>${estudiates[i].lastname}</td>
            <td>${estudiates[i].age}</td>
            <td>${estudiates[i].phone}</td>
            <td>${estudiates[i].sex}</td>
            <td>${estudiates[i].profession}</td>
            <td>${estudiates[i].univer}</td>
        </tr>
        `
    }
    cuerpotabla.innerHTML = tabla
}

const verificar = () => {
    for (let i = 0; i < estudiates.length; i++) {
        if (estudiates[i].id == id.value) {
            return true;
        }
    }
    return false;
}
