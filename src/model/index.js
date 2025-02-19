import Banner from "@/components/Banner.vue";
import DeviceList from "@/components/DeviceList.vue";

export default [
  {
    id: 0,
    name: 'home',
    path: '/',
    cpt: Banner,
    bg: '高标准农田-1首页.jpg',
  },
  {
    id: 1,
    parent: -1, // 不使用
    exclude: [3, 26, 27],
    name: 'scence',
    path: '/',
    bg: '高标准农田-2点击场景组建后.jpg',
    hide_back: true,
    hide_home: true,
    bnt_css: {
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
  },
  {
    id: 2,
    parent: -1,
    twins: -2,
    quote: 2,
    name: 'list',
    path: '/list',
    entrancable: true,
    cpt: DeviceList,
    bg: '高标准农田-4设备清单.png',
    bnt_css: {
      width: '9.3%',
      height: '12%',
      top: '41.9%',
      right: '0%',
    },
  },
  {
    id: 3,
    parent: -1, // 不使用
    name: 'monitor',
    entrancable: true,
    path: '/list/monitor',
    bg: '高标准农田-4设备清单.jpg',
    bnt_css: {
      width: '8%',
      height: '3%',
      top: '47.2%',
      right: '0%',
    },
  },
  {
    id: 4,
    parent: -1,
    twins: -2,
    quote: 2,
    name: 'display',
    path: '/display',
    entrancable: true,
    bg: '高标准农田-5点击案例展示后.png',
    bnt_css: {
      width: '9.3%',
      height: '10%',
      top: '54.9%',
      right: '0%',
    },
  },
  {
    id: 5,
    parent: 0,
    twins: 5,
    name: 'highStands',
    path: '/highStands',
    entrancable: true,
    bg: '高标准农田-8项目进度管理.jpg',
    bnt_css: {
      width: '20%',
      height: '8%',
      top: '33.9%',
      right: '25.9%',
    },
  },
  {
    id: 6,
    parent: 0,
    twins: 5,
    name: 'plants',
    path: '/plants',
    entrancable: true,
    bg: '高标准农田-11作物种植.png',
    bnt_css: {
      width: '13%',
      height: '8%',
      top: '33.9%',
      left: '28.9%',
    },
  },
  {
    id: 7,
    parent: 0,
    twins: 5,
    quote: 22,
    name: 'mobileAPP',
    path: '/mobileAPP',
    entrancable: true,
    bg: '高标准农田-19移动端app.jpg',
    bnt_css: {
      width: '13%',
      height: '8%',
      top: '57.9%',
      left: '52%',
    },
  },
  {
    id: 8,
    parent: 7,
    name: 'expert',
    path: '/mobileAPP/expert',
    bg: '高标准农田-20移动端app.jpg',
    entrancable: true,
    bnt_css: {
      width: '3.5%',
      height: '6.6%',
      top: '43.9%',
      right: '24%',
    },
  },
  {
    id: 9,
    parent: 5,
    twins: 10,
    exclude: [10, 11, 12, 24],
    entrancable: true,
    name: 'visualise',
    path: '/highStands/visualise',
    entrancable: true,
    bg: '高标准农田-7可视化管理中心.jpg',
    bnt_css: {
      width: '9%',
      height: '17%',
      top: '42.5%',
      right: '0%',
    },
  },
  {
    id: 10,
    parent: 5,
    twins: 10,
    quote: 10,
    name: 'project',
    path: '/highStands/project',
    bg: '高标准农田-8项目进度管理.jpg',
    bnt_css: {
      width: '5%',
      height: '29%',
      bottom: '9.5%',
      left: '28.8%',
    },
  },
  {
    id: 11,
    parent: 5,
    twins: 10,
    quote: 10,
    name: 'field',
    path: '/highStands/field',
    bg: '高标准农田-9田长制管理.jpg',
    bnt_css: {
      width: '5%',
      height: '29%',
      bottom: '9.5%',
      left: '42.5%',  
    },
  },
  {
    id: 12,
    parent: 5,
    name: 'ground',
    twins: 10,
    quote: 10,
    path: '/highStands/ground',
    bg: '高标准农田-10土地大模型.jpg',
    bnt_css: {
      width: '5%',
      height: '29%',
      bottom: '9.5%',
      left: '70.5%',
    },
  },
  {
    id: 13,
    parent: 6,
    name: 'farming',
    path: '/plants/farming',
    entrancable: true,
    bg: '高标准农田-12农事综合.png',
    bnt_css: {
      width: '5%',
      height: '29%',
      top: '28.9%',
      left: '18.5%',
    },
  },
  {
    id: 14,
    parent: 6,
    name: 'irrigate',
    path: '/plants/irrigate',
    entrancable: true,
    bg: '高标准农田-15智慧灌溉.jpg',
    bnt_css: {
      width: '5%',
      height: '29%',
      top: '36.8%',
      left: '31.5%',
    },
  },
  {
    id: 15,
    parent: 6,
    name: 'bigModel',
    path: '/plants/bigModel',
    entrancable: true,
    bg: '高标准农田-17种植大模型.jpg',
    bnt_css: {
      width: '5%',
      height: '29%',
      top: '30.3%',
      left: '44.3%',
    },
  },
  {
    id: 16,
    parent: 6,
    name: 'sale',
    path: '/plants/sale',
    entrancable: true,
    bg: '高标准农田-18产品销售.jpg',
    bnt_css: {
      width: '5%',
      height: '29%',
      top: '37.9%',
      left: '57.1%',
    },
  },
  {
    id: 17,
    parent: 6,
    name: 'watch',
    path: '/plants/watch',
    entrancable: true,
    bg: '高标准农田-16植保监测.jpg',
    bnt_css: {
      width: '5%',
      height: '29%',
      top: '29.1%',
      left: '70%',
    },
  },
  {
    id: 18,
    parent: 8,
    twins: 18,
    quote: 22,
    name: 'service',
    path: '/mobileAPP/expert/service',
    bg: '高标准农田-21种植指导.jpg',
    bnt_css: {
      width: '13%',
      height: '8%',
      top: '32.9%',
      left: '26%',
    },
  },
  {
    id: 19,
    parent: 8,
    twins: 18,
    quote: 22,
    name: 'expert22',
    path: '/mobileAPP/expert/expert22',
    bg: '高标准农田-22专家问诊.jpg',
    bnt_css: {
      width: '13%',
      height: '8%',
      top: '41.9%',
      left: '26%',
    },
  },
  {
    id: 20,
    parent: 8,
    twins: 18,
    quote: 22,
    name: 'encyclopedia',
    path: '/mobileAPP/expert/encyclopedia',
    bg: '高标准农田-23作物百科.jpg',
    bnt_css: {
      width: '13%',
      height: '8%',
      top: '50.3%',
      left: '26%',
    },
  },
  {
    id: 21,
    parent: 8,
    twins: 18,
    name: 'society',
    quote: 22,
    path: '/mobileAPP/expert/society',
    bg: '高标准农田-24社会化服务.jpg',
    bnt_css: {
      width: '13%',
      height: '8%',
      top: '59.3%',
      left: '26%',
    },
  },
  {
    id: 22,
    parent: 8,
    twins: 22,
    name: 'mobilesolution',
    path: '/mobileAPP/expert/mobilesolution',
    entrancable: true,
    bg: '高标准农田-25解决方案.jpg',
    bnt_css: {
      width: '9.3%',
      height: '18%',
      top: '41.9%',
      right: '0%',
    },
  },
  {
    id: 23,
    parent: 13,
    name: 'farmingSolution1',
    path: '/plants/farming/farmingSolution',
    entrancable: true,
    bg: '高标准农田-13解决方案.png',
    bnt_css: {
      width: '9.3%',
      height: '18%',
      top: '42.5%',
      right: '0%',
    },
  },

  {
    id: 24,
    parent: 5,
    twins: 10,
    quote: 10,
    name: 'watchManager',
    path: '/highStands/watchManager',
    bg: '高标准农田-26遥感监测管理.jpg',
    bnt_css: {
      width: '5%',
      height: '29%',
      bottom: '9.5%',
      left: '56.5%',
    },
  },
  {
    id: 25,
    parent: 0,
    twins: 2,
    quote: 2,
    name: 'bg',
    path: '/bg',
    entrancable: true,
    bg: '2级-高标准农田-背景概述.jpg',
    bnt_css: {
      width: '7.3%',
      height: '9%',
      top: '27.9%',
      right: '0%',
    },
  },
  {
    id: 26,
    parent: 0,
    twins: 2,
    quote: 2,
    name: 'solution',
    path: '/solution',
    entrancable: true,
    bg: '2级-高标准农田-解决方案.jpg',
    bnt_css: {
      width: '7.3%',
      height: '9%',
      top: '36.9%',
      right: '0%',
    },
  },
  {
    id: 27,
    parent: 0,
    twins: 2,
    quote: 2,
    name: 'advance',
    path: '/advance',
    entrancable: true,
    bg: '2级-高标准农田-业务优势.jpg',
    bnt_css: {
      width: '7.3%',
      height: '9%',
      top: '45.9%',
      right: '0%',
    },
  },
  {
    id: 28,
    parent: 0,
    twins: 2,
    quote: 2,
    name: 'case1',
    path: '/case1',
    entrancable: true,
    bg: '2级-高标准农田-案例展示.jpg',
    bnt_css: {
      width: '7.3%',
      height: '9%',
      top: '54.9%',
      right: '0%',
    },
  },
  {
    id: 29,
    parent: 0,
    twins: 2,
    quote: 2,
    name: 'mode',
    path: '/mode',
    entrancable: true,
    bg: '2级-高标准农田-商业模式.jpg',
    bnt_css: {
      width: '7.3%',
      height: '9%',
      top: '63.9%',
      right: '0%',
    },
  },

  // {
  //   id: 24,
  //   parent: 23,
  //   twins: 24,
  //   name: 'farmingSolution2',
  //   path: '/plants/farming/farmingSolution2',
  //   bg: '高标准农田-13解决方案.jpg',
  //   bnt_css: {
  //     width: '13.5%',
  //     height: '7%',
  //     bottom: '9.9%',
  //     left: '32.5%',
  //   },
  // },
  // {
  //   id: 25,
  //   parent: 23,
  //   twins: 24,
  //   name: 'farmingCase',
  //   path: '/plants/farming/farmingCase',
  //   bg: '高标准农田-14案例展示.jpg',
  //   bnt_css: {
  //     width: '13.5%',
  //     height: '7%',
  //     bottom: '9.9%',
  //     left: '53.5%',
  //   },
  // },

  // {
  //   id: 26,
  //   parent: 2,
  //   quote: 5,
  //   twins: 5,
  //   exclude: [2, 3, 4, 5, 6, 7, 26],
  //   name: 'display2',
  //   path: '/display2',
  //   entrancable: true,
  //   bg: '高标准农田-5点击案例展示后.jpg',
  //   bnt_css: {
  //     width: '9.3%',
  //     height: '8%',
  //     top: '61.9%',
  //     right: '0%',
  //   },
  // },

  // {
  //   id: 27,
  //   parent: 4,
  //   twins: 5,
  //   quote: 5,
  //   name: 'listBk',
  //   path: '/',
  //   bg: '高标准农田-3点击设备总清单后.jpg',
  //   hide_back: true,
  //   hide_home: true,
  //   exclude: [2, 4, 27], 
  //   bnt_css: {
  //     width: '9.3%',
  //     height: '8%',
  //     top: '38.4%',
  //     right: '0%',
  //   },
  //   after_click: ({router}) => {
  //     router.replace({ name: 'listBk' });
  //   }
  // },


  // {
  //   id: 1,
  //   parent: 17,
  //   // twins: 3, 老大的id
  //   // quote:0, 引用某个父类的id
  //   name: 'production',
  //   path: '/production',
  //   bg: '智能风控-7生产经营状况监控1.jpg',
  //   entrancable: true,
  //   auto_show: false,
  //   bnt_css: {
  //     width: '680px',
  //     height: '650px',
  //     top: '32.6%',
  //     left: '26.15%',
  //   },
  // },
];
