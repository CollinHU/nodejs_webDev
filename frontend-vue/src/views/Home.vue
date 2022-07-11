<template>
  <b-container class="page-home">
    <div class="startImg">
      <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
        img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
          <template #img>
            <img class="d-block img-fluid w-100" width="1024" height="480"
              src="https://picsum.photos/1024/480/?image=55" alt="image slot">
          </template>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/images/company03.jpg"
              alt="image slot">
          </template>
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/images/company04.jpg"
              alt="image slot">
          </template>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <!--<b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100" width="1024" height="480"
              src="https://picsum.photos/1024/480/?image=55" alt="image slot">
          </template>
        </b-carousel-slide>-->

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <!--
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>-->
      </b-carousel>
    </div>
    <hr>
    <div id="band" class="paragraph">
      <div class="paragraph-title">
        <h2>关于源牌</h2>
      </div>
      <div class="para-des">
        <div>
          珠海源牌超硬材料制品有限公司成立于2013年。其前身珠海市香洲人造金刚石厂为当时国内仅有的三家人造金刚石制造企业之一，一脉相承了德国的制造技术及经验。
        </div>
        <br>
        <div>
          公司自成立伊始，秉承客户至上的原则，为不同客户量身定制玻璃磨削新方案。在公司研发团队以及销售部门的不断努力下，公司产品从起初的单一产品发展到目前涵盖了光伏、厨具、电子、家具、建筑等玻璃磨边用单槽、多槽的中高档金刚石砂轮及用于玻璃深加工的各种金刚石工具。
        </div>
      </div>
    </div>
    <hr>
    <div id="product" class="paragraph">
      <div class="paragraph-title">
        <h2>产品</h2>
      </div>
      <div>
        <b-card-group>
          <b-card border-variant="light">
            <b-card-text>
              <img src="../assets/images/product_01.jpg" width=100% alt="Card image">
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>

          <b-card border-variant="light">
            <b-card-text>
              <img src="../assets/images/product_01.jpg" width=100% alt="Card image">
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-4">
        <b-card-group>
          <b-card border-variant="light">
            <b-card-text>
              <img src="../assets/images/product_01.jpg" width=100% alt="Card image">
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
          <b-card border-variant="light">
            <b-card-text>
              <img src="../assets/images/product_01.jpg" width=100% alt="Card image">
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <hr>
    <div id="contact" class="paragraph">
      <div class="paragraph-title">
        <h2>联系我们</h2>
      </div>
      <div class="para-des">
        <div>
          <i></i><b>地 址: </b> 中国广东省珠海市金湾区红旗镇广发东街250号A区<br>
          <i></i><b>邮政编码: </b>519090<br>
          <i></i><b>电 话: </b> 0756-3618775<br>
          <i></i><b>电子邮箱: </b>174776200@qq.com<br>
        </div>
      </div>
    </div>
    <div id="chartMap" class="paragraph map">
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.slide = slide;
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.slide = slide;
      this.sliding = false
    }
  }
}
</script>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  name: 'home',
  components: {},
  metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content: 'Welcome to Vue.js frontend.'
      }
    ]
  },
  data(){
      return{
        map:null,
        marker:null
     }
 },
  mounted() {
	  this.initMap();
  },
  methods:{
    initMap(){
        AMapLoader.load({
            key:"107b6adf77a49d0b6a62305c632d263d",             // 申请好的Web端开发者Key，首次调用 load 时必填
            version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            //plugins:['scale'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap)=>{
            var position = new AMap.LngLat(113.29523,22.108679);
            this.map = new AMap.Map("chartMap", {
                      resizeEnable: true,
                      center: [113.29523,22.108679],
                      zoom: 13
                        });
            this.marker = new AMap.Marker({
            icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
            position: [113.29523,22.108679],
            offset: new AMap.Pixel(-13, -34)
            });
            this.marker.setLabel({
                direction:'right',
                offset: new AMap.Pixel(5, -7),  //设置文本标注偏移量
                content: "<div class='info'>源牌</div>", //设置文本标注内容
            });
            this.marker.setMap(this.map);
        }).catch(e=>{
            console.log(e);
        })
    },
  }
};
</script>
