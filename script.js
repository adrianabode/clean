  document.getElementById('y').textContent=new Date().getFullYear();
  document.getElementById('f').addEventListener('submit',e=>{
    e.preventDefault();
    const g=id=>document.getElementById(id).value.trim();
    if(!g('n')||!g('p')){document.getElementById(g('n')?'p':'n').focus();return;}
    const body='Name: '+g('n')+'\nPhone: '+g('p')+'\nService: '+g('s')+(g('m')?'\nNotes: '+g('m'):'');
    document.getElementById('out').textContent=body;
    document.getElementById('done').style.display='block';
    const subject='Quote request from '+g('n')+' - '+g('s');
    window.location.href='mailto:adrianabode222@icloud.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
