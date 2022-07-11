<template>
  <footer>
    <div class="myfooter">
      珠海源牌超硬材料制品有限公司, 版权信息 © 2017-{{ year }} All Rights Reserved
      <a style="text-decoration: none; color:white" href="https://beian.miit.gov.cn/"> 粤ICP备19106474号-1 </a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
