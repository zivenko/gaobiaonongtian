<script setup>
import { ref, shallowRef, onMounted, watch, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import models from '@/model';

const $route = useRoute();
const $router = useRouter();
const back = ref();
const home = ref();
const container = ref();
const titleBackgroundContainer = ref();
let com = ref();

let bg_idx = 0;


function prefixInteger(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}


// 回退
const goBack = () => {
  setTimeout(() => {
    $router.back()
  }, 500);
};

// 回首页
const goHome = () => {
  setTimeout(() => {
    $router.replace({ name: 'home' });
  }, 500);
  
}

// 跳转
const goTo = (btn, e) => {
  if (e && e.type == 'mouseover' && !btn.auto_show) return;

  console.log('goTo', btn, $route.meta, models[btn.parent], btn.parent, e);

  if (btn.id == $route.meta.parent) return;

  console.log('我被点击了...', e);

  sessionStorage.setItem('id', btn.id);

  if(btn.after_click) {
    btn.after_click({router: $router})
  }

  if (btn.entrancable && (!btn.twins || $route.meta.twins != btn.twins)) {
    $router.push({ name: btn.name });
    return;
  }

  console.log(
    'no------goTo',
    btn,
    $route.meta,
    models[btn.parent],
    btn.parent
  );
  // 修改背景
  container.value.style.backgroundImage = 'url(' + new URL(`/src/assets/${models[btn.id].bg}`, import.meta.url).href + ')'

  // 切换路由id
  $route.meta.id = btn.id;
  $route.meta.twins = btn.twins;
  $route.meta.parent = btn.parent;
  $route.meta.quote = btn.quote;
  $route.meta.hide_back = btn.hide_back;
  $route.meta.hide_home = btn.hide_home;
  $route.meta.next_page = btn.next_page;
  $route.meta.exclude = btn.exclude;
  $route.meta.after_click = btn.after_click;
  $route.meta.cpt = btn.cpt;

  // 修改按钮数量
  data.buttons = models.filter(
    (model) =>
      (!btn.exclude || btn.exclude.indexOf(model.id) == -1) && (
      model.parent == btn.id ||
      (model.twins && btn.twins == model.twins) ||
      (btn.quote && btn.quote == model.twins))
  );


  // 装入组件
  com = $route.meta.cpt;

  console.log('no go to--buttons', data.buttons);
};

// 渲染
const render = (route) => {
  console.log('render before', route.meta, container.value, models);
  // 修改背景图
  if (container.value) {
    container.value.style.backgroundImage = 'url(' + new URL(`/src/assets/${models[route.meta.id].bg}`, import.meta.url).href + ')'    

    console.log(
      'models[route.meta.id].bg',
      models[route.meta.id].bg,
      container.value.style.backgroundImage
    );
  }
  // 修改按钮数量
  data.buttons = models.filter(
    (btn) =>
      (!route.meta.exclude ||route.meta.exclude.indexOf(btn.id) == -1) && (
      btn.parent == route.meta.id ||
      (route.meta.quote && route.meta.quote == btn.twins))
  );

  console.log('render--buttons befor', data.buttons);

  // 装入组件
  com = route.meta.cpt;

  console.log('render--buttons', data.buttons);
  console.log('render after', route.meta, container.value);
};

let data = reactive({
  buttons: [],
});

// 挂载方法
onMounted(() => {
  console.log(new Date().getSeconds(), 'mounted', $route);

  let id = sessionStorage.getItem('id');

  if ($route.path == '/') {
    id = 0;
    sessionStorage.setItem('id', id);
  }

  if (id) {
    $route.meta.twins = models[id].twins;
    $route.meta.id = id;
    $route.meta.parent = models[id].parent;
    $route.meta.quote = models[id].quote;
    $route.meta.hide_back = models[id].hide_back;
    $route.meta.hide_home = models[id].hide_home;
    $route.meta.next_page = models[id].next_page;
    $route.meta.exclude = models[id].exclude;
    $route.meta.after_click = models[id].after_click;
    $route.meta.cpt = models[id].cpt;
  }

  render($route);

  // 动效
  // setInterval(() => {
  //    titleBackgroundContainer.value.style.backgroundImage = 'url(' + new URL(`/src/assets/标题框/大标题_${prefixInteger(bg_idx, 5)}.png`, import.meta.url).href; + ')'
  //   bg_idx = (bg_idx + 1) % 125;
  // }, 22)
});

// 监听路由变化
watch(
  () => $route,
  (newRoute, oldRoute) => {
    console.log('route watch', newRoute);
    render(newRoute);
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div ref="container" class="background-container">
    <component :is="com"></component>
    <div ref="titleBackgroundContainer" class="title_background"></div>

    <button
      class="clickable-button"
      v-for="btn in data.buttons"
      :key="btn.id"
      :style="btn.bnt_css"
      @click.stop="goTo(btn)"
      @mouseover="goTo(btn, $event)"
    ></button>

    <button
      ref="home"
      class="clickable-button home fix_btn"
      @click="goHome"
      v-if="$route.meta.id !== 0 && !$route.meta.hide_home"
    ></button>

    
    <button
      ref="back"
      class="clickable-button back fix_btn"
      @click="goBack"
      v-if="$route.meta.id !== 0 && !$route.meta.hide_back"
    ></button>
  </div>
</template>


<script>

</script>

<style scoped>

.title_background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  top: 0%;
  left: 0%;
  z-index: 0;
}

.next {
  width: 6.8%;
  height: 12%;
  bottom: 2.8%;
  left: 10.35%;
}

.home {
  width: 6.8%;
  height: 12%;
  bottom: 5.12%;
  right: 9.5%;
  background-image: url('@/assets/首页.png');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;

}

.back {
  width: 6.8%;
  height: 12%;
  bottom: 5.1%;
  right: 1.79%;
  background-image: url('@/assets/返回.png');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;

}


.fix_btn:active {
  animation-name: btn;
  animation-duration: 500ms;
  animation-iteration-count: unset;
  /* animation-iteration-count: infinite; */
}


@keyframes btn {
  from {
    transform: scale(1);
  } 50% {
    transform: scale(0.7);
  }
  to {
    transform: scale(1);
  }
}
</style>
