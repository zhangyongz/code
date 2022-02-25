interface Todo2 {
  title: string
  description: string
}

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K] 
}

const todo2: MyReadonly<Todo2> = {
  title: "Hey",
  description: "foobar"
}

// todo2.title = "Hello" // Error: cannot reassign a readonly property
// todo2.description = "barFoo" // Error: cannot reassign a readonly property