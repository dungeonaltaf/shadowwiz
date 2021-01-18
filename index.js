function shadowwiz(options){
    let images = document.querySelectorAll('shadowwiz');

    if (options.shadow_type=='hard'){
      options.shadow_type = '0px';
    }
    else{
      options.shadow_type = '20px'
    }

    images.forEach(image =>{
      image.style.boxShadow = `20 px 20px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;
      if (options.padding){
        image.style.padding = '1em';
      }
  
    });

   
  }


  module.exports.shadowwiz = shadowwiz;