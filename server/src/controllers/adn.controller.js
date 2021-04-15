const adnCtrl = {};

// Crear dos servicio /mutation /stats /list

const ADN = require('../models/adn.model');

adnCtrl.getMutation =  async (req,res) =>{
    console.log('uno');
    const adnMutation =  await ADN.find();
    console.log('Dos');
    res.json(adnMutation);
}


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


adnCtrl.list = async (req,res) =>{

    //tomar los ultimos 10 registro guardados
    
    let resp = (await ADN.find().sort({_id:-1}).limit(10));

    res.json(resp)

    return resp;
    // res.send('obteniendo Las ultimas peticiones')

}









adnCtrl.mutation =  async (req,res) =>{
    
    let db = {
        dna: req.body['dna'],
        resultado: 'No Mutacion'
    }


    let arrDNA = getArray(req.body['dna']);

    if(arrDNA.length === 0){
        res.send({message: "Matriz no cuadratica"});
        return
    }else if(arrDNA.length === 1){
        res.send({message: "La cadena contiene un caracter desconocido. Permitidos: (A,T,C,G)"});
        return
    }


    let respuesta = hasMutation(arrDNA);

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
    
    let mutation = 0;
    
    const RE = /(.)\1\1\1/;

    for (let i = 0; i < arrayDNA.length; i++) {
        
        if(RE.exec(arrayDNA[i])){
            console.log(RE.exec(arrayDNA[i]));
            mutation++;
        }

    }

    if(mutation >= 2){
        return true;
    }


    return false;
}

function getArray(reqArray){

    let strV = "";
    let strH1 = "";
    let strH2 = "";
    let arrayDNA = [];
    let arrayPeticionDNA = [];
    const REX = /[B,D,E,F,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,U,V,W,X,Y,Z]/; 


    for (let i = 0; i < reqArray.length; i++) {

        if(reqArray.length !== reqArray[i].length){
            return [];
        }
        if(REX.exec(reqArray[i].toUpperCase())){
            console.log(reqArray[i]);
            return ['i'];
        }


        arrayPeticionDNA.push(reqArray[i]);

        arrayDNA = Array.from(reqArray[i]);
        strH2 = strH2 + arrayDNA[i];
        strH1 = strH1 + arrayDNA[reqArray.length-1];
       
        strV ="";

        for (let j = 0; j < reqArray.length; j++) {

            arrayDNA = Array.from(reqArray[j]);
            strV = strV + arrayDNA[i];
            
        } 
    
        arrayPeticionDNA.push(strV.toUpperCase());
        
        
    }

    arrayPeticionDNA.push(strH1.toUpperCase(),strH2.toUpperCase());

   
    return arrayPeticionDNA;
    
}


module.exports = adnCtrl;