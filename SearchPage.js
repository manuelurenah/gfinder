import React, { Component } from 'react';
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';

import Style from './Style';

class SearchPage extends Component {
    render() {
        return (
            <View style={Style.searchContainer}>
                <Text style={Style.textDescription}>
                    Search GitHub profiles!
                </Text>

                <Text style={Style.textDescription}>
                    Search by username or email.
                </Text>

                <View style={Style.flowRight}>
                    <TextInput
                        style={Style.searchInput}
                        placeholder='Search by username or email' />

                    <TouchableHighlight
                        style={Style.button}
                        underlayColor='#99d9f4'>
                            <Text style={Style.buttonText}>Search</Text>
                    </TouchableHighlight>
                </View>
                <Image source={require('./resources/github.png')} style={Style.image} />
            </View>
        );
    }
}

export default SearchPage;
