import { Component } from '@angular/core';
import { NgbDropdownModule, NgbNavModule  } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-header',
	standalone: true,
	imports: [NgbNavModule, NgbDropdownModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  data = [
    {id:1, name: "Like That", artists:"Future, Metro, Kendrick", lyrics: `[Intro: Future]
    Gotta fire my joint up on this bitch
    Young Metro, Metro, young Metro, three times
    Yeah
    
    [Verse 1: Future]
    Stickin' to the code, all these hoes for the streets
    I put it in her nose, it's gon' make her pussy leak
    Pussy niggas told, ain't gon' wake up out they sleep
    You can't hear that switch, but you can hear them niggas scream
    All my hoes do shrooms, nigga, all my hoes do coke
    Twenty-carat ring, I put my fingers down her throat (Uh, uh, uh)
    If I lose a carat, she might choke (Uh, uh, uh)
    I know she gon' swallow, she a G.O.A.T. (Uh, uh, uh)
    Freeband nigga, bring the racks in
    Got the shooters in the corner like the pack in
    She think 'cause she exotic bitch, she attractive
    That's that shit'll get you put up out the section, brrt
    And the motto still the same
    Ball like I won a championship game
    You know these hoes hungry, they gon' fuck for a name
    I put her on the gang, she get fucked for a chain
    Got your girl in this bitch, she twirlin' on the dick
    I got syrup in this bitch, turn up in this bitch
    And we brought the 'Ercs in this bitch, get murked in this bitch
    All these pointers on me, baby, you know it's game time
    Bring a friend, bitch, we fucked 'em at the same time
    I'm a different nigga, no, we not the same kind
    You can have that lil'— if she ain't mine (Yeah)` },
    {id:2, name: "Too Sweet", artists:"Hozier", lyrics: `[Verse 1]
    It can't be said I'm an early bird
    It's 10 o'clock before I say a word
    Baby, I can never tell
    How do you sleep so well?
    You keep tellin' me to live right
    To go to bed before the daylight
    But then you wake up for the sunrise
    You know you don't gotta pretend
    Baby, now and then
    
    [Pre-Chorus]
    Don't you just wanna wake up
    Dark as a lake
    Smellin' like a bonfire
    Lost in a haze?
    If you're drunk on life, babe
    I think it's great
    But while in this world
    
    [Chorus]
    I think I'll take my whiskey neat
    My coffee black and my bed at three
    You're too sweet for me
    You're too sweet for me
    I take my whiskеy neat
    My coffee black and my bed at three
    You're too sweet for mе
    You're too sweet for me` },
    {id:3, name: "JOLENE", artists:"Beyonce", lyrics: `[Intro]
    (Jolene)
    (Jolene)
    
    [Chorus: Beyoncé]
    Jolene, Jolene, Jolene, Jolene
    I'm warnin’ you, don't come for my man (Jolene)
    Jolene, Jolene, Jolene, Jolene
    Don't take the chance because you think you can
    
    [Verse 1: Beyoncé]
    You’re beautiful, beyond compare
    Takes more than beauty and seductive stares
    To come between a family and a happy man
    Jolene, I'm a woman too
    Thе games you play are nothing new
    So you don't want no hеat with me, Jolene
    We've been deep in love for twenty years
    I raised that man, I raised his kids
    I know my man better than he knows himself (Yeah, what?)
    I can easily understand
    Why you're attracted to my man
    But you don't want this smoke, so shoot your shot with someone else (You heard me)
    
    [Chorus: Beyoncé]
    Jolene, Jolene, Jolene, Jolene
    I'm warnin' you, woman, find you your own man
    Jolene, I know I’m a queen, Jolene
    I’m still a Creole banjee bitch from Louisiane (Don't try me)` },
    {id:4, name: "DAUGHTER", artists:"Beyonce", lyrics: `[Verse 1]
    Your body laid out on these filthy floors
    Your bloodstains on my custom coutures
    Bathroom attendant let me right in
    She was a big fan
    I really tried to stay cool
    But your arrogance disturbed my solitude
    Now I ripped your dress and you're all black and blue
    Look what you made me do
    
    [Refrain]
    They keep sayin' that I ain't nothin' like my father
    But I'm the furthest thing from choir boys and altars
    If you cross me, I'm just like my father
    I am colder than Titanic water
    
    [Chorus]
    Help me, Lord, from these fantasies in my head
    They ain't ever been safe ones
    I don't fellowship with these fakе ones
    So let's travel to whitе chapels and sing hymns
    Hold rosaries, and sing in stained glass symphonies
    Cleanse me, Holy Trinity
    From this marijuana smoke smell in my hair
    
    [Verse 2]
    I sashayed my dress
    Did my best impression of a damsel in distress
    This alcohol and smell of regret
    Allured my catch
    Outfit too small to hide my scars
    Feelin' bottled up like bottle service broads
    How long can he hold his breath before his death?` },
    {id:5, name: "KARMA", artists:"JoJo Siwa", lyrics: `[Verse 1]
    I was a bad girl, I did some bad things
    I swear I did it all for fun and it meant nothing
    It never happened, it was a secret
    Like when a tree falls in the forest, no one hears it
    Another late night, another crazy mood
    And I didn't think twice what it would do to you
    I was a wild child, you always knew it
    It was a matter of time before I blew it
    
    [Pre-Chorus]
    Thou shall not lie, thou shall not cheat
    Thou shall not get caught or you'll end up just like me, oh
    
    [Chorus]
    Karma's a bitch, I should've known better
    If I had a wish I would've never effed around
    When I saw the pics of you and hеr I felt the knife twist
    Karma's a bitch, and shе's with you right now
    
    [Verse 2]
    She is a good girl, I think she's boring
    Believe me, twenty minutes later you'll be snoring
    But it still kills me that you hooked up with her (Up with her)
    And now the universe is giving me what I deserve (I deserve)` },
    {id:6, name: "SHEESH", artists:"BABYMONSTER", lyrics: `[베이비몬스터 "SHEESH" 가사]

    [Intro: Rora, Pharita]
    Da-la-lun-dun
    Da-la-lun-dun
    Da-la-lun-dun
    Baby, I'ma monster
    
    [Verse 1: Chiquita, Rora]
    Mano, a mano
    I see you in slow-mo
    You know you're in trouble
    Ooh-hoo-hoo-hoo
    발버둥 쳐봐
    어차피 손바닥
    위에서 못 나가
    You know that
    
    [Pre-Chorus: Rami, Pharita]
    눈을 뜬 순간 피어나
    All eyes on me, 불을 질러라
    Do or die on my life
    Yeah, you ain't seen nothing yet
    
    [Chorus: Ahyeon, Chiquita]
    Got them all going
    Sheesh, sheesh
    Sheesh, sheesh, sheesh, yeah
    B-A-B-Y-M-O-N
    Sheesh, sheesh
    Sheesh, sheesh, sheesh, yeah
    Got them all going` },
  ]
}