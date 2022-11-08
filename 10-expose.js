// revealing module pattern
// turn this object literal into a module that only exposes that render method

let myModule = {
  data: [],
  render: () => {},
  add: () => {},
  remove: () => {},
};
myModule.render();


const myModule2 = (() => {
    const data = [];
    const render = () => {
        console.log('render runs')
    }
    const add = () => {}
    const remove = () => {}

    return {
        render
    }

})()
myModule2.render();