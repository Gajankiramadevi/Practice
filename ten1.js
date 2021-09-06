var n=12345;
var rev=0;
remainder=0;
console.log(n)
while(n!=0)
{
    remainder=n%10;
rev=(rev*10)+remainder;
    n=parseInt(n/10);
    console.log(rev);
}
    