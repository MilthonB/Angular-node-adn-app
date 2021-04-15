const adnCtrl = {};


// Obtener la base de datos
const ADN = require('../models/adn.model');

//Muestra todos los elementos de la base de datos
adnCtrl.getMutation =  async (req,res) =>{
    console.log('uno');
    const adnMutation =  await ADN.find();
    console.log('Dos');
    res.json(adnMutation);
}


//Muestra el ratio, las mutaciones y las no mutaciones
adnCtrl.stats = async (req,res) =>{


    let mutations =  (await ADN.find( { resultado: "Mutation" } )).length;
    let noMutations = (await ADN.find( { resultado: "No Mutation" } )).length;

    res.json({ 
            "count_mutations": mutations,
            "count_no_mutation": noMutations,
            "ratio": (mutations/noMutations).toFixed(2),
            })

    console.log(mutations, noMutations);
    
   

}


// Muestra ultimos 10 POST
adnCtrl.list = async (req,res) =>{

    //tomar los ultimos 10 registro guardados
    
    let resp = (await ADN.find().sort({_id:-1}).limit(10));

    res.json(resp)

    return resp;
    // res.send('obteniendo Las ultimas peticiones')

}








//POST QUE ENCUENTRA MUTACION O NO MUTACINO
adnCtrl.mutation =  async (req,res) =>{
    
    //Objeto para la base de datos
    let db = {
        dna: req.body['dna'],
        resultado: 'No Mutacion'
    }


    // Obtener todos los arreglos en uno solo
    let arrDNA = getArray(req.body['dna']);

    //Si la respuesta es igual a 0 la matriz no es cuadra tica y se termina el proceso
    //Si la respuesta es igual a 1 la cadena contiene un caracter desconocido y se termina el proceso
    if(arrDNA.length === 0){
        res.send({message: "Matriz no cuadratica"});
        return
    }else if(arrDNA.length === 1){
        res.send({message: "La cadena contiene un caracter desconocido. Permitidos: (A,T,C,G)"});
        return
    }



    // Retorna un boolean si hay o no hay mutacion
    let respuesta = hasMutation(arrDNA);

    //Si es verdadero hay mutacion 
    //Si es falso no hay mutacion 
    if(respuesta){
        db.resultado = 'Mutation'

        const newADN = new ADN(db);

        await newADN.save();

        res.sendStatus(200)
    }else{
        db.resultado = 'No Mutation'

        const newADN = new ADN(db);

        await newADN.save();

        res.sendStatus(403)

    }

   

    // res.sendStatus(200);


}
 

function hasMutation(arrayDNA) {
    
    // A más de mutaciones el ADN  ya se considera mutacion
    let mutation = 0;
    

    //Expresión regular que verifica si hay 4 letras iguales de forma consecutiva
    const RE = /(.)\1\1\1/;


    for (let i = 0; i < arrayDNA.length; i++) {
         // no hay regresa un arreglo y si no hay un null    
        if(RE.exec(arrayDNA[i])){
            console.log(RE.exec(arrayDNA[i]));
            mutation++;
        }

    }

    //mayor o igual al dos se termina
    if(mutation >= 2){
        return true;
    }


    return false;
}

// Obtienes un solo arreglo con todas las posiciones de lectura, vertical, horizontal y diagonales
function getArray(reqArray){



    let strV = "";

    let strH1 = "";
    let strH2 = "";
    
    //Arreglo que descompone cada string y lo convierte en arreglo
    let arrayDNA = [];
    //arreglo que almacena todo
    let arrayPeticionDNA = [];
    //expresion regular verifica si se encuentran estas letras en el string
    const REX = /[B,D,E,F,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,U,V,W,X,Y,Z]/; 


    for (let i = 0; i < reqArray.length; i++) {

        //SI no es cuadrada
        if(reqArray.length !== reqArray[i].length){
            return [];
        }

        //si tiene un caracter invalido
        if(REX.exec(reqArray[i].toUpperCase())){
            console.log(reqArray[i]);
            return ['i'];
        }


        //Agrega todas las horizontales
        arrayPeticionDNA.push(reqArray[i]);

        //Descompone el string y evalua sus posiciones
        arrayDNA = Array.from(reqArray[i]);

        //se obtiene la diagonal y se almacena en el strH2 hasta tener un "TTGGTT"
        strH2 = strH2 + arrayDNA[i];

        //se obtiene la diagonal y se almacena en el strH1 hasta tener un "AAGGCC"
        strH1 = strH1 + arrayDNA[reqArray.length-1];
       
        
        strV ="";

        for (let j = 0; j < reqArray.length; j++) {
            //obtiene las verticales y las hace un solo string
            arrayDNA = Array.from(reqArray[j]);
            strV = strV + arrayDNA[i];
            
        } 
    
        //ya que se genera el string con los valores se guarda en los arreglos
        arrayPeticionDNA.push(strV.toUpperCase());
        
        
    }

    arrayPeticionDNA.push(strH1.toUpperCase(),strH2.toUpperCase());

   
    return arrayPeticionDNA;
    
}


module.exports = adnCtrl;