s=0
for(a=999;a>0;a--){for(b=999;b>0;b--){p=a*b
m=p+''
if(m==m.split('').reverse().join('')&&p>s)s=p}}print(s)