import * as React from 'react';

export class App extends React.Component {
  sum(a:number, b:number) :number {
    return a + b;
  }

  render() {
    return (
      <header className="App-header">
        <p>
          Your Sum is: { this.sum(2, 3) }
        </p>
      </header>
    );
  }
}