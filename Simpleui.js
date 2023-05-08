function Input() 
{
  const input = document.getElementById("number-input").value;
  const output = document.getElementById("output");
  if (input < 0) 
  {
    output.innerText = "Enter a positive value";
  } 
  else if (input % 2 === 0) 
  {
    output.innerText = `Next three even numbers: ${+input + 2}, ${+input + 4}, ${+input + 6}`;
  } 
  else 
  {
    output.innerText = `Next three odd numbers: ${+input + 2}, ${+input + 4}, ${+input + 6}`;
  }
}