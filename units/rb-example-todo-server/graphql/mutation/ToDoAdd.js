// @flow weak

import { mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLNonNull } from 'graphql'

import ToDosConnection from '../type/ToDosConnection'
import ViewerType from '../../../../units/rb-appbase-server/graphql/type/ViewerType'

export default mutationWithClientMutationId({
  name: 'ToDoAdd',

  inputFields: {
    ToDo_Text: { type: new GraphQLNonNull( GraphQLString ) },
  },

  outputFields: {
    ToDosEdge: {
      type: ToDosConnection.edgeType,
      resolve: async({ local_id }, { ...args }, context, { rootValue: objectManager }) => {
        const an_Object = await objectManager.getOneObject_async( 'ToDo', {
          id: local_id,
        })

        const arr = await objectManager.getObjectList_async( 'ToDo', {})

        return {
          cursor: objectManager.cursorForObjectInConnection( 'ToDo', arr, an_Object ),
          node: an_Object,
        }
      },
    },

    Viewer: {
      type: ViewerType,
      resolve: ( parent, args, context, { rootValue: objectManager }) =>
        objectManager.getOneObject_async( 'User', {
          id: objectManager.getViewerUserId(),
        }),
    },
  },

  mutateAndGetPayload: async({ ToDo_Text }, context, { rootValue: objectManager }) => {
    const local_id = await objectManager.add( 'ToDo', {
      ToDo_Text,
      ToDo_Complete: false,
    })
    return { local_id }
  },
})
