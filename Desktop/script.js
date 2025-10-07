// Mobile nav toggle
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const expanded=toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded',String(!expanded));
    nav.classList.toggle('open');
  });
}

// Contact form validation (no backend)
const form=document.getElementById('contact-form');
if(form){
  const response=document.getElementById('form-response');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    let valid=true;
    const setError=(id,msg)=>{
      const field=form.querySelector('#'+id);
      const err=document.getElementById('err-'+id);
      if(field) field.setAttribute('aria-invalid',msg?'true':'false');
      if(err) err.textContent=msg||'';
      if(msg) valid=false;
    };
    const emailRe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const name=form.name.value.trim();
    const email=form.email.value.trim();
    const message=form.message.value.trim();
    setError('name',name?'':'Please enter a name.');
    setError('email',emailRe.test(email)?'':'Enter a valid email.');
    setError('message',message?'':'Please include a message.');
    if(!valid) return;
    if(response){ response.classList.remove('hidden'); response.focus?.(); }
    form.reset();
  });
}

// Accessible tooltips for skills (focus support)
document.querySelectorAll('.skill').forEach(btn=>{
  const id=btn.getAttribute('aria-describedby');
  const tip=id?document.getElementById(id):null;
  if(!tip) return;
  const show=()=>{ tip.style.opacity='1'; tip.style.transform='translateY(0)'; };
  const hide=()=>{ tip.style.opacity='0'; tip.style.transform='translateY(4px)'; };
  btn.addEventListener('focus',show);
  btn.addEventListener('blur',hide);
});
