var lot = new Array();
lot[0] = Math.floor(Math.random()*45+1);
for(i=1;i<6;i++) {
  lot[i] = Math.floor(Math.random()*45+1);
  for(j=i-1;j>=0;j--) {
    if(lot[i] == lot[j]) {
      i--;
      break;
    }
  }
}
for(i=0;i<6;i++)     document.write(lot[i]+";");