  document.getElementById('y').textContent=new Date().getFullYear();
  const form=document.getElementById('f');
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const g=id=>document.getElementById(id).value.trim();
    if(!g('n')||!g('p')){document.getElementById(g('n')?'p':'n').focus();return;}
    const btn=document.getElementById('sb'), done=document.getElementById('done'), err=document.getElementById('err');
    done.style.display='none'; err.style.display='none';
    btn.disabled=true; btn.textContent='Sending...';
    const data={
      access_key:'93928ec7-426c-4a5a-8804-aa513b328a6f',
      subject:'New quote request from '+g('n')+' - '+g('s'),
      from_name:'Adriana Bode Cleaning website',
      name:g('n'), phone:g('p'), service:g('s'), message:g('m') || '(none)',
      botcheck:document.getElementById('botcheck').checked
    };
    if(g('e')) data.email=g('e');
    try{
      const res=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)});
      const json=await res.json();
      if(json.success){form.reset(); done.style.display='block';}
      else err.style.display='block';
    }catch(x){err.style.display='block';}
    btn.disabled=false; btn.textContent='Request a quote';
  });
