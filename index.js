
import analyze from 'rgbaster';

function shadowwiz(options){
  let images = document.querySelectorAll('img.shadowwiz');

  if (options.shadow_type=='hard'){
    options.shadow_type = '0px';
  }
  else{
    options.shadow_type = '20px'
  }

  images.forEach(image =>{
    console.log(image);
    console.log(image.src);
    const result = await analyze(image.src); 
    const color =result[0].color;
    image.style.boxShadow = `20px 20px ${options.shadow_type} 1px ${color}`;
    if (options.padding){
      image.style.padding = '1em';
    }

  });
}


module.exports.shadowwiz = shadowwiz;