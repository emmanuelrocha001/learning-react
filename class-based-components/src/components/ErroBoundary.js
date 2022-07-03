import { Component } from "react";
import UsersContext from "../store/users-context";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (!this.state.hasError) {
      return this.props.children;
    } else {
      return <p>HIIII</p>;
    }
  }
}

export default ErrorBoundary;
