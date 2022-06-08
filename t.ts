const arr = ['foo','bar','baz'] as const

type Foo = typeof arr[number]

// const foobar: Foo = ''
