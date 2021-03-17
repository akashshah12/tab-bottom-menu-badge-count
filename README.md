Tab bottom menu badge count change using react react-native-event-listeners - npm

**Installation Package**

npm install --save react-native-event-listeners

or

yarn add react-native-event-listeners

import { EventRegister } from 'react-native-event-listeners'
 

**Example**

/*  RECEIVER COMPONENT */

class Receiver extends PureComponent {
    constructor(props) {
        super(props)
        
        this.state = {
            data: 'no data',
        }
    }
    
    componentWillMount() {
        this.listener = EventRegister.addEventListener('myCustomEvent', (data) => {
            this.setState({
                data,
            })
        })
    }
    
    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }
    
    render() {
        return <Text>{this.state.data}</Text>
    }
}
 
/* SENDER COMPONENT */

const Sender = (props) => (
    <TouchableHighlight
        onPress={() => {
            EventRegister.emit('myCustomEvent', 'it works!!!')
        })
    ><Text>Send Event</Text></TouchableHighlight>
    
Using above sample example, different files are added to demonstrate how we can achieve badge increment on clicking on the add to cart button on product listing page

**Reference**
https://www.npmjs.com/package/react-native-event-listeners
