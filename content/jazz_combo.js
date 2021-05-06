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
        title: "Ambix",
        file: "sounds/Jazz Combo/Short Ambix.wav",
        description: "A jazz combo playing"
    },
    {
        title: "Combo OH LR",
        file: "sounds/Jazz Combo/Short Combo OH LR.wav",
        description: "A jazz combo playing"
    },
    {
        title: "DMS 4 Channel",
        file: "sounds/Jazz Combo/Short DMS 4 chan.wav",
        description: "A jazz combo playing"
    },
    {
        title: "FuMa",
        file: "sounds/Jazz Combo/Short FuMa.wav",
        description: "A jazz combo playing"
    },
    {
        title: "Mono",
        file: "sounds/Jazz Combo/Short Mono.wav",
        description: "A jazz combo playing"
    },
    {
        title: "Stereo Real",
        file: "sounds/Jazz Combo/Short Stereo Real.wav",
        description: "A jazz combo playing"
    },
    {
        title: "XY Stereo 90",
        file: "sounds/Jazz Combo/Short XY Stereo 90.wav",
        description: "A jazz combo playing"
    },
    {
        title: "XY Stereo 120",
        file: "sounds/Jazz Combo/Short XY Stereo 120.wav",
        description: "A jazz combo playing"
    },
];

const jazzPlatzComboSounds = new SoundBoard(JazzPlatzSoundFiles, "#jazz-platz");

jazzPlatzComboSounds.renderBoard();
