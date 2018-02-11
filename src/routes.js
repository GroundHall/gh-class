import Handlers from './handlers';

import {
  ClassModel,
  ClassModelRequired
} from './db/model';


const routes = [
  {
    method: 'GET',
    path: '/classes',
    handler: Handlers.getClasses
  },
  {
    method: 'GET',
    path: '/classes/{classId}',
    handler: Handlers.getClass
  },
  {
    method: 'POST',
    path: '/classes',
    handler: Handlers.createClass,
    config: {
      validate: {
        payload: ClassModelRequired
      }
    }
  },
  {
    method: 'PUT',
    path: '/classes/{classId}',
    handler: Handlers.putClass,
    config: {
      validate: {
        payload: ClassModelRequired
      }
    }
  },
  {
    method: 'PATCH',
    path: '/classes/{classId}',
    handler: Handlers.patchClass,
    config: {
      validate: {
        payload: ClassModel
      }
    }
  },
  {
    method: 'DELETE',
    path: '/classes/{classId}',
    handler: Handlers.deleteClass
  }
];

export default routes;
