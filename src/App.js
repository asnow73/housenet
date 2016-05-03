import React from 'react';
import Popup from './popup/popup';

class App extends React.Component {
    render() {
        return (
            <div>
                <a href="#">Open popup</a>
                <Popup></Popup>
            </div>
        );
    }
}

export default App;