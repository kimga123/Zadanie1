Vue.component('v-autocompleter', {
  props: ["input"],
  computed: {
    animals() {
      let pattern = new RegExp('^' + this.input, 'i');
      let animals = window.animals.filter(function (word) {
        return pattern.test(word);
      });

      return animals.length > 6 ? animals.slice(0, 5) : animals;
    }
  },
  template:
    `<section v-if="animals.length" class="Content_animalLIST">
      <ul>
        <li v-for="(animal, i) in animals" :key="i">
          <span>{{animal}}</span>
        </li>
      </ul>
    </section>`
})

new Vue({
  el: ".Content",
  data: function () {
    return {
      inputContent: "",
      showAutocompleter: this.inputContent ? true : false
    }
  }
})