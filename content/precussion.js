const PercussionGuiroSoundFiles = [
    {
        title: "AB",
        file: "sounds/Idillo/Guiro/Idillo Guiro AB.wav",
        description: "A guiro recorded with an AB array."
    },
    {
        title: "B-Ambix",
        file: "sounds/Idillo/Guiro/Idillo Guiro Bambix.wav",
        description: "A guiro recorded with the Rode B-Ambix format."
    },
    {
        title: "B-FuMa",
        file: "sounds/Idillo/Guiro/Idillo Guiro BFUMA.wav",
        description: "A guiro recorded with the Rode B-FuMa format."
    },
    {
        title: "Mono",
        file: "sounds/Idillo/Guiro/Idillo Guiro Mono.wav",
        description: "A guiro recorded with the Rode mono format."
    },
    {
        title: "Stereo",
        file: "sounds/Idillo/Guiro/Idillo Guiro Stereo.wav",
        description: "A guiro recorded with the rode stereo format."
    },
    {
        title: "XY",
        file: "sounds/Idillo/Guiro/Idillo Guiro XY.wav",
        description: "A guiro recorded with an XY array."
    },
];

const percussionGuiro = new SoundBoard(PercussionGuiroSoundFiles, "#percussion-guiro");

percussionGuiro.renderBoard();



const PercussionMaraccaSoundFiles = [
    {
        title: "AB",
        file: "sounds/Idillo/Maracca/Idillo Mar AB.wav",
        description: "A maracca recorded in an AB array."
    },
    {
        title: "B-Ambix",
        file: "sounds/Idillo/Maracca/Idillo Mar Bambix.wav",
        description: "A maracca recorded with the Rode B-Ambix format."
    },
    {
        title: "B-FuMa",
        file: "sounds/Idillo/Maracca/Idillo Mar BFUMA.wav",
        description: "A maracca recorded with the Rode B-FuMa format."
    },
    {
        title: "Mono",
        file: "sounds/Idillo/Maracca/Idillo Mar Mono.wav",
        description: "A maracca recorded with the Rode mono format."
    },
    {
        title: "Stereo",
        file: "sounds/Idillo/Maracca/Idillo Mar Stereo.wav",
        description: "A maracca recorded with the Rode stereo format."
    },
    {
        title: "XY",
        file: "sounds/Idillo/Maracca/Idillo Mar XY .wav",
        description: "A maracca recorded using an XY array."
    },
];

const percussionMaracca = new SoundBoard(PercussionMaraccaSoundFiles, "#percussion-maracca");

percussionMaracca.renderBoard();



const PercussionTimbalesSoundFiles = [
    {
        title: "AB",
        file: "sounds/Idillo/Timbales/Idillo Timbales AB.wav",
        description: "Timbales recorded using an AB array."
    },
    {
        title: "XY",
        file: "sounds/Idillo/Timbales/Idillo Timbales XY .wav",
        description: "Timbales recorded using an XY array."
    },
    {
        title: "B-Ambix",
        file: "sounds/Idillo/Timbales/Timbales Bambix-008.wav",
        description: "Timbales recorded using the Rode B-Ambix format."
    },
    {
        title: "B-FuMa",
        file: "sounds/Idillo/Timbales/Timbales Fuma.wav",
        description: "Timbales recorded using the Rode B-FuMa format."
    },
    {
        title: "Mono",
        file: "sounds/Idillo/Timbales/Timbales Mono.wav",
        description: "Timbales recorded using the Rode mono format."
    },
    {
        title: "Stereo",
        file: "sounds/Idillo/Timbales/Timbales Stereo.wav",
        description: "Timbales recorded using the Rode stereo format."
    },
];

const percussionTimbales = new SoundBoard(PercussionTimbalesSoundFiles, "#percussion-timbales");

percussionTimbales.renderBoard();

