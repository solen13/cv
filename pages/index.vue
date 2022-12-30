<template>
  <div class="contener">

    <v-row style="width:100%">
      <v-col  lg="3"  md="6">
        <silder  :data="getData"/>
      </v-col>

      <v-col lg="9" md="6" >
          <banner-a :data="getData"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import silder from '@/components/silder'
import bannerA from '@/components/bannerA'
import api from "~/constant/api";
export default {
  name: 'IndexPage',
  components:{silder,bannerA},


  computed:{
    getData(){
      return api
    }
  }
}
</script>
<style scoped>
.banner-content{
  display: flex;

}
.contener{
  width: 100%;

}
</style>
