import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeView } from "../const/SafeView";
import { RestaurantCard } from "../component/RestaurantCard";
import { List } from "react-native-paper";

interface Props {
  route: any;
}

export const RestaurantDetails = ({ route }: Props) => {
  const [breakfastExpand, setBreakfastExpand] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeView>
      <RestaurantCard resturants={restaurant} />
      <ScrollView>
        <List.Accordion
          title="breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpand}
          onPress={() => setBreakfastExpand(!breakfastExpand)}
        >
          <List.Item title="Agg" />
          <List.Item title="Sallad" />
        </List.Accordion>
      </ScrollView>
    </SafeView>
  );
};
