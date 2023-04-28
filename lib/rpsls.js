export function rps(shot){
    const hand = ["rock", "paper", "scissors"];

    if(shot == null){
        return{"player": hand[Math.floor(Math.random() * hand.length)]};
    }

    const ophand = hand[Math.floor(Math.random() * hand.length)];
    var res;
    if(shot === ophand){
        res = "tie";
    } else if(shot === "rock" && ophand === "scissors" || shot === "paper" && ophand === "rock" || shot === "scissors" && ophand === "paper"){
        res = "win";
    } else if(shot === "rock" && ophand === "paper" || shot === "paper" && ophand === "scissors" || shot === "scissors" && ophand === "rock"){
        res = "lose";
    } else {
        console.log("Argument out of range!");
        console.error();
    }
    return {"player": shot, "opponent": ophand, "result": res};
}

export function rpsls(shot){
    const hand = ["rock", "paper", "scissors", "lizard", "spock"];
    if(shot == null){
        return{"player": hand[Math.floor(Math.random() * hand.length)]};
    }

    const ophand = hand[Math.floor(Math.random() * hand.length)];
    var res;
    if(!hand.includes(shot)){
        console.log("Argument out of range!");
        console.error();
    }
    if(shot === ophand){
        res = "tie";
    } else if( hand === "rock" && (ophand === "scissors" || ophand === "lizard") ||  hand === "paper" && (ophand === "rock" || ophand === "spock") || hand === "scissors" && (ophand === "paper" || ophand === "lizard")){
        res = "win";
    } else if( hand === "lizard" && (ophand === "paper" || ophand === "spock") || hand === "spock" && (ophand === "scissors" || ophand === "rock")){
        res = "win";
    } else{
        res = "lose";
    }
    return {"player": shot, "opponent": ophand, "result": res};
}