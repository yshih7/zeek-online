export default class GameDriver
{
    game;
    lastTimestamp = 0;
    eventTarget = null;
    gameView = null;
    running = false;
    animFrame = 0;

    constructor(game)
    {
        this.game = game;
        this.game.build();
    }

    reset()
    {
        this.game.stop();
        this.game.build();
    }

    _handleKeypress = ev =>
    {
        if (!this.running) return;
        ev.preventDefault();

        switch (ev.key)
        {
            case "ArrowUp":
                this.game.input({type: "MOVE", dir: "UP"});
                break;
            case "ArrowDown":
                this.game.input({type: "MOVE", dir: "DOWN"});
                break;
            case "ArrowLeft":
                this.game.input({type: "MOVE", dir: "LEFT"});
                break;
            case "ArrowRight":
                this.game.input({type: "MOVE", dir: "RIGHT"});
                break;
        }
    };

    connect(eventTarget)
    {
        this.eventTarget = eventTarget;
        this.eventTarget.addEventListener("keydown", this._handleKeypress, false);

        console.log(this.eventTarget);
        console.log(this.eventTarget.au);
        if (this.eventTarget.au && this.eventTarget.au["game-view"])
        {
            this.gameView = this.eventTarget.au["game-view"].viewModel;
        }
    }

    disconnect()
    {
        this.eventTarget.removeEventListener("keydown", this._handleKeypress, false);
        this.eventTarget = null;
        this.gameView = null;
    }

    _update = timestamp =>
    {
        if (this.lastTimestamp)
        {
            this.game.update(timestamp - this.lastTimestamp);
            if (this.gameView)
            {
                this.gameView.render();
            }
        }
        this.lastTimestamp = timestamp;

        if (this.game.won || !this.game.player)
        {
            this.stop();
            return;
        }

        this.animFrame = requestAnimationFrame(this._update);
    };

    start()
    {
        this.running = true;
        this.animFrame = requestAnimationFrame(this._update);
    }

    stop()
    {
        this.running = false;
        if (this.animFrame)
        {
            cancelAnimationFrame(this.animFrame);
        }
        this.animFrame = 0;
        this.lastTimestamp = 0;
    }
}
