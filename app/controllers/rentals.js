import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
        // return this.get('store').query('rental', { bedrooms: param });

        //keep results synchronous(not async) with the input -> hence use of promise
        return this.get('store')
          .query('rental', { city: param }).then((results) => {
            return { query: param, results: results };
          });

      } else {
        // return this.get('store').findAll('rental');
        //^ from async to sync with the user input to querying action
        return this.get('store')
          .findAll('rental').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
