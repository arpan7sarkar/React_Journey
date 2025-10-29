rafce= react arrow function component export/export component
alway write your react code inside fragements <></> .
eskunt.config.js is used to write the rules that developer needs to follow
in react we write className not classes and while defining component we name them using Uppercase format
In react we follow component based architecutre
for using scss only change the name of css file to scss
for using js in react we have to write the var name inside {}

props:
we can get data from upper hirerchial parents
app->nav here we can use properties of app in nav but not navs attribute into app
for passing numbers inside props we need to write the num inside {}

### props recives a object inside it and similer to backend for getting the values from pops we have to use props.value method calling
//
ex: const name= props.name

we can get any type of icon we want from lucid-react
for using plain css in a better way for react we use module css:
so what is module css? 
for using modulo css we have to create a folder then their we have to give our component and the css that we want to use into the component in single folder then have to link using import style form ./blahblah.css 

---
Function calling

can call inside tag or outside tag if we want to pass params inside the outer function then we have to use this syntax 

onChange={function (e) {
          typeChange(e);
        }}
        
--


Hooks in react 
useState
 this is most common that we use to manage states lets assume one button color is blue after hoversing the color will turn into red here the change os state is happening here we need to use 
usestates

set method works in async method
if we change and put same value on react then react doesnot rerender cause its same thing so no need to rerender

use effect
  this things manages side events without interapting main one

useRef 
    while using react js user have to interact with react for performing any task chosing any elem we don't directly select the website elem we use react for that

useContext
    manages global context
    advance version of useState
useReducer 
    advance version of usContext

we use useCallback and useMemo for changing a particuler thing at a time

--
useState - state ko manage karne ke liye.

+
useEffect - side effects handle karne ke liye
(jaise API call, DOM manipulation, event
listener).

useContext - global state ko consume karne ke
liye without prop drilling.

useReducer - complex state management ke liye
(Redux jaisa chhota version).

useRef - mutable values hold karne ke liye jo re-
render trigger na karein, ya DOM access karne ke
liye.

useMemo & useCallback - optimization ke liye,
unnecessary re-renders avoid karne ke liye.
--

we use browserlist for making our project supported for older version of browsers
we have to use it inside package.json

Babel is always running in bg babels work is to convert all the jsx code to html and js one thing babel is not created by facebook
jsx is not html+js its a totally whole diferent syntax
JSX is behind the scene react.createelemnt then js object then html(while rendering)

use navigate not only shifts the page it shifts the changes of website 100% same to how broswers upper arrows works

normally data goes from top to bottom maintaing a hirerchy but we can also access its reverse version for that we have to use :
just have to put usestates into the props then all set

When we use context api then data had been autmatically set into a centralized data (data centrlization)

best practics is to centralize the data in a particuler position 

we can pass children of any div via props we just have to use not self closing tag normal tags after those tags will automatically share the children in the form of array we can easily access them by calling props.children[index]

### Context API
 create context provide the context (provider) and then use context

