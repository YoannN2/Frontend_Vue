<template>
  <div>
    <table class="table is-hoverable is-bordered is-striped">
      <thead>
        <th :key="index" v-for="(titre,index) in Object.keys(keys)"> {{ titre }} </th>
      </thead>
      <tbody>
        <tr :id="index+1" :key="index" v-for="(item,index) in items" @click="showMore(item)">
          <td> {{ item.id }}      </td>
          <td> {{ item.name }}    </td>
          <td> {{ item.email }}   </td>
          <td> {{ item.gender }}  </td>
          <td> {{ item.title }}   </td>
        </tr>
      </tbody>
    </table>
    <div class="modal" :class="{'is-active':active}">
      <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card" v-if="valueItem != null && valueItem != undefined">
          <header class="modal-card-head">
            <p class="modal-card-title"> {{ valueItem.name }} </p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
          </header>
          <section class="modal-card-body">
            <h3 > {{ valueItem.name }} </h3>
            <p>Mon email est : {{ valueItem.email }} </p>
            <p>Je suis un : {{ valueItem.gender }} </p>
            <p>Je travaille dans : {{ valueItem.title }} </p>
          </section>
          <footer class="modal-card-foot">
           
          </footer>
    </div>
</div>
  </div>
</template>

<script>

/**
 * 
 * Pour utiliser ce composant insérer en props le tableau de data
 * Mettre la props dans le v-model de md-table
 * l'attribut md-sort sur md-table définit le sort par défault
 * 
 */
export default {
  name: 'TableSearch',
  props:{
      items:{
        type:Array,
      },
  },
  data(){
    return{
      search:"",
      searched:[],
      keys:this.items[0],
      valueItem:null,
      active:false,
    }
  },
  methods: {
    showMore(value){
      if(value != undefined && value != null){
        this.active = true;
        this.valueItem = value;
      }
    },
    closeModal(){
      this.active = false;
    }
  }
}
</script>

<style scoped>
.md-field{
  max-width: 300px;
}
.modal-content,.title{
  color: white;
}
</style>

