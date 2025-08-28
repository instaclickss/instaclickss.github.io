function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

class CCTVRecorder {

    constructor() {
        this.tape = []
        this.recording = false;
        this.delay;
        this.mouse = false;
        this.sessionId = this.genSessionId();
    }

    genSessionId() {
        var chars = "0123456789";
        var length = 10
        var id = "";
        for (let i = 0; i < length; i++) {
            id += chars[rnd(0, chars.length-1)];
        }
        return id;
    }

    getTime() {
        var now = new Date();

        var options = {
            timeZone: "Europe/Copenhagen",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false
        };

        return now.toLocaleString("en-US", options);
    }

    start() {
        if (this.recording) return;
        this.recording = true;

        this.tape.push([this.sessionId, location.href, window.innerWidth, window.innerHeight, this.getTime()]);
        this.tape.push([3, window.scrollX, window.scrollY]);
        if (this.mouse) {
            this.tape.push([1, this.mouse.x, this.mouse.y]);
        }
        this.delay = Date.now();

        var handleDelay = () => {
            var delay = Date.now() - this.delay;
            this.tape.push([0, delay]);
            this.delay = Date.now();
        }

        this.onMouseMove = (mouse) => {
            this.mouse = { x: mouse.x, y: mouse.y };
            if (this.recording) {
                handleDelay();
                this.tape.push([1, mouse.x, mouse.y]);
            }
        };

        this.onClick = (mouse) => {
            this.mouse = { x: mouse.x, y: mouse.y };
            if (this.recording) {
                handleDelay();
                this.tape.push([2, mouse.x, mouse.y]);
            }
        };

        this.onScroll = () => {
            if (this.recording) {
                handleDelay();
                this.tape.push([3, window.scrollX, window.scrollY]);
            }
        };

        this.onResize = () => {
            if (this.recording) {
                handleDelay();
                this.tape.push([4, window.innerWidth, window.innerHeight]);
            }
        };

        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("click", this.onClick);
        window.addEventListener("scroll", this.onScroll);
        window.addEventListener("resize", this.onResize);
    }

    stop() {
        this.tape.push([0, Date.now() - this.delay]);
        this.recording = false;
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("click", this.onClick);
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onResize);
    }
    
}