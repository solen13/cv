<template>
   <v-card max-width="100%" height="100%"  class="blue">

      <span class="image" >
        <img  src="/profile.jpg"/>
      </span>

     <div>

       <h2 class="line">{{ data.detay.name}}</h2>
       <ul class="pa-1">
         <li class="pa-2" v-for="i in data.detay.contack">
           <a  class="d-flex" :href="i.href">
             <v-icon  class="mr-2">{{i.icon}}</v-icon>
            <h4 class=" white--text"> {{i.name}}</h4>
           </a>
         </li>
       </ul>

       <h2 class="line"> {{data.yetenek.name}}</h2>

       <ul class="lists">
         <li  v-for="item in  data.yetenek.yetkinlik" >

          <h2 class="title">{{item.title}}</h2>

           <div class="pt-1" v-for="i in item.subTitle">
             {{i.name}}
           </div>
         </li>
       </ul>


       <h2 class="line">{{data.diller.title}}</h2>
       <ul class="mt-2 pa-2">
         <li v-for="item in data.diller.subTitle">{{item.name}}</li>
       </ul>

       <h2 class="line">{{data.Online.title}}</h2>
       <ul class="mt-2 pa-2">
         <li class="mt-1" v-for="item in data.Online.subTitle"><span>{{item.name}}</span> <a class="red--text" :href="item.href">{{item.href}}</a></li>
       </ul>

       <h2 class="line">{{data.Sertifikalar.title}}</h2>
       <ul class="mt-2 pa-2" >
         <li v-for="item in data.Sertifikalar.subTitle">{{item.name}}</li>
       </ul>



     </div>
   </v-card>
</template>

<script>

export default {
  name: "silder",
  props:{
    data:{
      type:Object,
      default:()=>{}
    }
  },
  computed:{

  }
}
</script>

<style scoped>
*{
  list-style: none;
}
.image{
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;

}
.image img{
  width: 220px;
  height: 200px;
   object-fit: cover;
  border: 2px solid grey;
  border-radius: 20px;
}
.line{
  padding-bottom: 7px;
  border-bottom: 2px solid black;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;

}
.lists{
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.title{
  border-bottom: 2px dashed white;
  padding-bottom: 3px;

}
</style>
