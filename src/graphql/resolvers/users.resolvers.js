
const   helloUser = () => {
  return 'hello world with GraphQL'
}

const greetUser = (root,  args)=> {
  console.log(args.name);
  return `Hello ${args.name}`
}

export { helloUser, greetUser }