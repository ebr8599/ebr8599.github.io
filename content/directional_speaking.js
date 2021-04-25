const BetweenDirectionsSoundFiles = [
    {
        title: "AB",
        file: "sounds/Celia and Ethan/Between/Between AB.wav",
        description: "A male and a female defining directions between the capsules with an AB array."
    },
    {
        title: "B-Ambix",
        file: "sounds/Celia and Ethan/Between/Between Bambix.wav",
        description: "A male and a female defining directions between the capsules with the Rode microphone in B-Ambix format."
    },
    {
        title: "DMS 4 Channel",
        file: "sounds/Celia and Ethan/Between/Between DMS 4 channel.wav",
        description: "A male and a female defining directions between the capsules with the double mid side array in 4-channel format."
    },
    {
        title: "DMS XY 90",
        file: "sounds/Celia and Ethan/Between/Between DMS XY 90.wav",
        description: "A male and a female defining directions between the capsules with the double mid side array in XY 90 format."
    },
    {
        title: "DMS XY 120",
        file: "sounds/Celia and Ethan/Between/Between DMS XY 120.wav",
        description: "A male and a female defining directions between the capsules with the double mid side array in XY 120 format."
    },
    {
        title: "B-FuMa",
        file: "sounds/Celia and Ethan/Between/Between Fuma.wav",
        description: "A male and a female defining directions between the capsules with the Rode microphone in B-FuMa format."
    },
    {
        title: "Mono",
        file: "sounds/Celia and Ethan/Between/Between Mono.wav",
        description: "A male and a female defining directions between the capsules with the Rode microphone in mono format."
    },
    {
        title: "Stereo",
        file: "sounds/Celia and Ethan/Between/Between Stereo.wav",
        description: "A male and a female defining directions between the capsules with the Rode microphone in stereo format."
    },
    {
        title: "XY",
        file: "sounds/Celia and Ethan/Between/Between XY.wav",
        description: "A male and a female defining directions between the capsules with an XY array."
    },
];

const directionalBetween = new SoundBoard(BetweenDirectionsSoundFiles, "#directional-between");

directionalBetween.renderBoard();


// --------------------------------

const DirectionalDrumsSoundFiles = [
    {
        title: "AB",
        file: "sounds/Celia and Ethan/Box Hitting/Box Hitting AB.wav",
        description: "Making loud noises while walking around the ambisonic array in AB format."
    },
    {
        title: "B-Ambix",
        file: "sounds/Celia and Ethan/Box Hitting/Box Hitting Bambix.wav",
        description: "Making loud noises while walking around the ambisonic array in the Rode B-Ambix format."
    },
    {
        title: "DMS 4 Channel",
        file: "sounds/Celia and Ethan/Box Hitting/Box Hitting DMS 4 channel.wav",
        description: "Making loud noises while walking around the ambisonic array in the double mid side 4-channel format."
    },
    {
        title: "DMS XY 90",
        file: "sounds/Celia and Ethan/Box Hitting/Box Hitting DMS XY 90.wav",
        description: "Making loud noises while walking around the ambisonic array in the double mid side XY 90 format."
    },
    {
        title: "DMS XY 120",
        file: "sounds/Celia and Ethan/Box Hitting/Box Hitting DMS XY 120.wav",
        description: "Making loud noises while walking around the ambisonic array in the double mid side XY 120 format."
    },
    {
        title: "FUMA",
        file: "sounds/Celia and Ethan/Box Hitting/Box Hitting Bfuma.wav",
        description: "Making loud noises while walking around the ambisonic array in the Rode B-FuMa format."
    },
    {
        title: "Mono",
        file: "sounds/Celia and Ethan/Box Hitting/Box Hitting Mono.wav",
        description: "Making loud noises while walking around the ambisonic array in the Rode mono format."
    },
    {
        title: "Stereo",
        file: "sounds/Celia and Ethan/Box Hitting/Box Hitting Stereo.wav",
        description: "Making loud noises while walking around the ambisonic array in the Rode stereo format."
    },
    {
        title: "XY",
        file: "sounds/Celia and Ethan/Box Hitting/Box Hitting XY.wav",
        description: "Making loud noises while walking around the ambisonic array in the XY format."
    },
];

const directionalDrumsSounds = new SoundBoard(DirectionalDrumsSoundFiles, "#directional-drums");

directionalDrumsSounds.renderBoard();

// --------------------------------

const DirectionalForwardBackwardSoundFiles = [
    {
        title: "4 Channel",
        file: "sounds/Celia and Ethan/FB/FB 4 Channel.wav",
        description: "Speaking directions while facing both forwards and backwards in the double mid side 4-channel format."
    },
    {
        title: "AB",
        file: "sounds/Celia and Ethan/FB/FB AB.wav",
        description: "Speaking directions while facing both forwards and backwards using the AB array."
    },
    {
        title: "XY 90",
        file: "sounds/Celia and Ethan/FB/FB XY 90.wav",
        description: "Speaking directions while facing both forwards and backwards using the double mid side XY 90 format."
    },
    {
        title: "XY 120",
        file: "sounds/Celia and Ethan/FB/FB XY 120.wav",
        description: "Speaking directions while facing both forwards and backwards using the double mid side XY 120 format."
    },
    {
        title: "XY",
        file: "sounds/Celia and Ethan/FB/FB XY.wav",
        description: "Speaking directions while facing both forwards and backwards using the XY array."
    },
    {
        title: "B-Ambix",
        file: "sounds/Celia and Ethan/FB/LN BAmbix.wav",
        description: "Speaking directions while facing both forwards and backwards using the Rode B-Ambix format."
    },
    {
        title: "BFUMA",
        file: "sounds/Celia and Ethan/FB/LN BFUMA.wav",
        description: "Speaking directions while facing both forwards and backwards using the Rode BFuMa format."
    },
    {
        title: "Mono",
        file: "sounds/Celia and Ethan/FB/LN Mono.wav",
        description: "Speaking directions while facing both forwards and backwards using the Rode mono format."
    },
    {
        title: "Stereo",
        file: "sounds/Celia and Ethan/FB/LN Stereo.wav",
        description: "Speaking directions while facing both forwards and backwards using the Rode stereo format."
    },
];

const directionalForwardBackwardSounds = new SoundBoard(DirectionalForwardBackwardSoundFiles, "#directional-forward-backward");

directionalForwardBackwardSounds.renderBoard();

// --------------------------------

const DirectionalFootstepSoundFiles = [
    {
        title: "4 Channel",
        file: "sounds/Celia and Ethan/Footsteps/Footsteps 4 channel.wav",
        description: "Footsteps around the ambisonic array using the double mid side 4-channel formatting."
    },
    {
        title: "AB",
        file: "sounds/Celia and Ethan/Footsteps/Footsteps AB.wav",
        description: "Footsteps around the ambisonic array using the AB array."
    },
    {
        title: "B-Ambix",
        file: "sounds/Celia and Ethan/Footsteps/Footsteps Bambix.wav",
        description: "Footsteps around the ambisonic array using the Rode B-Ambix format."
    },
    {
        title: "B-FuMa",
        file: "sounds/Celia and Ethan/Footsteps/Footsteps BFuma.wav",
        description: "Footsteps around the ambisonic array using the Rode B-FuMa format."
    },
    {
        title: "Mono",
        file: "sounds/Celia and Ethan/Footsteps/Footsteps Mono.wav",
        description: "Footsteps around the ambisonic array using the Rode mono format."
    },
    {
        title: "Stereo 90",
        file: "sounds/Celia and Ethan/Footsteps/Footsteps Stereo 90.wav",
        description: "Footsteps around the ambisonic array using the double mid side stereo 90 format."
    },
    {
        title: "Stereo 120",
        file: "sounds/Celia and Ethan/Footsteps/Footsteps Stereo 120.wav",
        description: "Footsteps around the ambisonic array using the double mid side stereo 120 format."
    },
    {
        title: "Stereo",
        file: "sounds/Celia and Ethan/Footsteps/Footsteps Stereo.wav",
        description: "Footsteps around the ambisonic array using the Rode stereo format."
    },
    {
        title: "XY",
        file: "sounds/Celia and Ethan/Footsteps/Footsteps XY .wav",
        description: "Footsteps around the ambisonic array using the XY array."
    },
];

const directionalFootstepSounds = new SoundBoard(DirectionalFootstepSoundFiles, "#directional-footstep");

directionalFootstepSounds.renderBoard();

// --------------------------------

const DirectionalLeftSoundFiles = [
    {
        title: "AB",
        file: "sounds/Celia and Ethan/LRFB/LRFB AB.wav",
        description: "A male and a female speaking the directions at the capsules in an AB array."
    },
    {
        title: "B-Ambix",
        file: "sounds/Celia and Ethan/LRFB/LRFB BAmbix.wav",
        description: "A male and a female speaking the directions at the capsules using the Rode B-Ambix format."
    },
    {
        title: "BFUMA",
        file: "sounds/Celia and Ethan/LRFB/LRFB BFUMA.wav",
        description: "A male and a female speaking the directions at the capsules using the Rode B-FuMa format."
    },
    {
        title: "DMS 4 Channel",
        file: "sounds/Celia and Ethan/LRFB/LRFB DMS 4 channel.wav",
        description: "A male and a female speaking the directions at the capsules using the double mid side 4-channel format."
    },
    {
        title: "DMS XY Stereo 90",
        file: "sounds/Celia and Ethan/LRFB/LRFB DMS XY Stereo 90.wav",
        description: "A male and a female speaking the directions at the capsules using the double mid side XY 90 format."
    },
    {
        title: "DMS XY Stereo 120",
        file: "sounds/Celia and Ethan/LRFB/LRFB DMS XY Stereo 120.wav",
        description: "A male and a female speaking the directions at the capsules using the double mid side XY 120 format."
    },
    {
        title: "Stereo",
        file: "sounds/Celia and Ethan/LRFB/LRFB Stereo.wav",
        description: "A male and a female speaking the directions at the capsules using the Rode stereo format."
    },
    {
        title: "Mono",
        file: "sounds/Celia and Ethan/LRFB/LRFB Mono.wav",
        description: "A male and a female speaking the directions at the capsules using the Rode mono format."
    },
    {
        title: "XY",
        file: "sounds/Celia and Ethan/LRFB/LRFB XY.wav",
        description: "A male and a female speaking the directions at the capsules using the XY array."
    },
];

const directionalLeftSounds = new SoundBoard(DirectionalLeftSoundFiles, "#directional-left");

directionalLeftSounds.renderBoard();

