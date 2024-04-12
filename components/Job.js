import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

Row = ({children}) => {
    return(<View style={styles.row}>{children}</View>)
    
}

class Job extends React.Component{
    constructor(props){
        super(props);
        this.job = this.props.job;
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
                    </Text>
                    <Text style={styles.category}>
                        {this.job.category}
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
        flexDirection: "row"
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
    },
    country:{
        flex: 2,
    },
    category:{
        flex: 3,
    },
    skills:{
        flex: 1,
    }

});

export default Job;