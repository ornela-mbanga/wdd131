// ===== Cart =====
const cart = [];
const cartMsg = document.getElementById('cartMsg');

['addCart1','addCart2','addCart3'].forEach((id,index)=>{
  const btn=document.getElementById(id);
  if(btn){
    btn.addEventListener('click',()=>{
      const products = ['Rouge à lèvres','Palette de maquillage','Crème visage'];
      const prices = [29,49,39];
      cart.push({name:products[index], price:prices[index]});
      cartMsg.textContent=`Cart: ${cart.length} item(s)`;
    });
  }
});

// ===== Product Gallery =====
const gallery={images:['product1.jpg','product2.jpg','product3.jpg'],index:0};
const galleryImg=document.getElementById('galleryImg');
document.getElementById('nextBtn')?.addEventListener('click',()=>{
  gallery.index=(gallery.index+1)%gallery.images.length;
  galleryImg.src=`images/${gallery.images[gallery.index]}`;
});

// ===== Contact Form =====
const form=document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=form.name.value;
    const message=form.message.value;
    localStorage.setItem('lastMessage',message);
    document.getElementById('savedMessage').textContent=`Thank you ${name}, your message has been saved!`;
    form.reset();
  });

  if(localStorage.getItem('lastMessage')){
    document.getElementById('savedMessage').textContent=`Your last message: ${localStorage.getItem('lastMessage')}`;
  }
}
