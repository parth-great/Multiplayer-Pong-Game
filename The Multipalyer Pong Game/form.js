class Form
{
    constructor()
    {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = creteButton('Reset');
    }

    hide()
    {
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display()
    {
        this.title.html("The Pong Game");
        this.title.position(displayWidth/2,20);
        this.title.style('font-size','70px');
        this.title.style('color','Black')
        
        this.input.position(displayWidth/2,displayHeight/2-100);
        this.input.style('width','200px')
        this.input.style('height','20px')
        this.input.style('background','lavendar')

        this.button.position(displayWidth/2,displayHeight/2-50);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.reset.position(displayWidth-100,50);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });
    }
}