import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, CheckBox, ThemeProvider } from 'react-native-elements';
import theme from '../../config/theme';
import { color } from '@rneui/base';

export default function RadioGroup({ options, selectedValue, onValueChange, disabled }) {

    const styles = StyleSheet.create({
        container: {
            marginLeft: 5,
        },
        title: {
            fontFamily: 'Montserrat_400Regular',
            marginBottom: 10,
        },
        listItem: {
            borderWidth: 0,
            padding: 0,
            marginLeft: 0,
            backgroundColor: '',
        },
        checkBox: {
            borderWidth: 0,
            backgroundColor: '',
        },
    });

    return (
            <View style={styles.container} >
                {options.map((option, index) => (
                    <ListItem key={index} bottomDivider containerStyle={styles.listItem}>
                        <CheckBox
                            containerStyle={styles.checkBox}
                            title={option.label}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checked={selectedValue === option.value}
                            onPress={() => onValueChange(option.value)}
                            titleStyle={styles.title}
                            disabled={disabled}
                        />
                    </ListItem>
                ))}
            </View>
    );
}

