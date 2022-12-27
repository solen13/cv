<template>
    <v-row>
      <v-col lg="3"  md="6">
        <silder :data="getData"/>
      </v-col>

      <v-col lg="9" md="6" >
        <div class="mb-2"  >
          <banner-a :data="getData"/>
        </div>
      </v-col>
    </v-row>

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
</style>
