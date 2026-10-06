// Catálogo atual: NBA, seguida pelas chuteiras de campo, futsal e society.
// Preços vêm dos nomes de arquivo; null significa que o Drive não informa o preço.
const products = [
  {id:9,category:'NBA',name:'Shorts Chicago Bulls',price:120,size:'Tamanho não informado',photo:'assets/products/nba/bulls-shorts.jpg'},
  {id:10,category:'NBA',name:'Shorts LA Clippers',price:120,size:'Tamanho não informado',photo:'assets/products/nba/clippers-shorts.jpg'},
  {id:11,category:'NBA',name:'Shorts Brooklyn Nets',price:120,size:'Tamanho não informado',photo:'assets/products/nba/nets-shorts.jpg'},
  {id:12,category:'NBA',name:'Shorts Los Angeles Lakers',price:120,size:'Tamanho não informado',photo:'assets/products/nba/lakers-shorts.jpg'},
  {id:13,category:'NBA',name:'Shorts Dallas Mavericks',price:120,size:'Tamanho não informado',photo:'assets/products/nba/mavericks-shorts.jpg'},
  {id:14,category:'NBA',name:'Camisa Golden State Warriors',price:140,size:'Tamanho não informado',photo:'assets/products/nba/warriors-30.jpg'},
  {id:15,category:'NBA',name:'Camisa Los Angeles Lakers',price:140,size:'Tamanho não informado',photo:'assets/products/nba/lakers-8.jpg'},
  {id:16,category:'NBA',name:'Camisa Chicago Bulls',price:140,size:'Tamanho não informado',photo:'assets/products/nba/bulls-8.jpg'},
  {id:18,category:'NBA',name:'Camisa Miami Heat',price:140,size:'Tamanho não informado',photo:'assets/products/nba/heat-14.jpg'},
  {id:19,category:'NBA',name:'Camisa Portland Trail Blazers',price:140,size:'Tamanho não informado',photo:'assets/products/nba/trail-blazers-0.jpg'},
  {id:20,category:'NBA',name:'Kit Chicago Bulls com shorts',price:260,size:'Tamanho não informado',photo:'assets/products/nba/bulls-kit-8.jpg'},
  {id:21,category:'NBA',name:'Kit Los Angeles Lakers com shorts',price:260,size:'Tamanho não informado',photo:'assets/products/nba/lakers-kit-23.jpg'},
  {id:22,category:'NBA',name:'Camisa Golden State Warriors',price:110,size:'Tamanho G',photo:'assets/products/nba/warriors-35.jpg'},
  {id:23,category:'NBA',name:'Camisa Brooklyn Nets',price:110,size:'Tamanho M',photo:'assets/products/nba/nets-7.jpg'},
  {id:24,category:'NBA',name:'Camisa Milwaukee Bucks',price:110,size:'Tamanho G',photo:'assets/products/nba/bucks-34.jpg'},
{id:101,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 37, 38, 39, 40, 41, 42, 43',photo:'assets/products/chuteiras/campo/modelo-01.jpg'},
  {id:102,category:'Chuteiras · Campo',name:'Chuteira Campo',price:390.00,size:'Tamanhos 37, 38',photo:'assets/products/chuteiras/campo/modelo-02.jpg'},
  {id:103,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 37',photo:'assets/products/chuteiras/campo/modelo-03.jpg'},
  {id:104,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 37, 38, 39, 40, 41, 42, 43',photo:'assets/products/chuteiras/campo/modelo-04.jpg'},
  {id:105,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 37, 38, 39, 40',photo:'assets/products/chuteiras/campo/modelo-05.jpg'},
  {id:106,category:'Chuteiras · Campo',name:'Chuteira Campo',price:139.90,size:'Tamanhos 38, 39, 40, 41, 42, 43',photo:'assets/products/chuteiras/campo/modelo-06.jpg'},
  {id:107,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 38, 39',photo:'assets/products/chuteiras/campo/modelo-07.jpg'},
  {id:108,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 38, 39, 40, 41',photo:'assets/products/chuteiras/campo/modelo-08.jpg'},
  {id:109,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 38, 41',photo:'assets/products/chuteiras/campo/modelo-09.jpg'},
  {id:110,category:'Chuteiras · Campo',name:'Chuteira Campo',price:350.00,size:'Tamanhos 39',photo:'assets/products/chuteiras/campo/modelo-10.jpg'},
  {id:111,category:'Chuteiras · Campo',name:'Chuteira Campo',price:370.00,size:'Tamanhos 39, 40',photo:'assets/products/chuteiras/campo/modelo-11.jpg'},
  {id:112,category:'Chuteiras · Campo',name:'Chuteira Campo',price:380.00,size:'Tamanhos 39',photo:'assets/products/chuteiras/campo/modelo-12.jpg'},
  {id:113,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 39, 41, 42',photo:'assets/products/chuteiras/campo/modelo-13.jpg'},
  {id:114,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 39',photo:'assets/products/chuteiras/campo/modelo-14.jpg'},
  {id:115,category:'Chuteiras · Campo',name:'Chuteira Campo',price:249.99,size:'Tamanhos 39, 42, 43',photo:'assets/products/chuteiras/campo/modelo-15.jpg'},
  {id:116,category:'Chuteiras · Campo',name:'Chuteira Campo',price:389.99,size:'Tamanhos 40',photo:'assets/products/chuteiras/campo/modelo-16.jpg'},
  {id:117,category:'Chuteiras · Campo',name:'Chuteira Campo',price:389.99,size:'Tamanhos 40',photo:'assets/products/chuteiras/campo/modelo-17.jpg'},
  {id:118,category:'Chuteiras · Campo',name:'Chuteira Campo',price:389.99,size:'Tamanhos 40',photo:'assets/products/chuteiras/campo/modelo-18.jpg'},
  {id:119,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 40',photo:'assets/products/chuteiras/campo/modelo-19.jpg'},
  {id:120,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 40, 41, 42',photo:'assets/products/chuteiras/campo/modelo-20.jpg'},
  {id:121,category:'Chuteiras · Campo',name:'Chuteira Campo',price:389.99,size:'Tamanhos 41',photo:'assets/products/chuteiras/campo/modelo-21.jpg'},
  {id:122,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 41',photo:'assets/products/chuteiras/campo/modelo-22.jpg'},
  {id:123,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 41',photo:'assets/products/chuteiras/campo/modelo-23.jpg'},
  {id:124,category:'Chuteiras · Campo',name:'Chuteira Campo',price:379.90,size:'Tamanhos 42, 43',photo:'assets/products/chuteiras/campo/modelo-24.jpg'},
  {id:125,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 42, 43',photo:'assets/products/chuteiras/campo/modelo-25.jpg'},
  {id:126,category:'Chuteiras · Campo',name:'Chuteira Campo',price:200.00,size:'Tamanhos 42',photo:'assets/products/chuteiras/campo/modelo-26.jpg'},
  {id:127,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:339.90,size:'Tamanhos 33, 34, 35',photo:'assets/products/chuteiras/futsal/modelo-01.jpg'},
  {id:128,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:329.99,size:'Tamanhos 36, 37, 38, 39, 40, 41, 42',photo:'assets/products/chuteiras/futsal/modelo-02.jpg'},
  {id:129,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:329.99,size:'Tamanhos 36, 37, 38, 39, 40, 41, 42',photo:'assets/products/chuteiras/futsal/modelo-03.jpg'},
  {id:130,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:null,size:'Tamanhos 36, 37, 38, 39, 40, 41, 42',priceLabel:'R$ 339,90 – R$ 409,90',photo:'assets/products/chuteiras/futsal/modelo-04.jpg'},
  {id:131,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:569.99,size:'Tamanhos 36, 38, 39, 40, 41, 42',photo:'assets/products/chuteiras/futsal/modelo-05.jpg'},
  {id:132,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:569.99,size:'Tamanhos 36, 37, 38, 39, 40, 41, 42',photo:'assets/products/chuteiras/futsal/modelo-06.jpg'},
  {id:133,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:139.90,size:'Tamanhos 37, 38, 39, 40, 41, 42, 43',photo:'assets/products/chuteiras/futsal/modelo-07.jpg'},
  {id:134,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:null,size:'Tamanhos 37, 38, 39, 40, 41',priceLabel:'R$ 329,90 – R$ 409,90',photo:'assets/products/chuteiras/futsal/modelo-08.jpg'},
  {id:135,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:429.90,size:'Tamanhos 37, 38, 39',photo:'assets/products/chuteiras/futsal/modelo-09.jpg'},
  {id:136,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:569.99,size:'Tamanhos 37',photo:'assets/products/chuteiras/futsal/modelo-10.jpg'},
  {id:137,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:300.00,size:'Tamanhos 38, 39, 40',photo:'assets/products/chuteiras/futsal/modelo-11.jpg'},
  {id:138,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:350.00,size:'Tamanhos 39, 40',photo:'assets/products/chuteiras/futsal/modelo-12.jpg'},
  {id:139,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:null,size:'Tamanhos 42, 43',priceLabel:'R$ 139,90 – R$ 149,90',photo:'assets/products/chuteiras/futsal/modelo-13.jpg'},
  {id:140,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:210.00,size:'Tamanhos 42',photo:'assets/products/chuteiras/futsal/modelo-14.jpg'},
  {id:141,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:350.00,size:'Tamanhos 42',photo:'assets/products/chuteiras/futsal/modelo-15.jpg'},
  {id:142,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:219.99,size:'Tamanhos 43',photo:'assets/products/chuteiras/futsal/modelo-16.jpg'},
  {id:143,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:350.00,size:'Tamanhos 43',photo:'assets/products/chuteiras/futsal/modelo-17.jpg'},
  {id:144,category:'Chuteiras · Futsal',name:'Chuteira Futsal',price:649.99,size:'Tamanhos 43',photo:'assets/products/chuteiras/futsal/modelo-18.jpg'},
  {id:145,category:'Chuteiras · Society',name:'Chuteira Society',price:121.99,size:'Tamanhos 33, 34, 35, 36',photo:'assets/products/chuteiras/society/modelo-01.jpg'},
  {id:146,category:'Chuteiras · Society',name:'Chuteira Society',price:121.99,size:'Tamanhos 33, 34, 35, 36',photo:'assets/products/chuteiras/society/modelo-02.jpg'},
  {id:147,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 37, 38, 39, 40, 41, 42, 43',photo:'assets/products/chuteiras/society/modelo-03.jpg'},
  {id:148,category:'Chuteiras · Society',name:'Chuteira Society',price:149.90,size:'Tamanhos 37, 39, 40, 41, 42, 43',photo:'assets/products/chuteiras/society/modelo-04.jpg'},
  {id:149,category:'Chuteiras · Society',name:'Chuteira Society',price:159.90,size:'Tamanhos 37, 39, 40, 42, 43',photo:'assets/products/chuteiras/society/modelo-05.jpg'},
  {id:150,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 37, 39, 40, 41, 42, 43',photo:'assets/products/chuteiras/society/modelo-06.jpg'},
  {id:151,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 37, 42',photo:'assets/products/chuteiras/society/modelo-07.jpg'},
  {id:152,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 37, 38, 39, 40, 42',photo:'assets/products/chuteiras/society/modelo-08.jpg'},
  {id:153,category:'Chuteiras · Society',name:'Chuteira Society',price:390.00,size:'Tamanhos 38, 43',photo:'assets/products/chuteiras/society/modelo-09.jpg'},
  {id:154,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 38, 39, 40, 41',photo:'assets/products/chuteiras/society/modelo-10.jpg'},
  {id:155,category:'Chuteiras · Society',name:'Chuteira Society',price:394.90,size:'Tamanhos 39, 40',photo:'assets/products/chuteiras/society/modelo-11.jpg'},
  {id:156,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 39, 40',photo:'assets/products/chuteiras/society/modelo-12.jpg'},
  {id:157,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 39, 40, 41, 42',photo:'assets/products/chuteiras/society/modelo-13.jpg'},
  {id:158,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 39, 40, 41',photo:'assets/products/chuteiras/society/modelo-14.jpg'},
  {id:159,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 39, 40',photo:'assets/products/chuteiras/society/modelo-15.jpg'},
  {id:160,category:'Chuteiras · Society',name:'Chuteira Society',price:220.00,size:'Tamanhos 41',photo:'assets/products/chuteiras/society/modelo-16.jpg'},
  {id:161,category:'Chuteiras · Society',name:'Chuteira Society',price:240.00,size:'Tamanhos 41',photo:'assets/products/chuteiras/society/modelo-17.jpg'},
  {id:162,category:'Chuteiras · Society',name:'Chuteira Society',price:200.00,size:'Tamanhos 41',photo:'assets/products/chuteiras/society/modelo-18.jpg'}
];
const money = value => value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
let cart=JSON.parse(localStorage.getItem('kp-esportes-cart-v2')||'{}');
function productCard(product){const price=product.price===null?(product.priceLabel||'Consultar preço'):money(product.price);const addButton=product.price===null?'':'<button class="quick-add" data-add="'+product.id+'" aria-label="Adicionar '+product.name+' à sacola demonstrativa">+</button>';const note=product.priceLabel?'Preço varia conforme numeração':product.price===null?'Valor não informado no arquivo':'';return `<article class="product-card"><div class="product-image-wrap"><img class="product-image" src="${product.photo}" alt="${product.name}" loading="lazy"><span class="product-badge">${product.category.toUpperCase()}</span>${addButton}</div><div class="product-meta"><div><p class="product-category">${product.category.toUpperCase()}</p><h3 class="product-name">${product.name}</h3><p class="product-size">${product.size}</p></div><div class="product-price">${price}</div></div>${note?`<p class="product-stock">${note}</p>`:''}</article>`}
function renderProducts(){const sections=[['NBA','nba'],['Chuteiras · Campo','chuteiras-campo'],['Chuteiras · Futsal','chuteiras-futsal'],['Chuteiras · Society','chuteiras-society']];document.querySelector('#product-groups').innerHTML=sections.map(([category,anchor],index)=>{const items=products.filter(product=>product.category===category);if(!items.length)return '';return `<section class="category-group" id="categoria-${anchor}"><div class="category-heading"><p class="eyebrow">0${index+1} · CATEGORIA</p><h3>${category}</h3><span>${items.length} itens catalogados</span></div><div class="product-grid">${items.map(productCard).join('')}</div></section>`}).join('')}
function saveCart(){localStorage.setItem('kp-esportes-cart-v2',JSON.stringify(cart));renderCart()}
function cartEntries(){return Object.entries(cart).filter(([id,qty])=>qty>0&&products.some(product=>product.id===Number(id)&&product.price!==null))}
function renderCart(){
  const entries=cartEntries();
  const count=entries.reduce((sum,[,qty])=>sum+qty,0);
  document.querySelectorAll('.cart-count').forEach(element=>element.textContent=count);
  const total=entries.reduce((sum,[id,qty])=>sum+products.find(product=>product.id===Number(id)).price*qty,0);
  document.querySelector('.subtotal').textContent=money(total);
  document.querySelector('.checkout-total b').textContent=money(total);
  document.querySelector('.checkout-items').innerHTML=entries.map(([id,qty])=>{const product=products.find(item=>item.id===Number(id));return `<div class="checkout-item-summary"><span>${product.name} × ${qty}</span><b>${money(product.price*qty)}</b></div>`}).join('');
  document.querySelector('.cart-items').innerHTML=entries.map(([id,qty])=>{
    const product=products.find(item=>item.id===Number(id));
    return `<div class="cart-line"><div class="cart-line-art"><img class="product-image" src="${product.photo}" alt="" loading="lazy"></div><div><h3>${product.name}</h3><p>${money(product.price)} · ${product.size}</p><div class="quantity"><button data-qty="${id}" data-delta="-1" aria-label="Diminuir quantidade">−</button><span>${qty}</span><button data-qty="${id}" data-delta="1" aria-label="Aumentar quantidade">+</button></div></div><span class="cart-line-price">${money(product.price*qty)}</span></div>`
  }).join('');
  document.querySelector('.cart-empty').style.display=entries.length?'none':'block';
  document.querySelector('.cart-summary').classList.toggle('visible',entries.length>0);
}
function addToCart(id){const product=products.find(item=>item.id===id);if(!product||product.price===null)return;cart[id]=(cart[id]||0)+1;saveCart();showToast('Adicionado à sacola demonstrativa')}
function showToast(message){const toast=document.querySelector('.toast');toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),1800)}
function openCart(){document.body.classList.add('cart-open');document.querySelector('.cart-drawer').setAttribute('aria-hidden','false')}
function showCartView(){document.querySelector('.cart-view').hidden=false;document.querySelector('.checkout-view').hidden=true;document.querySelector('.order-success').hidden=true;document.querySelector('.drawer-title').textContent='Sua sacola';document.querySelector('.cart-count').parentElement.hidden=false}
function showCheckout(){if(!cartEntries().length){showToast('Adicione um produto com preço definido para continuar');return}document.querySelector('.cart-view').hidden=true;document.querySelector('.checkout-view').hidden=false;document.querySelector('.order-success').hidden=true;document.querySelector('.drawer-title').textContent='Finalizar pedido';document.querySelector('.cart-count').parentElement.hidden=true}
function closeCart(){document.body.classList.remove('cart-open');document.querySelector('.cart-drawer').setAttribute('aria-hidden','true');showCartView()}
document.addEventListener('click',event=>{const add=event.target.closest('[data-add]');if(add)addToCart(Number(add.dataset.add));const quantity=event.target.closest('[data-qty]');if(quantity){const id=quantity.dataset.qty;cart[id]=Math.max(0,(cart[id]||0)+Number(quantity.dataset.delta));if(!cart[id])delete cart[id];saveCart()}if(event.target.closest('.cart-trigger'))openCart();if(event.target.closest('.close-drawer')||event.target.id==='overlay')closeCart();if(event.target.closest('.continue-shopping'))closeCart();if(event.target.closest('.checkout-button'))showCheckout();if(event.target.closest('.back-to-cart'))showCartView();if(event.target.closest('.finish-order'))closeCart();if(event.target.closest('.menu-trigger'))document.querySelector('.main-nav').classList.toggle('open');if(event.target.closest('.main-nav a'))document.querySelector('.main-nav').classList.remove('open')});
document.querySelector('#checkout-form').addEventListener('submit',event=>{
  event.preventDefault();
  if(!event.currentTarget.reportValidity())return;
  const entries=cartEntries();
  if(!entries.length){showCartView();return}
  const formData=new FormData(event.currentTarget);
  const order={id:'KP-'+Date.now().toString().slice(-6),createdAt:new Date().toISOString(),paymentMethod:formData.get('paymentMethod'),subtotal:entries.reduce((sum,[id,qty])=>sum+products.find(product=>product.id===Number(id)).price*qty,0),items:entries.map(([id,qty])=>({productId:Number(id),name:products.find(product=>product.id===Number(id)).name,quantity:qty,unitPrice:products.find(product=>product.id===Number(id)).price})),status:'DEMONSTRAÇÃO — NÃO PAGO'};
  const orders=JSON.parse(localStorage.getItem('kp-esportes-demo-orders-v1')||'[]');
  orders.push(order);
  localStorage.setItem('kp-esportes-demo-orders-v1',JSON.stringify(orders));
  document.querySelector('.demo-order-number').textContent=order.id;
  document.querySelector('.demo-payment-choice').textContent=order.paymentMethod;
  event.currentTarget.reset();
  cart={};saveCart();
  document.querySelector('.checkout-view').hidden=true;
  document.querySelector('.order-success').hidden=false;
  document.querySelector('.drawer-title').textContent='Pedido criado';
});
document.querySelector('#newsletter-form').addEventListener('submit',event=>{event.preventDefault();document.querySelector('#newsletter-message').textContent='Inscrição demonstrativa registrada.';event.target.reset()});
renderProducts();renderCart();
