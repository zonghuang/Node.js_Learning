module.exports = {
  '/detail': async function() {
    // rpc
    // render

    return 'detail page'
  },
  // '/list': async function() {
  //   return 'list page'
  // },
  'list': {
    data: async function() {
      return 'list page'
    },
    // template: __dirname
    render: function() {
      
    }
  },
  '/play': function() {
    return 'play page'
  }
}
