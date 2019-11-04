alert(`Welcome to an escape adventure.`)

alert (`You wake up in an old abandoned house.`)

var direction = prompt (`Infront of you, there are two ways to go left and right. What way will you go?`)

if (direction === `right`){

    alert (`As you turn the corner you see a shadow move further in. You turn around to get away but realise the there is no coridor behind you anymore it's just a wall. You steady your heart and continue forward.`)

    var weapon = prompt (`After walking fo a few minutes you find a table with three items on it. There is a flashlight, a knife and a baseball bat. Please choose a weapon`)
    
    if (weapon !== `flashlight` && weapon !== `knife` && weapon !== `baseball bat`) {
        var weapon = prompt (`Please choose a weapon`)
     }
     if (weapon === `flashlight`){
        alert (`You hear a voice saying "You chose wisely"`)
     }else if (weapon === `knife` || weapon === `baseball bat`){
        alert (`You hear a voice saying "You chose poorly"`)
    }
    
    
    alert (`As soon as you pick up the ` + weapon + ` the table disappears into thin air.`)

    alert (`After walking for what feels like hours, you finally make it to a door. You can see faint light coming from behind, but as soon as you put your hand on the handle you see a shadow move on the other side of the door.`)

    alert (`After a few minutes you deside to open the door even at the risk of being killed, but atlest you have a ` + weapon + ` that you can use to hit whatever is inside.`)

    alert (`As you open the door you are greeted by a screech that makes your ears bleed and a shadow lunging at you.`)

    if (weapon === `flashlight`) {
        var attack = prompt (`Will you swing the flashlight or will you flash it?`)
    }else {
        alert (`You swing the ` + weapon + ` , but it just passes through the shadow and all you can do is scream as it digs it's long fangs into your neck`)
        alert (`You died!`)
    }
    
    if (attack === `flash` || attack === `flash it`){
        alert (`You flash the shadow with the flashlight and too your surprise the shadow just puffs into smoke and disappears, as you breathe a sigh of relief you take the time to look around the room and see a note that says "Congratulations you are the first to survive this".`)
        alert (`You make your way towards the door and open it, when yuo step out you see the wonderfull sight of the sun and you smell the fresh air, you start thinking back to how you ended up in there.`)
    }else {
        alert (`You swing the ` + weapon + ` , but it just passes through the shadow and all you can do is scream as it digs it's long fangs into your neck`)
        alert (`You died!`)
    }
}

if (direction === `left`) {
    alert ("As you take your first step into the corridor everything turns dark.")

    alert ("As you walk further into the corridor you start hearing the sound of footsteps getting closer and closer, you start to get nervous and start thinking of ways you can hide. ")

    alert ("On the side of the coridor you see a chest you could hide inside.")

    var escape = prompt(`Will you hide or will you run back?`)
    if (escape === `hide`){
        alert ("You hear the footsteps stop not too far away like it's looking for something.")
        alert(`The footsteps soon start walking past you, and you sigh in relief.`)
        alert (`When you open the lid of the chest, as soon as you do you realise what a mistake you made. As the shadow turns around, looks at you and it launches at you and sinks it's long fangs into your neck.`)
        alert (`You died!`)
    }else {
        alert (`You start running back the way you came, but as soon as you start running the footsteps start doing the same but at a much faster pace. Your heart beat start beating faster and faster but that soon comes to an end, as the footsteps are right behind you and it stabs you in the stomach with it's long claws.`)
        alert (`You died!`)
    }

}