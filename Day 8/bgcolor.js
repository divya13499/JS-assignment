var carr=[`yellow`,`green`,`red`,`blue`,`wheat`,`pink`];
var i=0;
setInterval(()=>{
    document.body.style.backgroundColor=`${carr[i]}`
    i++;
    if(i>=carr.length)
    {
        i=0;
    }
},1000);
