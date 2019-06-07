import * as React from 'react';
import Quinto from 'quinto';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false
    };
    this.node = React.createRef();
    this.handlePause = this.handlePause.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { paused } = this.state;

    return (
      <React.Fragment>
        <Quinto
          ref={this.node}
          debounce={500}
          threshold={13}
          paused={paused}
          onMouseOver={this.handleClick}
          onClick={this.handleClick}
        />
        <div>
          <div data-q={JSON.stringify({ id: 'text' })}>
            <div>
              <div>
                <div>Text</div>
              </div>
            </div>
          </div>
          <div>
            <div data-root="true">data root</div>
            <div id="root" />
          </div>
          <div data-q={JSON.stringify({ root: true })}>
            <div id="root">root2</div>
          </div>
          <div data-q={JSON.stringify({ root: true })}>
            <div>
              <div>
                <div>
                  <div id="root">root</div>
                </div>
              </div>
            </div>
          </div>
          <button id="id-dupe" type="button" onClick={this.handlePause}>
            {paused ? 'Un-pause' : 'Pause'}
          </button>
          App{' '}
          <div id="id-dupe" data-q={JSON.stringify({ util: false })}>
            test
          </div>
          <div data-q={JSON.stringify({ util: true })}>
            <div>
              <div>
                <h1 id="id-unique">Test</h1>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  handlePause() {
    this.setState({
      paused: !this.state.paused
    });
  }

  handleClick(data) {
    console.log('handleClick', data);

    if (this.node.current) {
      console.log(this.node.current.state);
    }
  }
}

export default App;
