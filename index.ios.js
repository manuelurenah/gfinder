import React, { Component } from 'react';
import {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Style from './Style';
import SearchPage from './SearchPage';

class gfinderApp extends Component {
    render() {
        return (
            <NavigatorIOS
                style={Style.rootContainer}
                initialRoute={{
                    title: 'GitHub Finder',
                    component: SearchPage,
                }} />
        );
    }
}

AppRegistry.registerComponent('gfinder', () => gfinderApp);
