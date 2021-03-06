const todoModel = require('../../../models/todoModel');

module.exports = {
  page: {
    in: ['query'],
    optional: { options: { nullable: false } },
    isInt: {
      errorMessage: 'Page must be valid.'
    },
    customSanitizer: {
      options: value => {
        if (value === undefined) {
          return 1;
        }
        let tmpValue = parseInt(value, 10);

        if (tmpValue < 1) {
          tmpValue = 1;
        }

        return tmpValue;
      }
    }
  },
  page_size: {
    in: ['query'],
    optional: { options: { nullable: false } },
    isInt: {
      errorMessage: 'Page size must be valid.',
      options: { max: 100 }
    },
    customSanitizer: {
      options: value => {
        if (value === undefined) {
          return 1;
        }
        let tmpValue = parseInt(value, 10);

        if (tmpValue < 1) {
          tmpValue = 1;
        }

        return tmpValue;
      }
    }
  },
  q: {
    in: ['query'],
    optional: { options: { nullable: false } },
    escape: true
  },
  order_by: {
    in: ['query'],
    custom: {
      options: value => {
        if (value === undefined) {
          return true;
        }

        if (todoModel.todoOrderBy[value] === undefined) {
          throw new Error('Order by must be valid.');
        }

        return true;
      }
    }
  }
};
