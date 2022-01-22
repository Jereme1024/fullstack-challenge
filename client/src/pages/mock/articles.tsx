const listData: any = []
for (let i = 0; i < 23; i++) {
  listData.push({
    id: `id-${i}`,
    author: 'author',
    avatar: 'https://joeschmoe.io/api/v1/random',
    href: '/articles',
    title: `ant design part ${i}`,
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}

export default listData
