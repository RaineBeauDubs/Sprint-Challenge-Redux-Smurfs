1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, filter, and forEach methods do not produce any side-effects. You can use Object create and then the key word extends.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The JavaScript object known as “the store” “stores” your state, and represents all of the changes to state made in your application (which is why it’s considered the ‘single source of truth’). Dispatching actions is how we modify state. Reducers then manage these actions and replace the store accordingly.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is centered around UI, while application state is driven more by data.  Building out a form is a good example of component state being the better option.

4.  What is middleware?

Middleware adds more functionality to redux. One of the most common abilities that middleware has is to allow asynchronous operations (I'm not sure if that's exactly the right word to use here, but you're picking up what I'm putting down) to be performed.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux is synchronous by design, and redux-thunk is a middleware gives us a way to do asynchronous things. It extends your actions to be able to do things it wouldn’t be able to without an appropriate middleware, such as consume promises.

6.  Which `react-redux` method links up our `components` with our `redux store`?

We use connect() for that.