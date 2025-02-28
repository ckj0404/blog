// customLang.js
export default function(hljs) {
  const VUE_TAGS = 'template|script|style'; // Vue 标准标签
  const MINIPROGRAM_TAGS = 'view|scroll-view|swiper|swiper-item|image|text|navigator'; // 小程序标签
  const ALL_TAGS = `${VUE_TAGS}|${MINIPROGRAM_TAGS}`; // 合并所有标签

  return {
    name: 'vue-with-miniprogram',
    aliases: ['vue'],
    contains: [
      {
        begin: '<',
        end: '>',
        contains: [
          {
            className: 'name',
            begin: `\\b(${ALL_TAGS})\\b`, // 匹配所有标签
          },
          hljs.QUOTE_STRING_MODE, // 支持属性值
          hljs.APOS_STRING_MODE, // 支持属性值
        ],
      },
      hljs.C_LINE_COMMENT_MODE, // 支持注释
      hljs.C_BLOCK_COMMENT_MODE, // 支持注释
    ],
  };
}
