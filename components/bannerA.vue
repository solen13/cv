<template>
  <v-card max-width="100%" elevation="0" style="position: relative">
    <div style="width: 100%">


     <language/>
      <a  class="grey pa-2 rounded white--text text-decoration-none" href="/cv.pdf" download>Cv Dowland</a>

       <h1 class="text-center">{{data.header.title}}</h1>
       <h3 class="text-center">{{data.header.subTitle}}</h3>


    <div>
      <v-icon class="icons">{{data.amacim.icon}}</v-icon>

      <span class="line"></span>

      <h4>{{  $i18n.t(data.amacim.title)}}</h4>
      <p class="ml-5"> {{ $i18n.t(data.amacim.content)}}</p>
    </div>

     <div>
       <v-icon class="icons">{{data.projeler.icon}}</v-icon>
       <span class="line"></span>

       <h4>{{$i18n.t(data.projeler.name) }}</h4>
       <ul>
         <li v-for="item in data.projeler.content">

             <div v-if="!item.sorce">
               <h3>{{$i18n.t(item.title)}}</h3>
               <a :href="item.href"> <span class="black--text">Link=></span> {{item.href}}</a>
               <br>
               <span> {{item.subTitle}}</span>
             </div>

              <div v-else>
                <h3>{{$i18n.t(item.title)}}</h3>
               <div v-for="i in item.sorce">
                 <b>{{i.title}} => </b>
                 <a :href="i.href">{{i.href}}</a>
                 <br>
                 <p>{{i.subTitle}}</p>
               </div>

            </div>

         </li>

       </ul>
     </div>

    <div>
      <v-icon class="icons">{{data.egitim.icon}}</v-icon>
      <span class="line"></span>
      <h4>{{$i18n.t(data.egitim.name)}}</h4>
       <ul>
         <li v-for="item in data.egitim.school">

           <h5 v-if="item.schoolName">{{$i18n.t(item.schoolName)}}</h5>
           <h6 v-if="item.department">{{ $i18n.t('bolum') }}: {{$i18n.t(item.department)}}</h6>

           <p>{{  $i18n.t('tarih') }}: {{item.date}}</p>
         </li>
       </ul>
    </div>

    <div>
      <v-icon class="icons">{{data.hobi.icon}}</v-icon>
      <span class="line"></span>

      <h4>{{ $i18n.t(data.hobi.name)}}</h4>
      <ul>
        <li v-for="item in data.hobi.contents">
          <template>{{ $i18n.t(item.name)}}</template>
        </li>
      </ul>
    </div>

    <div>
      <v-icon class="icons">{{data.ekler.icon}}</v-icon>
      <span class="line"></span>

      <h4>{{$i18n.t(data.ekler.name)}}</h4>
      <ul>
        <li v-for="item in data.ekler.content">{{$i18n.t(item)}}</li>
      </ul>
    </div>


    </div>
  </v-card>
</template>

<script>
import Language from "@/components/lang";
export default {
  name: "bannerA",
  components: {Language},
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
