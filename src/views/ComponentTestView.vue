<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-3">Here you can test all components!</h1>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="singleComponent in componentList"
            :key="singleComponent.name"
          >
            <v-expansion-panel-header>
              {{ singleComponent.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <component v-bind:is="singleComponent.template">
                <heading v-if="singleComponent.name === '5 - Slots'">
                  <h1>Hell</h1>
                </heading>
                <p v-if="singleComponent.name === '5 - Slots'">
                  Yeah!
                </p>
              </component>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BasicComponent from "../components/1_Basic_Component";
import ConditionalStatements from "../components/2_Conditional_Statements";
import ListRendered from "../components/3_List_Rendering";
import ComputedProperties from "../components/4_Computed_Property";
import Watchers from "../components/4_Watchers";
import Slots from "../components/5_Slots";
import CustomEvents from "../components/6_Custom_Events_Parent";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";

export default {
  components: {
    Header,
    BasicComponent,
    ConditionalStatements,
    ListRendered,
    ComputedProperties,
    Slots,
    CustomEvents,
    Watchers,
    PokemonList
  },
  data: () => ({
    componentList: [
      { name: "1 - Basic Component", template: BasicComponent },
      { name: "2 - Conditional Statements", template: ConditionalStatements },
      { name: "3 - List Renderer", template: ListRendered },
      { name: "4 - Computed Properties", template: ComputedProperties },
      { name: "4 - Watchers", template: Watchers },
      { name: "5 - Slots", template: Slots },
      { name: "6 - Custom Events", template: CustomEvents },
      { name: "7 - Pokemon List", template: PokemonList }
    ]
  })
};
</script>
