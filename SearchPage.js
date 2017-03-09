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
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'hackstreetboy',
            isLoading: false,
        };
    }

    executeQuery(query) {
        console.log(query);
        this.setState({ isLoading: true });
    }

    onSearchTextChanged(event) {
        this.setState({ searchString: event.nativeEvent.text });
    }

    onSearchPressed() {
        const query = urlForQueryAndPage('github_user', this.state.searchString, 1);
        this.executeQuery(query);
    }

    render() {
        var progressIndicator = this.state.isLoading ?
            ( <ActivityIndicator size='large'/> ) :
            ( <View/> );
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
                        value={this.state.searchString}
                        onChange={this.onSearchTextChanged.bind(this)}
                        placeholder='Search by username or email' />

                    <TouchableHighlight
                        style={Style.button}
                        underlayColor='#99d9f4'
                        onPress={this.onSearchPressed.bind(this)}>
                            <Text style={Style.buttonText}>Search</Text>
                    </TouchableHighlight>
                </View>
                <Image source={require('./resources/github.png')} style={Style.image} />
                {progressIndicator}
            </View>
        );
    }
}

export default SearchPage;
