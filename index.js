function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400) {
  return "This one is on me!";

}  else if (someNumber >= 401 && someNumber <= 2000){
  return "That will be twenty bucks.";
}  
  else if (someNumber >= 2000 && someNumber <= 2500){
  return "I will gladly take your thirty bucks.";
  }

  else if (someNumber > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(Destination){
  return Destination === "NYC" ? "Ok, sounds good." : "No go."
}
ternaryCheckCity("NYC")
ternaryCheckCity("Pittsburg")

function switchOnCharmFromTip(Amount){
  switch (Amount) {
    case "generous":
    return "Thank you so much."

    case "not as generous":
    return "Thank you."

    default:
      return "Bye." 
  }

}