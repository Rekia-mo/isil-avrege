const modules = [{
  name: 'ARCHI',
  cof: 3
},
{
  name: 'ALGO',
  cof: 3
},
{
  name: 'LOGIC',
  cof: 2,
},
{
  name: 'CALCUL',
  cof: 2,
},
{
  name: 'PROBA',
  cof: 2,
},
{
  name: 'SI',
  cof: 2,
},
{
  name: 'OOP',
  cof: 2,
},
{
  name: 'ENG',
  cof: 1,
}];



let HTML1 = '';
modules.forEach((module)=>{
  
  if(module.name === 'ALGO' || module.name === 'OOP'){
    HTML1+=`
    <div class="module" data-module-name="${module.name}">
      <legend class="module-name">${module.name}:</legend>
      
      <label class="titre" for="td">TD:</label>
      <input type="text"  name="td" placeholder="Type your TD's marke" class="td td-${module.name} input" >
      <p class="worning worning-td-${module.name}"></p>

      <br>
      <label class="titre" for="tp">TP:</label>
      <input type="text"  name="tp-${module.name}"placeholder="Type your TP's marke" class="tp tp-${module.name} input">
      <p class="worning worning-tp-${module.name}"></p>

      <br>
      <label class="titre" for="exam">exam:</label>
      <input type="text"  name="exam" placeholder="Type your EXAM's marke" class="exam exam-${module.name} input">
      <p class="worning worning-exam-${module.name}"></p>
    </div>
    `
  }else if(module.name === 'ENG'){
    HTML1+=`
    <div class="module" data-module-name="${module.name}">
      <legend class="module-name">${module.name}:</legend>
      <br>
      <label class="titre" for="exam">exam:</label>
      <input  type="text"  name="exam-${module.name}" placeholder="Type your EXAM's marke" class="exam exam-${module.name} input">
      <p class="worning worning-exam-${module.name}"></p>
    </div>
  `
  }else{
    HTML1+=`
      <div class="module" data-module-name="${module.name}">
        <legend class="module-name">${module.name}:</legend>
        
        <label class="titre" for="td">TD:</label>
        <input  type="text"  name="td-${module.name}" placeholder="Type your TD's marke" class="td td-${module.name} input" >
        <p class="worning worning-td-${module.name}"></p>
        <br>
        <label class="titre" for="exam">exam:</label>
        <input type="text"  name="exam-${module.name}" placeholder="Type your EXAM's marke" class="exam exam-${module.name} input">
        <p class="worning worning-exam-${module.name}"></p>
      </div>
    `
  }
}); 

document.querySelector('.js-moduls').innerHTML = HTML1;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function som(modules){
  let som = 0;
  modules.forEach((module)=>{
    som += module.cof;
  });
  return som;
}

///////////////////////////
function calc(){
  
  const somCof = som(modules);

  let doc1 = document.querySelector('.js-moys');
  doc1.innerHTML = '';

  let condition = true;
  let total = 0;

  document.querySelectorAll('.module').forEach((module)=>{
    let moy = 0;

    const moduleName = module.dataset.moduleName;

    const cof = findCof(moduleName);

    if(moduleName === 'ENG'){
      //Bring the exam's val
      const noteExam = Number(document.querySelector(`.exam-${moduleName}`).value);

      if(noteExam < 0 || noteExam > 20 || isNaN(noteExam)){

        condition = false;

        document.querySelector(`.worning-exam-${moduleName}`).innerHTML = `*Invalid marks for ${moduleName}. Enter marks between 0 and 20.`

      }else{
        document.querySelector(`.worning-exam-${moduleName}`).innerHTML =''
      }

      moy = (Number(noteExam)).toFixed(2);

    }else 
    
    
    if(moduleName === 'ALGO' || moduleName === 'OOP'){
      const noteTd = Number(document.querySelector(`.td-${moduleName}`).value);

      if(noteTd < 0 || noteTd > 20 || isNaN(noteTd)){

        condition = false;

        document.querySelector(`.worning-td-${moduleName}`).innerHTML = `*Invalid marks for ${moduleName}. Enter marks between 0 and 20.`

      }else{

        document.querySelector(`.worning-td-${moduleName}`).innerHTML =''
      }


      //Bring the exam's val
      const noteExam = Number(document.querySelector(`.exam-${moduleName}`).value);

      if(noteExam < 0 || noteExam > 20 || isNaN(noteExam)){

        condition = false;

        document.querySelector(`.worning-exam-${moduleName}`).innerHTML = `*Invalid marks for ${moduleName}. Enter marks between 0 and 20.` 
      }else{
        document.querySelector(`.worning-exam-${moduleName}`).innerHTML =''
      }


      //Bring the tp's val
      const noteTp = Number(document.querySelector(`.tp-${moduleName}`).value);

      if(noteTp < 0 || noteTp > 20 || isNaN(noteTp)){

        condition = false;

        document.querySelector(`.worning-tp-${moduleName}`).innerHTML = `*Invalid marks for ${moduleName}. Enter marks between 0 and 20.`;

      }else
      {
        document.querySelector(`.worning-tp-${moduleName}`).innerHTML =''
      }
       moy = (0.3 * noteTd + 0.2 * noteTp + 0.5 * noteExam).toFixed(2);
       
    }else
    
    
    {
      //Bring the td's val
      const noteTd = Number( document.querySelector(`.td-${moduleName}`).value);
      
      //condition
      if(noteTd < 0 || noteTd > 20 || isNaN(noteTd)){

        condition = false;

        document.querySelector(`.worning-td-${moduleName}`).innerHTML = `*Invalid marks for ${moduleName}. Enter marks between 0 and 20.`
      }else{
        document.querySelector(`.worning-td-${moduleName}`).innerHTML =''
      }

      //Bring the exam's val
      const noteExam = Number(document.querySelector(`.exam-${moduleName}`).value);
      if(noteExam < 0 || noteExam > 20 || isNaN(noteExam)){
        condition = false;

        document.querySelector(`.worning-exam-${moduleName}`).innerHTML = `* Invalid marks for ${moduleName}. Enter marks between 0 and 20.`

      }else{
        document.querySelector(`.worning-exam-${moduleName}`).innerHTML =''
      }

      //calc the moy
       moy = (0.4 * noteTd + 0.6 * noteExam).toFixed(2);
       
    };

    doc1.innerHTML += `<section class="section"><div class="moduleName"> ${moduleName} </div> <div class="moduleMoy">${moy}</div></section>`;
     
    total += parseFloat(moy) * cof; 
    
  });
 
  total = (total / somCof).toFixed(2);

  document.querySelector('.js-total').innerHTML = `<div class="total">Total avrege: <nav class="moy" >${total}</nav></div>`;

  return condition;
};
 
  document.querySelector('.js-sub-buton').addEventListener('click', condition);

function condition(){
  if(calc() === false){
    document.querySelector('.js-condition').innerHTML = '<span class="material-symbols-outlined">warning</span>your marks are invalid go back and check your marks';
    return ;

  }else{
    document.querySelector('.js-condition').innerHTML = '';
  }
}

// find the cof
function findCof(moduleName){
  let X;

  modules.forEach((module)=>{
   
    if (module.name === moduleName){ 
      X = module.cof;
    }
  });

  return X;
}



