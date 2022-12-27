<template>
  <v-card max-width="100%" elevation="0" style="position: relative">
    <div style="width: 100%">


       <v-btn>dil</v-btn>
       <h1 class="text-center">{{data.header.title}}</h1>
       <h3 class="text-center">{{data.header.subTitle}}</h3>


    <div>
      <v-icon class="icons">{{data.amacim.icon}}</v-icon>

      <span class="line"></span>

      <h4>{{data.amacim.name}}</h4>
      <p class="ml-5"> {{data.amacim.content}}</p>
    </div>

     <div>
       <v-icon class="icons">{{data.projeler.icon}}</v-icon>
       <span class="line"></span>

       <h4>{{data.projeler.name}}</h4>
       <ul>
         <li v-for="item in data.projeler.content">

             <div v-if="!item.sorce">
               <h3>{{item.title}}</h3>
               <a :href="item.href"> <span class="black--text">Link=></span> {{item.href}}</a>
               <br>
               <span>Teknoloji=> {{item.subTitle}}</span>
             </div>

              <div v-else>
                <h3>{{item.title}}</h3>
               <div v-for="i in item.sorce">
                 <b>{{i.title}} => </b>
                 <a :href="i.href">{{i.href}}</a>
                 <br>
                 <p>Teknoloji => {{i.subTitle}}</p>
               </div>

            </div>

         </li>

       </ul>
     </div>

    <div>
      <v-icon class="icons">{{data.egitim.icon}}</v-icon>
      <span class="line"></span>
      <h4>{{data.egitim.name}}</h4>
       <ul>
         <li v-for="item in data.egitim.school">
           <h5>{{item.schoolName}}</h5>
           <h6>Bölüm: {{item.department}}</h6>
           <p>Tarih: {{item.date}}</p>

         </li>
       </ul>
    </div>

    <div>
      <v-icon class="icons">{{data.hobi.icon}}</v-icon>
      <span class="line"></span>

      <h4>{{data.hobi.name}}</h4>
      <ul>
        <li v-for="item in data.hobi.content">{{item}}</li>
      </ul>
    </div>

    <div>
      <v-icon class="icons">{{data.ekler.icon}}</v-icon>
      <span class="line"></span>

      <h4>{{data.ekler.name}}</h4>
      <ul>
        <li v-for="item in data.ekler.content">{{item}}</li>
      </ul>
    </div>


    </div>
  </v-card>
</template>

<script>
export default {
  name: "bannerA",
  props:{
    data:{
      type:Object,
      default:()=>{}
    }
  }
}
</script>

<style scoped>
*{
  list-style: none;
}
.icons{
  background-color: #9a9a9b;
  position: absolute;
  z-index: 99;
  color:gold;
  border-radius: 10px;
  font-size: 22px;

}
.line{
  background-color: grey;
  width: 3px;
  position: absolute;
  height: 92%;
  bottom: 0;
  margin-left: 10px;

}
div{
  position: relative;
  margin-top: 10px;
  padding: 10px;
}
div h4{
  margin-left: 24px;
}
div ul{
  margin-left: 18px;
}
</style>
