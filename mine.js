//17.3.2023 review//
//small and large number//
var a=parseInt(prompt("enter the first number:"));
var b=parseInt(prompt("enter the second number:"));
var c=parseInt(prompt("enter the third number:"));

if((a>b)&&(a>c))
{
	
		if((b>c))
		{
			 console.log( "Descending :" + a,b,c);
			  console.log( "Assending :" + c,b,a);
			 
		}
		else 
		{
			console.log( "Assending :"+ b,c,a );
			  console.log( "Descending :" +a,c,b);
		}
}
else if((b>a)&&(b>c))
	{
	console.log(b);
		if((a>c))
			{
				  console.log( "Descending:"+ b,a,c);
			     console.log( "Assending :"+ c,a,b);
			}
			else 
			{
				 console.log( "Descending:"+ b,a,c);
			     console.log( "Assending :"+c,a,b);
			}
	}
else if((c>a)&&(c>b))
	{
	console.log(c);
		if((a>b))
			{
				console.log( "Descending :"+ c,a,b);
			     console.log( "Assending :"+ b,a,c);
			}
			else 
			{
				console.log( "Descending :"+ c,b,a);
			     console.log( "Assending :"+ a,b,c);
				 
			}
	}
	//2.even divisible by four//
	var ab=prompt("enter the number:");
	if(ab%2==0)
	{
		if(ab%4==0)
		{
			 console.log("It's even number & divded by 4");
		}
		else 
		{
			 console.log("It's even but not divided by 4");
		}
	}
	else 
	{
      if(ab%3==0)
	  {
         console.log("It's odd number and divded by 3");
	  }
      else 
	  {
 console.log("It's odd but not divided by 3");
	  }
	}