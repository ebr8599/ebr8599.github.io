const JazzElevactorSoundFiles = [
    {
        title: "DMS 4 Channel",
        file: "sounds/Elevator Music/Elevator Music DMS 4 chan-001.wav",
        description: "A small jazz combo recorded with the double mid side 4-channel format."
    },
    {
        title: "DMS XY 90",
        file: "sounds/Elevator Music/Elevator Music DMS XY 90.wav",
        description: "A small jazz combo recorded with the double mid side XY 90 format."
    },
    {
        title: "DMS XY 120",
        file: "sounds/Elevator Music/Elevator Music DMS XY 120.wav",
        description: "A small jazz combo recorded with the double mid side XY 120 format."
    },
    {
        title: "B-FuMa",
        file: "sounds/Elevator Music/Elevator Music Fuma.wav",
        description: "A small jazz combo recorded with the Rode B-FuMa format."
    },
    {
        title: "B-Ambix",
        file: "sounds/Elevator Music/Elevator Music Bamb-001.wav",
        description: "A small jazz combo recorded with the Rode B-Ambix format."
    },
    {
        title: "Mono",
        file: "sounds/Elevator Music/Elevator Music Mono.wav",
        description: "A small jazz combo recorded with the Rode Mono format."
    },
    {
        title: "OH LR",
        file: "sounds/Elevator Music/Elevator Music OH LR.wav",
        description: "A small jazz combo recorded with an AB array."
    },
    {
        title: "Stereo",
        file: "sounds/Elevator Music/Elevator Music Stereo-008.wav",
        description: "A small jazz combo recorded with the Rode stereo format."
    },
];

const jazzElevatorComboSounds = new SoundBoard(JazzElevactorSoundFiles, "#jazz-elevator");

jazzElevatorComboSounds.renderBoard();




const JazzPlatzSoundFiles = [
    {
        title: "Jazz Combo",
        file: "w",
        description: "A jazz combo playing"
    },
    {
        title: "Jazz Combo",
        file: "x",
        description: "A jazz combo playing"
    },
    {
        title: "Jazz Combo",
        file: "a",
        description: "A jazz combo playing"
    },
    {
        title: "Jazz Combo",
        file: "z",
        description: "A jazz combo playing"
    },
    {
        title: "Jazz Combo",
        file: "y",
        description: "A jazz combo playing"
    },
    {
        title: "Jazz Combo",
        file: "s",
        description: "A jazz combo playing"
    },
];

const jazzPlatzComboSounds = new SoundBoard(JazzPlatzSoundFiles, "#jazz-platz");

jazzPlatzComboSounds.renderBoard();
