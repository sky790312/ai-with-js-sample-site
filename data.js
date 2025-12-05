window.siteData = {
  // 1. 個人資訊
  name: '王小明',
  job: '數位行銷經理 | 業餘攝影師',
  bio: '熱愛透過數據說話，也喜歡用鏡頭捕捉生活。目前專注於協助品牌進行數位轉型。下班後不是在健身房，就是在修圖的路上。',
  avatar:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',

  // ⭐ 新增功能：個人標籤/技能牆 (這會顯示在 Bio 下方)
  tags: ['#數位行銷', '#SEO優化', '#街頭攝影', '#貓奴', '#咖啡成癮'],

  // 2. 連結清單
  links: [
    {
      title: '我的 Instagram 作品集',
      url: 'https://www.instagram.com/',
      icon: 'fab fa-instagram',
    },
    {
      title: 'LinkedIn 履歷',
      url: 'https://www.linkedin.com/',
      icon: 'fab fa-linkedin',
    },
    {
      title: '個人部落格 Medium',
      url: 'https://medium.com/',
      icon: 'fab fa-medium',
    },
    {
      title: '合作邀約 Email',
      url: 'mailto:test@example.com',
      icon: 'fas fa-envelope',
    },
  ],

  // ⭐ 新增功能：頁尾文字
  footer: '© 2025 Wang Hsiao Ming. All Rights Reserved.',

  // 3. 網站顏色設定
  theme: {
    backgroundColor: '#f3f4f6',
    cardColor: '#ffffff',
    textColor: '#374151',
    accentColor: '#4f46e5', // 藍紫色
  },
}
