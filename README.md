    mkconstants
    ===========

    If you're building up a nested object of constants, for use with things like
    facebook/Flux, it's handy to have a function that can process said object
    and return something that can be compared upon. Also, namespaced on a per-
    app basis.

    So, for instance:

        mkconstants('ProductsApp', {
          ActionTypes: {
            Product: {
              RECEIVE_RAW_INSTANCE: null
            }
          },
          PayloadSources: {
            SERVER_ACTION: null,
            VIEW_ACTION: null
          }
        });

    Would output:
      
        {
          ActionTypes: {
            Product: {
              RECEIVE_RAW_INSTANCE: 'ProductsApp.ActionTypes.Product.RECEIVE_RAW_INSTANCE'
            }
          },
          PayloadSources: {
            SERVER_ACTION: 'ProductsApp.PayloadSources.SERVER_ACTION',
            VIEW_ACTION: 'ProductsApp.PayloadSources.VIEW_ACTION'
          }
        }

    These are not only unique, but also great for debugging purposes.
    