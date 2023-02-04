# react-dev-scratch
This is the react course from the basic
- map() pollyfil read and make it.

- what is babel

- Que: How you will optimize your app?
	Ans: There are so many things which react does for us with the help of babel and some things which bundler does for us 
		like parcel which does (tree shacking, image optimization, font optimization

- In the script you can write your own scripts or commands to run or test.

- NPX: it is executing the npm package without downloading it.

- git init initialize your code with github

- babel-plugin-transform-remove-console: to remove all the console.log from your code during deployement

- babel.rc it is the configuration file for babel

- rather than showing the erros at the console, we have to make our app such a way that
	user can visualize the error in a decent manner. (not in a console)

- When we have multiple siblings wer have to give them keys.
(siblings meaning inside div multiple div/h1/span/button)

- diffing algorithm ??

- updating something in the DOM is called render

- use keys always if you have multiple children because it will make it easy for the DOM to update easy.
because if you introduce a new children react can understand where it has to be rendered.
IF you won't use key then react won't be able to understand whre to update the DOM so, it will
update the whole DOM again and it makes the system performance slow. 

- Passigng id and key as prop (read)

- JSX is not HTML. It is HTML like syntax. But it is not HTML inside Js.

- React tracks the DOm using key not with id.

- Difference between HTML vs JSX?

- How JSX executed? 
It get exercuted with the help of Babel. (convert JSX code into HTML, CSS, JS) 
(read Babel from website go to github conributor)

- What are the different uses of JSX?


- JSX => React.createElement => Object => HTML(DOM)
  '=>' means converting

- bable website and can see how babel converts a JSX into React.createElement


- There are 2 package-lock.json. One is at root folder. one is inside the node-module whixh will keep the
track of (inside node module package.lock.json) transitive dependency


- Component: There are 2 types of components in react:

a) Functional components
b) Class based components

a) The components which will bve displayed using functions called functional compinents.
It returns some piece of JSX or a functional component itself. 

## Name in a functional component starts with a capital letter. (not necessary but is suggested convenction)

## render a function we use root.render(<HeaderFunction/>)
## render a JSx we use root.render(heading)
where:
React element is: 
const heading = (
	<h1 id = 'title' key = 'h2'>Hello </h1>
)

FUnctional component is:

const HeaderFunction = () => {
	return(
		<div> <h1>ABC</h1> </div>
	)
}


- Component composition: <Title/> inside return() 'read as well'.
