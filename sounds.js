
const PLAY = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
`;

const PAUSE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
</svg>
`


class Button {
    constructor(clickCallback, symbol) {
        this.button = $(document.createElement("button"));

        this.button.addClass('btn btn-primary audio');

        this.button.html(symbol);

        this.button.on('click', (event) => {
            clickCallback(event);
        });
    }


    element() {
        return this.button;
    }
}

class Sound {
    constructor(name, file, description, board) {
        this.sound = new Audio(file);

        this.board = board;

        this.isPlaying = false;

        this.playButton = new Button((event) => {
            if (this.isPlaying === false) {
                this.play($(event.currentTarget));
            }
            else {
                this.pause($(event.currentTarget));
            }
        }, PLAY);

        this.description = description;

        this.name = name;
    }

    nameElement() {
        return `<h4>${this.name}</h4>`;
    }

    descriptionElement() {
        return `<span class='description'>${this.description}</span>`;
    }

    playButtonElement() {
        return this.playButton.element();
    }

    play(ele) {
        this.sound.play();
        this.isPlaying = true;
        ele.html(PAUSE);
    }

    pause(ele) {
        this.sound.pause();
        this.isPlaying = false;
        ele.html(PLAY);
    }
}


class SoundBoard {
    constructor(SoundFiles, id) {
        this.id = id;
        this.sounds = {};

        SoundFiles.forEach((sound) => {
            this.sounds[sound.file] = new Sound(sound.title, sound.file, sound.description, this);
        });
    }

    pauseAll() {
        var table = $(this.id);
        table.children().each(row => {
            console.log(row);
        });
    }

    renderBoard() {
        const table = $(this.id);
        table.children().empty();
        
        var soundRow = $(document.createElement('tr'));

        Object.keys(this.sounds).forEach((file) => {
            const sound = this.sounds[file];

            const name = $(document.createElement('td'));
            name.width('17%');
            name.css('vertical-align', 'middle');
            name.append(sound.nameElement());

            const playButton = $(document.createElement('td'));
            playButton.width('20px');
            playButton.css('vertical-align', 'middle');
            playButton.append(sound.playButtonElement());

            const description = $(document.createElement('td'));
            description.css('vertical-align', 'middle');
            description.append(sound.descriptionElement())

            soundRow.append(name);
            soundRow.append(playButton);
            soundRow.append(description);
            
            table.append(soundRow);
            soundRow = $(document.createElement('tr'));
        });
    }
}

