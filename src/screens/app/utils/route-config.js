import Container from 'screens/app/components/container.js'
import Pokemon from 'screens/app/screens/pokemon/';

export default  [{
  path: '/',
  component: Container,
  childRoutes: [{
    path: 'pokemon/:id',
    component: Pokemon
  }]
}];
