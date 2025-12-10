
// ===== Cart =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartMsg = document.getElementById('cartMsg');

function updateCartMessage() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartMsg.textContent = `Cart: ${cart.length} item(s) | Total: $${total}`;
}

// Initial cart message
if (cartMsg) updateCartMessage();

['addCart1','addCart2','addCart3'].forEach((id,index)=>{
  const btn=document.getElementById(id);
  if(btn){
    btn.addEventListener('click',()=>{
      const products = ['Lipstick','Makeup Palette','Face Cream'];
      const prices = [29,49,39];
      cart.push({name:products[index], price:prices[index]});
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartMessage();
    });
  }
});

// ===== Product Gallery =====
const gallery = {
  images: ['product1.jpg','product2.jpg','product3.jpg'],
  index: 0
};
const galleryImg = document.getElementById('galleryImg');
const nextBtn = document.getElementById('nextBtn');

function showProduct(index) {
  galleryImg.src = `images/${gallery.images[index]}`;
  galleryImg.alt = `Product ${index+1}`;
}

if(nextBtn && galleryImg){
  nextBtn.addEventListener('click',()=>{
    gallery.index = (gallery.index + 1) % gallery.images.length;
    showProduct(gallery.index);
  });
}

// ===== Contact Form =====
const form = document.getElementById('contactForm');
const savedMessage = document.getElementById('savedMessage');

if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message){
      localStorage.setItem('contactData', JSON.stringify({ name, email, message }));
      savedMessage.textContent = `Thank you ${name}, your message has been saved!`;
      form.reset();
    } else {
      savedMessage.textContent = "Please fill in all fields.";
    }
  });

  const savedData = localStorage.getItem('contactData');
  if(savedData){
    const { name, message } = JSON.parse(savedData);
    savedMessage.textContent = `Welcome back ${name}, your last message was: "${message}"`;
  }
}

