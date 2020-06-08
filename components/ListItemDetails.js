import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ListItemDetails = (props) => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: ['Score', 'Long', 'Short', 'Left', 'Right'],
    datasets: [{ data: props.data }],
  };

  return (
    <View>
      <Text>Trends: </Text>
      <BarChart
        style={styles.graphStyle}
        data={data}
        width={Dimensions.get("window").width*0.9}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  graphStyle: { borderRadius: 10, marginVertical: 15 },
});

export default ListItemDetails;
