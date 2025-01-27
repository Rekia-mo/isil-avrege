const modules = [{
  name: 'ARCHI',
  cof: 3
},
{
  name: 'ALGO',
  cof: 3
},
{
  name: 'POO',
  cof: 2
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
  name: 'ENG',
  cof: 1,
}];



let HTML1 = '';
modules.forEach((module)=>{
  
  if(module.name === 'ALGO' || module.name === 'POO'){
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

function som(modules){
  let som = 0;
  modules.forEach((module)=>{
    som += module.cof;
  });
  return som;
}

function calc(){
  
  const somCof = som(modules);

  let doc1 = document.querySelector('.js-moys');
  doc1.innerHTML = '';

   condition = true;
  let total = 0;

  document.querySelectorAll('.module').forEach((module)=>{
    let moy = 0;

    const moduleName = module.dataset.moduleName;

    const cof = findCof(moduleName);

    if(moduleName === 'ENG'){
      //Bring the exam's val
      let noteExam = Number(document.querySelector(`.exam-${moduleName}`).value);

      if(noteExam < 0 || noteExam > 20 || isNaN(noteExam)){
        noteExam = 0; 
        condition = false;

        document.querySelector(`.worning-exam-${moduleName}`).innerHTML = `*Invalid marks for ${moduleName}. Enter marks between 0 and 20.`

      }else{
        document.querySelector(`.worning-exam-${moduleName}`).innerHTML =''
      }

      moy = (Number(noteExam)).toFixed(2);

    }else 
    
    
    if(moduleName === 'ALGO' || moduleName === 'POO'){
      let noteTd = Number(document.querySelector(`.td-${moduleName}`).value);

      if(noteTd < 0 || noteTd > 20 || isNaN(noteTd)){
        noteTd = 0;
        condition = false;
        
        document.querySelector(`.worning-td-${moduleName}`).innerHTML = `*Invalid marks for ${moduleName}. Enter marks between 0 and 20.`

      }else{

        document.querySelector(`.worning-td-${moduleName}`).innerHTML =''
      }


      //Bring the exam's val
      let noteExam = Number(document.querySelector(`.exam-${moduleName}`).value);

      if(noteExam < 0 || noteExam > 20 || isNaN(noteExam)){
        noteExam = 0;
        condition = false;

        document.querySelector(`.worning-exam-${moduleName}`).innerHTML = `*Invalid marks for ${moduleName}. Enter marks between 0 and 20.` 
      }else{
        document.querySelector(`.worning-exam-${moduleName}`).innerHTML =''
      }


      //Bring the tp's val
      let noteTp = Number(document.querySelector(`.tp-${moduleName}`).value);

      if(noteTp < 0 || noteTp > 20 || isNaN(noteTp)){
        noteTp = 0;
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
      let noteTd = Number( document.querySelector(`.td-${moduleName}`).value);
      
      //condition
      if(noteTd < 0 || noteTd > 20 || isNaN(noteTd)){
        noteTd = 0;
        condition = false;

        document.querySelector(`.worning-td-${moduleName}`).innerHTML = `*Invalid marks for ${moduleName}. Enter marks between 0 and 20.`
      }else{
        document.querySelector(`.worning-td-${moduleName}`).innerHTML =''
      }

      //Bring the exam's val
      let noteExam = Number(document.querySelector(`.exam-${moduleName}`).value);
      if(noteExam < 0 || noteExam > 20 || isNaN(noteExam)){
        condition = false;
        noteExam = 0;
        document.querySelector(`.worning-exam-${moduleName}`).innerHTML = `* Invalid marks for ${moduleName}. Enter marks between 0 and 20.`

      }else{
        document.querySelector(`.worning-exam-${moduleName}`).innerHTML =''
      }

      //calc the moy
       moy = (0.4 * noteTd + 0.6 * noteExam).toFixed(2);
    };

    doc1.innerHTML += `<section class="section"><div class="moduleName"> ${moduleName} </div> <div class="moduleMoy">${moy}</div></section>`;

    if(condition === true){
      total += parseFloat(moy) * cof;
     }else{
      total=0;
     }

  });
 
  total = (total / somCof).toFixed(2);
  
  document.querySelector('.js-total').innerHTML = `<div class="total">Total avrege: <nav class="moy" >${total}</nav></div>`;

  //the remark
  let random = Math.random();
  remark(random, total);

  return condition;
};
  document.querySelector('.js-sub-buton').addEventListener('click', condition);
 
function condition(){
  let x = calc();
  if(x === false){
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

function remark(random, total){

  if(0 < total && total < 7 && total != 0){
    if (0 < random && random <= 0.5){
      document.querySelector('.js-remark').innerHTML = `Well, at least it's not negative ,<i class="fa-solid fa-face-grin-tongue-wink"></i>`;
      
    }else if(0.5 < random && random < 1){
      document.querySelector('.js-remark').innerHTML = `Well, you’re not getting kicked out, so that’s a win!<i class="fa-solid fa-face-laugh-squint"></i>`;
    }

  }else if(7 <= total && total < 10){
    if (0 <= random && random < (1/2)){
      document.querySelector('.js-remark').innerHTML = `Close… just not close enough yet!<i class="fa-solid fa-charging-station"></i>`;

    }else if((1/2) <= random && random < 1){
      document.querySelector('.js-remark').innerHTML = `Don't worry, even Einstein had to start somewhere!<i class="fa-solid fa-face-smile-wink"></i>`;
    }
    
  }else  if(10 <= total&& total < 13){
    if (0 <= random && random < (1/3)){
      document.querySelector('.js-remark').innerHTML = `you did it! let's GOOOOO <i class="fa-solid fa-wind"></i>`;

    }else if((1/3) <= random && random < (2/3)){
      document.querySelector('.js-remark').innerHTML = `Genius mode: activated. Keep it up!<i class="fa-solid fa-charging-station"></i>`;
    }else{
      document.querySelector('.js-remark').innerHTML = `Not bad, Einstein! Almost there.<i class="fa-solid fa-face-grin-tongue-wink"></i>`;
    }



  }else if(13 <= total&& total < 15){
    if (0 <= random && random < (1/3)){
      document.querySelector('.js-remark').innerHTML = `Not bad, Einstein! Almost there.<i class="fa-solid fa-face-grin-tongue-wink"></i>`;

    }else if((1/3) <= random && random < (2/3)){
      document.querySelector('.js-remark').innerHTML = `Genius mode: activated. Keep it up!<i class="fa-regular fa-face-grin-stars"></i>`;

    }else{
      document.querySelector('.js-remark').innerHTML = `Not easy to get those scores in here, but you're making it look simple!<i class="fa-solid fa-face-grin-stars"></i>`;

    }
  }else if(15 <= total && total < 18){
    if (0 <= random && random < (1/3)){
      document.querySelector('.js-remark').innerHTML = `You’re making the impossible look easy!<i class="fa-solid fa-wand-magic-sparkles"></i>`;

    }else if((1/3) <= random && random < (2/3)){
      document.querySelector('.js-remark').innerHTML = `Another day, another tough score crushed!<i class="fa-regular fa-face-grin-stars"></i>`;

    }else{
      document.querySelector('.js-remark').innerHTML = `everyone<i class="fa-solid fa-bullhorn"></i>, I'm with the major de promo itself`;

    }
  }else if(18 <= total && total < 20){
    if (0 <= random && random < (1/3)){
      document.querySelector('.js-remark').innerHTML = `Did you just break the system? Because this is insane!<i class="fa-solid fa-wand-magic-sparkles"></i>`;

    }else if((1/3) <= random && random < (2/3)){
      document.querySelector('.js-remark').innerHTML = `Impossible? Nah, you're joking right?<i class="fa-solid fa-wand-magic-sparkles"></i>;`

    }else{
      document.querySelector('.js-remark').innerHTML = `You’ve officially done the impossible. Nice!<i class="fa-solid fa-wand-magic-sparkles"></i>`;

    }
  }else if(total == 20){
    if (0 <= random && random < (1/3)){
      document.querySelector('.js-remark').innerHTML = `stop playing and valid your actual marks or I'll retire<i class="fa-solid fa-face-angry"></i>`;

    }else if((1/3) <= random && random < (2/3)){
      document.querySelector('.js-remark').innerHTML = `stop it bro<i class="fa-solid fa-face-angry"></i>`;

    }else{
      document.querySelector('.js-remark').innerHTML = `stop wasting my time<i class="fa-solid fa-face-angry"></i>`;

    }
  }
}

document.querySelector('.js-id').addEventListener('click', id);
function id(){
  document.querySelector('.container2').innerHTML =`<div class="sub-cont"> <spam class="feed">feedback 📣:</spam>
<p class="dscrbt">Got genius ideas 💡 , hilarious fails 💥🤦‍♂️, or secret thoughts [🤫📨] ?
<br>  Send them <a class="here" href="mailto:rmansourouahchia@gmail.com">HERE</a> –  " Your opinion matters – whether it’s about cafeteria food 🍕 ". <br>
Click <a class="here" href="mailto:rmansourouahchia@gmail.com">HERE</a> NOW We’re waiting for your messages! <i class="fa-solid fa-face-smile-wink"></i>.</div> </p>
  `;
}
