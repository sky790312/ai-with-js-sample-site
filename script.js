document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.siteData === 'undefined') {
    document.getElementById('app').style.display = 'none'
    document.getElementById('error-message').style.display = 'block'
    return
  }

  const data = window.siteData
  const root = document.documentElement

  // 設定顏色
  root.style.setProperty('--bg-color', data.theme.backgroundColor)
  root.style.setProperty('--card-color', data.theme.cardColor)
  root.style.setProperty('--text-color', data.theme.textColor)
  root.style.setProperty('--accent-color', data.theme.accentColor)

  // 填入基本資訊
  document.getElementById('avatar').src = data.avatar
  document.getElementById('name').innerText = data.name
  document.getElementById('job').innerText = data.job
  document.getElementById('bio').innerText = data.bio
  document.getElementById('footer').innerText = data.footer // 新增 Footer
  document.title = data.name + ' 的個人頁面'

  // ⭐ 新增：渲染標籤 Tags
  const tagsContainer = document.getElementById('tags-container')
  // 清空 (避免重複渲染)
  tagsContainer.innerHTML = ''
  // 檢查是否有 tags 且不是空的
  if (data.tags && data.tags.length > 0) {
    data.tags.forEach((tag) => {
      const span = document.createElement('span')
      span.className = 'tag'
      span.innerText = tag
      tagsContainer.appendChild(span)
    })
  }

  // 渲染連結 Links
  const linksContainer = document.getElementById('links-container')
  linksContainer.innerHTML = ''
  data.links.forEach((link) => {
    const a = document.createElement('a')
    a.href = link.url
    a.target = '_blank'
    a.className = 'link-btn'

    const i = document.createElement('i')
    i.className = link.icon

    const span = document.createElement('span')
    span.innerText = link.title

    a.appendChild(i)
    a.appendChild(span)
    linksContainer.appendChild(a)
  })
})
