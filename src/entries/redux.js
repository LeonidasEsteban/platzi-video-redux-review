import { createStore } from 'redux';


const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  store.dispatch({
    type: 'ADD',
    data: {
      title
    }
  })
}


const reducer = function(state, action) {
  switch (action.type) {
    case 'ADD': {
      return [...state, action.data]
    }
    default: {
      return state;
    }
  }
}
const initialState = [
  {
    "title": "Despacito",
  },
  {
    "title": "One more thing",
  },
  {
    "title": "Echame la culpa",
  },
]
const store = createStore(
  reducer,
  initialState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// function renderItem(data) {
// }

function render() {
  const $container = document.getElementById('playlist');
  const playlist = store.getState();
  $container.innerHTML = '';
  playlist.forEach((item) => {
    const template = document.createElement('p');
    template.textContent = item.title;
    $container.appendChild(template);
    // renderItem(item)
  })
}

render();

function handleChange() {
  // console.log(store.getState())
  render()
}
store.subscribe(handleChange);
