const n=8;
let S;
for(var i=1; i<=n; i++)
{
    for (j = 1; j<= n-i; j++)
   {
     S = S + "";
   }
   for (k = (n-i)+1; j<= n; k++)
   {
     S = S + "#";
   }
   console.log(S);
}