import React, { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went horribly wrong. Just run!!!</h1>;
    }

    return this.props.children;
  }
}
