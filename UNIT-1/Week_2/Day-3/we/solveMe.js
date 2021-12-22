 
var i=50;
flag=0;
while(i<=150)
{
    if(i%13==0)
    {
        console.log(i);
        i=i+26;
        flag++;
    }
    else
    i++;

    if(flag>=2)
    break;
    else
    continue;
}