import React from 'react';


class TodoList extends Component {
  constructor() {
    super()
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    // return the new, updated state based upon the props
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
  }

  // componentWillMount() {

  // }

  ComponentDidMount() {
    // GET the data I need to correctly display
  }

  //ComponentWillReceiveProps(nextProps) {
    //if (nextProps.whatever !== this.props.whatever) {
      // do something important here
    //}
  //}

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  ComponentWillUnmount() {
    // teardownor cleanup your code before your component disappers
    // (E.g. remove event listerners)
  }

  render() {
    return (
      <div>
        Code goes here
      </div>
    )
  }
}

export default App;