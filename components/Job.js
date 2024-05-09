import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {flags} from '../constants';

Row = ({children}) => {
    return(<View style={styles.row}>{children}</View>)
    
}

class Job extends React.Component{
    constructor(props){
        super(props);
        this.job = this.props.job;
        this.flag = flags[this.props.job.country]
    }

    render = () => {
        return (
            <View style={styles.container} job={this.job}>
                <Row>
                    <Text style={styles.title}>
                        {this.job.title}
                    </Text>
                </Row>
                <Row>
                    <Text style={styles.content}>
                        {this.job.content}
                    </Text>
                </Row>
                <Row>
                    <Text style={styles.pay_range}>
                        {this.job.job_type}{"\n"}
                        {this.job.pay_range}
                    </Text>
                    <Text style={styles.country}>
                        {this.job.country}
                        {this.flag}
                    </Text>
                    <Text style={styles.category}>
                        {this.job.category}
                    </Text>
                </Row>
                <Row>
                    <Text>
                        Skills
                    </Text>
                </Row>
                <Row>
                    <Text style={styles.skills}>
                        {this.job.skills}
                    </Text>
                </Row>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 4,
        marginHorizontal: "auto",
        width: "auto"
    },
    row:{
        flexDirection: "row",
        padding: 15,
    },
    title:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    content:{
        flex: 1,
        justifyContent: "flex-start"
    },
    pay_range:{
        flex: 1,
        flexBasis: 100,
        padding: 5,
        borderWidth: 1,
        textAlign: "center"
    },
    country:{
        flex: 2,
        borderWidth: 1,
        textAlign: "center",
        flexBasis: 100,
    },
    category:{
        flex: 3,
        borderWidth: 1,
        textAlign: "center",
        flexBasis: 100
    },
    skills:{
        flex: 1,
    }

});

export default Job;