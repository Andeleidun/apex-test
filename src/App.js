import React, {useEffect} from 'react';
import './App.css';
import { connect } from 'react-redux'

import * as actions from './actions';
import store from './store';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

let content;

const loadCat = state => {
  return {
    state : store.getState.catStore[store.getState.index]
  }
}

function loadNewCat() {
  let url = "https://api.thecatapi.com/v1/images/search";
  fetch(url)
  .then(resp => resp.json)
  .then(data => {
      
  })
  store.dispatch(actions.retrieveCat);
  let data = store.getState.catStore[store.getState.index];
  let card = () => createCard(data);
  content = card;
}

function nextCat() {
  store.dispatch(actions.nextCat);
  let data = store.getState.catStore[store.getState.index];
  let card = () => createCard(data);
  content = card;
}

function prevCat() {
  store.dispatch(actions.prevCat);
  let data = store.getState.catStore[store.getState.index];
  let card = () => createCard(data);
  content = card;
}

function createCard(data) {
  return (
    <Card>
      <CardContent>
        <CardMedia
          className="card-image"
          image={data.url}
          title="Cat"
        />
          <Button size="small" onClcik={loadNewCat()}>
            New Cat
          </Button>
        <CardActions>
          <Button size="small" onClcik={prevCat()}>
            Previous
          </Button>
          <Button size="small" onClcik={nextCat()}>
            Next
          </Button>
      </CardActions>
      </CardContent>
  </Card>
  )
}

function App() {
  useEffect(() => {
    loadNewCat();
  })
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
