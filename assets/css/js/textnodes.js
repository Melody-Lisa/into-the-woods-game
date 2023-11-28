const textNodes = [
    {
        id: 1,
        text: "Welcome.. Are you ready to begin?",
        options: [
            {
                text: "Yes",
                nextText: 2
            },
            {
                text: "About",
                nextText: 99
            }
        ]
    },
    {
        id: 2,
        text: `
        You have woken up in your car, it's night time and you had dozed off for a moment. It takes you a moment 
        to get your bearings but you remember that your friend who had been travelling with you had left the car 
        to relieve themself.
        `,
        options: [
            {
                text: "Look around the car",
                nextText: 3,
            },
            {
                text: "Get out to search for your friend",
                nextText: 4
            }
        ],
    },
    {
        id: 3,
        text: `
        You find a flashlight and use it to look around outside. 
        The night is eerily quiet, and the dense woods surrounding you seem to absorb any sound you make. 
        You shine the flashlight in the direction your friend went, but there's no response.
        `,
        inventory: `<li>Flashlight</li>`,
        options: [
            {
                text: "Venture to the nearby wood to search for your friend.",
                nextText: 5
            },
            {
                text: "Stay by the car to wait, hoping your friend will return.",
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: "It's dark outside, you can't see a thing.",
        options: [
            {
                text: "Look around the car",
                nextText: 3
            }
        ]
    },
    {
        id: 5,
        text: `
        You decide to venture further into the woods to search for your friend, even though the night is eerily 
        quiet, and the dense woods seem to swallow any sound you make. With your flashlight in hand, you explore 
        deeper into the darkness, calling out for your friend.
        
        <p>Despite your efforts, your friend's voice remains distant and elusive. It's as if they've vanished into 
        the heart of the woods. You continue to search, but the mystery of their disappearance deepens.
        `,
        end: "Unlocked Ending: Missing.",
        achieved: `<li>Missing</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 6,
        text: `
        You choose to stay by the car and wait for your friend's return, hoping they'll come back soon. 
        As you sit in the dimly lit car, the minutes stretch on, and the night 
        feels increasingly eerie. You hear strange rustling sounds in the woods, making your nerves jangle with tension.
        `,
        options: [
            {
                text: "Gather your courage and decide to investigate the source of the rustling sounds in the woods.",
                nextText: 5
            },
            {
                text: "Honk the car horn to try and get your friend's attention.",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: `
        You opt to honk the car horn, 
        hoping the sound will carry through the quiet night and reach your friend. 
        You press down on the horn, and the sudden noise pierces the silence, echoing through the trees.
        <p>Moments later, you hear a distant response – a faint shout from deeper within the woods. 
        It sounds like your friend might be in trouble.
        `,
        options: [
            {
                text: "Stay by the car and continue honking the horn to guide your friend back.",
                nextText: 8
            },
            {
                text: "Follow the sound of your friend's voice into the woods.",
                nextText: 9
            }
        ]
    },
    {
        id: 8,
        text: `
        You choose to stay by the car and continue honking the horn, hoping your friend will follow the sound and 
        return safely. The repeated blasts of the horn fill the night air, but there's no immediate response.
        <p>As you keep honking, you suddenly notice something eerie. Shadows moving among the trees on the edge 
        of your vision. The rustling sounds grow louder, and it becomes clear that something is approaching your 
        car from the woods. You begin to feel a growing sense of unease.
        `,
        options: [
            {
                text: "Keep honking the horn, hoping that the noise will deter whatever is coming closer.",
                nextText: 10
            },
            {
                text: "Abandon the car and make a run for it into the woods in the opposite direction.",
                nextText: 11
            }
        ]
    },
    {
        id: 9,
        text: `
        You decide to follow the sound of your friend's voice deeper into the woods, 
        guided by the faint shouts. With your flashlight in hand, you make your way through the dark forest, 
        pushing aside branches and navigating the uneven terrain.
        <p>As you make your way through the dark forest, you discover two intriguing items partially 
        buried under a pile of leaves near the clearing. Something in your mind tells you to pick one.
        `,
        options: [
            {
                text: "A rusted, old key.",
                nextText: 12,
                setInventory: { key: true }
            },
            {
                text: "A weathered map with cryptic symbols.",
                nextText: 13,
                setInventory: { map: true }
            }
        ]
    },
    {
        id: 10,
        text: `
        You choose to keep honking the horn, hoping that the noise will deter whatever is coming closer. 
        The horn's blaring continues, echoing through the night, and you anxiously wait for your friend to return.
        <p>Suddenly, a figure emerges from the darkness. It's your friend, disheveled and frightened, 
        stumbling towards the car. You breathe a sigh of relief as they reach the vehicle.
        `,
        options: [
            {
                text: "Ask your friend what happened and what they saw in the woods.",
                nextText: 14
            },
            {
                text: "Quickly get in the car and drive away from this eerie place.",
                nextText: 15
            }
        ]
    },
    {
        id: 11,
        text: `
        You decide to abandon the car and make a run for it into the woods in the opposite 
        direction from the approaching threat. Heart pounding, you dash into the darkness, guided only by your 
        flashlight's beam.
        <p>As you venture deeper into the woods, you realize you've left behind the relative safety of the car, 
        and the woods become denser and more ominous.
        `,
        options: [
            {
                text: "Keep running.",
                nextText: 16
            }
        ]
    },
    {
        id: 12,
        text: `
        After picking up the rusted key, you continue to search for your friend, using the key as a potential clue. 
        As you move deeper into the woods, you stumble upon an ancient, overgrown door partially concealed by vines 
        and leaves. The key in your hand seems like it might fit the lock.
        <p>With a sense of curiosity and trepidation, you decide to try the key in the door's lock. 
        To your surprise, it fits perfectly, and the door creaks open to reveal a hidden, underground chamber.
        `,
        inventory: `<li>Key</li>`,
        options: [
            {
                text: "Enter the underground chamber and explore its secrets.",
                nextText: 17
            },
            {
                text: "Choose not to enter and instead continue searching for your friend.",
                nextText: 18
            }
        ]
    },
    {
        id: 13,
        text: `
        You decide to pick up the weathered map with cryptic symbols. The map is covered in strange markings that 
        you can't quite decipher. It appears to be a map of the surrounding woods, but it's unlike any map you've 
        seen before.
        <p>With the map in hand, you decide to continue searching for your friend, hoping that the cryptic symbols might hold a clue to their whereabouts.
        <p>As you follow the sound of your friend's distant shouts and investigate the rustling sounds in the woods, you eventually reunite with your friend. The map remains a mysterious item, and you both decide to return to the car and leave the eerie forest behind, leaving the map's secrets for another time.
        `,
        inventory: `<li>Map</li>`,
        end: "Unlocked Ending: You got a map!",
        achieved: `<li>You got a map!</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 14,
        text: `
        Relieved to have your friend back, you ask them what happened and what they saw in the woods. 
        They explain that they got lost and disoriented while looking for a suitable spot, and they 
        heard strange sounds and glimpsed unsettling shadows. It seems like something unnatural might be 
        in these woods.
        `,
        options: [
            {
                text: "Decide to investigate the source of these strange occurrences in the woods together.",
                nextText: 19
            },
            {
                text: "Quickly get in the car and drive away from this eerie place.",
                nextText: 15,
                setEndCollection: { smart: true },
            }
        ]
    },
    {
        id: 15,
        text: `
        You decide it's best to leave the eerie woods behind and get in the car with your friend. 
        As you drive away, the unsettling atmosphere gradually fades, and the night grows quieter.
        <p>You and your friend discuss the strange events you both experienced, wondering what could 
        have been lurking in those woods. It's a mystery you may never fully unravel.
        `,
        end: "Unlocked Ending: The Smartest.",
        achieved: `<li>The Smartest</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 16,
        text: `
        Eventually you make it through the woods and into a nearby town. You appear to be safe for now but 
        you have abandoned your friend.. And your car.
        `,
        end: "Unlocked Ending: The Coward.",
        achieved: `<li>The Coward</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 17,
        text: `
        You decide to enter the underground chamber, guided by curiosity and a sense of adventure. 
        As you step into the dark, hidden chamber, the door creaks shut behind you, sealing you inside.
        <p>The chamber is filled with ancient artifacts and strange symbols etched on the walls. 
        You explore further, discovering an ornate chest at the center of the chamber. As you open it, 
        you find a collection of valuable and mystical items, but the room is filled with an eerie presence that 
        grows stronger by the moment.
        <p>Suddenly, you hear a faint whispering that seems to come from all around you. It's as if the 
        chamber itself is alive, and it's demanding something in return for the treasures you've discovered. 
        The situation becomes increasingly unsettling, and you can't shake the feeling that you've stumbled into 
        a realm beyond your understanding.
        `,
        end: "Unlocked Ending: Disappointment.",
        achieved: `<li>Disappointment</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 18,
        text: `
        You decide to hold off on entering the underground chamber and continue searching for your friend. 
        Following the sound of their distant shouts, you eventually reunite with your friend, who is relieved to 
        see you.
        <p>You both decide to leave the eerie woods together, leaving the mysteries of the underground chamber 
        for another time.
        `,
        end: "Unlocked Ending: Focused.",
        achieved: `<li>Focused</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 19,
        text: `
        You decide to investigate the source of the strange occurrences in the woods together with your friend. 
        Armed with flashlights, you cautiously venture into the darkness, following the rustling sounds and eerie 
        sensations.
        <p>As you delve deeper into the woods, you come across a clearing, and there, illuminated by the moonlight, 
        you discover an ancient, overgrown cemetery. The tombstones are weathered and moss-covered, and the air 
        feels heavy with an otherworldly presence.
        `,
        options: [
            {
                text: "Approach the cemetery to explore it further and uncover its secrets.",
                nextText: 20,
            }
        ]
    },
    {
        id: 20,
        text: `
        You and your friend decide to approach the eerie cemetery to explore it further. The moonlight casts an 
        eerie glow on the tombstones, creating an atmosphere of mystery. As you move deeper into the cemetery, 
        you notice a mausoleum that stands out from the rest. Its doors are slightly ajar, revealing a dimly lit 
        interior.
        <p>You cautiously enter the mausoleum, and inside, you discover an old, dusty book. The pages are filled 
        with cryptic symbols and writings in a language you can't quite identify. It appears to be a journal of 
        someone who had experiences in these woods.
        <p>You decide to take the mysterious book with you.
        `,
        inventory: `<li>Book</li>`,
        options: [
            {
                text: "Continue exploring the cemetery to see if you can find any more clues or items.",
                nextText: 21,
                setInventory: { amulet: true }
            },
            {
                text: "Exit the mausoleum and leave the cemetery.",
                nextText: 22,
            }
        ]
    },
    {
        id: 21,
        text: `
        You decide to continue exploring the cemetery to see if you can find any more clues or items. 
        As you search the area, you come across a small, weathered gravestone with a strange symbol etched onto it. 
        The symbol looks ancient and unfamiliar, but it piques your curiosity.
        <p>Upon closer inspection, you notice a small, hidden compartment in the gravestone. Inside, you find a 
        small, ornate amulet. It feels cold to the touch and emanates an otherworldly energy.
        <p>You decide to take the amulet with you.
        `,
        inventory: `<li>Amulet</li>`,
        options: [
            {
                text: "Exit the mausoleum and leave the cemetery.",
                nextText: 22,
            }
        ]
    },
    {
        id: 22,
        text: `
        As you exit the mausoleum, you and your friend are startled by an unexpected gust of wind that extinguishes 
        your flashlights. The cemetery is now plunged into complete darkness, and an eerie silence envelops you. 
        You begin to hear faint whispers and distant, echoing footsteps, even though you believed you were alone.
        <p>Panicked, you fumble for your flashlight and manage to switch it back on. The beam of light reveals a 
        group of shadowy figures standing around you. Their eyes gleam with an otherworldly, malevolent light, and 
        their whispers grow louder.
        `,
        options: [
            {
                text: "Attempt to confront the shadowy figures and demand answers.",
                nextText: 23
            },
            {
                text: "Flee from the cemetery as fast as you can",
                nextText: 24
            }
        ]
    },
    {
        id: 23,
        text: `
        As you bravely confront the shadowy figures, you demand answers, shining your flashlight upon them. 
        They hiss and recoil from the light, revealing grotesque, otherworldly features. One of them, in a raspy 
        voice, utters, "The amulet... give it to us."
        `,
        options: [
            {
                text: "Refuse to give them the amulet.",
                nextText: 25
            },
            {
                text: "Hand over the amulet.",
                nextText: 26,
                requiredInventory: (currentInventory) => currentInventory.amulet,
                setEndCollection: { book: true }
            },
            {
                text: "I don't have the amulet.",
                nextText: 27,
                requiredInventory: (currentInventory) => !currentInventory.amulet
            }
        ]
    },
    {
        id: 24,
        text: `
        You choose to flee from the cemetery as fast as you can, leaving the mysterious book behind. 
        The shadows continue to close in on you as you and your friend run through the dark woods. The feeling 
        of malevolence grows stronger, and the whispers become hauntingly clear.
        <p>Unfortunately, the woods seem to stretch endlessly, and you find yourselves running in circles. 
        The shadowy figures catch up to you, and their intentions remain a terrifying mystery. They surround you, 
        and with a bone-chilling howl, they engulf you in darkness.
        `,
        end: "Unlocked Ending: Unlucky.",
        achieved: `<li>Unlucky</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 25,
        text: `
        You bravely confront the shadowy figures and refuse to give them the amulet. 
        The figures hiss and become increasingly menacing. With a sudden, bone-chilling shriek, they close 
        in on you and your friend, enveloping you in darkness.
        `,
        end: "Unlocked Ending: Stubborn.",
        achieved: `<li>Stubborn</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 26,
        text: `
        You decide to hand over the amulet to the shadowy figures. As you place the amulet in their outstretched, 
        ghostly hands, an eerie calm descends upon the cemetery. The figures slowly fade away into the darkness, 
        taking the amulet with them.
        <p>You and your friend are left bewildered, with more questions than answers. As the shadows recede, 
        you hear their final whisper: "The amulet has appeased the restless spirits. Leave these woods and never 
        return."
        <p>With the amulet now gone and the shadowy figures dispersed, you choose to heed their warning. You and your friend 
        quickly exit the cemetery, leaving behind the mysteries of the woods.
        `,
        end: "Unlocked Ending: You both got a cool book!",
        achieved: `<li>A cool book!</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 27,
        text: `
        As you confess that you don't have the amulet, the figures react with anger. Their shadows seem to 
        lengthen, and the air around you grows colder. In a sudden and ominous surge, the figures surround you, 
        their whispering voices becoming more intense.
        <p>The last thing you hear is a chilling chant echoing through the woods. Darkness envelops you, 
        and the story ends with an unsettling sense of a fate sealed by the absence of the amulet.
        `,
        end: "Unlocked Ending: You missed a spot.",
        achieved: `<li>You missed a spot.</li>`,
        options: [
            {
                text: "Start Over",
                nextText: 0
            },
            {
                text: "Credits",
                nextText: 98,
            }
        ]
    },
    {
        id: 98,
        text: `
        <h2>Credits</h2>
        <p>Thank you for playing! This game demo was created by <a href="https://github.com/Melody-Lisa">Melody Lisa</a> 
        as project milestone 2 for Code Institute's Full Stack Software Development course.</p>
        <p>Special thanks to my mentor, cohort facilitator and fellow students for their continuous support.</p>
        <p>Your ending has been recorded in the extra features section, why not check it out and start over to see if you can 
        collect them all?</p>
        `,
        options: [
            {
                text: "Start Over",
                nextText: 0
            }
        ]
    },
    {
        id: 99,
        text: `<h2>About</h2>
        <p>You're on a road trip with your dear friend. It's getting pretty late, you should really find somewhere to rest,
        but you seem to be in the middle of nowhere. A quick pit stop by the side of the woods
         is in order.</p>
        <p> Choose your path through the story to see what happens next. Don't worry if you 
        don't get the ending you want, your ending will be recorded ready for you to start over and 
        choose a different path.</p>
        `,
        options: [
            {
                text: "Back",
                nextText: 0
            },
        ]
    },
];