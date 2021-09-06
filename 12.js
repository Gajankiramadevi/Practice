var n=153,r,sum=0,temp;
temp=n;
while(n>0)
{
    r=n%10;
    sum=sum+(r*r*r);
    n=parseInt(n/10);
    console.log(sum);
}
if(temp==sum)
{
    console.log("armstrong");
}
else{
    console.log("notarmstrong");
}