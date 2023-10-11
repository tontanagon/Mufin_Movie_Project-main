<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import headermuf from '../views/headermuf.vue'
import Footer from '../components/footer.vue'
import { movie } from '../store/movie'
const list = ref(movie())


const categories = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 
  'Documentary', 'Fantasy', 'Horror', 'Romance', 'SciFi', 'Thriller'
];


const categoryState = Object.fromEntries(
    categories.map(category => [category, categories.includes(category)])
  );
const listcategory = ref([]);

const toggleCategory = (category) => {
  if (categoryState[category]) {
    listcategory.value = listcategory.value.filter(item => item !== category);
    console.log(categoryState)
  } else {
    listcategory.value.push(category);
    console.log(categoryState)
  }
};


</script>

<template>
  <RouterView></RouterView>
  <div class="header">
    <headermuf ></headermuf>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="row" style=" position: sticky; top: 100px;">
        <div class="col-2 text-center">
    <div class="main m-3 p-3 gx-1 justify-content-center">
      <div class="checkboxes">
        <label
          v-for="category in categories"
          :key="category"
          class="btn btn-lg "
          :class="{
            'btn-light': categoryState[category],
            'btn-dark': !categoryState[category]
          }"
        >
          <input
            type="checkbox"
            :id="category"
            v-model="categoryState[category]"
            @change="toggleCategory(category)"
            class="visually-hidden"
          />
          {{ category }}
        </label>
      </div>
      <div style="margin-top:185px ;"></div>
    </div>
  </div>
      </div>
    </div>
    <div class="col-10">
      <div class="row ">
        <!--<div class="col text-center m-5 fs-4" >
      <div v-for="category in listcategory" :key="category" style="display: inline;">
        {{ category }} / 
      </div>
    </div>-->
  <div class="" v-for="(i, index) in list.listmovie" :key="index" >
    <div v-for="(m, index) in listcategory" :key="index"> 
      <div  v-if="i.type == m">
        <div class="card h-100 m-5 shadow" >
          <img :src="i.img" class="card-img-top m-3 rounded-4 mx-auto" alt="..." style="max-width: 500px;">
          <div class="card-body">
            <div class="card-text">{{ i.year }}</div>
            <h5 class="card-title">{{ i.name }}</h5>
            <p class="card-text overflow-auto mb-5">
              {{ i.type }} <br>
              IMDb : {{ i.imdb }}<i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
              Time: {{ i.time }} <br>
              Director: {{ i.director }} 
            </p>
          </div>
          <a href="#" class="btn btn-dark position-center bottom-0 m-3 rounded-pill mx-auto">Add to cart</a>
        </div>
      </div>
    </div>
  </div>

</div>
    </div>





</div>
  <Footer></Footer>
</template>

<style scoped>
.light{
  color: black;
}
.dark{
  color: white;
  background-color: black;
}
</style>
