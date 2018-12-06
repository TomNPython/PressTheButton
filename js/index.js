class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Press The Button!',
      subtitle: 'Before the timer runs out...',
      display: 20,
      isOn: false,
      warning: "Are you ready?"
    };
  }
  
  buzzer(clock) {
    if (clock === 0) {
      this.countdownSound.play()
    }
}

  startSession = () => {
    this.setState({
      isOn: true,
    })
    setInterval(this.sessionTimer, 1000);
  };

  sessionTimer = () => {
    if (this.state.display > 0 && this.state.isOn) {
      this.setState({
        display: this.state.display - 1
      });
      if (this.state.display < 16) {
        this.setState({
          warning: "Not long left!"
        });
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "#e8c5c5";
      }
      if (this.state.display < 11) {
        this.setState({
          warning: "Quick!"
        });
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "#dd9494";
      }
      if (this.state.display < 6) {
        this.setState({
          warning: "Click it now!"
        });
        document.getElementsByTagName("BODY")[0].style.backgroundColor =
          "#e06464";
      }
      if (this.state.display === 0) {
        clearInterval(this.sessionTimer)
        this.setState({
          warning: "BOOM!",
          title: 'Too Late!',
          subtitle: 'The timer ran out...'
        });
        document.getElementsByTagName("BODY")[0].style.backgroundColor =
          "#e20000";
        document.getElementsByTagName("BODY")[0].style.color = "white";
        this.buzzer(this.state.display)
      }
    }
  };

  resetSession = () => {
    this.setState({
      title: 'Press The Button!',
      subtitle: 'Before the timer runs out...',
      display: 20,
      warning: "Are you ready? \(It's faster now!)",
      isOn: false
    });
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "#ede1e1";
    document.getElementsByTagName("BODY")[0].style.color = "black";
    clearInterval(this.sessionTimer)
  };

  render() {
    return (
      <div class="container">
        <h1>{this.state.title}</h1>
        <h3>{this.state.subtitle}</h3>
        <div class='time'>{this.state.display}</div>
        <button onClick={this.startSession}>Start</button>
        <button onClick={this.resetSession}>Reset</button>
        <div class='ready-message'>{this.state.warning}</div>
<audio id='alarm' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' ref={(audio) => {this.countdownSound = audio }} />
      </div>
    );
  }
}

ReactDOM.render(<Countdown />, document.getElementById("app"));

