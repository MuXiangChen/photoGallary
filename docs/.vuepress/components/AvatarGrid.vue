<template>
    <div class="avatar-grid">
      <div v-for="(avatar, index) in avatars" :key="index" class="avatar">
        <img :src="avatar" :alt="`Avatar ${index + 1}`" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        avatars: [
          // 在这里列出你的头像的图片路径
          'https://img.witploy.cn/Group%20300.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20301.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20303.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20304.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20305.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20306.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20307.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20308.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20309.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20310.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20311.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20312.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20313.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20314.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20315.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20317.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20318.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20319.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20320.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20321.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20322.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20323.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20324.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20325.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20326.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20327.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20328.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20329.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20330.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20331.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20332.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20333.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20334.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20335.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20336.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20337.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20338.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20339.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20340.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20341.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20342.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20347.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20348.png?imageslim/zlevel/5',
          'https://img.witploy.cn/Group%20349.png?imageslim/zlevel/5'
        ],
      };
    },
  };
  </script>
  
  <style>
.avatar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* 自适应排序 */
  gap: 10px; /* 间距为10 */
  justify-items: center; /* 内容居中 */
  align-items: center;
  padding-top: 20px; /* 上边距为20 */
  padding-bottom: 20px; /* 下边距为20 */
}

.avatar img {
  width: 100px; /* 正方形头像 */
  height: 100px;
  object-fit: cover; /* 保持图片比例 */
}
  </style>
  